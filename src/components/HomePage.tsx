import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CarImageGallery } from "./figma/CarImageGallery";
import { Car, Shield, CreditCard, Wrench } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      title: "Большой выбор",
      description: "Более 200 автомобилей в наличии"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Гарантия качества",
      description: "Все автомобили проходят техосмотр"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-blue-600" />,
      title: "Выгодные цены",
      description: "Лучшие предложения на рынке"
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: "Сервисное обслуживание",
      description: "Полный спектр автоуслуг"
    }
  ];

  const featuredCars = [
    {
      id: 1,
      name: "Toyota Camry",
      price: "2 000 000 ₽",
      year: "2020г",
      mileage: "45000",
      fuel: "Бензин",
      type: "used",
      model: "VIII (XV70)",
      images: [
        "/src/assets/1.webp",
        "/src/assets/2.webp", 
        "/src/assets/3.webp",
        "/src/assets/4.webp",
        "/src/assets/5.webp",
        "/src/assets/6.webp"
      ],
      image: "/src/assets/1.webp"
    },
    {
      id: 2,
      name: "BMW X5",
      price: "$65,000",
      year: "2023г",
      mileage: "0",
      fuel: "Бензин",
      type: "new",
      model:"IV (G05/G18)",
      images: [
        "https://images.unsplash.com/photo-1570829194611-71a926d70ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjBjYXJ8ZW58MXx8fHwxNzU5MTE5Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzh8MHwxfHNlYXJjaHwxfHxibXclMjB4NSUyMGludGVyaW9yfGVufDF8fHx8MTc1OTE0NDI0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzh8MHwxfHNlYXJjaHwxfHxibXclMjB4NSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1OTE0NDI0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      image: "https://images.unsplash.com/photo-1570829194611-71a926d70ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjBjYXJ8ZW58MXx8fHwxNzU5MTE5Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1632081832555-f4971d8dc3bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZWFsZXJzaGlwfGVufDF8fHx8MTc1OTE0Mjg0MXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="AlifAutoCo Dealership"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              AlifAutoCo
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Ваш надежный партнер в выборе автомобиля
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => onNavigate("used")}
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                Б/У автомобили
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => onNavigate("new")}
                className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3"
              >
                Новые автомобили
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предоставляем лучший сервис и качественные автомобили для наших клиентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Cars Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Рекомендуемые автомобили</h2>
            <p className="text-gray-600">Лучшие предложения этой недели</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8">
            {featuredCars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <CarImageGallery images={car.images} carName={car.name} />
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      car.type === 'new' ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                  >
                    {car.type === 'new' ? 'Новый' : 'Б/У'}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{car.name} <br />{car.model}</span>
                    <span className="text-blue-600">{car.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div>Год: <b>{car.year}</b></div>
                    <div className="whitespace-nowrap justify-self-end">Пробег: <b>{car.mileage} км</b></div>
                    <div>Топливо: <b>{car.fuel}</b></div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-gray-600">Полный спектр автомобильных услуг</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2 text-blue-600">Продажа б/у автомобилей</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Широкий выбор проверенных автомобилей с пробегом
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => onNavigate("used")}
                  className="w-full"
                >
                  Смотреть каталог
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2 text-blue-600">Новые автомобили</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Последние модели от ведущих производителей
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => onNavigate("new")}
                  className="w-full"
                >
                  Смотреть новинки
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2 text-blue-600">Заказ под заказ</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Поможем найти именно тот автомобиль, который вы хотите
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => onNavigate("custom")}
                  className="w-full"
                >
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}