// app/ebook/page.tsx

import Image from "next/image";

const ebooks = [
  {
    id: 1,
    title: "Rahasia Sukses Finansial",
    description: "Strategi sederhana membangun masa depan keuangan yang lebih baik.",
    image: "/images/ebook1.jpg",
  },
  {
    id: 2,
    title: "Bisnis Online dari Nol",
    description: "Panduan praktis memulai bisnis online meski tanpa modal besar.",
    image: "/images/ebook2.jpg",
  },
  {
    id: 3,
    title: "Produktivitas Tanpa Stres",
    description: "Cara mengatur waktu dan energi agar hidup lebih tenang dan produktif.",
    image: "/images/ebook3.jpg",
  },
  {
    id: 4,
    title: "Membuka Usaha Kuliner",
    description: "Langkah-langkah mudah memulai bisnis makanan kekinian.",
    image: "/images/ebook4.jpg",
  },
  {
    id: 5,
    title: "Desain Interior Hemat",
    description: "Tips mendekorasi rumah tanpa harus menguras tabungan.",
    image: "/images/ebook5.jpg",
  },
  {
    id: 6,
    title: "Belajar Investasi untuk Pemula",
    description: "Cara aman mulai investasi dengan modal kecil.",
    image: "/images/ebook6.jpg",
  },
  {
    id: 7,
    title: "Gaya Hidup Sehat Modern",
    description: "Panduan hidup sehat di tengah kesibukan zaman sekarang.",
    image: "/images/ebook7.jpg",
  },
  {
    id: 8,
    title: "Mengelola Keuangan Rumah Tangga",
    description: "Cara cerdas mengatur pengeluaran bulanan keluarga.",
    image: "/images/ebook8.jpg",
  },
  {
    id: 9,
    title: "Tips Sukses Karier & Kerja",
    description: "Kiat membangun reputasi profesional dan meraih promosi.",
    image: "/images/ebook9.jpg",
  },
  {
    id: 10,
    title: "Menjadi Freelancer Sukses",
    description: "Langkah-langkah mendapatkan klien dan penghasilan tetap dari freelance.",
    image: "/images/ebook10.jpg",
  },
];

export default function EbookPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-extrabold text-center text-yellow-600 mb-8">
        Daftar E-Book UndiPro
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {ebooks.map((ebook) => (
          <div
            key={ebook.id}
            className="border border-gray-200 rounded-2xl p-5 shadow-md bg-white hover:shadow-xl transition"
          >
            <Image
              src={ebook.image}
              alt={ebook.title}
              width={500}
              height={300}
              className="rounded-xl mb-4 w-full h-auto object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">{ebook.title}</h2>
            <p className="text-sm text-gray-700 mb-3">{ebook.description}</p>
            <p className="font-bold text-black mb-3">Rp49.000 + 2 Kupon Undian</p>
            <a
              href="https://tripay.co.id/pembayaran"
              className="inline-block bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
            >
              Beli Sekarang
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
