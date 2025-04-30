import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import SkinCard from "@/components/SkinCard";
import DonateSection from "@/components/DonateSection";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Примеры популярных скинов для отображения на главной странице
  const featuredSkins = [
    {
      id: "1",
      name: "Азимов",
      weapon: "AWP",
      imageUrl: "https://images.unsplash.com/photo-1608354580875-30bd4168b3c5?auto=format&fit=crop&q=80&w=500",
      price: 129.99,
      rarity: "legendary" as const
    },
    {
      id: "2",
      name: "Волны",
      weapon: "AK-47",
      imageUrl: "https://images.unsplash.com/photo-1561347981-969c80cf4463?auto=format&fit=crop&q=80&w=500",
      price: 89.99,
      rarity: "mythical" as const,
      discount: 15
    },
    {
      id: "3",
      name: "Неонуар",
      weapon: "M4A4",
      imageUrl: "https://images.unsplash.com/photo-1590422749897-47be49f0ff61?auto=format&fit=crop&q=80&w=500",
      price: 69.99,
      rarity: "rare" as const
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-28 pb-16 px-4 md:px-0">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-gaming bg-clip-text text-transparent bg-gradient-to-r from-cs2-blue via-cs2-yellow to-cs2-red">
            CS2 МАРКЕТ
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Эксклюзивные скины, низкие цены и мгновенная доставка для твоей победы в CS2!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cs2-blue to-blue-600 hover:from-cs2-blue/90 hover:to-blue-600/90 animate-glow"
            >
              Начать покупки
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cs2-blue text-cs2-blue hover:bg-cs2-blue/10"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-gaming">Почему выбирают нас?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/30 p-6 rounded-lg border border-cs2-blue/20 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cs2-blue/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-cs2-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Премиум скины</h3>
              <p className="text-gray-400">Эксклюзивная коллекция редких и легендарных скинов для вашего арсенала.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg border border-cs2-blue/20 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cs2-blue/10 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-cs2-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Безопасность</h3>
              <p className="text-gray-400">Гарантированная безопасность всех транзакций и мгновенная доставка на ваш аккаунт.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg border border-cs2-blue/20 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cs2-blue/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-cs2-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">VIP привилегии</h3>
              <p className="text-gray-400">Получите доступ к уникальным возможностям и преимуществам с нашими донат-пакетами.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skins */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold font-gaming">Популярные скины</h2>
            <Link to="/skins" className="flex items-center text-cs2-blue hover:text-cs2-yellow transition-colors">
              Смотреть все <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSkins.map(skin => (
              <SkinCard key={skin.id} {...skin} />
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-16 px-4 md:px-0 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 font-gaming">Донат-пакеты</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Поддержите проект и получите эксклюзивные преимущества с нашими VIP-пакетами.
          </p>
          <DonateSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 CS2 МАРКЕТ. Все права защищены.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="hover:text-white mr-4">Условия использования</a>
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;