'use client'

import Image from 'next/image'
import Link from 'next/link'

const ebooks = [
  {
    id: 1,
    title: 'Rahasia Sukses Bisnis Online',
    description: 'Panduan memulai dan mengembangkan bisnis online dari nol.',
    image: '/gambar/ebook1.jpg',
  },
  {
    id: 2,
    title: 'Tips Hidup Hemat',
    description: 'Strategi praktis mengatur keuangan harian dan bulanan.',
    image: '/gambar/ebook2.jpg',
  },
  {
    id: 3,
    title: 'Cara Mudah Menjadi Freelancer',
    description: 'Langkah-langkah menjadi freelancer dan mendapatkan klien luar negeri.',
    image: '/gambar/ebook3.jpg',
  },
  {
    id: 4,
    title: 'Jago Public Speaking',
    description: 'Teknik berbicara percaya diri di depan umum.',
    image: '/gambar/ebook4.jpg',
  },
  {
    id: 5,
    title: 'Rahasia Diet Sehat',
    description: 'Tips menurunkan berat badan tanpa menyiksa diri.',
    image: '/gambar/ebook5.jpg',
  },
  {
    id: 6,
    title: 'Belajar Investasi untuk Pemula',
    description: 'Dasar-dasar investasi saham, reksa dana, dan lainnya.',
    image: '/gambar/ebook6.jpg',
  },
  {
    id: 7,
    title: 'Mengatur Waktu Efektif',
    description: 'Cara mengatur jadwal harian untuk hidup lebih produktif.',
    image: '/gambar/ebook7.jpg',
  },
  {
    id: 8,
    title: 'Langkah Awal Jadi Content Creator',
    description: 'Tips bikin konten YouTube, TikTok, dan Instagram.',
    image: '/gambar/ebook8.jpg',
  },
  {
    id: 9,
    title: 'Membangun Mindset Positif',
    description: 'Cara berpikir positif menghadapi tantangan hidup.',
    image: '/gambar/ebook9.jpg',
  },
  {
    id: 10,
    title: 'Seni Mendidik Anak dengan Cinta',
    description: 'Panduan membentuk karakter anak sejak dini.',
    image: '/gambar/ebook10.jpg',
  },
]

export default function EbookPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-yellow-500">Daftar E-Book</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ebooks.map((ebook) => (
          <div key={ebook.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <Image
              src={ebook.image}
              alt={ebook.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{ebook.title}</h2>
              <p className="text-gray-600 mb-4">{ebook.description}</p>
              <Link
                href={`https://tripay.co.id/checkout/pilih_pembayaran?amount=49000&name=${encodeURIComponent(
                  ebook.title
                )}&merchant_ref=ebook${ebook.id}`}
                target="_blank"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl text-center"
              >
                Beli Sekarang – Rp49.000
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
