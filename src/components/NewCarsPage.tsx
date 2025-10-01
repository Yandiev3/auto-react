import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search, Filter, Star, Fuel, Zap, Shield, Car, ChevronDown, ChevronUp } from "lucide-react";
import { CarImageGallery } from "./figma/CarImageGallery";

export function NewCarsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [transmissionFilter, setTransmissionFilter] = useState("");
  const [engineFilter, setEngineFilter] = useState("");
  const [driveFilter, setDriveFilter] = useState("");
  const [bodyFilter, setBodyFilter] = useState("");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const newCars = [
    {
      id: 1,
      name: "Toyota Camry 2025",
      brand: "Toyota",
      year: 2025,
      price: 3200000,
      fuel: "Гибрид",
      bodyType: "Седан",
      transmission: "Автомат",
      engine: "2.5L Hybrid",
      drive: "Передний",
      images: [
        "/src/assets/1.webp",
        "/src/assets/2.webp", 
        "/src/assets/3.webp",
        "/src/assets/4.webp",
        "/src/assets/5.webp",
        "/src/assets/6.webp"
      ],
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
      price: 6800000,
      fuel: "Бензин",
      bodyType: "SUV",
      transmission: "Автомат",
      engine: "3.0L Turbo",
      drive: "Полный",
      warranty: "4 года",
      images: [
        "/src/assets/21.webp",
        "/src/assets/22.webp", 
        "/src/assets/23.webp",
        "/src/assets/24.webp",
        "/src/assets/25.webp",
        "/src/assets/26.webp",
        "/src/assets/27.webp",
        "/src/assets/28.webp",
      ],
      features: ["xDrive", "Panoramic Roof", "Harman Kardon Audio"],
      isElectric: false,
      isNew: true
    },
    {
      id: 3,
      name: "Honda CR-V 2025",
      brand: "Honda",
      year: 2025,
      price: 3500000,
      fuel: "Гибрид",
      bodyType: "SUV",
      transmission: "Вариатор",
      engine: "2.0L Hybrid",
      drive: "Полный",
      warranty: "5 лет",
      images: [
        "/src/assets/31.webp",
        "/src/assets/32.webp", 
        "/src/assets/33.webp",
        "/src/assets/34.webp",
        "/src/assets/35.webp",
      ],
      features: ["Honda Sensing", "AWD", "Remote Start"],
      isElectric: false,
      isNew: true
    },
    {
      id: 5,
      name: "Mazda CX-5 2025",
      brand: "Mazda",
      year: 2025,
      price: 3300000,
      fuel: "Бензин",
      bodyType: "SUV",
      transmission: "Автомат",
      engine: "2.5L",
      drive: "Передний",
      warranty: "3 года",
      images:[
        "/src/assets/41.jpg",
        "/src/assets/42.jpg",
      ],
      features: ["i-ACTIVSENSE", "SKYACTIV Technology", "Premium Interior"],
      isElectric: false,
      isNew: true
    }
  ];

  const brands = ["Toyota", "BMW", "Tesla", "Honda", "Mazda", "Audi"];
  const transmissions = ["Автомат", "Вариатор", "Робот", "Механика"];
  const engines = ["2.0L", "2.5L", "3.0L", "2.0L Hybrid", "2.5L Hybrid", "Electric"];
  const drives = ["Передний", "Задний", "Полный"];
  const bodyTypes = ["Седан", "SUV", "Хэтчбек", "Универсал", "Купе", "Минивэн"];

  // Автоматическое определение минимальной и максимальной цены
  const minCarPrice = Math.min(...newCars.map(car => car.price));
  const maxCarPrice = Math.max(...newCars.map(car => car.price));

  const filteredCars = newCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !brandFilter || car.brand === brandFilter;
    
    // Фильтрация по цене
    let matchesPrice = true;
    if (minPrice || maxPrice) {
      const carPrice = car.price;
      const min = minPrice ? parseInt(minPrice) : minCarPrice;
      const max = maxPrice ? parseInt(maxPrice) : maxCarPrice;
      
      matchesPrice = carPrice >= min && carPrice <= max;
    }

    const matchesTransmission = !transmissionFilter || car.transmission === transmissionFilter;
    const matchesEngine = !engineFilter || car.engine === engineFilter;
    const matchesDrive = !driveFilter || car.drive === driveFilter;
    const matchesBody = !bodyFilter || car.bodyType === bodyFilter;

    return matchesSearch && matchesBrand && matchesPrice && 
           matchesTransmission && matchesEngine && matchesDrive && matchesBody;
  });

  const resetAllFilters = () => {
    setSearchTerm("");
    setBrandFilter("");
    setMinPrice("");
    setMaxPrice("");
    setTransmissionFilter("");
    setEngineFilter("");
    setDriveFilter("");
    setBodyFilter("");
  };

  const handleMinPriceChange = (value: string) => {
    // Удаляем все нецифровые символы
    const numericValue = value.replace(/\D/g, '');
    setMinPrice(numericValue);
  };

  const handleMaxPriceChange = (value: string) => {
    // Удаляем все нецифровые символы
    const numericValue = value.replace(/\D/g, '');
    setMaxPrice(numericValue);
  };

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
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="font-medium">Фильтры</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="flex items-center gap-1"
          >
            Расширенные фильтры
            {showAdvancedFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
        
        {/* Basic filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
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
          
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                placeholder={`От ${minCarPrice.toLocaleString()}`}
                value={minPrice}
                onChange={(e) => handleMinPriceChange(e.target.value)}
                className="pr-8"
              />
              <span className="absolute right-3 top-3 text-xs text-gray-500">₽</span>
            </div>
            <div className="relative flex-1">
              <Input
                placeholder={`До ${maxCarPrice.toLocaleString()}`}
                value={maxPrice}
                onChange={(e) => handleMaxPriceChange(e.target.value)}
                className="pr-8"
              />
              <span className="absolute right-3 top-3 text-xs text-gray-500">₽</span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            onClick={resetAllFilters}
          >
            Сбросить все
          </Button>
        </div>

        {/* Advanced filters */}
        {showAdvancedFilters && (
          <div className="pt-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={transmissionFilter} onValueChange={setTransmissionFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Коробка передач" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая коробка</SelectItem>
                  {transmissions.map((transmission) => (
                    <SelectItem key={transmission} value={transmission}>{transmission}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={engineFilter} onValueChange={setEngineFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Двигатель" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любой двигатель</SelectItem>
                  {engines.map((engine) => (
                    <SelectItem key={engine} value={engine}>{engine}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={driveFilter} onValueChange={setDriveFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Привод" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любой привод</SelectItem>
                  {drives.map((drive) => (
                    <SelectItem key={drive} value={drive}>{drive}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={bodyFilter} onValueChange={setBodyFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Кузов" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любой кузов</SelectItem>
                  {bodyTypes.map((body) => (
                    <SelectItem key={body} value={body}>{body}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
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
              <CarImageGallery images={car.images} carName={car.name} />
              <div className="absolute top-4 left-4 flex gap-2">
                {car.isElectric && (
                  <Badge className="bg-yellow-500">
                    <Zap className="h-3 w-3 mr-1" />
                    Электро
                  </Badge>
                )}
              </div>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg">{car.name}</h3>
                  <p className="text-sm text-gray-600">{car.bodyType}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-green-600">{car.price.toLocaleString()} ₽</p>
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
                <div className="flex items-center">
                  <span className="text-xs">Коробка:</span>
                  <span className="ml-1">{car.transmission}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs">Привод:</span>
                  <span className="ml-1">{car.drive}</span>
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
            <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Новейшие технологии</h3>
            <p className="text-gray-600 text-sm">Современные системы безопасности и комфорта</p>
          </div>
          <div className="text-center">
            <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Лучший сервис</h3>
            <p className="text-gray-600 text-sm">Бесплатное ТО в течение гарантийного периода</p>
          </div>
        </div>
      </div>
    </div>
  );
}