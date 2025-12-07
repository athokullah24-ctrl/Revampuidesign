import { Phone, FileText, ClipboardList, Car, Users, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import imgImage1 from "figma:asset/06d3fed0680ba63af84f4f85655f0b14a7277c0c.png";
import imgImage3 from "figma:asset/0623419cd01a5c15e0e84d08d11664552479cc20.png";
import imgImage4 from "figma:asset/de1687491922bdd77fd7f6dbe8355cf63c016ae1.png";
import imgImage5 from "figma:asset/00a3014b428e84fe7169e060e4266160f19eab41.png";
import imgImage6 from "figma:asset/d682886c3b0e971441a484c0599c286f5bdaac78.png";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#4e83f6] shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={imgImage1} alt="Logo" className="h-20 w-auto object-contain" />
            <div>
              <h1 className="text-[#1e1e1e]">Kepolisian</h1>
              <p className="text-[#1e1e1e]">Resor Nganjuk</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-xl flex items-center gap-3 hover:bg-white/20 transition-all duration-300 cursor-pointer">
            <Phone className="text-white" size={20} />
            <span className="text-white">Darurat : 110</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center justify-center gap-8 py-4">
            <motion.li 
              className="cursor-pointer hover:text-[#4e83f6] transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Beranda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4e83f6] transition-all duration-300 group-hover:w-full" />
            </motion.li>
            <motion.li 
              className="cursor-pointer hover:text-[#4e83f6] transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tentang Kami
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4e83f6] transition-all duration-300 group-hover:w-full" />
            </motion.li>
            <motion.li 
              className="cursor-pointer hover:text-[#4e83f6] transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Layanan
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4e83f6] transition-all duration-300 group-hover:w-full" />
            </motion.li>
            <motion.li 
              className="cursor-pointer hover:text-[#4e83f6] transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Berita
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4e83f6] transition-all duration-300 group-hover:w-full" />
            </motion.li>
            <motion.li 
              className="cursor-pointer hover:text-[#4e83f6] transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Program Komunitas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4e83f6] transition-all duration-300 group-hover:w-full" />
            </motion.li>
            <motion.li 
              className="cursor-pointer hover:text-[#4e83f6] transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Statistik Kejahatan
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4e83f6] transition-all duration-300 group-hover:w-full" />
            </motion.li>
            <motion.li 
              className="cursor-pointer hover:text-[#4e83f6] transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kontak
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4e83f6] transition-all duration-300 group-hover:w-full" />
            </motion.li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={imgImage3} 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h2 className="text-white mb-6">Selamat Datang di Polres Nganjuk</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Keamanan Anda adalah prioritas kami. Akses layanan kepolisian, laporkan insiden, dan tetap terinformasi.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center mb-12">Layanan Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<FileText size={40} className="text-gray-600" />}
              title="Ajukan Laporan"
              description="Kirim laporan kepolisian secara online untuk kejadian non-darurat."
            />
            <ServiceCard
              icon={<ClipboardList size={40} className="text-gray-600" />}
              title="Permohonan Izin"
              description="Ajukan surat keterangan kepolisian dan berbagai jenis izin."
            />
            <ServiceCard
              icon={<Car size={40} className="text-gray-600" />}
              title="Layanan Lalu Lintas"
              description="Cek pelanggaran, bayar tilang, dan akses informasi lalu lintas."
            />
            <ServiceCard
              icon={<Users size={40} className="text-gray-600" />}
              title="Program Komunitas"
              description="Ikuti program keselamatan dan inisiatif masyarakat."
            />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2>Berita Terbaru</h2>
            <motion.a 
              href="#" 
              className="text-[#4e83f6] hover:underline inline-flex items-center gap-1 group"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              View All 
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured News */}
            <div className="lg:col-span-1">
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src={imgImage4} 
                    alt="Featured news" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">
                    Unggulan
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-2">15 Maret 2025</p>
                  <h3 className="mb-3 group-hover:text-[#4e83f6] transition-colors">Inisiatif Baru Keamanan Komunitas Diluncurkan di Nganjuk</h3>
                  <p className="text-gray-600 mb-4">
                    Departemen Kepolisian Nganjuk mengumumkan program keamanan masyarakat yang komprehensif untuk mengurangi kejahatan dan meningkatkan kesadaran publik...
                  </p>
                  <motion.a 
                    href="#" 
                    className="text-[#4e83f6] inline-flex items-center gap-1 group/link"
                    whileHover={{ x: 3 }}
                  >
                    Baca Selengkapnya 
                    <span className="transition-transform group-hover/link:translate-x-1">→</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* News List */}
            <div className="lg:col-span-1 space-y-4">
              <NewsCard
                date="14 Maret 2025"
                title="Hasil Kampanye Keselamatan Lalu Lintas Diumumkan"
                image={imgImage5}
              />
              <NewsCard
                date="11 Maret 2025"
                title="Departemen Kepolisian Mendapat Peningkatan Teknologi"
                image={imgImage6}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2>Pemberitahuan</h2>
            <motion.a 
              href="#" 
              className="text-[#4e83f6] hover:underline inline-flex items-center gap-1 group"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              View All 
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Important Announcement - Full Width */}
            <div className="lg:col-span-2">
              <div className="bg-black text-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3">PENGUMUMAN PENTING</h3>
                    <p className="mb-2">
                      Jam layanan diperpanjang untuk proses perizinan selama Maret 2025.
                    </p>
                    <p className="mb-4">Jam baru: Senin–Jumat pukul 08.00 – 18.00.</p>
                    <a href="#" className="hover:underline">Pelajari Lebih Lanjut →</a>
                  </div>
                </div>
              </div>
            </div>

            <AnnouncementCard
              date="13 Maret 2025"
              title="Pemeliharaan Sistem Pelaporan Online"
              description="Sistem pelaporan online akan menjalani pemeliharaan terjadwal pada 18 Maret 2025 dari pukul 01.00 sampai 05.00."
            />
            <AnnouncementCard
              date="12 Maret 2025"
              title="Konsultasi Publik Manajemen Lalu Lintas"
              description="Mari bergabung dalam pertemuan konsultasi publik pada 25 Maret 2025 di Balai Kota untuk membahas usulan baru manajemen lalu lintas."
            />
            <AnnouncementCard
              date="11 Maret 2025"
              title="Rekrutmen Polisi 2025"
              description="Pendaftaran untuk posisi petugas kepolisian kini dibuka. Batas akhir: 15 April 2025."
            />
            <AnnouncementCard
              date="10 Maret 2025"
              title="Laporan Statistik Kejahatan Triwulan I 2025"
              description="Laporan statistik kejahatan triwulanan kini tersedia untuk ditinjau oleh publik."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171717] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="mb-4">Tentang Kami</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Departemen Kepolisian Nganjuk berkomitmen untuk melayani dan melindungi masyarakat kami dengan integritas dan profesionalisme.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4">Tautan Cepat</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Departemen</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tim Pimpinan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karier</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portal Transparansi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4">Layanan</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Ajukan Laporan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Permohonan Izin</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Layanan Lalu Lintas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Barang Hilang & Temuan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Program Komunitas</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4">Informasi Kontak</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <p>Jl. Markas Kepolisian<br />Nganjuk, Jawa Timur 64418</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="flex-shrink-0" />
                  <p>Darurat: 110</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="flex-shrink-0" />
                  <p>Non-Darurat: (0358) 321-XXX</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="flex-shrink-0" />
                  <p>info@nganjukpolice.go.id</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Departemen Kepolisian Nganjuk. Seluruh hak cipta dilindungi.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Ketentuan Layanan</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Aksesibilitas</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 cursor-pointer group"
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#4e83f6] transition-colors duration-300"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <div className="group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </motion.div>
      <h3 className="mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
      <motion.a 
        href="#" 
        className="text-[#4e83f6] inline-flex items-center gap-1 group/link"
        whileHover={{ x: 3 }}
      >
        Akses Layanan 
        <span className="transition-transform group-hover/link:translate-x-1">→</span>
      </motion.a>
    </motion.div>
  );
}

