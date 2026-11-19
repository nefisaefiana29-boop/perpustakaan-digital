from sqlalchemy import Column, Integer, String, Text, Date, ForeignKey
from database import Base


# Tabel Users
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    nama = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    role = Column(String(20), default="Anggota")


# Tabel Buku
class Buku(Base):
    __tablename__ = "buku"

    id = Column(Integer, primary_key=True, index=True)
    judul = Column(String(255), nullable=False)
    penulis = Column(String(100))
    penerbit = Column(String(100))
    tahun_terbit = Column(Integer)
    isbn = Column(String(30))
    kategori = Column(String(50))
    deskripsi = Column(Text)
    stok = Column(Integer, default=0)


# Tabel Peminjaman
class Peminjaman(Base):
    __tablename__ = "peminjaman"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    buku_id = Column(Integer, ForeignKey("buku.id"))
    tanggal_pinjam = Column(Date)
    tanggal_kembali = Column(Date)
    status = Column(String(30), default="Dipinjam")


# Tabel Pengembalian
class Pengembalian(Base):
    __tablename__ = "pengembalian"

    id = Column(Integer, primary_key=True, index=True)
    peminjaman_id = Column(Integer, ForeignKey("peminjaman.id"))
    tanggal_pengembalian = Column(Date)
    denda = Column(Integer, default=0)