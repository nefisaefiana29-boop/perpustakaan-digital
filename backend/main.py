from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from passlib.context import CryptContext

from database import get_db
from models import Buku, User, Peminjaman, Pengembalian
from schemas import (
    BukuCreate, BukuResponse,
    UserCreate, UserResponse,
    PeminjamanCreate, PeminjamanResponse,
    PengembalianCreate, PengembalianResponse
)

app = FastAPI(
    title="API Perpustakaan Digital",
    version="1.0.0",
    description="Backend Sistem Informasi Perpustakaan Digital"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


# =========================
# BERANDA
# =========================

@app.get("/")
def beranda():
    return {"pesan": "API Perpustakaan Digital berhasil berjalan"}


# =========================
# MANAJEMEN BUKU
# =========================

@app.get("/buku", response_model=list[BukuResponse])
def daftar_buku(db: Session = Depends(get_db)):
    return db.query(Buku).all()


@app.post("/buku", response_model=BukuResponse)
def tambah_buku(buku: BukuCreate, db: Session = Depends(get_db)):
    data = Buku(**buku.model_dump())

    try:
        db.add(data)
        db.commit()
        db.refresh(data)
        return data
    except Exception:
        db.rollback()
        raise HTTPException(status_code=400, detail="Gagal menambahkan buku. Periksa ISBN.")


@app.get("/cari-buku", response_model=list[BukuResponse])
def cari_buku(judul: str, db: Session = Depends(get_db)):
    return db.query(Buku).filter(
        Buku.judul.ilike(f"%{judul}%")
    ).all()


@app.get("/buku/{buku_id}", response_model=BukuResponse)
def detail_buku(buku_id: int, db: Session = Depends(get_db)):
    buku = db.query(Buku).filter(Buku.id == buku_id).first()

    if buku is None:
        raise HTTPException(status_code=404, detail="Buku tidak ditemukan")

    return buku


@app.put("/buku/{buku_id}", response_model=BukuResponse)
def edit_buku(
    buku_id: int,
    data_buku: BukuCreate,
    db: Session = Depends(get_db)
):
    buku = db.query(Buku).filter(Buku.id == buku_id).first()

    if buku is None:
        raise HTTPException(status_code=404, detail="Buku tidak ditemukan")

    try:
        for key, value in data_buku.model_dump().items():
            setattr(buku, key, value)

        db.commit()
        db.refresh(buku)
        return buku
    except Exception:
        db.rollback()
        raise HTTPException(status_code=400, detail="Gagal mengedit buku")


@app.delete("/buku/{buku_id}")
def hapus_buku(buku_id: int, db: Session = Depends(get_db)):
    buku = db.query(Buku).filter(Buku.id == buku_id).first()

    if buku is None:
        raise HTTPException(status_code=404, detail="Buku tidak ditemukan")

    try:
        db.delete(buku)
        db.commit()
        return {"pesan": "Buku berhasil dihapus"}
    except Exception:
        db.rollback()
        raise HTTPException(
            status_code=400,
            detail="Buku tidak dapat dihapus karena mungkin memiliki riwayat peminjaman"
        )


# =========================
# MANAJEMEN ANGGOTA
# =========================

@app.post("/anggota", response_model=UserResponse)
def tambah_anggota(anggota: UserCreate, db: Session = Depends(get_db)):
    anggota_baru = User(
        nama=anggota.nama,
        email=anggota.email,
        password=pwd_context.hash(anggota.password),
        role="Anggota"
    )

    try:
        db.add(anggota_baru)
        db.commit()
        db.refresh(anggota_baru)
        return anggota_baru
    except Exception:
        db.rollback()
        raise HTTPException(
            status_code=400,
            detail="Gagal mendaftarkan anggota. Email mungkin sudah digunakan."
        )


@app.get("/anggota", response_model=list[UserResponse])
def daftar_anggota(db: Session = Depends(get_db)):
    return db.query(User).all()


@app.get("/anggota/{user_id}", response_model=UserResponse)
def detail_anggota(user_id: int, db: Session = Depends(get_db)):
    anggota = db.query(User).filter(User.id == user_id).first()

    if anggota is None:
        raise HTTPException(status_code=404, detail="Anggota tidak ditemukan")

    return anggota


@app.put("/anggota/{user_id}", response_model=UserResponse)
def edit_anggota(
    user_id: int,
    data: UserCreate,
    db: Session = Depends(get_db)
):
    anggota = db.query(User).filter(User.id == user_id).first()

    if anggota is None:
        raise HTTPException(status_code=404, detail="Anggota tidak ditemukan")

    try:
        anggota.nama = data.nama
        anggota.email = data.email
        anggota.password = pwd_context.hash(data.password)

        db.commit()
        db.refresh(anggota)
        return anggota
    except Exception:
        db.rollback()
        raise HTTPException(status_code=400, detail="Gagal mengedit anggota")


@app.delete("/anggota/{user_id}")
def hapus_anggota(user_id: int, db: Session = Depends(get_db)):
    anggota = db.query(User).filter(User.id == user_id).first()

    if anggota is None:
        raise HTTPException(status_code=404, detail="Anggota tidak ditemukan")

    try:
        db.delete(anggota)
        db.commit()
        return {"pesan": "Anggota berhasil dihapus"}
    except Exception:
        db.rollback()
        raise HTTPException(
            status_code=400,
            detail="Anggota tidak dapat dihapus karena memiliki riwayat peminjaman"
        )


# =========================
# LOGIN
# =========================

@app.post("/login")
def login(email: str, password: str, db: Session = Depends(get_db)):
    anggota = db.query(User).filter(User.email == email).first()

    if anggota is None:
        raise HTTPException(status_code=401, detail="Email atau password salah")

    try:
        cocok = pwd_context.verify(password, anggota.password)
    except Exception:
        cocok = False

    if not cocok:
        raise HTTPException(status_code=401, detail="Email atau password salah")

    return {
        "pesan": "Login berhasil",
        "id": anggota.id,
        "nama": anggota.nama,
        "email": anggota.email,
        "role": anggota.role
    }


# =========================
# PEMINJAMAN BUKU
# =========================

@app.get("/peminjaman", response_model=list[PeminjamanResponse])
def daftar_peminjaman(db: Session = Depends(get_db)):
    return db.query(Peminjaman).all()


@app.post("/peminjaman", response_model=PeminjamanResponse)
def tambah_peminjaman(
    data: PeminjamanCreate,
    db: Session = Depends(get_db)
):
    anggota = db.query(User).filter(User.id == data.user_id).first()
    buku = db.query(Buku).filter(Buku.id == data.buku_id).first()

    if anggota is None:
        raise HTTPException(status_code=404, detail="Anggota tidak ditemukan")

    if buku is None:
        raise HTTPException(status_code=404, detail="Buku tidak ditemukan")

    if buku.stok <= 0:
        raise HTTPException(status_code=400, detail="Stok buku habis")

    if data.tanggal_kembali < data.tanggal_pinjam:
        raise HTTPException(status_code=400, detail="Tanggal kembali tidak valid")

    peminjaman = Peminjaman(
        user_id=data.user_id,
        buku_id=data.buku_id,
        tanggal_pinjam=data.tanggal_pinjam,
        tanggal_kembali=data.tanggal_kembali,
        status="Dipinjam"
    )

    try:
        buku.stok -= 1
        db.add(peminjaman)
        db.commit()
        db.refresh(peminjaman)
        return peminjaman
    except Exception:
        db.rollback()
        raise HTTPException(status_code=400, detail="Gagal melakukan peminjaman")


# =========================
# PENGEMBALIAN BUKU
# =========================

@app.get("/pengembalian", response_model=list[PengembalianResponse])
def daftar_pengembalian(db: Session = Depends(get_db)):
    return db.query(Pengembalian).all()


@app.post("/pengembalian", response_model=PengembalianResponse)
def tambah_pengembalian(
    data: PengembalianCreate,
    db: Session = Depends(get_db)
):
    peminjaman = db.query(Peminjaman).filter(
        Peminjaman.id == data.peminjaman_id
    ).first()

    if peminjaman is None:
        raise HTTPException(status_code=404, detail="Data peminjaman tidak ditemukan")

    if peminjaman.status == "Dikembalikan":
        raise HTTPException(status_code=400, detail="Buku sudah dikembalikan")

    buku = db.query(Buku).filter(Buku.id == peminjaman.buku_id).first()

    if buku is None:
        raise HTTPException(status_code=404, detail="Data buku tidak ditemukan")

    pengembalian = Pengembalian(
        peminjaman_id=data.peminjaman_id,
        tanggal_pengembalian=data.tanggal_pengembalian,
        denda=data.denda
    )

    try:
        peminjaman.status = "Dikembalikan"
        buku.stok += 1
        db.add(pengembalian)
        db.commit()
        db.refresh(pengembalian)
        return pengembalian
    except Exception:
        db.rollback()
        raise HTTPException(status_code=400, detail="Gagal memproses pengembalian")
