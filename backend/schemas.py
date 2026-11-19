from pydantic import BaseModel
from typing import Optional
from datetime import date


# Schema untuk User
class UserBase(BaseModel):
    nama: str
    email: str


class UserCreate(UserBase):
    password: str
    role: Optional[str] = "Anggota"


class UserResponse(UserBase):
    id: int
    role: str

    class Config:
        from_attributes = True


# Schema untuk Buku
class BukuBase(BaseModel):
    judul: str
    penulis: Optional[str] = None
    penerbit: Optional[str] = None
    tahun_terbit: Optional[int] = None
    isbn: Optional[str] = None
    kategori: Optional[str] = None
    deskripsi: Optional[str] = None
    stok: int = 0


class BukuCreate(BukuBase):
    pass


class BukuResponse(BukuBase):
    id: int

    class Config:
        from_attributes = True


# Schema untuk Peminjaman
class PeminjamanCreate(BaseModel):
    user_id: int
    buku_id: int
    tanggal_pinjam: date
    tanggal_kembali: date


class PeminjamanResponse(PeminjamanCreate):
    id: int
    status: str

    class Config:
        from_attributes = True


# Schema untuk Pengembalian
class PengembalianCreate(BaseModel):
    peminjaman_id: int
    tanggal_pengembalian: date
    denda: int = 0


class PengembalianResponse(PengembalianCreate):
    id: int

    class Config:
        from_attributes = True