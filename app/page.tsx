"use client";

import { useMemo, useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  publisher: string;
  year: number;
  stock: number;
};

type Member = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

type Loan = {
  id: number;
  member: string;
  book: string;
  date: string;
  dueDate: string;
  status: "Dipinjam" | "Dikembalikan";
};

type Section =
  | "Dashboard"
  | "Katalog Buku"
  | "Data Anggota"
  | "Peminjaman"
  | "Pengembalian"
  | "Riwayat"
  | "Profil Saya";

const initialBooks: Book[] = [
  {
    id: 1,
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    category: "Novel",
    publisher: "Bentang Pustaka",
    year: 2005,
    stock: 8,
  },
  {
    id: 2,
    title: "Bumi",
    author: "Tere Liye",
    category: "Fantasi",
    publisher: "Gramedia",
    year: 2014,
    stock: 5,
  },
  {
    id: 3,
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    category: "Pengembangan Diri",
    publisher: "Kompas",
    year: 2018,
    stock: 4,
  },
  {
    id: 4,
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    category: "Novel",
    publisher: "Kepustakaan Populer Gramedia",
    year: 2017,
    stock: 3,
  },
  {
    id: 5,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Pengembangan Diri",
    publisher: "Gramedia",
    year: 2019,
    stock: 6,
  },
  {
    id: 6,
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    category: "Novel",
    publisher: "Gramedia",
    year: 2009,
    stock: 7,
  },
  {
    id: 7,
    title: "Bicara Itu Ada Seninya",
    author: "Oh Su Hyang",
    category: "Pendidikan",
    publisher: "Bhuana Ilmu Populer",
    year: 2018,
    stock: 2,
  },
  {
    id: 8,
    title: "Pulang",
    author: "Tere Liye",
    category: "Novel",
    publisher: "Republika",
    year: 2015,
    stock: 0,
  },
];

const initialMembers: Member[] = [
  { id: 1, name: "Alya Putri", email: "alya@email.com", phone: "081234567801" },
  {
    id: 2,
    name: "Rizky Ramadhan",
    email: "rizky@email.com",
    phone: "081234567802",
  },
  {
    id: 3,
    name: "Nadia Safira",
    email: "nadia@email.com",
    phone: "081234567803",
  },
  {
    id: 4,
    name: "Dina Maharani",
    email: "dina@email.com",
    phone: "081234567804",
  },
];

const initialLoans: Loan[] = [
  {
    id: 1,
    member: "Alya Putri",
    book: "Laskar Pelangi",
    date: "2026-10-20",
    dueDate: "2026-10-27",
    status: "Dipinjam",
  },
  {
    id: 2,
    member: "Rizky Ramadhan",
    book: "Bumi",
    date: "2026-10-19",
    dueDate: "2026-10-26",
    status: "Dipinjam",
  },
  {
    id: 3,
    member: "Nadia Safira",
    book: "Filosofi Teras",
    date: "2026-10-15",
    dueDate: "2026-10-22",
    status: "Dikembalikan",
  },
  {
    id: 4,
    member: "Dina Maharani",
    book: "Negeri 5 Menara",
    date: "2026-10-14",
    dueDate: "2026-10-21",
    status: "Dikembalikan",
  },
];

const menuItems: { label: Section; icon: string }[] = [
  { label: "Dashboard", icon: "⌂" },
  { label: "Katalog Buku", icon: "▤" },
  { label: "Data Anggota", icon: "♧" },
  { label: "Peminjaman", icon: "↗" },
  { label: "Pengembalian", icon: "↙" },
  { label: "Riwayat", icon: "◷" },
];

const categories = [
  "Semua Kategori",
  "Novel",
  "Fantasi",
  "Pengembangan Diri",
  "Pendidikan",
];

const covers = [
  "from-pink-200 to-rose-100",
  "from-violet-200 to-purple-100",
  "from-blue-200 to-cyan-100",
  "from-orange-200 to-amber-100",
  "from-emerald-200 to-teal-100",
  "from-fuchsia-200 to-pink-100",
  "from-sky-200 to-indigo-100",
  "from-rose-200 to-orange-100",
];

