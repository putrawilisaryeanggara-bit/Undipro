'use client'

import Image from "next/image"

const daftarEbook = [
  {
    id: 1,
    judul: "Rahasia Sukses Finansial",
    deskripsi: "Pelajari strategi keuangan cerdas untuk mencapai kebebasan finansial.",
    gambar: "/ebooks/1.jpg",
    link: "https://undipro.com/pembayaran/ebook-dummy"
  },
  {
    id: 2,
    judul: "Bisnis Online dari Nol",
    deskripsi: "Panduan lengkap membangun bisnis online bahkan tanpa pengalaman.",
    gambar: "/ebooks/2.jpg",
    link: "https://undipro.com/pembayaran/ebook-dummy"
  },
  {
    id: 3,
    judul: "Produktif Tanpa Stress",
    deskripsi: "Rahasia meningkatkan produktivitas tanpa rasa terbebani.",
    gambar: "/ebooks/3.jpg",
    link: "https://undipro.com/pembayaran/ebook-dummy"
  },
  {
    id: 4,
    judul: "Marketing Instagram Pemula",
    deskripsi: "Strategi efektif memasarkan produk lewat Instagram.",
    gambar: "/ebooks/4.jpg",
    link: "https://undipro.com/pembayaran/ebook-dummy"
  },
  {
    id: 5,
    judul: "Membaca Peluang Usaha",
    deskripsi: "Cara jitu menemukan peluang usaha yang menjanjikan.",
    gambar: "/ebooks/5.jpg",
    link: "https://undipro.com/pembayaran/ebook-dummy"
  },
  {
    id: 6,
    judul: "Motivasi Pagi Hari",
    deskripsi: "Bangkitkan semangat setiap hari dengan inspirasi pagi.",
    gambar: "/ebooks/6.jpg",
    link: "https://undipro.com/pembayaran/ebook-dummy"
  },
  {
    id: 7,
    judul: "Tips Karier Profesional",
    deskripsi: "Panduan sukses membangun karier di era modern.",
    gambar: "/ebooks/7.jpg",
    link: "https://undipro.com/pembayaran/ebook-dummy"
  },
  {
    id: 8,
    judul: "Rahasia Jualan Laris",
    deskripsi: "Teknik praktis meningkatkan penjualan produk apapun.",
    gambar: "/ebooks/8.jpg",
    link: "https://undipro.com/pembayaran/ebook-dummy"
  },
  {
    id: 9,
    judul: "Kunci Menjadi Disiplin",
    deskripsi: "Bangun kebiasaan disiplin untuk hasil luar biasa.",
    gambar: "/ebooks/9.jpg",
    link: "https://undipro.com/pembayaran/ebook-dummy"
  },
  {
    id: 10,
    judul: "Belajar Desain Canva",
    deskripsi: "Panduan desain grafis mudah dan cepat pakai Canva.",
    gambar: "/ebooks/10.jpg",
    link: "https://undipro.com/pembayaran/ebook-dummy"
  },
]

export default function HalamanEbook() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-yellow-500">Daftar E-Book</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {daftarEbook.map((ebook) => (
          <div key={ebook.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <Image
              src={ebook.gambar}
              alt={ebook.judul}
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-yellow-600 mb-2">{ebook.judul}</h2>
              <p className="text-sm text-gray-700 flex-grow">{ebook.deskripsi}</p>
              <p className="text-xs text-gray-400 mt-2">Harga: Rp49.000 • Bonus 2 Kupon Undian</p>
              <a
                href={ebook.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-center px-4 py-2 rounded"
              >
                Beli Sekarang
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
