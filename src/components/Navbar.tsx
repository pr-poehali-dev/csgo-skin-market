import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Заглушка для проверки аутентификации пользователя
  const isAuthenticated = false;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black/80 to-black/80 backdrop-blur-md border-b border-cs2-blue/20 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-gaming bg-clip-text text-transparent bg-gradient-to-r from-cs2-blue to-cs2-yellow">
            CS2 AIM
          </span>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-cs2-blue transition-colors">
            Главная
          </Link>
          <Link to="/skins" className="text-white hover:text-cs2-blue transition-colors">
            Скины
          </Link>
          <Link to="/donate" className="text-white hover:text-cs2-blue transition-colors">
            Донат
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-cs2-gray/60 border border-cs2-blue/30"></div>
              <span className="text-white">Игрок</span>
            </div>
          ) : (
            <Button className="bg-[#1b2838] hover:bg-[#2a475e] text-white flex items-center space-x-2">
              <LogIn className="w-5 h-5" />
              <span>Войти через Steam</span>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;