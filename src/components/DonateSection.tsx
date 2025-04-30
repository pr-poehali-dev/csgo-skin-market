import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

interface DonateTierProps {
  title: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

const DonateTier = ({ title, price, features, recommended = false }: DonateTierProps) => (
  <Card className={`w-full border ${
    recommended 
      ? "border-cs2-yellow/50 bg-gradient-to-b from-cs2-yellow/10 to-black/40" 
      : "border-cs2-blue/20 bg-black/40"
  } backdrop-blur-sm transition-transform duration-300 hover:scale-105`}>
    {recommended && (
      <div className="absolute -top-3 left-0 right-0 flex justify-center">
        <div className="bg-cs2-yellow text-black px-3 py-1 rounded-full flex items-center text-sm font-bold">
          <Star className="w-4 h-4 mr-1" fill="black" /> Рекомендуемый
        </div>
      </div>
    )}
    <CardHeader className={`${recommended ? "pt-6" : ""}`}>
      <CardTitle className="text-xl font-bold text-center">{title}</CardTitle>
      <CardDescription className="text-center">
        <span className="text-2xl font-bold text-white">{price} ₽</span>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 mr-2 text-cs2-blue shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className={`w-full mt-6 ${
          recommended 
            ? "bg-cs2-yellow hover:bg-cs2-yellow/80 text-black" 
            : "bg-cs2-blue hover:bg-cs2-blue/80"
        }`}
      >
        Приобрести
      </Button>
    </CardContent>
  </Card>
);

const DonateSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
      <DonateTier
        title="Стартовый"
        price={199}
        features={[
          "VIP статус на 15 дней",
          "Доступ к базовым скинам",
          "Префикс [Игрок] в чате"
        ]}
      />
      <DonateTier
        title="Профессионал"
        price={499}
        features={[
          "VIP статус на 30 дней",
          "Доступ ко всем скинам",
          "Префикс [Про] в чате",
          "Скидка 10% на все покупки"
        ]}
        recommended
      />
      <DonateTier
        title="Легенда"
        price={999}
        features={[
          "VIP статус навсегда",
          "Доступ к эксклюзивным скинам",
          "Префикс [Легенда] в чате",
          "Скидка 20% на все покупки",
          "Приоритетный вход на сервера"
        ]}
      />
    </div>
  );
};

export default DonateSection;