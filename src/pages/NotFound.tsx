import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 font-gaming text-cs2-red">404</h1>
        <h2 className="text-2xl mb-6 font-bold">Страница не найдена</h2>
        <p className="mb-8 text-gray-400">
          Кажется, вы попали в зону без респауна. Страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Link to="/">
          <Button className="bg-cs2-blue hover:bg-cs2-blue/80">
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;