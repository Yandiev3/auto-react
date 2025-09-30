import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search, Filter, Star, Fuel, Zap, Shield, Car } from "lucide-react";

export function NewCarsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  const newCars = [
    {
      id: 1,
      name: "Toyota Camry 2025",
      brand: "Toyota",
      year: 2025,
      price: 32000,
      fuel: "Гибрид",
      bodyType: "Седан",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1669254382169-5b40120ee577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NTkxNDM0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      warranty: "5 лет",
      features: ["Adaptive Cruise Control", "Lane Keep Assist", "Wireless Charging"],
      isElectric: false,
      isNew: true
    },
    {
      id: 2,
      name: "BMW X5 2025",
      brand: "BMW",
      year: 2025,
      price: 68000,
      fuel: "Бензин",
      bodyType: "SUV",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1570829194611-71a926d70ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjBjYXJ8ZW58MXx8fHwxNzU5MTE5Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      warranty: "4 года",
      features: ["xDrive", "Panoramic Roof", "Harman Kardon Audio"],
      isElectric: false,
      isNew: true
    },
    {
      id: 3,
      name: "Tesla Model 3 2025",
      brand: "Tesla",
      year: 2025,
      price: 45000,
      fuel: "Электро",
      bodyType: "Седан",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1665491641262-53155eaac2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTkwODc2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      warranty: "8 лет",
      features: ["Autopilot", "Supercharging", "Over-the-Air Updates"],
      isElectric: true,
      isNew: true
    },
    {
      id: 4,
      name: "Honda CR-V 2025",
      brand: "Honda",
      year: 2025,
      price: 35000,
      fuel: "Гибрид",
      bodyType: "SUV",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1632081832555-f4971d8dc3bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZWFsZXJzaGlwfGVufDF8fHx8MTc1OTE0Mjg0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      warranty: "5 лет",
      features: ["Honda Sensing", "AWD", "Remote Start"],
      isElectric: false,
      isNew: true
    },
    {
      id: 5,
      name: "Mazda CX-5 2025",
      brand: "Mazda",
      year: 2025,
      price: 33000,
      fuel: "Бензин",
      bodyType: "SUV",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1690911982279-9d4732c02866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VkJTIwY2FyJTIwbG90fGVufDF8fHx8MTc1OTE0MzQxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      warranty: "3 года",
      features: ["i-ACTIVSENSE", "SKYACTIV Technology", "Premium Interior"],
      isElectric: false,
      isNew: true
    },
    {
      id: 6,
      name: "Audi A4 2025",
      brand: "Audi",
      year: 2025,
      price: 42000,
      fuel: "Бензин",
      bodyType: "Седан",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1669254382169-5b40120ee577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NTkxNDM0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      warranty: "4 года",
      features: ["quattro AWD", "Virtual Cockpit", "Bang & Olufsen Audio"],
      isElectric: false,
      isNew: true
    }
  ];

  const brands = ["Toyota", "BMW", "Tesla", "Honda", "Mazda", "Audi"];
  const priceRanges = [
    { label: "До $35,000", value: "0-35000" },
    { label: "$35,000 - $50,000", value: "35000-50000" },
    { label: "$50,000 - $70,000", value: "50000-70000" },
    { label: "Свыше $70,000", value: "70000+" }
  ];

  const filteredCars = newCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !brandFilter || car.brand === brandFilter;
    
    let matchesPrice = true;
    if (priceFilter) {
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
        <h1 className="text-3xl font-bold mb-2">Новые автомобили</h1>
        <p className="text-gray-600">Последние модели 2025 года с официальной гарантией</p>
      </div>

      {/* Special offers banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Специальные предложения!</h2>
            <p className="text-blue-100">Скидки до 15% на новые автомобили + подарки</p>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 mt-4 md:mt-0">
            Узнать подробнее
          </Button>
        </div>
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
              setBrandFilter("");
              setPriceFilter("");
            }}
          >
            Сбросить
          </Button>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Найдено {filteredCars.length} новых автомобилей
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
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-green-600">
                  Новый
                </Badge>
                {car.isElectric && (
                  <Badge className="bg-yellow-500">
                    <Zap className="h-3 w-3 mr-1" />
                    Электро
                  </Badge>
                )}
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 text-sm flex items-center">
                <Star className="h-3 w-3 text-yellow-400 mr-1" />
                {car.rating}
              </div>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg">{car.name}</h3>
                  <p className="text-sm text-gray-600">{car.bodyType}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-green-600">${car.price.toLocaleString()}</p>
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Fuel className="h-4 w-4 mr-1" />
                  {car.fuel}
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Гарантия {car.warranty}
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Основные особенности:</p>
                <div className="flex flex-wrap gap-1">
                  {car.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  Подробнее
                </Button>
                <Button variant="outline" className="flex-1">
                  Тест-драйв
                </Button>
              </div>
              
              <div className="mt-3 text-center">
                <p className="text-xs text-green-600 font-medium">
                  ✓ Официальная гарантия ✓ Сервисное обслуживание
                </p>
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

      {/* Features section */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Преимущества покупки нового автомобиля</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Официальная гарантия</h3>
            <p className="text-gray-600 text-sm">До 8 лет гарантии от производителя</p>
          </div>
          <div className="text-center">
            <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Новейшие технологии</h3>
            <p className="text-gray-600 text-sm">Современные системы безопасности и комфорта</p>
          </div>
          <div className="text-center">
            <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Лучший сервис</h3>
            <p className="text-gray-600 text-sm">Бесплатное ТО в течение гарантийного периода</p>
          </div>
        </div>
      </div>
    </div>
  );
}