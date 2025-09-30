import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search, Filter, Star, Fuel, Calendar, MapPin, Car } from "lucide-react";

export function UsedCarsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  const usedCars = [
    {
      id: 1,
      name: "Toyota Camry",
      brand: "Toyota",
      year: 2020,
      price: 25000,
      mileage: "45,000 км",
      fuel: "Бензин",
      location: "Душанбе",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1669254382169-5b40120ee577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NTkxNDM0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Кондиционер", "ABS", "Подушки безопасности"]
    },
    {
      id: 2,
      name: "Honda Accord",
      brand: "Honda",
      year: 2019,
      price: 23000,
      mileage: "52,000 км",
      fuel: "Бензин",
      location: "Душанбе",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1690911982279-9d4732c02866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VkJTIwY2FyJTIwbG90fGVufDF8fHx8MTc1OTE0MzQxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Автомат", "Кожаный салон", "Камера заднего вида"]
    },
    {
      id: 3,
      name: "BMW 3 Series",
      brand: "BMW",
      year: 2018,
      price: 35000,
      mileage: "38,000 км",
      fuel: "Бензин",
      location: "Душанбе",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1570829194611-71a926d70ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjBjYXJ8ZW58MXx8fHwxNzU5MTE5Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Люк", "Мультимедиа", "Парктроник"]
    },
    {
      id: 4,
      name: "Mazda CX-5",
      brand: "Mazda",
      year: 2021,
      price: 28000,
      mileage: "25,000 км",
      fuel: "Бензин",
      location: "Душанбе",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1665491641262-53155eaac2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTkwODc2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["4WD", "Круиз-контроль", "Датчики дождя"]
    },
    {
      id: 5,
      name: "Hyundai Sonata",
      brand: "Hyundai",
      year: 2020,
      price: 22000,
      mileage: "48,000 км",
      fuel: "Бензин",
      location: "Душанбе",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1669254382169-5b40120ee577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NTkxNDM0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Подогрев сидений", "Навигация", "Bluetooth"]
    },
    {
      id: 6,
      name: "Volkswagen Passat",
      brand: "Volkswagen",
      year: 2019,
      price: 26000,
      mileage: "42,000 км",
      fuel: "Дизель",
      location: "Душанбе",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1690911982279-9d4732c02866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VkJTIwY2FyJTIwbG90fGVufDF8fHx8MTc1OTE0MzQxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Турбо", "LED фары", "Климат-контроль"]
    }
  ];

  const brands = ["Toyota", "Honda", "BMW", "Mazda", "Hyundai", "Volkswagen"];
  const priceRanges = [
    { label: "До $20,000", value: "0-20000" },
    { label: "$20,000 - $30,000", value: "20000-30000" },
    { label: "$30,000 - $40,000", value: "30000-40000" },
    { label: "Свыше $40,000", value: "40000+" }
  ];

  const filteredCars = usedCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !brandFilter || brandFilter === "all" || car.brand === brandFilter;
    
    let matchesPrice = true;
    if (priceFilter && priceFilter !== "all") {
      const [min, max] = priceFilter.split('-').map(p => p.replace('+', ''));
      if (max) {
        matchesPrice = car.price >= parseInt(min) && car.price <= parseInt(max);
      } else {
        matchesPrice = car.price >= parseInt(min);
      }
    }

    return matchesSearch && matchesBrand && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Б/У автомобили</h1>
        <p className="text-gray-600">Найдите идеальный автомобиль с пробегом</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Filter className="h-5 w-5 text-gray-500" />
          <span className="font-medium">Фильтры</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Поиск по марке или модели..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={brandFilter} onValueChange={setBrandFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите марку" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все марки</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>{brand}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={priceFilter} onValueChange={setPriceFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Ценовой диапазон" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Любая цена</SelectItem>
              {priceRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchTerm("");
              setBrandFilter("all");
              setPriceFilter("all");
            }}
          >
            Сбросить
          </Button>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Найдено {filteredCars.length} автомобилей
        </p>
      </div>

      {/* Cars grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative">
              <ImageWithFallback
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-blue-600">
                Б/У
              </Badge>
              <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 text-sm flex items-center">
                <Star className="h-3 w-3 text-yellow-400 mr-1" />
                {car.rating}
              </div>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg">{car.name}</h3>
                  <p className="text-sm text-gray-600">{car.year} год</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-blue-600">${car.price.toLocaleString()}</p>
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {car.mileage}
                </div>
                <div className="flex items-center">
                  <Fuel className="h-4 w-4 mr-1" />
                  {car.fuel}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {car.location}
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Особенности:</p>
                <div className="flex flex-wrap gap-1">
                  {car.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Подробнее
                </Button>
                <Button variant="outline" className="flex-1">
                  Связаться
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div className="text-center py-12">
          <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Автомобили не найдены
          </h3>
          <p className="text-gray-600">
            Попробуйте изменить параметры поиска или сбросить фильтры
          </p>
        </div>
      )}
    </div>
  );
}