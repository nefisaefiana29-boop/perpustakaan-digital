"use client";

import { useState } from "react";

type Chapter = {
  title: string;
  content: string;
};

type Novel = {
  id: number;
  title: string;
  author: string;
  genre: string;
  emoji: string;
  cover: string;
  synopsis: string;
  chapters: Chapter[];
};

const novels: Novel[] = [
  {
    id: 1,
    title: "Senja Terakhir untuk Kita",
    author: "PustakaKita",
    genre: "Romantis",
    emoji: "🌅",
    cover: "from-rose-200 to-orange-100",
    synopsis:
      "Dua hati bertemu kembali setelah perpisahan yang menyisakan banyak pertanyaan.",
    chapters: [
      {
        title: "Bab 1 — Pertemuan di Kedai Kopi",
        content: `Hujan turun perlahan sore itu. Nara duduk sendirian di dekat jendela sebuah kedai kopi kecil, memandangi jalanan yang basah sambil memeluk secangkir cokelat hangat.

Sudah hampir dua tahun ia tidak datang ke tempat itu. Banyak hal berubah sejak terakhir kali ia duduk di kursi yang sama. Namun, aroma kopi dan suara hujan masih terasa seperti dulu.

"Nara?"

Ia mengenali suara itu bahkan sebelum mengangkat kepala.

Di hadapannya berdiri Arka, seseorang yang pernah menjadi bagian paling indah sekaligus paling menyakitkan dalam hidupnya.

"Kamu masih suka duduk dekat jendela," kata Arka.

Nara mencoba tersenyum. "Dan kamu masih suka datang tanpa memberi kabar."

Dua tahun lalu, mereka berpisah tanpa penjelasan yang benar-benar selesai. Nara pernah menunggu pesan yang tidak datang dan membaca ulang percakapan lama.

Sekarang orang itu kembali, seolah waktu tidak pernah berjalan.

"Aku boleh duduk?" tanya Arka.

Nara mengangguk. Ia belum tahu apakah pertemuan ini akan menjadi awal yang baru atau penutup dari cerita lama.`,
      },
      {
        title: "Bab 2 — Pesan yang Tak Pernah Dikirim",
        content: `Mereka berbicara tentang hal-hal sederhana. Tentang pekerjaan, cuaca, dan kedai yang kini memiliki menu baru. Tidak ada yang berani menyebut alasan mereka pernah saling kehilangan.

Sampai Arka mengeluarkan sebuah amplop kecil dari tasnya.

"Aku menulis ini dua tahun lalu," katanya. "Tapi aku tidak pernah punya keberanian untuk mengirimkannya."

Di dalamnya ada beberapa lembar kertas. Arka menulis bahwa ia takut mengecewakan Nara dan merasa belum mampu menjadi seseorang yang bisa diandalkan.

Nara membaca kalimat terakhirnya berulang kali.

"Aku kira dengan menjauh, aku sedang melindungimu. Ternyata aku hanya meninggalkanmu dengan pertanyaan."

Nara melipat surat itu perlahan.

"Kamu tahu apa yang paling menyakitkan? Bukan karena kamu pergi. Tapi karena kamu memutuskan semuanya sendirian."

Arka menunduk. "Aku tahu. Dan aku tidak bisa meminta kamu melupakan itu."

Untuk pertama kalinya sore itu, mereka berhenti berpura-pura baik-baik saja.`,
      },
      {
        title: "Bab 3 — Tidak Semua yang Kembali Harus Dimiliki",
        content: `Beberapa hari kemudian, Arka mengajak Nara bertemu di taman kota.

"Aku masih menyayangimu," katanya. "Tapi aku tidak ingin perasaanku menjadi alasan kamu harus menerimaku lagi."

Nara memandang daun-daun yang bergerak tertiup angin.

"Dulu aku berpikir kalau kamu kembali, semua rasa sakitku akan hilang. Sekarang aku tahu, penjelasan bisa membantu kita memahami masa lalu, tetapi tidak otomatis menghapus luka."

Arka mengangguk tanpa membela diri.

Nara sudah belajar menikmati pagi, menyelesaikan pekerjaannya, dan tertawa bersama teman-temannya tanpa merasa bersalah.

Mungkin masih ada rasa sayang di sana. Namun, rasa sayang tidak selalu berarti harus kembali bersama.

"Terima kasih sudah menjelaskan semuanya," kata Nara. "Aku harap kita sama-sama menemukan hidup yang lebih baik."

Mereka berpisah tanpa saling menyalahkan.`,
      },
      {
        title: "Bab 4 — Senja yang Baru",
        content: `Satu bulan kemudian, Nara kembali ke kedai kopi itu.

Ia membuka buku catatannya dan menulis bahwa ada orang yang datang untuk menetap, ada yang datang untuk mengajarkan sesuatu, dan ada pula yang pergi sebelum kita memahami alasannya.

Dulu, Nara menganggap perpisahan sebagai bukti bahwa dirinya tidak cukup baik. Kini ia mengerti bahwa tidak semua hubungan berakhir karena seseorang kurang berharga.

Teleponnya bergetar. Sahabatnya mengajaknya melihat matahari terbenam.

Nara tersenyum dan segera membereskan barang-barangnya.

Di luar, langit berubah menjadi jingga keemasan. Ia berjalan menyusuri trotoar dengan langkah ringan.

Untuk pertama kalinya, ia tidak merasa sedang meninggalkan sesuatu.

Ia sedang menuju sesuatu yang baru.

Senja itu bukan lagi tentang kehilangan seseorang.

Senja itu adalah tentang menemukan dirinya sendiri.`,
      },
    ],
  },
  {
    id: 2,
    title: "Rahasia di Rumah Tua",
    author: "PustakaKita",
    genre: "Horor",
    emoji: "🏚️",
    cover: "from-indigo-200 to-slate-200",
    synopsis:
      "Sebuah buku harian membawa Laras pada rahasia keluarga yang disembunyikan selama puluhan tahun.",
    chapters: [
      {
        title: "Bab 1 — Rumah di Ujung Jalan",
        content: `Laras tidak pernah menyukai rumah tua. Baginya, rumah tua selalu memiliki suara aneh, sudut gelap, dan jendela yang seolah mengawasi siapa pun yang lewat.

Namun, setelah neneknya meninggal, rumah di ujung Jalan Melati menjadi satu-satunya tempat yang bisa ia tinggali sementara.

Pada malam pertama, Laras terbangun karena mendengar tiga ketukan.

Tok. Tok. Tok.

Ia membuka pintu. Tidak ada siapa-siapa. Hanya halaman kosong dan angin dingin yang menggerakkan dedaunan.

Saat kembali ke kamar, Laras menyadari pintu lemari tua terbuka sedikit.

Di lantai, tepat di bawah lemari, terdapat sebuah kunci kecil berwarna perak.

Ia belum tahu bahwa kunci itu akan membawanya pada rahasia yang telah disembunyikan keluarganya selama bertahun-tahun.`,
      },
      {
        title: "Bab 2 — Buku Harian",
        content: `Keesokan paginya, Laras mencoba membuka semua laci di rumah itu. Kunci perak tersebut tidak cocok dengan pintu mana pun sampai ia menemukan kotak kayu di ruang penyimpanan.

Di dalamnya ada foto lama, pita biru, dan buku harian dengan sampul cokelat.

Halaman pertamanya berisi tulisan tangan nenek.

"Jika suatu hari Laras menemukan buku ini, berarti waktunya telah tiba untuk menceritakan semuanya."

Buku itu menceritakan seorang perempuan bernama Ratih yang menghilang dari desa puluhan tahun lalu.

Menurut cerita warga, Ratih pergi setelah pertengkaran keluarga. Namun, catatan nenek menyebutkan bahwa Ratih sebenarnya meninggalkan surat yang tidak pernah sampai kepada keluarganya.

Di halaman terakhir, tertulis sebuah alamat dan kalimat pendek.

"Temukan orang yang masih menyimpan pita biru."

Laras memandang pita di dalam kotak. Siapa Ratih, dan mengapa nenek menyimpan rahasia ini?`,
      },
      {
        title: "Bab 3 — Tetangga Sebelah",
        content: `Alamat dalam buku harian membawa Laras ke sebuah rumah sederhana di seberang sungai. Di sana tinggal seorang pria tua bernama Pak Damar.

Ketika Laras menyebut nama Ratih, wajah pria itu berubah.

"Kamu cucu Bu Aminah?" tanyanya.

Laras mengangguk.

Pak Damar kembali membawa sebuah kotak kecil. Di dalamnya ada pita biru yang sama persis dengan milik Laras.

Ia menjelaskan bahwa Ratih adalah adik nenek Laras. Mereka pernah bertengkar karena kesalahpahaman, lalu Ratih pergi sebelum sempat menjelaskan kebenaran.

"Ayahmu dan nenekmu mencarinya bertahun-tahun," kata Pak Damar.

Laras menerima sebuah surat yang masih tersegel.

Di bagian depan tertulis nama neneknya. Tanggalnya menunjukkan surat itu ditulis beberapa hari sebelum Ratih menghilang.`,
      },
      {
        title: "Bab 4 — Surat Terakhir",
        content: `Surat itu berisi permintaan maaf. Ratih menulis bahwa ia tidak pernah berniat meninggalkan keluarganya. Ia hanya ingin mencari pekerjaan di kota lain agar bisa membantu membayar utang keluarga.

Ia berjanji akan pulang setelah keadaan membaik.

Laras membawa surat itu pulang dan meletakkannya di atas meja ruang tamu.

Rumah tua yang semula terasa dingin kini terlihat berbeda. Foto-foto lama di dinding bukan lagi sekadar hiasan. Semuanya adalah bagian dari kehidupan seseorang yang pernah berharap untuk dimengerti.

Malam itu, tidak ada ketukan misterius.

Laras mengerti bahwa rahasia yang paling lama disimpan terkadang bukan sesuatu yang menakutkan, melainkan kesedihan yang tidak pernah sempat diceritakan.

Ia berjanji akan menjaga kisah itu agar kesalahpahaman yang sama tidak diwariskan lagi kepada generasi berikutnya.`,
      },
    ],
  },
  {
    id: 3,
    title: "Langit yang Menungguku",
    author: "PustakaKita",
    genre: "Motivasi",
    emoji: "☁️",
    cover: "from-sky-200 to-purple-100",
    synopsis:
      "Seorang mahasiswi pemalu belajar menghadapi rasa takut dan menemukan keberanian mengejar mimpinya.",
    chapters: [
      {
        title: "Bab 1 — Gadis di Barisan Belakang",
        content: `Mira selalu memilih kursi paling belakang di kelas. Ia merasa lebih nyaman mendengarkan daripada berbicara.

Setiap kali dosen meminta mahasiswa menyampaikan pendapat, jantungnya berdetak lebih cepat. Ia sebenarnya tahu jawabannya, tetapi kata-kata terasa berhenti di tenggorokan.

Suatu hari, dosen mengumumkan proyek kelompok yang mengharuskan setiap mahasiswa mempresentasikan hasil pekerjaan mereka.

Mira langsung merasa cemas.

Di rumah, ibunya duduk di sampingnya.

"Kamu tidak harus langsung berani melakukan semuanya," kata ibunya. "Coba satu langkah kecil dulu."

Mira mengangguk. Ia belum sepenuhnya percaya pada dirinya sendiri, tetapi malam itu ia mulai berlatih di depan cermin.`,
      },
      {
        title: "Bab 2 — Satu Langkah Kecil",
        content: `Mira mulai berlatih berbicara di depan cermin. Awalnya ia hanya mampu berbicara selama satu menit sebelum berhenti karena gugup.

Ia mengulanginya lagi keesokan hari.

Kemudian, ia meminta sahabatnya mendengarkan presentasinya. Sahabatnya tidak menertawakan kesalahan Mira. Ia justru membantu memperbaiki bagian yang kurang jelas.

Hari presentasi tiba. Ketika namanya dipanggil, telapak tangan Mira terasa dingin.

Ia menarik napas dan memulai kalimat pertama.

Suaranya sedikit gemetar. Ia sempat salah menyebut satu kata, tetapi ia melanjutkan sampai akhir.

Mira kembali ke tempat duduk dengan perasaan lega. Ia belum menjadi orang paling percaya diri di kelas, tetapi hari itu ia berhasil melakukan sesuatu yang sebelumnya terasa mustahil.`,
      },
      {
        title: "Bab 3 — Tidak Perlu Berlari",
        content: `Setelah presentasi, Mira menyadari bahwa perubahan tidak selalu terlihat besar.

Ada hari ketika ia kembali merasa takut. Ada saat ketika ia membandingkan dirinya dengan teman-temannya.

Sampai suatu sore, ia menemukan catatan lama di dalam bukunya.

"Tidak apa-apa berjalan pelan, asalkan tidak berhenti. Setiap orang memiliki waktunya sendiri untuk tumbuh dan berhasil."

Mira membaca kalimat itu berulang kali.

Ia mulai membuat tujuan kecil setiap minggu: membaca beberapa halaman buku, bertanya satu kali di kelas, dan mencoba hal baru meskipun masih takut.

Perlahan-lahan, ia menemukan bahwa keberanian bukan sesuatu yang datang sekaligus.

Keberanian tumbuh setiap kali seseorang memilih untuk mencoba lagi.`,
      },
      {
        title: "Bab 4 — Langit Milik Semua Orang",
        content: `Beberapa bulan kemudian, Mira berdiri di depan kelas untuk mempresentasikan proyek akhirnya.

Kali ini ia masih merasa gugup. Namun, ia tidak lagi menganggap rasa gugup sebagai tanda bahwa dirinya tidak mampu.

Ia mulai berbicara. Ketika seorang teman mengajukan pertanyaan, Mira berpikir sebentar sebelum menjawab.

Setelah kelas selesai, sahabatnya menghampiri.

"Kamu kelihatan jauh lebih percaya diri sekarang."

Mira tertawa kecil. "Aku masih takut, kok."

"Terus, bagaimana kamu bisa melakukannya?"

Mira memandang langit dari jendela kelas.

"Mungkin karena aku sudah tidak menunggu rasa takut itu hilang dulu untuk mencoba."

Ia mengerti bahwa langit yang luas tidak pernah meminta seseorang tumbuh secepat orang lain.

Ia hanya perlu terus melangkah, dengan caranya sendiri.`,
      },
    ],
  },
  {
    id: 4,
    title: "Cinta di Bangku Sekolah",
    author: "PustakaKita",
    genre: "Romantis",
    emoji: "💌",
    cover: "from-pink-200 to-rose-100",
    synopsis:
      "Dua siswa yang berbeda sifat perlahan belajar mengenal arti cinta dan keberanian.",
    chapters: [
      {
        title: "Bab 1 — Teman Sebangku",
        content: `Hari pertama di kelas baru membuat Alina gugup. Ia memilih kursi dekat jendela, berharap tidak ada yang memperhatikannya.

Namun, seorang siswa bernama Raka datang terlambat dan duduk tepat di sebelahnya.

"Namamu siapa?" tanya Raka.

"Alina."

Sejak hari itu, mereka mulai berbagi catatan, mengerjakan tugas, dan bercanda saat istirahat.

Alina tidak menyangka seseorang yang awalnya terasa asing perlahan menjadi orang yang paling ia tunggu kehadirannya.`,
      },
      {
        title: "Bab 2 — Rahasia Kecil",
        content: `Raka selalu punya alasan untuk meminjam pulpen Alina, meskipun ia sebenarnya membawa dua pulpen sendiri.

Suatu sore, Raka memberikan selembar kertas kecil. Isinya sederhana: "Terima kasih sudah membuat hari-hariku lebih menyenangkan."

Alina menyimpan kertas itu di dalam buku catatannya.

Ia belum tahu apa yang akan terjadi selanjutnya, tetapi ia mulai menyadari bahwa perasaannya kepada Raka bukan lagi sekadar persahabatan.`,
      },
      {
        title: "Bab 3 — Hujan di Hari Perpisahan",
        content: `Hari pembagian rapor menjadi hari yang berbeda bagi Alina dan Raka. Keluarga Raka akan pindah ke kota lain.

Mereka berdiri di depan gerbang sekolah, mendengarkan suara hujan yang jatuh di atap.

"Aku tidak tahu kapan kita bisa bertemu lagi," kata Raka.

Alina menunduk. Ia ingin mengatakan banyak hal, tetapi hanya satu kalimat yang berhasil keluar.

"Jangan lupa sama aku."

Raka tersenyum. "Aku akan mengingat teman sebangkuku yang selalu meminjamkan catatan."

Mereka tertawa kecil, meskipun mata Alina mulai berkaca-kaca.

Hari itu mereka belajar bahwa beberapa pertemuan terasa begitu berharga justru karena kita tidak tahu berapa lama akan memilikinya.`,
      },
    ],
  },
  {
    id: 5,
    title: "Sahabat Sampai Nanti",
    author: "PustakaKita",
    genre: "Persahabatan",
    emoji: "🫶",
    cover: "from-purple-200 to-pink-100",
    synopsis:
      "Tiga sahabat menghadapi perubahan hidup dan belajar menjaga persahabatan.",
    chapters: [
      {
        title: "Bab 1 — Janji di Taman",
        content: `Dinda, Rani, dan Putri selalu bertemu di taman kecil dekat sekolah.

Mereka punya kebiasaan menuliskan impian di secarik kertas lalu menyimpannya di dalam sebuah kotak.

"Sepuluh tahun lagi, kita harus buka kotak ini bersama," kata Putri.

Mereka tertawa dan berjanji akan selalu saling mendukung.

Saat itu, mereka percaya tidak ada yang bisa mengubah persahabatan mereka.`,
      },
      {
        title: "Bab 2 — Jalan yang Berbeda",
        content: `Waktu berjalan. Mereka mulai sibuk dengan ujian, keluarga, dan rencana masa depan.

Pesan di grup yang dahulu ramai perlahan menjadi semakin jarang.

Dinda sempat merasa dilupakan. Namun, ketika ia akhirnya bercerita tentang kesedihannya, kedua sahabatnya mendengarkan tanpa menghakimi.

Mereka mengerti bahwa persahabatan tidak selalu berarti harus bersama setiap saat.

Kadang, persahabatan berarti tetap menyediakan tempat untuk pulang meskipun hidup membawa masing-masing ke jalan yang berbeda.`,
      },
      {
        title: "Bab 3 — Kotak Kenangan",
        content: `Pada hari libur, mereka akhirnya kembali ke taman lama.

Kotak kenangan itu masih ada, meskipun warnanya sudah memudar.

Mereka membuka kertas-kertas yang pernah ditulis saat masih sekolah. Ada impian menjadi dokter, membuka toko bunga, dan mengunjungi banyak negara.

Tidak semua impian sudah tercapai. Namun, mereka tidak lagi merasa harus membandingkan perjalanan masing-masing.

Mereka tertawa, bercerita tentang kesalahan masa lalu, dan berjanji untuk tetap saling menghubungi.

Ternyata, persahabatan bukan tentang mempertahankan semuanya tetap sama.

Persahabatan adalah tentang tumbuh bersama tanpa harus menjadi orang yang sama.`,
      },
    ],
  },
  {
    id: 6,
    title: "Bisikan dari Kamar Tiga",
    author: "PustakaKita",
    genre: "Horor",
    emoji: "🕯️",
    cover: "from-slate-300 to-purple-200",
    synopsis:
      "Penghuni kos baru mendengar suara misterius dari kamar yang selalu terkunci.",
    chapters: [
      {
        title: "Bab 1 — Kos Baru",
        content: `Malam pertama di kos barunya, Sasa mendengar suara seseorang memanggil namanya dari ujung lorong.

Ia membuka pintu kamar dan melihat lorong yang kosong. Lampu berkedip sekali sebelum kembali menyala.

Keesokan paginya, ia bertanya kepada pemilik kos tentang kamar nomor tiga.

Wajah ibu kos berubah. "Kalau malam, jangan pernah membuka kamar itu," katanya pelan.

Sasa tertawa gugup, mengira ibu kos hanya bercanda.

Sampai malam berikutnya, ketika tiga ketukan terdengar dari balik pintu kamarnya sendiri.`,
      },
      {
        title: "Bab 2 — Ketukan Tengah Malam",
        content: `Sasa menarik selimut hingga menutupi bahunya.

Tok. Tok. Tok.

Ia memeriksa lubang pintu. Tidak ada siapa-siapa.

Namun, di lantai depan pintu terdapat secarik kertas bertuliskan: "Jangan percaya pada suara yang kamu kenal."

Sasa mengenali tulisan itu. Tulisan tersebut sama persis dengan tulisan tangan di buku catatan yang ia temukan di meja kamarnya saat pertama pindah.

Ia mulai bertanya-tanya, siapa sebenarnya penghuni kamar ini sebelum dirinya?`,
      },
      {
        title: "Bab 3 — Pintu yang Terbuka",
        content: `Malam berikutnya, rasa penasaran mengalahkan ketakutan Sasa.

Ia berjalan menuju kamar nomor tiga sambil membawa senter. Gagang pintu yang selama ini terkunci kini dapat diputar dengan mudah.

Di dalam kamar, semua perabot tertutup kain putih. Sebuah meja kecil berdiri di dekat jendela, dan di atasnya terdapat foto lama para penghuni kos.

Sasa menemukan foto seorang perempuan yang wajahnya sangat mirip dengannya.

Di belakang foto itu tertulis nama yang sama dengan nama ibunya.

Sasa mundur selangkah.

Tiba-tiba, pintu kamar tertutup sendiri.`,
      },
    ],
  },
  {
    id: 7,
    title: "Kerajaan di Balik Awan",
    author: "PustakaKita",
    genre: "Fantasi",
    emoji: "🦋",
    cover: "from-sky-200 to-indigo-100",
    synopsis:
      "Seorang gadis menemukan jalan menuju kerajaan tersembunyi di atas awan.",
    chapters: [
      {
        title: "Bab 1 — Pintu Langit",
        content: `Mila menemukan sebuah kunci berwarna biru di dalam kotak peninggalan kakeknya.

Pada malam bulan purnama, kunci itu bersinar dan menunjukkan jalan menuju bukit tertinggi.

Di puncak bukit, awan terbelah. Sebuah tangga cahaya muncul di hadapannya.

Mila ragu, tetapi suara lembut dari balik awan berkata, "Kami sudah menunggumu."

Ia melangkah naik dan mendapati sebuah kerajaan dengan sungai berkilauan serta kupu-kupu sebesar telapak tangan.`,
      },
      {
        title: "Bab 2 — Putri yang Hilang",
        content: `Di kerajaan itu, Mila bertemu seorang penjaga bernama Elian.

Ia menjelaskan bahwa kerajaan kehilangan putrinya bertahun-tahun lalu.

Kunci biru yang dibawa Mila ternyata milik sang putri. Namun, Mila tidak tahu bagaimana benda itu bisa sampai kepada kakeknya.

Untuk menemukan jawabannya, mereka harus memasuki perpustakaan terlarang yang menyimpan sejarah kerajaan.

Di sana, Mila menemukan potret seorang perempuan yang wajahnya sangat mirip dengan ibunya.`,
      },
      {
        title: "Bab 3 — Perpustakaan Terlarang",
        content: `Perpustakaan itu dipenuhi buku-buku yang melayang di udara.

Elian mengingatkan Mila agar tidak menyentuh buku bersampul hitam. Namun, buku itu justru membuka dirinya ketika Mila mendekat.

Di halaman pertama, terdapat gambar kunci biru dan nama keluarga Mila.

Ia mulai memahami bahwa kedatangannya ke kerajaan itu bukan kebetulan.

Seseorang dari keluarganya pernah tinggal di sana, dan rahasia tersebut telah diwariskan dari satu generasi ke generasi berikutnya.`,
      },
    ],
  },
  {
    id: 8,
    title: "Langkah Menuju Mimpi",
    author: "PustakaKita",
    genre: "Motivasi",
    emoji: "🌻",
    cover: "from-yellow-200 to-orange-100",
    synopsis:
      "Perjalanan seorang gadis mengejar cita-cita meskipun banyak rintangan.",
    chapters: [
      {
        title: "Bab 1 — Mimpi Sederhana",
        content: `Sejak kecil, Ayu ingin menjadi seorang penulis. Ia menuliskan cerita di buku bekas dan menyembunyikannya di bawah bantal.

Ketika pertama kali menunjukkan tulisannya kepada orang lain, seseorang menertawakannya.

Ayu hampir berhenti.

Namun, ibunya berkata, "Kamu tidak perlu membuat semua orang percaya. Kamu hanya perlu memberi dirimu kesempatan untuk mencoba."

Kalimat itu membuat Ayu kembali membuka bukunya malam itu.`,
      },
      {
        title: "Bab 2 — Mencoba Lagi",
        content: `Ayu mengirimkan ceritanya ke sebuah lomba menulis. Ia tidak menang, tetapi juri memberikan beberapa saran yang berguna.

Ia memperbaiki tulisannya, belajar dari kesalahan, dan mencoba lagi.

Beberapa bulan kemudian, ceritanya terpilih untuk diterbitkan dalam kumpulan karya pelajar.

Ayu tersenyum ketika melihat namanya tercetak.

Ia tahu perjalanannya masih panjang, tetapi kini ia tidak lagi takut memulai dari awal.`,
      },
      {
        title: "Bab 3 — Hari yang Baru",
        content: `Ayu mulai mengirimkan lebih banyak cerita dan mengikuti kelompok menulis.

Ia bertemu teman-teman yang juga memiliki impian. Mereka saling membaca karya, memberikan masukan, dan merayakan kemajuan kecil.

Suatu malam, Ayu membaca kembali tulisan pertamanya yang penuh kesalahan.

Ia tersenyum, bukan karena tulisan itu sempurna, melainkan karena tulisan itu menjadi bukti bahwa dirinya telah memulai.

Ayu akhirnya mengerti bahwa mimpi bukan hanya tentang mencapai tujuan.

Mimpi juga tentang keberanian untuk terus belajar sepanjang perjalanan.`,
      },
    ],
  },
  {
    id: 9,
    title: "Misteri Surat Merah",
    author: "PustakaKita",
    genre: "Misteri",
    emoji: "✉️",
    cover: "from-red-200 to-rose-100",
    synopsis:
      "Surat tanpa nama membawa seorang mahasiswa pada teka-teki masa lalu keluarganya.",
    chapters: [
      {
        title: "Bab 1 — Surat Tanpa Nama",
        content: `Di antara tumpukan buku bekas, Bima menemukan amplop merah tanpa nama pengirim.

Di dalamnya hanya ada satu kalimat: "Cari pohon mangga sebelum semuanya terlambat."

Bima mengenali tempat yang dimaksud. Pohon mangga itu tumbuh di halaman rumah neneknya, tempat ia menghabiskan masa kecil.

Di bawah pohon itu, ia menemukan kotak besi kecil yang terkubur dangkal.`,
      },
      {
        title: "Bab 2 — Petunjuk Pertama",
        content: `Kotak besi itu berisi foto lama, sebuah kunci, dan peta yang sebagian tintanya sudah memudar.

Di belakang foto tertulis tanggal dan nama seseorang yang belum pernah Bima dengar.

Ketika ia menunjukkan foto tersebut kepada ayahnya, ayahnya terdiam lama.

"Kamu menemukan ini dari mana?" tanyanya.

Untuk pertama kalinya, Bima menyadari bahwa teka-teki itu mungkin berkaitan dengan rahasia yang selama ini disimpan keluarganya.`,
      },
      {
        title: "Bab 3 — Nama di Balik Foto",
        content: `Bima mengikuti petunjuk pada peta menuju sebuah rumah tua di pinggir kota.

Di sana, ia bertemu seorang perempuan yang mengaku sebagai teman lama neneknya.

Perempuan itu menjelaskan bahwa foto tersebut diambil pada hari sebuah keluarga harus berpisah karena kesalahpahaman.

Kunci di dalam kotak ternyata membuka laci meja yang telah lama disimpan di rumah nenek Bima.

Di dalam laci itu terdapat surat kedua, yang akhirnya menjelaskan mengapa amplop merah tersebut dikirimkan kepadanya.`,
      },
    ],
  },
  {
    id: 10,
    title: "Musim Hujan di Kota Kita",
    author: "PustakaKita",
    genre: "Romantis",
    emoji: "☔",
    cover: "from-blue-200 to-violet-100",
    synopsis:
      "Dua orang asing berbagi payung dan perlahan menjadi bagian penting dalam hidup masing-masing.",
    chapters: [
      {
        title: "Bab 1 — Satu Payung",
        content: `Hujan turun tepat ketika Lani keluar dari toko buku. Ia tidak membawa payung dan harus menunggu di bawah kanopi kecil.

Seorang pemuda mengulurkan payung biru kepadanya.

"Kita searah. Mau berjalan bersama?"

Lani mengangguk. Mereka berjalan melewati toko-toko yang mulai tutup, berbicara tentang buku, musik, dan makanan kesukaan.

Ketika sampai di persimpangan, Lani baru menyadari bahwa ia bahkan belum menanyakan nama pemuda itu.`,
      },
      {
        title: "Bab 2 — Pertemuan Kedua",
        content: `Seminggu kemudian, Lani kembali ke toko buku yang sama.

Ia tidak berharap bertemu pemuda berpayung biru itu lagi. Namun, di bagian novel, seseorang sedang membaca buku yang pernah mereka bicarakan.

"Kamu akhirnya datang juga," katanya sambil tersenyum.

Lani tertawa. Ia tidak tahu apakah pertemuan itu kebetulan atau awal dari sesuatu yang baru, tetapi ia senang karena hujan hari itu telah mempertemukan mereka.`,
      },
      {
        title: "Bab 3 — Sebuah Undangan",
        content: `Pemuda itu bernama Dimas. Mereka mulai bertemu setiap akhir pekan untuk berburu buku bekas dan mencoba kedai baru.

Lani menyadari bahwa Dimas selalu mengingat hal-hal kecil yang ia ceritakan.

Suatu hari, Dimas mengajaknya menghadiri pameran buku.

"Aku ingin menunjukkan sesuatu," katanya.

Di sebuah sudut pameran, Dimas menunjukkan buku catatan yang ia isi dengan ulasan buku-buku favorit mereka.

Lani tersenyum. Ternyata, pertemuan di tengah hujan telah menjadi awal dari cerita yang jauh lebih panjang.`,
      },
    ],
  },
  {
    id: 11,
    title: "Rahasia Taman Bunga",
    author: "PustakaKita",
    genre: "Fantasi",
    emoji: "🌷",
    cover: "from-pink-200 to-green-100",
    synopsis:
      "Taman bunga yang hanya mekar pada tengah malam menyimpan rahasia tentang waktu.",
    chapters: [
      {
        title: "Bab 1 — Bunga Tengah Malam",
        content: `Setiap malam, Nisa melihat cahaya lembut dari taman kosong di belakang rumahnya.

Suatu malam, ia memberanikan diri masuk.

Di sana, bunga-bunga bermekaran meskipun matahari sudah lama terbenam. Setiap kelopak memancarkan warna yang belum pernah ia lihat.

Seorang perempuan tua muncul dari balik pohon.

"Taman ini menyimpan kenangan orang-orang," katanya. "Tetapi kamu harus berhati-hati. Tidak semua kenangan ingin ditemukan kembali."`,
      },
      {
        title: "Bab 2 — Kenangan yang Tertinggal",
        content: `Nisa menyentuh sebuah bunga putih. Seketika, ia melihat bayangan seorang anak kecil berlari bersama ibunya di taman itu.

Ia menyadari bahwa bayangan tersebut adalah kenangan masa kecilnya sendiri, kenangan yang hampir terlupakan setelah keluarganya pindah.

Nisa mengerti bahwa taman itu tidak memberinya masa lalu untuk diubah. Taman itu hanya mengingatkannya pada hal-hal berharga yang masih bisa ia bawa ke masa depan.`,
      },
      {
        title: "Bab 3 — Bunga Terakhir",
        content: `Perempuan tua itu menunjukkan satu bunga terakhir yang belum mekar.

"Bunga ini akan mekar ketika kamu telah menerima kenanganmu sepenuhnya," katanya.

Nisa memejamkan mata dan mengingat hari-hari bahagia bersama ibunya.

Ketika membuka mata, kelopak bunga perlahan terbuka. Cahaya lembut memenuhi taman.

Nisa tersenyum. Ia tidak bisa kembali ke masa lalu, tetapi ia bisa membawa kenangan baik itu dalam langkah-langkahnya ke depan.`,
      },
    ],
  },
  {
    id: 12,
    title: "Sahabat dari Dunia Lain",
    author: "PustakaKita",
    genre: "Fantasi",
    emoji: "🌙",
    cover: "from-indigo-200 to-purple-100",
    synopsis:
      "Seorang anak berteman dengan makhluk misterius yang muncul setiap bulan purnama.",
    chapters: [
      {
        title: "Bab 1 — Cahaya di Jendela",
        content: `Setiap bulan purnama, Rafi melihat cahaya kecil melayang di luar jendela kamarnya.

Suatu malam, cahaya itu berubah menjadi makhluk mungil dengan sayap transparan.

"Aku Lumo," katanya. "Aku tersesat dan perlu menemukan jalan pulang."

Rafi terkejut, tetapi rasa penasarannya mengalahkan rasa takut. Ia berjanji membantu Lumo sebelum bulan purnama berakhir.`,
      },
      {
        title: "Bab 2 — Peta Bintang",
        content: `Lumo menunjukkan sebuah peta yang hanya terlihat ketika diterangi cahaya bulan.

Mereka mengikuti petunjuk dari satu bintang ke bintang lainnya, melewati bukit dan danau kecil.

Dalam perjalanan, Rafi menyadari bahwa membantu orang lain terkadang berarti melakukan sesuatu yang belum pernah ia bayangkan.

Ketika akhirnya mereka menemukan jalan pulang Lumo, Rafi merasa sedih karena harus berpisah.`,
      },
      {
        title: "Bab 3 — Janji di Bawah Bulan",
        content: `Malam terakhir tiba. Lumo berdiri di tepi danau yang memantulkan cahaya bintang.

"Terima kasih sudah membantuku," katanya.

Rafi tersenyum, meskipun hatinya terasa berat. "Apakah kita akan bertemu lagi?"

Lumo memberikan sebuah batu kecil yang bersinar.

"Selama kamu masih percaya pada keajaiban, persahabatan kita tidak akan hilang."

Cahaya menyelimuti Lumo, lalu perlahan menghilang ke langit.

Rafi kembali ke rumah dengan batu itu di tangannya. Ia tahu petualangannya telah berakhir, tetapi ia tidak akan pernah melupakan sahabat kecil dari dunia lain.`,
      },
    ],
  },
];

