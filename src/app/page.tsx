'use client';

import { useState, useEffect } from 'react';
import { Heart, Star, Phone, MapPin, Clock, Baby, Shirt, Waves, Menu, X, Eye, Plus, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('boutique');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Baby className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-2.5 h-2.5 text-white fill-current" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Elisa Bebek
                </h1>
                <p className="text-xs text-gray-500 font-medium">Boutique & Spa</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#boutique" className="text-gray-600 hover:text-pink-500 transition-colors">Boutique</a>
              <a href="#spa" className="text-gray-600 hover:text-pink-500 transition-colors">Spa Merkezi</a>
              <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">Hakkımızda</a>
              <a href="#contact" className="text-gray-600 hover:text-pink-500 transition-colors">İletişim</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-pink-500 hidden sm:block" />
              <span className="text-sm font-medium text-gray-700 hidden sm:block">+90 555 123 45 67</span>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-pink-500"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-4 py-2 space-y-1">
            <a
              href="#boutique"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Boutique
            </a>
            <a
              href="#spa"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Spa Merkezi
        </a>
        <a
              href="#about"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hakkımızda
        </a>
        <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              İletişim
            </a>
            <div className="flex items-center px-3 py-2 text-sm text-gray-700">
              <Phone className="w-4 h-4 text-pink-500 mr-2" />
              +90 555 123 45 67
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Elisa Bebek
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
              Bebekleriniz için en kaliteli giyim ve spa deneyimi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Ürünleri Keşfet
              </button>
              <button className="border-2 border-pink-500 text-pink-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300">
                Spa Rezervasyonu
              </button>
              <a 
                href="https://www.instagram.com/elisababyboutique_babyspa?igsh=dGdqdWR0b241N3I2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram'da Takip Et
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12 px-4">
            <div className="bg-white rounded-full p-2 shadow-lg w-full max-w-md">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveTab('boutique')}
                  className={`px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                    activeTab === 'boutique'
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-pink-500'
                  }`}
                >
                  <Shirt className="w-4 h-4 sm:w-5 sm:h-5 inline mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Bebek Giyim</span>
                  <span className="sm:hidden">Giyim</span>
                </button>
                <button
                  onClick={() => setActiveTab('spa')}
                  className={`px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                    activeTab === 'spa'
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-pink-500'
                  }`}
                >
                  <Waves className="w-4 h-4 sm:w-5 sm:h-5 inline mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Spa Merkezi</span>
                  <span className="sm:hidden">Spa</span>
                </button>
              </div>
            </div>
          </div>

          {/* Boutique Content */}
          {activeTab === 'boutique' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: "Bebek Kıyafetleri",
                  description: "0-24 ay arası bebekler için özel tasarım kıyafetler",
                  image: "👶",
                  price: "₺89 - ₺299",
                  features: ["%100 Organik pamuk", "Hipoalerjenik", "Kolay yıkanabilir", "Yumuşak dokulu"],
                  details: "Elisa Baby Boutique'te bebeklerinizin cildine zarar vermeyen %100 organik pamuk kumaşlardan üretilmiş, yumuşak ve rahat kıyafetler. Hipoalerjenik özelliği ile hassas ciltler için ideal. Kolay yıkanabilir ve uzun ömürlü tasarım.",
                  sizes: ["0-3 ay", "3-6 ay", "6-12 ay", "12-18 ay", "18-24 ay"],
                  colors: ["Pembe", "Mavi", "Beyaz", "Sarı", "Yeşil", "Krem"]
                },
                {
                  id: 2,
                  title: "Bebek Aksesuarları",
                  description: "Şapka, eldiven, çorap ve diğer aksesuarlar",
                  image: "🧦",
                  price: "₺29 - ₺89",
                  features: ["El yapımı", "Güvenli malzemeler", "Şık tasarım"],
                  details: "El yapımı bebek aksesuarları ile bebeğinizin tarzını tamamlayın. Güvenli malzemeler kullanılarak üretilmiş, şık ve pratik aksesuarlar.",
                  sizes: ["Yenidoğan", "0-6 ay", "6-12 ay", "12-18 ay"],
                  colors: ["Çok renkli", "Pastel tonlar", "Neon renkler"]
                },
                {
                  id: 3,
                  title: "Özel Gün Kıyafetleri",
                  description: "Düğün, doğum günü ve özel günler için",
                  image: "👗",
                  price: "₺199 - ₺599",
                  features: ["Özel tasarım", "Lüks kumaşlar", "Kişiselleştirme"],
                  details: "Özel günleriniz için tasarlanmış lüks bebek kıyafetleri. Kişiselleştirme seçenekleri ile bebeğinizin özel gününü unutulmaz kılın.",
                  sizes: ["0-6 ay", "6-12 ay", "12-18 ay", "18-24 ay"],
                  colors: ["Altın", "Gümüş", "Beyaz", "Krem", "Pastel"]
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <div className="text-6xl mb-4 text-center">{item.image}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="text-lg font-bold text-pink-500 mb-4">{item.price}</div>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-pink-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setSelectedProduct(item);
                        setShowModal(true);
                      }}
                      className="flex-1 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Detay
                    </button>
                    <button className="flex-1 border border-pink-500 text-pink-500 px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition-colors flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Sipariş Ver
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Spa Content */}
          {activeTab === 'spa' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Bebek Yüzme Havuzu",
                  description: "Özel tasarım bebek havuzu ile güvenli yüzme deneyimi",
                  image: "🏊‍♀️",
                  features: ["32°C sıcak su", "Hijyenik ortam", "Uzman eğitmenler", "Güvenlik ekipmanları"]
                },
                {
                  title: "Bebek Masajı",
                  description: "Profesyonel masaj terapisi ile bebeğinizin rahatlaması",
                  image: "💆‍♀️",
                  features: ["Sertifikalı terapistler", "Doğal bebek yağları", "Rahatlatıcı müzik", "Kişisel bakım"]
                },
                {
                  title: "Bebek Bakım Paketleri",
                  description: "Kapsamlı bakım ve eğlence paketleri",
                  image: "✨",
                  features: ["Tam bakım hizmeti", "Oyun ve eğlence", "Fotoğraf çekimi", "Anı paketi"]
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <div className="text-6xl mb-4 text-center">{item.image}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Heart className="w-4 h-4 text-pink-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Rezervasyon Yap
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Fiyat Listesi</h2>
            <p className="text-xl text-gray-600">Bebekleriniz için en uygun fiyatlarla kaliteli hizmetler</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Boutique Pricing */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shirt className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Bebek Giyim</h3>
                <p className="text-gray-600">Kaliteli bebek kıyafetleri</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-pink-200">
                  <span className="text-gray-700">Bebek Kıyafetleri</span>
                  <span className="font-bold text-pink-600">₺89 - ₺299</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-pink-200">
                  <span className="text-gray-700">Aksesuarlar</span>
                  <span className="font-bold text-pink-600">₺29 - ₺89</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-pink-200">
                  <span className="text-gray-700">Özel Gün Kıyafetleri</span>
                  <span className="font-bold text-pink-600">₺199 - ₺599</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Kişiselleştirme</span>
                  <span className="font-bold text-pink-600">₺50 - ₺150</span>
                </div>
              </div>
            </div>

            {/* Spa Pricing */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Spa Hizmetleri</h3>
                <p className="text-gray-600">Bebek spa ve bakım hizmetleri</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="text-gray-700">Yüzme Havuzu (30 dk)</span>
                  <span className="font-bold text-blue-600">₺150</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="text-gray-700">Bebek Masajı (45 dk)</span>
                  <span className="font-bold text-blue-600">₺200</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="text-gray-700">Bakım Paketi (60 dk)</span>
                  <span className="font-bold text-blue-600">₺300</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Özel Paket (90 dk)</span>
                  <span className="font-bold text-blue-600">₺450</span>
                </div>
              </div>
            </div>

            {/* Package Pricing */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Paket Fiyatları</h3>
                <p className="text-gray-600">Kapsamlı bakım paketleri</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-purple-200">
                  <span className="text-gray-700">Aylık Paket (4 seans)</span>
                  <span className="font-bold text-purple-600">₺1,200</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-purple-200">
                  <span className="text-gray-700">3 Aylık Paket (12 seans)</span>
                  <span className="font-bold text-purple-600">₺3,200</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-purple-200">
                  <span className="text-gray-700">6 Aylık Paket (24 seans)</span>
                  <span className="font-bold text-purple-600">₺5,500</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">VIP Paket (Sınırsız)</span>
                  <span className="font-bold text-purple-600">₺8,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hakkımızda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elisa Bebek Boutique & Spa Merkezi olarak, bebeklerinizin sağlığı ve mutluluğu için en kaliteli hizmetleri sunuyoruz.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Baby className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Uzman Ekip</h3>
              <p className="text-gray-600">Bebek bakımı konusunda uzman ve deneyimli ekibimizle hizmet veriyoruz.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Güvenli Ortam</h3>
              <p className="text-gray-600">Hijyenik ve güvenli ortamımızda bebekleriniz güvende.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Kaliteli Hizmet</h3>
              <p className="text-gray-600">En kaliteli malzemeler ve hizmetlerle bebeklerinizi mutlu ediyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Müşteri Yorumları</h2>
            <p className="text-xl text-gray-600">Bebeklerimiz için en iyisini düşünen ailelerin deneyimleri</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ayşe Kaya",
                baby: "Elif (8 ay)",
                rating: 5,
                comment: "Elisa Baby Boutique'te aldığımız kıyafetler gerçekten çok kaliteli. Organik pamuk olması çok önemli, bebeğimin cildine hiç zarar vermiyor. Kesinlikle tavsiye ederim!",
                service: "Bebek Giyim"
              },
              {
                name: "Mehmet Özkan",
                baby: "Arda (12 ay)",
                rating: 5,
                comment: "Spa hizmetleri harika! Bebeğim yüzme havuzunda çok mutlu oluyor. Uzman ekibin ilgisi ve hijyen konusundaki titizlikleri mükemmel. Her hafta geliyoruz.",
                service: "Spa Merkezi"
              },
              {
                name: "Zeynep Demir",
                baby: "Mira (6 ay)",
                rating: 5,
                comment: "Masaj terapisi bebeğimin uyku düzenini çok düzeltti. Sertifikalı terapistler gerçekten çok profesyonel. Bebeğim çok rahatlıyor.",
                service: "Bebek Masajı"
              },
              {
                name: "Can Yılmaz",
                baby: "Efe (15 ay)",
                rating: 5,
                comment: "Özel gün kıyafetleri için geldik. Sonuç muhteşemdi! Bebeğim düğünde çok şık görünüyordu. Kişiselleştirme seçenekleri de var.",
                service: "Özel Gün Kıyafetleri"
              },
              {
                name: "Selin Aydın",
                baby: "Lara (4 ay)",
                rating: 5,
                comment: "Aksesuarlar çok şirin ve kaliteli. El yapımı olması çok güzel. Bebeğimin tarzını tamamlıyor. Fiyatlar da çok uygun.",
                service: "Bebek Aksesuarları"
              },
              {
                name: "Burak Çelik",
                baby: "Kaan (18 ay)",
                rating: 5,
                comment: "Bakım paketleri gerçekten kapsamlı. Bebeğim hem eğleniyor hem de öğreniyor. Fotoğraf çekimi de dahil, anılarımız çok güzel oldu.",
                service: "Bakım Paketleri"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.baby}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                
                <div className="text-sm text-pink-500 font-medium">
                  {testimonial.service}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Rezervasyon Yapın</h2>
            <p className="text-xl text-gray-600">Spa hizmetlerimiz için randevu alın</p>
          </div>
          
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Telefon numaranızı girin"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bebek Yaşı</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option>0-3 ay</option>
                    <option>3-6 ay</option>
                    <option>6-12 ay</option>
                    <option>12-18 ay</option>
                    <option>18-24 ay</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hizmet Türü</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option>Bebek Yüzme Havuzu</option>
                    <option>Bebek Masajı</option>
                    <option>Bakım Paketi</option>
                    <option>Özel Paket</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tarih</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Saat</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                    <option>17:00</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Özel Notlar</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Bebek hakkında özel notlarınızı yazın..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Rezervasyon Yap
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">İletişim</h2>
            <p className="text-xl">Bize ulaşın ve randevu alın</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Adres</h3>
              <p>Merkez Mahallesi, Bebek Caddesi No:123<br />İstanbul, Türkiye</p>
            </div>
            <div className="text-center text-white">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Telefon</h3>
              <p>+90 555 123 45 67<br />+90 212 123 45 67</p>
            </div>
            <div className="text-center text-white">
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Çalışma Saatleri</h3>
              <p>Pazartesi - Cumartesi<br />09:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-800">{selectedProduct.title}</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="text-8xl text-center mb-6">{selectedProduct.image}</div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Açıklama</h4>
                  <p className="text-gray-600">{selectedProduct.details}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Fiyat</h4>
                  <p className="text-2xl font-bold text-pink-500">{selectedProduct.price}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Özellikler</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 text-pink-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Bedenler</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((size, idx) => (
                      <span key={idx} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Renkler</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.colors.map((color, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <button className="flex-1 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Sipariş Ver
                </button>
                <button className="flex-1 border border-pink-500 text-pink-500 px-6 py-3 rounded-lg hover:bg-pink-500 hover:text-white transition-colors flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Favorilere Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Baby className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="w-2.5 h-2.5 text-white fill-current" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Elisa Bebek</h3>
                  <p className="text-xs text-gray-300 font-medium">Boutique & Spa</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Bebekleriniz için en kaliteli giyim ve spa deneyimi sunuyoruz.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/elisababyboutique_babyspa?igsh=dGdqdWR0b241N3I2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2">
                <li><a href="#boutique" className="text-gray-300 hover:text-pink-400 transition-colors">Boutique</a></li>
                <li><a href="#spa" className="text-gray-300 hover:text-pink-400 transition-colors">Spa Merkezi</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors">Hakkımızda</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors">İletişim</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Hizmetlerimiz</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-300">Bebek Kıyafetleri</span></li>
                <li><span className="text-gray-300">Bebek Aksesuarları</span></li>
                <li><span className="text-gray-300">Yüzme Havuzu</span></li>
                <li><span className="text-gray-300">Bebek Masajı</span></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-pink-400" />
                  <span className="text-gray-300">+90 555 123 45 67</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-pink-400" />
                  <span className="text-gray-300">Merkez Mah. Bebek Cad. No:123</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-pink-400" />
                  <span className="text-gray-300">Pzt-Cmt: 09:00-18:00</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300 mb-2">&copy; 2024 Elisa Bebek Boutique & Spa Merkezi. Tüm hakları saklıdır.</p>
            <p className="text-gray-400 text-sm">
              Web tasarımı: <a href="https://bariscanyonel.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">Medika Barışcan Yönel</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