function NewsCard({ date, title, image }: { date: string; title: string; image: string }) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all flex gap-4 p-4 cursor-pointer group"
      whileHover={{ x: 4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <motion.img 
        src={image} 
        alt={title}
        className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex-1 min-w-0">
        <p className="text-gray-400 text-sm mb-2">{date}</p>
        <h4 className="mb-3 line-clamp-2 group-hover:text-[#4e83f6] transition-colors">{title}</h4>
        <motion.a 
          href="#" 
          className="text-[#4e83f6] text-sm inline-flex items-center gap-1 group/link"
          whileHover={{ x: 3 }}
        >
          Baca Selengkapnya 
          <span className="transition-transform group-hover/link:translate-x-1">→</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

function AnnouncementCard({ date, title, description }: { date: string; title: string; description: string }) {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 cursor-pointer group"
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-gray-400 text-sm mb-2">{date}</p>
      <h3 className="mb-3 group-hover:text-[#4e83f6] transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <motion.a 
        href="#" 
        className="text-[#4e83f6] text-sm inline-flex items-center gap-1 group/link"
        whileHover={{ x: 3 }}
      >
        Baca Selengkapnya 
        <span className="transition-transform group-hover/link:translate-x-1">→</span>
      </motion.a>
    </motion.div>
  );
}