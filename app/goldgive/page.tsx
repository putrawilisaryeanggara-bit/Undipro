
'use client'

import Image from 'next/image'

export default function GoldGivePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#111] to-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4 text-center">🎁 GOLD GIVE 2025 🎁</h1>

        <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg my-6">
          <Image
            src="/images/honda-beat-gold.png"
            alt="Hadiah Honda Beat 2025"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>

        <p className="text-lg mb-6 text-center">
          Raih kesempatan memenangkan <span className="text-yellow-400 font-bold">1 Unit Honda Beat 2025</span> dari UndiPro!
        </p>

        <div className="bg-[#1a1a1a] rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2">📆 Periode Undian</h2>
          <p>1 Juli 2025 – 31 Desember 2025</p>
        </div>

        <div className="bg-[#1a1a1a] rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🏆 Syarat Menang</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Menjadi <strong>member aktif</strong> UndiPro</li>
            <li>Memiliki <strong>minimal 99 referral</strong></li>
            <li>Referral terbanyak hingga 31 Desember 2025</li>
          </ul>
        </div>

        <div className="bg-[#1a1a1a] rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🎟️ Dapatkan Kupon Setiap Pembelian</h2>
          <p>Setiap pembelian e-book seharga Rp49.000, kamu akan mendapat <strong>2 kupon undian</strong>.</p>
        </div>

        <div className="text-center mt-10">
          <a
            href="/ebook"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full text-xl transition"
          >
            Beli E-Book & Ikut Sekarang
          </a>
        </div>
      </div>
    </main>
  )
}