const genres = [
  "Semua",
  "Romantis",
  "Persahabatan",
  "Horor",
  "Misteri",
  "Fantasi",
  "Motivasi",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("Semua");
  const [bookId, setBookId] = useState<number | null>(null);
  const [chapterIndex, setChapterIndex] = useState(0);

  const activeBook = novels.find((book) => book.id === bookId);

  const filteredBooks = novels.filter((book) => {
    const query = search.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query);

    return matchesSearch && (genre === "Semua" || book.genre === genre);
  });

  function openBook(id: number) {
    setBookId(id);
    setChapterIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goHome() {
    setBookId(null);
    setChapterIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-[#fff9fc] text-slate-700">
      <nav className="sticky top-0 z-30 border-b border-pink-100 bg-white/90 px-5 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <button
            onClick={goHome}
            className="text-2xl font-black text-pink-500"
          >
            🌷 PustakaKita
          </button>
          <button
            onClick={goHome}
            className="rounded-full bg-pink-100 px-4 py-2 text-sm font-bold text-pink-600"
          >
            🏠 Beranda
          </button>
        </div>
      </nav>

      {activeBook ? (
        <section className="mx-auto max-w-5xl px-5 py-10">
          <button
            onClick={goHome}
            className="mb-6 rounded-full bg-pink-100 px-5 py-3 font-bold text-pink-600"
          >
            ← Kembali ke koleksi
          </button>

          <div className="grid gap-8 md:grid-cols-[240px_1fr]">
            <aside>
              <div
                className={`flex aspect-[3/4] items-center justify-center rounded-3xl bg-gradient-to-br ${activeBook.cover} text-8xl shadow-lg`}
              >
                {activeBook.emoji}
              </div>
              <h1 className="mt-5 text-3xl font-black">{activeBook.title}</h1>
              <p className="mt-2 text-slate-500">✍️ {activeBook.author}</p>
              <span className="mt-3 inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-600">
                {activeBook.genre}
              </span>
              <p className="mt-5 leading-7">{activeBook.synopsis}</p>
              <p className="mt-4 text-sm text-slate-500">
                📚 {activeBook.chapters.length} bab · Baca langsung di sini
              </p>
            </aside>

            <section className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm sm:p-9">
              <p className="font-bold text-pink-500">RUANG BACA PRIBADI</p>
              <h2 className="mt-2 text-2xl font-black">Daftar Isi 📖</h2>

              <div className="mt-5 space-y-2">
                {activeBook.chapters.map((item, index) => (
                  <button
                    key={item.title}
                    onClick={() => setChapterIndex(index)}
                    className={`w-full rounded-2xl border p-4 text-left ${
                      chapterIndex === index
                        ? "border-pink-300 bg-pink-50"
                        : "border-slate-100 hover:bg-pink-50"
                    }`}
                  >
                    <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm font-black text-purple-600">
                      {index + 1}
                    </span>
                    <span className="font-semibold">{item.title}</span>
                  </button>
                ))}
              </div>

              <div className="my-8 border-t border-pink-100" />

              <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-bold text-pink-600">
                  Bab {chapterIndex + 1}
                </span>
                <span className="text-sm text-slate-400">
                  {chapterIndex + 1} dari {activeBook.chapters.length}
                </span>
              </div>

              <h2 className="mb-7 text-2xl font-black leading-snug sm:text-3xl">
                {activeBook.chapters[chapterIndex].title}
              </h2>

              <article className="whitespace-pre-line text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
                {activeBook.chapters[chapterIndex].content}
              </article>

              <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-pink-100 pt-6">
                <button
                  onClick={() => setChapterIndex((old) => Math.max(0, old - 1))}
                  disabled={chapterIndex === 0}
                  className="rounded-full bg-sky-100 px-5 py-3 font-bold text-sky-700 disabled:opacity-40"
                >
                  ← Sebelumnya
                </button>
                <button
                  onClick={() =>
                    setChapterIndex((old) =>
                      Math.min(activeBook.chapters.length - 1, old + 1),
                    )
                  }
                  disabled={chapterIndex === activeBook.chapters.length - 1}
                  className="rounded-full bg-pink-500 px-5 py-3 font-bold text-white disabled:opacity-40"
                >
                  Berikutnya →
                </button>
              </div>

              {chapterIndex === activeBook.chapters.length - 1 && (
                <div className="mt-6 rounded-2xl bg-purple-50 p-5 text-center">
                  <p className="text-2xl">🌸📚💗</p>
                  <h3 className="mt-2 font-black">Kamu sampai di akhir!</h3>
                  <button
                    onClick={goHome}
                    className="mt-4 rounded-full bg-purple-500 px-5 py-3 font-bold text-white"
                  >
                    Pilih Novel Lain
                  </button>
                </div>
              )}
            </section>
          </div>
        </section>
      ) : (
        <>
          <section className="bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 px-5 py-16 sm:py-24">
            <div className="mx-auto max-w-6xl">
              <p className="font-bold text-pink-500">
                ✨ SELAMAT DATANG DI PUSTAKAKITA
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
                Cari cerita favoritmu, lalu tenggelam dalam dunia novel 💗
              </h1>
              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                Temukan cerita romantis, persahabatan, horor, misteri, fantasi,
                dan motivasi. Pilih buku, buka babnya, lalu baca langsung di
                sini.
              </p>
              <a
                href="#koleksi"
                className="mt-8 inline-block rounded-full bg-pink-500 px-7 py-4 font-bold text-white shadow-lg hover:bg-pink-600"
              >
                Mulai Membaca ↓
              </a>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
                <span className="rounded-full bg-white/80 px-4 py-2">
                  🌹 Romantis
                </span>
                <span className="rounded-full bg-white/80 px-4 py-2">
                  👻 Horor
                </span>
                <span className="rounded-full bg-white/80 px-4 py-2">
                  🦋 Fantasi
                </span>
                <span className="rounded-full bg-white/80 px-4 py-2">
                  🫶 Persahabatan
                </span>
              </div>
            </div>
          </section>

          <section id="koleksi" className="mx-auto max-w-6xl px-5 py-14">
            <p className="font-bold text-pink-500">KOLEKSI CERITA</p>
            <h2 className="mt-2 text-3xl font-black">Rak Novel Kita 📚</h2>
            <p className="mt-2 text-slate-500">
              Ada {novels.length} novel untuk kamu jelajahi. Semua bisa dibaca
              langsung di website ini.
            </p>

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="🔎 Cari judul novel atau genre..."
              className="mt-7 w-full rounded-full border border-pink-100 bg-white px-6 py-4 outline-none focus:ring-2 focus:ring-pink-300"
            />

            <div className="my-6 flex flex-wrap gap-3">
              {genres.map((item) => (
                <button
                  key={item}
                  onClick={() => setGenre(item)}
                  className={`rounded-full px-5 py-3 font-bold ${
                    genre === item
                      ? "bg-pink-500 text-white"
                      : "bg-white ring-1 ring-pink-100 hover:bg-pink-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {filteredBooks.length === 0 ? (
              <div className="rounded-3xl bg-white p-10 text-center">
                <p className="text-4xl">🔎</p>
                <p className="mt-3 font-bold">Novel tidak ditemukan</p>
                <p className="mt-2 text-slate-500">
                  Coba kata pencarian lain, ya.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredBooks.map((book) => (
                  <article
                    key={book.id}
                    className="overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className={`flex h-64 items-center justify-center bg-gradient-to-br ${book.cover} text-8xl`}
                    >
                      {book.emoji}
                    </div>
                    <div className="p-6">
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-600">
                        {book.genre}
                      </span>
                      <h3 className="mt-4 text-2xl font-black">{book.title}</h3>
                      <p className="mt-2 text-sm text-slate-500">
                        ✍️ {book.author}
                      </p>
                      <p className="mt-4 leading-7 text-slate-600">
                        {book.synopsis}
                      </p>
                      <p className="mt-4 text-sm font-semibold text-slate-400">
                        📖 {book.chapters.length} bab
                      </p>
                      <button
                        onClick={() => openBook(book.id)}
                        className="mt-5 w-full rounded-full bg-pink-500 py-3 font-bold text-white hover:bg-pink-600"
                      >
                        Baca Novel Sekarang 📖
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="mx-auto max-w-6xl px-5 pb-14">
            <div className="rounded-3xl bg-gradient-to-r from-sky-100 via-purple-100 to-pink-100 p-8 text-center sm:p-12">
              <p className="text-4xl">🧸📚🌷</p>
              <h2 className="mt-4 text-2xl font-black sm:text-3xl">
                Satu hari, satu cerita baru.
              </h2>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
                Nikmati cerita dengan santai. Tidak perlu terburu-buru, karena
                setiap halaman punya kisahnya sendiri.
              </p>
            </div>
          </section>
        </>
      )}

      <footer className="bg-pink-100 px-5 py-8 text-center">
        <p className="text-xl font-black text-pink-600">🌷 PustakaKita</p>
        <p className="mt-2 text-sm text-slate-500">
          Tempat kecil untuk cerita yang besar.
        </p>
      </footer>
    </main>
  );
}