export default function Home() {
  const [section, setSection] = useState<Section>("Dashboard");
  const [role, setRole] = useState<"Admin" | "Anggota">("Admin");
  const [books, setBooks] = useState(initialBooks);
  const [members, setMembers] = useState(initialMembers);
  const [loans, setLoans] = useState(initialLoans);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua Kategori");
  const [showBookForm, setShowBookForm] = useState(false);
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [showLoanForm, setShowLoanForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [notice, setNotice] = useState("");
  const [bookForm, setBookForm] = useState({
    title: "",
    author: "",
    category: "Novel",
    publisher: "",
    year: 2026,

    stock: 1,
  });
  const [memberForm, setMemberForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loanForm, setLoanForm] = useState({
    member: initialMembers[0]?.name ?? "",
    book: initialBooks[0]?.title ?? "",
    date: "2026-10-25",
    dueDate: "2026-11-01",
  });

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const term = search.toLowerCase();
      const matchesSearch =
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term) ||
        book.category.toLowerCase().includes(term);
      const matchesCategory =
        category === "Semua Kategori" || book.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [books, search, category]);

  const activeLoans = loans.filter((loan) => loan.status === "Dipinjam");
  const returnedLoans = loans.filter((loan) => loan.status === "Dikembalikan");

  function notify(message: string) {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3000);
  }

  function saveBook(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newBook: Book = {
      ...bookForm,
      id: Math.max(0, ...books.map((book) => book.id)) + 1,
    };
    setBooks((current) => [...current, newBook]);
    setBookForm({
      title: "",
      author: "",
      category: "Novel",
      publisher: "",
      year: 2026,
      stock: 1,
    });
    setShowBookForm(false);
    notify("Buku berhasil ditambahkan ke daftar sementara.");
  }

  function saveMember(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newMember: Member = {
      ...memberForm,
      id: Math.max(0, ...members.map((member) => member.id)) + 1,
    };
    setMembers((current) => [...current, newMember]);
    setMemberForm({ name: "", email: "", phone: "" });
    setShowMemberForm(false);
    notify("Anggota berhasil ditambahkan ke daftar sementara.");
  }

  function saveLoan(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const book = books.find((item) => item.title === loanForm.book);
    if (!book || book.stock < 1) {
      notify("Maaf, stok buku tidak tersedia.");
      return;
    }
    const newLoan: Loan = {
      ...loanForm,
      id: Math.max(0, ...loans.map((loan) => loan.id)) + 1,
      status: "Dipinjam",
    };
    setLoans((current) => [...current, newLoan]);
    setBooks((current) =>
      current.map((item) =>
        item.id === book.id ? { ...item, stock: item.stock - 1 } : item,
      ),
    );
    setShowLoanForm(false);
    notify("Peminjaman berhasil dicatat sementara.");
  }

  function returnLoan(loan: Loan) {
    if (loan.status === "Dikembalikan") return;
    setLoans((current) =>
      current.map((item) =>
        item.id === loan.id ? { ...item, status: "Dikembalikan" } : item,
      ),
    );
    setBooks((current) =>
      current.map((book) =>
        book.title === loan.book ? { ...book, stock: book.stock + 1 } : book,
      ),
    );
    notify("Pengembalian berhasil dicatat sementara.");
  }

  function deleteBook(id: number) {
    setBooks((current) => current.filter((book) => book.id !== id));
    setSelectedBook(null);
    notify("Buku dihapus dari daftar sementara.");
  }

  function deleteMember(id: number) {
    setMembers((current) => current.filter((member) => member.id !== id));
    notify("Anggota dihapus dari daftar sementara.");
  }

  const pageTitle =
    role === "Anggota" && section === "Dashboard"
      ? "Dashboard Anggota"
      : section;

  return (
    <main className="min-h-screen bg-[#faf8ff] text-slate-700">
      <div className="flex min-h-screen">
        <aside className="hidden w-[250px] shrink-0 flex-col border-r border-violet-100 bg-white px-5 py-7 lg:flex">
          <button
            onClick={() => setSection("Dashboard")}
            className="mb-10 flex items-center gap-3 text-left"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-300 to-pink-300 text-2xl shadow-md shadow-violet-100">
              📚
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-violet-950">
                RuangBaca
              </h1>
              <p className="text-[10px] font-medium tracking-[0.2em] text-violet-400">
                DIGITAL LIBRARY
              </p>
            </div>
          </button>

          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Menu utama
          </p>
          <nav className="flex flex-col gap-1.5">
            {menuItems
              .filter(
                (item) =>
                  role === "Admin" ||
                  !["Data Anggota", "Pengembalian"].includes(item.label),
              )
              .map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setSection(item.label);
                    setSearch("");
                  }}
                  className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition ${
                    section === item.label
                      ? "bg-violet-100 text-violet-800 shadow-sm"
                      : "text-slate-500 hover:bg-violet-50 hover:text-violet-700"
                  }`}
                >
                  <span className="w-6 text-center text-lg">{item.icon}</span>
                  {item.label}
                  {item.label === "Peminjaman" && activeLoans.length > 0 && (
                    <span className="ml-auto rounded-full bg-pink-100 px-2 py-0.5 text-[10px] text-pink-700">
                      {activeLoans.length}
                    </span>
                  )}
                </button>
              ))}
          </nav>

          <p className="mb-3 mt-8 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Akun
          </p>
          <button
            onClick={() => setSection("Profil Saya")}
            className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold ${
              section === "Profil Saya"
                ? "bg-violet-100 text-violet-800"
                : "text-slate-500 hover:bg-violet-50"
            }`}
          >
            <span className="w-6 text-center text-lg">♡</span>
            Profil Saya
          </button>

          <div className="mt-auto rounded-2xl bg-gradient-to-br from-violet-100 via-pink-50 to-blue-100 p-4">
            <div className="mb-2 text-2xl">🌷</div>
            <p className="text-sm font-bold text-violet-900">
              Sudah membaca hari ini?
            </p>
            <p className="mt-1 text-xs leading-5 text-violet-600">
              Satu halaman kecil bisa membuka dunia yang besar.
            </p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-violet-400 to-pink-300" />
            </div>
          </div>

          <p className="mt-5 text-center text-[10px] text-slate-400">
            RuangBaca © 2026 · Prototipe
          </p>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 border-b border-violet-100 bg-white/90 px-4 py-4 backdrop-blur-md sm:px-8 lg:px-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-xl lg:hidden">
                📚
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400">
                  Selamat datang di RuangBaca ✨
                </p>
                <h2 className="text-xl font-extrabold text-slate-800 sm:text-2xl">
                  {pageTitle}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <label className="hidden items-center gap-2 rounded-xl border border-violet-100 bg-violet-50/60 px-3 py-2 sm:flex">
                <span className="text-slate-400">⌕</span>
                <input
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    if (section !== "Katalog Buku") {
                      setSection("Katalog Buku");
                    }
                  }}
                  placeholder="Cari buku..."
                  className="w-28 bg-transparent text-xs outline-none placeholder:text-slate-400 md:w-40"
                />
              </label>
              <div className="flex items-center gap-2 rounded-xl bg-pink-50 px-2 py-2 sm:px-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-violet-200 text-sm">
                  {role === "Admin" ? "👩🏻‍💼" : "👩🏻"}
                </span>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold text-slate-700">
                    {role === "Admin" ? "Petugas Perpus" : "Anggota"}
                  </p>
                  <p className="text-[10px] text-slate-400">{role}</p>
                </div>
              </div>
            </div>
          </header>

          <div className="flex gap-2 overflow-x-auto border-b border-violet-100 bg-white px-4 py-2 lg:hidden">
            {menuItems
              .filter(
                (item) =>
                  role === "Admin" ||
                  !["Data Anggota", "Pengembalian"].includes(item.label),
              )
              .map((item) => (
                <button
                  key={item.label}
                  onClick={() => setSection(item.label)}
                  className={`shrink-0 rounded-full px-3 py-2 text-xs font-semibold ${
                    section === item.label
                      ? "bg-violet-600 text-white"
                      : "bg-violet-50 text-violet-700"
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
          </div>

          <div className="mx-auto max-w-[1500px] p-4 sm:p-8 lg:p-10">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm text-slate-500">
                  {section === "Dashboard"
                    ? "Berikut ringkasan aktivitas perpustakaanmu."
                    : `Kelola ${section.toLowerCase()} dengan mudah dan rapi.`}
                </p>
              </div>
              <label className="flex items-center gap-2 rounded-xl border border-violet-100 bg-white px-3 py-2 text-xs shadow-sm">
                <span className="text-violet-400">♧</span>
                <span className="font-medium text-slate-500">
                  Mode tampilan
                </span>
                <select
                  value={role}
                  onChange={(event) => {
                    const nextRole = event.target.value as "Admin" | "Anggota";
                    setRole(nextRole);
                    setSection("Dashboard");
                    setSearch("");
                  }}
                  className="max-w-24 bg-transparent font-bold text-violet-700 outline-none"
                >
                  <option value="Admin">Admin</option>
                  <option value="Anggota">Anggota</option>
                </select>
              </label>
            </div>

            {section === "Dashboard" && (
              <>
                <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {[
                    {
                      label: "Total Judul Buku",
                      value: books.length,
                      icon: "📚",
                      color: "bg-violet-100",
                      note: "Koleksi perpustakaan",
                    },
                    {
                      label: "Total Anggota",
                      value: members.length,
                      icon: "👥",
                      color: "bg-pink-100",
                      note: "Anggota terdaftar",
                    },
                    {
                      label: "Sedang Dipinjam",
                      value: activeLoans.length,
                      icon: "📖",
                      color: "bg-blue-100",
                      note: "Transaksi aktif",
                    },
                    {
                      label: "Sudah Kembali",
                      value: returnedLoans.length,
                      icon: "🌸",
                      color: "bg-emerald-100",
                      note: "Transaksi selesai",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-violet-100 bg-white p-5 shadow-sm shadow-violet-100/40 transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs font-medium text-slate-500">
                            {stat.label}
                          </p>
                          <p className="mt-3 text-3xl font-extrabold text-slate-800">
                            {stat.value}
                          </p>
                        </div>
                        <span
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${stat.color}`}
                        >
                          {stat.icon}
                        </span>
                      </div>
                      <p className="mt-4 text-[11px] text-slate-400">
                        {stat.note}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mb-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                  <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-violet-500 via-purple-400 to-pink-300 p-6 text-white shadow-lg shadow-violet-200 sm:p-8">
                    <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                      <div className="max-w-lg">
                        <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                          Perpustakaan digital
                        </span>
                        <h3 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
                          Temukan cerita,
                          <br />
                          temukan duniamu. 💜
                        </h3>
                        <p className="mt-3 max-w-sm text-sm leading-6 text-white/85">
                          Jelajahi koleksi buku, temukan pengetahuan baru, dan
                          kelola aktivitas perpustakaan dalam satu tempat.
                        </p>
                        <button
                          onClick={() => setSection("Katalog Buku")}
                          className="mt-5 rounded-xl bg-white px-5 py-3 text-xs font-bold text-violet-700 shadow-sm transition hover:bg-violet-50"
                        >
                          Jelajahi Katalog →
                        </button>
                      </div>
                      <div className="self-center text-7xl drop-shadow-lg sm:text-8xl">
                        📚
                      </div>
                    </div>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {["Mudah dicari", "Data teratur", "Nyaman dibaca"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-medium"
                          >
                            ✦ {tag}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <h3 className="font-extrabold text-slate-800">
                          Status Koleksi
                        </h3>
                        <p className="mt-1 text-xs text-slate-400">
                          Ringkasan stok buku
                        </p>
                      </div>
                      <span className="rounded-xl bg-violet-100 p-2 text-xl">
                        📊
                      </span>
                    </div>
                    {[
                      {
                        label: "Buku tersedia",
                        value: books.filter((book) => book.stock > 0).length,
                        color: "bg-emerald-400",
                      },
                      {
                        label: "Stok habis",
                        value: books.filter((book) => book.stock === 0).length,
                        color: "bg-pink-400",
                      },
                      {
                        label: "Total eksemplar",
                        value: books.reduce((sum, book) => sum + book.stock, 0),
                        color: "bg-violet-400",
                      },
                    ].map((item) => (
                      <div key={item.label} className="mb-5 last:mb-0">
                        <div className="mb-2 flex justify-between text-xs">
                          <span className="text-slate-500">{item.label}</span>
                          <span className="font-bold text-slate-800">
                            {item.value}
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full ${item.color}`}
                            style={{
                              width: `${Math.min(
                                100,
                                (item.value /
                                  Math.max(
                                    1,
                                    books.reduce(
                                      (sum, book) => sum + book.stock,
                                      0,
                                    ),
                                  )) *
                                  100,
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-violet-100 bg-white p-5 shadow-sm sm:p-6">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-extrabold text-slate-800">
                        Buku Pilihan ✨
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Beberapa buku dari koleksi perpustakaan
                      </p>
                    </div>
                    <button
                      onClick={() => setSection("Katalog Buku")}
                      className="text-xs font-bold text-violet-600 hover:text-pink-500"
                    >
                      Lihat semua →
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                    {books.slice(0, 4).map((book, index) => (
                      <button
                        key={book.id}
                        onClick={() => setSelectedBook(book)}
                        className="group text-left"
                      >
                        <div
                          className={`flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br ${covers[index % covers.length]} transition group-hover:scale-[1.02]`}
                        >
                          <span className="text-5xl drop-shadow-sm">📕</span>
                        </div>
                        <p className="mt-3 line-clamp-1 text-sm font-bold text-slate-700 group-hover:text-violet-700">
                          {book.title}
                        </p>
                        <p className="mt-1 text-[11px] text-slate-400">
                          {book.author}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {section === "Katalog Buku" && (
              <>
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <label className="flex flex-1 items-center gap-2 rounded-xl border border-violet-100 bg-white px-4 py-3 shadow-sm">
                    <span className="text-lg text-violet-400">⌕</span>
                    <input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Cari judul, penulis, atau kategori..."
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </label>
                  <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="rounded-xl border border-violet-100 bg-white px-4 py-3 text-sm outline-none focus:border-violet-300"
                  >
                    {categories.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                  {role === "Admin" && (
                    <button
                      onClick={() => setShowBookForm(true)}
                      className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-violet-200 transition hover:bg-violet-700"
                    >
                      + Tambah Buku
                    </button>
                  )}
                </div>

                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm text-slate-500">
                    Ditemukan{" "}
                    <strong className="text-violet-700">
                      {filteredBooks.length}
                    </strong>{" "}
                    buku
                  </p>
                  <span className="rounded-full bg-pink-100 px-3 py-1 text-[10px] font-bold text-pink-700">
                    Koleksi Perpustakaan
                  </span>
                </div>

                {filteredBooks.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-violet-200 bg-white p-12 text-center">
                    <div className="text-4xl">🔎</div>
                    <p className="mt-3 font-bold">Buku tidak ditemukan</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Coba kata kunci atau kategori yang berbeda.
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {filteredBooks.map((book, index) => (
                      <article
                        key={book.id}
                        className="overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-100/70"
                      >
                        <div
                          className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${covers[index % covers.length]}`}
                        >
                          <span className="text-7xl drop-shadow-sm">📚</span>
                          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-violet-700">
                            {book.category}
                          </span>
                          <span
                            className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold ${
                              book.stock > 0
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-rose-100 text-rose-700"
                            }`}
                          >
                            {book.stock > 0 ? "Tersedia" : "Stok habis"}
                          </span>
                        </div>
                        <div className="p-5">
                          <h3 className="line-clamp-1 font-extrabold text-slate-800">
                            {book.title}
                          </h3>
                          <p className="mt-1 text-xs text-slate-400">
                            oleh {book.author}
                          </p>
                          <div className="my-4 flex items-center justify-between border-t border-violet-50 pt-3 text-xs">
                            <span className="text-slate-400">
                              Tahun {book.year}
                            </span>
                            <span className="font-semibold text-violet-700">
                              Stok: {book.stock}
                            </span>
                          </div>
                          <button
                            onClick={() => setSelectedBook(book)}
                            className="w-full rounded-xl bg-violet-50 py-2.5 text-xs font-bold text-violet-700 transition hover:bg-violet-600 hover:text-white"
                          >
                            Lihat Detail Buku
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </>
            )}

            {section === "Data Anggota" && (
              <div className="overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-violet-100 p-5 sm:p-6">
                  <div>
                    <h3 className="font-extrabold text-slate-800">
                      Data Anggota
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Total {members.length} anggota dalam daftar sementara
                    </p>
                  </div>
                  <button
                    onClick={() => setShowMemberForm(true)}
                    className="rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-violet-700"
                  >
                    + Tambah Anggota
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[650px] text-left text-sm">
                    <thead className="bg-violet-50/70 text-[11px] uppercase tracking-wider text-slate-500">
                      <tr>
                        <th className="px-6 py-4">Anggota</th>
                        <th className="px-6 py-4">Email</th>
                        <th className="px-6 py-4">Nomor HP</th>
                        <th className="px-6 py-4">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {members.map((member) => (
                        <tr
                          key={member.id}
                          className="border-t border-violet-50 hover:bg-violet-50/30"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 text-lg">
                                👤
                              </span>
                              <span className="font-bold text-slate-700">
                                {member.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-slate-500">
                            {member.email}
                          </td>
                          <td className="px-6 py-4 text-slate-500">
                            {member.phone}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => deleteMember(member.id)}
                              className="rounded-lg bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-100"
                            >
                              Hapus
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {section === "Peminjaman" && (
              <div className="overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-violet-100 p-5 sm:p-6">
                  <div>
                    <h3 className="font-extrabold text-slate-800">
                      Transaksi Peminjaman
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Catat dan pantau peminjaman buku
                    </p>
                  </div>
                  {role === "Admin" && (
                    <button
                      onClick={() => setShowLoanForm(true)}
                      className="rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-violet-700"
                    >
                      + Catat Peminjaman
                    </button>
                  )}
                </div>
                <LoanTable loans={activeLoans} />
              </div>
            )}

            {section === "Pengembalian" && (
              <div className="overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm">
                <div className="border-b border-violet-100 p-5 sm:p-6">
                  <h3 className="font-extrabold text-slate-800">
                    Pengembalian Buku
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Proses pengembalian dan perbarui status transaksi
                  </p>
                </div>
                {activeLoans.length === 0 ? (
                  <EmptyState text="Tidak ada peminjaman yang menunggu pengembalian." />
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] text-left text-sm">
                      <thead className="bg-violet-50/70 text-[11px] uppercase text-slate-500">
                        <tr>
                          <th className="px-6 py-4">Anggota</th>
                          <th className="px-6 py-4">Buku</th>
                          <th className="px-6 py-4">Tanggal Pinjam</th>
                          <th className="px-6 py-4">Batas Kembali</th>
                          <th className="px-6 py-4">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeLoans.map((loan) => (
                          <tr
                            key={loan.id}
                            className="border-t border-violet-50"
                          >
                            <td className="px-6 py-4 font-semibold">
                              {loan.member}
                            </td>
                            <td className="px-6 py-4">{loan.book}</td>
                            <td className="px-6 py-4 text-slate-500">
                              {loan.date}
                            </td>
                            <td className="px-6 py-4 text-slate-500">
                              {loan.dueDate}
                            </td>
                            <td className="px-6 py-4">
                              <button
                                onClick={() => returnLoan(loan)}
                                className="rounded-lg bg-emerald-100 px-3 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-200"
                              >
                                Proses Kembali
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {section === "Riwayat" && (
              <div className="overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm">
                <div className="border-b border-violet-100 p-5 sm:p-6">
                  <h3 className="font-extrabold text-slate-800">
                    Riwayat Transaksi
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Catatan peminjaman dan pengembalian
                  </p>
                </div>
                <LoanTable
                  loans={
                    role === "Admin"
                      ? loans
                      : loans.filter(
                          (loan) => loan.member === initialMembers[0]?.name,
                        )
                  }
                />
              </div>
            )}

            {section === "Profil Saya" && (
              <div className="mx-auto max-w-2xl rounded-3xl border border-violet-100 bg-white p-6 shadow-sm sm:p-10">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-violet-200 text-4xl">
                    {role === "Admin" ? "👩🏻‍💼" : "👩🏻"}
                  </div>
                  <h3 className="mt-4 text-xl font-extrabold text-slate-800">
                    {role === "Admin" ? "Petugas Perpustakaan" : "Alya Putri"}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {role} · RuangBaca Digital
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="rounded-xl bg-violet-50 p-4">
                    <p className="text-xs text-slate-400">Role pengguna</p>
                    <p className="mt-1 text-sm font-bold text-violet-800">
                      {role}
                    </p>
                  </div>
                  <div className="rounded-xl bg-pink-50 p-4">
                    <p className="text-xs text-slate-400">Email contoh</p>
                    <p className="mt-1 text-sm font-bold text-pink-800">
                      {role === "Admin"
                        ? "admin@ruangbaca.test"
                        : "alya@email.com"}
                    </p>
                  </div>
                  <p className="text-center text-xs leading-5 text-slate-400">
                    Ini adalah profil contoh. Autentikasi dan data akun asli
                    perlu dihubungkan ke backend.
                  </p>
                </div>
              </div>
            )}

            <footer className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-violet-100 py-5 text-center text-[10px] text-slate-400 sm:flex-row sm:text-left">
              <p>© 2026 RuangBaca Digital Library</p>
              <p>Dibuat dengan ♡ untuk pengalaman membaca yang lebih nyaman</p>
            </footer>
          </div>
        </section>
      </div>

      {notice && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-50 max-w-sm rounded-2xl bg-violet-900 px-5 py-4 text-sm font-semibold text-white shadow-xl"
        >
          ✨ {notice}
        </div>
      )}

      {showBookForm && (
        <Modal title="Tambah Buku Baru" onClose={() => setShowBookForm(false)}>
          <form onSubmit={saveBook} className="space-y-4">
            <Field label="Judul Buku">
              <input
                required
                value={bookForm.title}
                onChange={(event) =>
                  setBookForm({ ...bookForm, title: event.target.value })
                }
                className={inputStyle}
                placeholder="Masukkan judul buku"
              />
            </Field>
            <Field label="Penulis">
              <input
                required
                value={bookForm.author}
                onChange={(event) =>
                  setBookForm({ ...bookForm, author: event.target.value })
                }
                className={inputStyle}
                placeholder="Nama penulis"
              />
            </Field>
            <Field label="Kategori">
              <select
                value={bookForm.category}
                onChange={(event) =>
                  setBookForm({ ...bookForm, category: event.target.value })
                }
                className={inputStyle}
              >
                {categories
                  .filter((item) => item !== "Semua Kategori")
                  .map((item) => (
                    <option key={item}>{item}</option>
                  ))}
              </select>
            </Field>
            <Field label="Penerbit">
              <input
                required
                value={bookForm.publisher}
                onChange={(event) =>
                  setBookForm({ ...bookForm, publisher: event.target.value })
                }
                className={inputStyle}
                placeholder="Nama penerbit"
              />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Tahun Terbit">
                <input
                  required
                  type="number"
                  min="1000"
                  max="2100"
                  value={bookForm.year}
                  onChange={(event) =>
                    setBookForm({
                      ...bookForm,
                      year: Number(event.target.value),
                    })
                  }
                  className={inputStyle}
                />
              </Field>
              <Field label="Jumlah Stok">
                <input
                  required
                  type="number"
                  min="0"
                  value={bookForm.stock}
                  onChange={(event) =>
                    setBookForm({
                      ...bookForm,
                      stock: Number(event.target.value),
                    })
                  }
                  className={inputStyle}
                />
              </Field>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowBookForm(false)}
                className="flex-1 rounded-xl border border-violet-100 py-3 text-sm font-bold text-slate-500"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 rounded-xl bg-violet-600 py-3 text-sm font-bold text-white hover:bg-violet-700"
              >
                Simpan Buku
              </button>
            </div>
          </form>
        </Modal>
      )}

      {showMemberForm && (
        <Modal title="Tambah Anggota" onClose={() => setShowMemberForm(false)}>
          <form onSubmit={saveMember} className="space-y-4">
            <Field label="Nama Anggota">
              <input
                required
                value={memberForm.name}
                onChange={(event) =>
                  setMemberForm({ ...memberForm, name: event.target.value })
                }
                className={inputStyle}
                placeholder="Nama lengkap"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                value={memberForm.email}
                onChange={(event) =>
                  setMemberForm({ ...memberForm, email: event.target.value })
                }
                className={inputStyle}
                placeholder="nama@email.com"
              />
            </Field>
            <Field label="Nomor HP">
              <input
                required
                value={memberForm.phone}
                onChange={(event) =>
                  setMemberForm({ ...memberForm, phone: event.target.value })
                }
                className={inputStyle}
                placeholder="08xxxxxxxxxx"
              />
            </Field>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowMemberForm(false)}
                className="flex-1 rounded-xl border border-violet-100 py-3 text-sm font-bold text-slate-500"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 rounded-xl bg-violet-600 py-3 text-sm font-bold text-white hover:bg-violet-700"
              >
                Simpan Anggota
              </button>
            </div>
          </form>
        </Modal>
      )}

      {showLoanForm && (
        <Modal title="Catat Peminjaman" onClose={() => setShowLoanForm(false)}>
          <form onSubmit={saveLoan} className="space-y-4">
            <Field label="Pilih Anggota">
              <select
                required
                value={loanForm.member}
                onChange={(event) =>
                  setLoanForm({ ...loanForm, member: event.target.value })
                }
                className={inputStyle}
              >
                {members.map((member) => (
                  <option key={member.id} value={member.name}>
                    {member.name}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Pilih Buku">
              <select
                required
                value={loanForm.book}
                onChange={(event) =>
                  setLoanForm({ ...loanForm, book: event.target.value })
                }
                className={inputStyle}
              >
                {books
                  .filter((book) => book.stock > 0)
                  .map((book) => (
                    <option key={book.id} value={book.title}>
                      {book.title} (stok {book.stock})
                    </option>
                  ))}
              </select>
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Tanggal Pinjam">
                <input
                  required
                  type="date"
                  value={loanForm.date}
                  onChange={(event) =>
                    setLoanForm({ ...loanForm, date: event.target.value })
                  }
                  className={inputStyle}
                />
              </Field>
              <Field label="Batas Pengembalian">
                <input
                  required
                  type="date"
                  value={loanForm.dueDate}
                  onChange={(event) =>
                    setLoanForm({ ...loanForm, dueDate: event.target.value })
                  }
                  className={inputStyle}
                />
              </Field>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowLoanForm(false)}
                className="flex-1 rounded-xl border border-violet-100 py-3 text-sm font-bold text-slate-500"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={
                  members.length === 0 || books.every((book) => book.stock < 1)
                }
                className="flex-1 rounded-xl bg-violet-600 py-3 text-sm font-bold text-white hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Simpan Transaksi
              </button>
            </div>
          </form>
        </Modal>
      )}

      {selectedBook && (
        <Modal title="Detail Buku" onClose={() => setSelectedBook(null)}>
          <div className="text-center">
            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-200 to-pink-200 text-6xl">
              📚
            </div>
            <h3 className="mt-4 text-xl font-extrabold text-slate-800">
              {selectedBook.title}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{selectedBook.author}</p>
          </div>
          <div className="mt-6 space-y-3">
            {[
              ["Penerbit", selectedBook.publisher],
              ["Tahun Terbit", String(selectedBook.year)],
              ["Kategori", selectedBook.category],
              ["Stok", String(selectedBook.stock)],
              ["Status", selectedBook.stock > 0 ? "Tersedia" : "Stok habis"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between gap-4 rounded-xl bg-violet-50/70 px-4 py-3 text-sm"
              >
                <span className="text-slate-500">{label}</span>
                <span className="text-right font-bold text-slate-700">
                  {value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <button
              onClick={() => setSelectedBook(null)}
              className="flex-1 rounded-xl border border-violet-100 py-3 text-sm font-bold text-slate-500"
            >
              Tutup
            </button>
            {role === "Admin" && (
              <button
                onClick={() => deleteBook(selectedBook.id)}
                className="flex-1 rounded-xl bg-rose-50 py-3 text-sm font-bold text-rose-600 hover:bg-rose-100"
              >
                Hapus Buku
              </button>
            )}
          </div>
        </Modal>
      )}
    </main>
  );
}

const inputStyle =
  "w-full rounded-xl border border-violet-100 bg-white px-3 py-3 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-bold text-slate-600">{label}</span>
      {children}
    </label>
  );
}

function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="my-auto max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-extrabold text-slate-800">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-lg text-violet-700 hover:bg-violet-100"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function LoanTable({ loans }: { loans: Loan[] }) {
  if (loans.length === 0) {
    return <EmptyState text="Belum ada transaksi pada bagian ini." />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] text-left text-sm">
        <thead className="bg-violet-50/70 text-[11px] uppercase tracking-wider text-slate-500">
          <tr>
            <th className="px-6 py-4">Anggota</th>
            <th className="px-6 py-4">Judul Buku</th>
            <th className="px-6 py-4">Tanggal Pinjam</th>
            <th className="px-6 py-4">Batas Kembali</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr
              key={loan.id}
              className="border-t border-violet-50 hover:bg-violet-50/30"
            >
              <td className="px-6 py-4 font-semibold text-slate-700">
                {loan.member}
              </td>
              <td className="px-6 py-4 text-slate-600">{loan.book}</td>
              <td className="px-6 py-4 text-slate-500">{loan.date}</td>
              <td className="px-6 py-4 text-slate-500">{loan.dueDate}</td>
              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${
                    loan.status === "Dipinjam"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {loan.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="p-12 text-center">
      <div className="text-4xl">🌷</div>
      <p className="mt-3 text-sm font-semibold text-slate-600">{text}</p>
    </div>
  );
}
