import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type SkinRarity = "common" | "uncommon" | "rare" | "mythical" | "legendary" | "ancient";

export interface SkinProps {
  id: string;
  name: string;
  weapon: string;
  imageUrl: string;
  price: number;
  rarity: SkinRarity;
  discount?: number;
}

const rarityColors = {
  common: "bg-gray-500",
  uncommon: "bg-blue-500",
  rare: "bg-purple-500",
  mythical: "bg-pink-500",
  legendary: "bg-red-500",
  ancient: "bg-amber-500",
};

const SkinCard = ({ name, weapon, imageUrl, price, rarity, discount }: SkinProps) => {
  const rarityClass = rarityColors[rarity];
  const discountedPrice = discount ? price - (price * (discount / 100)) : price;
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:scale-105 bg-black/50 backdrop-blur-sm border border-cs2-blue/20">
      <div className={`h-1 ${rarityClass}`} />
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={`${weapon} | ${name}`} 
            className="w-full h-48 object-cover" 
          />
          {discount && (
            <Badge className="absolute top-2 right-2 bg-cs2-red font-bold">
              -{discount}%
            </Badge>
          )}
        </div>
        <div className="p-4">
          <p className="text-gray-400 text-sm">{weapon}</p>
          <h3 className="font-bold text-white text-lg">{name}</h3>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <div className="flex flex-col">
          {discount ? (
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 line-through text-sm">${price}</span>
              <span className="text-cs2-blue font-bold">${discountedPrice.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-cs2-blue font-bold">${price.toFixed(2)}</span>
          )}
        </div>
        <Button size="sm" className="bg-cs2-blue hover:bg-cs2-blue/80">
          Купить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkinCard;