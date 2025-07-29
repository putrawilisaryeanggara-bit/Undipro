'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const ebooks = [
  {
    id: 1,
    title: 'Rahasia Sukses Finansial',
    description: 'Pelajari cara mengelola keuangan dan membangun kebebasan finansial.',
    image: '/ebooks/1.jpg',
  },
  {
    id: 2,
    title: 'Bisnis Online dari Nol',
    description: 'Panduan lengkap memulai bisnis online tanpa modal besar.',
    image: '/ebooks/2.jpg',
  },
  {
    id: 3,
    title: 'Produktif Tanpa Stress',
    description: 'Rahasia menjaga produktivitas dan keseimbangan hidup.',
    image: '/ebooks/3.jpg',
  },
  {
    id: 4,
    title: 'Marketing Instagram Pemula',
    description: 'Strategi jitu jualan laris lewat Instagram.',
    image: '/ebooks/4.jpg',
  },
  {
    id: 5,
    title: 'Membaca Peluang Usaha',
    description: 'Cara jitu melihat dan menangkap peluang di sekitar kita.',
    image: '/ebooks/5.jpg',
  },
  {
    id: 6,
    title: 'Motivasi Pagi Hari',
    description: 'Bangun semangat setiap pagi dan raih hari terbaikmu.',
    image: '/ebooks/6.jpg',
  },
  {
    id: 7,
    title: 'Tips Karier Profesional',
    description: 'Naik level dalam pekerjaan dengan tips praktis.',
    image: '/ebooks/7.jpg',
  },
  {
    id: 8,
    title: 'Rahasia Jualan Laris',
    description: 'Teknik closing dan promosi yang terbukti berhasil.',
    image: '/ebooks/8.jpg',
  },
  {
    id: 9,
    title: 'Kunci Menjadi Disiplin',
    description: 'Bangun disiplin kuat dan capai target hidup.',
    image: '/ebooks/9.jpg',
  },
  {
    id: 10,
    title: 'Belajar Desain Canva',
    description: 'Buat desain keren untuk konten dan bisnis.',
    image: '/ebooks/10.jpg',
  },
]

export default function EbookPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {ebooks.map((ebook) => (
        <Card key={ebook.id} className="shadow-xl rounded-2xl overflow-hidden">
          <Image
            src={ebook.image}
            alt={ebook.title}
            width={500}
            height={300}
            className="w-full h-64 object-cover"
          />
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-bold text-gold">{ebook.title}</h2>
            <p className="text-sm text-muted-foreground">{ebook.description}</p>
            <p className="text-sm font-semibold text-foreground">Harga: Rp49.000</p>
            <p className="text-xs text-muted-foreground">Bonus: 2 kupon undian</p>
            <Button asChild>
              <a
                href={`https://undipro.com/payment/ebook-${ebook.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Beli Sekarang
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
