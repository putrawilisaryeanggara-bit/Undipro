export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Metode tidak diizinkan' });
  }

  try {
    const body = req.body;

    console.log('🔔 Callback dari Tripay diterima:', body);

    return res.status(200).json({ success: true, message: 'Callback diterima' });
  } catch (error) {
    console.error('❌ Error pada callback:', error);
    return res.status(500).json({ success: false, message: 'Kesalahan server' });
  }
}
