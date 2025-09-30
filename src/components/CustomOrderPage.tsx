import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Car, 
  Clock, 
  Shield, 
  CheckCircle, 
  Phone, 
  Mail, 
  User,
  DollarSign,
  Calendar,
  Search
} from "lucide-react";

export function CustomOrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    brand: "",
    model: "",
    year: "",
    budget: "",
    color: "",
    transmission: "",
    fuel: "",
    features: [] as string[],
    comments: ""
  });

  const [currentStep, setCurrentStep] = useState(1);

  const brands = [
    "Toyota", "Honda", "BMW", "Mercedes-Benz", "Audi", "Volkswagen", 
    "Mazda", "Hyundai", "Nissan", "Ford", "Chevrolet", "Lexus"
  ];

  const availableFeatures = [
    "Кондиционер", "Подогрев сидений", "Кожаный салон", "Люк", 
    "Навигационная система", "Камера заднего вида", "Парктроник",
    "Cruise Control", "Bluetooth", "USB/AUX", "Премиум аудио",
    "LED фары", "Датчики дождя", "Автоматические фары"
  ];

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, feature]
        : prev.features.filter(f => f !== feature)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit to a backend
    alert("Заявка отправлена! Мы свяжемся с вами в течение 2 часов.");
  };

  const steps = [
    { number: 1, title: "Контактные данные", icon: <User className="h-5 w-5" /> },
    { number: 2, title: "Параметры авто", icon: <Car className="h-5 w-5" /> },
    { number: 3, title: "Дополнительно", icon: <CheckCircle className="h-5 w-5" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Заказ автомобиля под заказ</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Не нашли подходящий автомобиль в нашем каталоге? Мы поможем найти и привезти 
          именно тот автомобиль, который вы хотите!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          {/* Progress steps */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-300 text-gray-300'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    step.icon
                  )}
                </div>
                <div className="ml-2 mr-4">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Шаг {currentStep} из {steps.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Ваше имя *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                          placeholder="Введите ваше имя"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Номер телефона *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                          placeholder="+992 XX XXX XX XX"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email (опционально)</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Car Parameters */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="brand">Марка автомобиля *</Label>
                        <Select value={formData.brand} onValueChange={(value) => 
                          setFormData(prev => ({...prev, brand: value}))
                        }>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите марку" />
                          </SelectTrigger>
                          <SelectContent>
                            {brands.map(brand => (
                              <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="model">Модель</Label>
                        <Input
                          id="model"
                          value={formData.model}
                          onChange={(e) => setFormData(prev => ({...prev, model: e.target.value}))}
                          placeholder="Например: Camry, X5, A4"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="year">Год выпуска</Label>
                        <Input
                          id="year"
                          value={formData.year}
                          onChange={(e) => setFormData(prev => ({...prev, year: e.target.value}))}
                          placeholder="2020-2025"
                        />
                      </div>
                      <div>
                        <Label htmlFor="transmission">Коробка передач</Label>
                        <Select value={formData.transmission} onValueChange={(value) => 
                          setFormData(prev => ({...prev, transmission: value}))
                        }>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="automatic">Автомат</SelectItem>
                            <SelectItem value="manual">Механика</SelectItem>
                            <SelectItem value="cvt">CVT</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="fuel">Тип топлива</Label>
                        <Select value={formData.fuel} onValueChange={(value) => 
                          setFormData(prev => ({...prev, fuel: value}))
                        }>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="petrol">Бензин</SelectItem>
                            <SelectItem value="diesel">Дизель</SelectItem>
                            <SelectItem value="hybrid">Гибрид</SelectItem>
                            <SelectItem value="electric">Электро</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget">Бюджет (USD)</Label>
                        <Input
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData(prev => ({...prev, budget: e.target.value}))}
                          placeholder="30000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="color">Предпочитаемый цвет</Label>
                        <Input
                          id="color"
                          value={formData.color}
                          onChange={(e) => setFormData(prev => ({...prev, color: e.target.value}))}
                          placeholder="Белый, черный, серый..."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Features */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">Желаемые опции</Label>
                      <p className="text-sm text-gray-600 mb-4">
                        Выберите дополнительные опции, которые вам важны
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {availableFeatures.map(feature => (
                          <div key={feature} className="flex items-center space-x-2">
                            <Checkbox
                              id={feature}
                              checked={formData.features.includes(feature)}
                              onCheckedChange={(checked) => 
                                handleFeatureChange(feature, checked as boolean)
                              }
                            />
                            <Label 
                              htmlFor={feature}
                              className="text-sm font-normal cursor-pointer"
                            >
                              {feature}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="comments">Дополнительные пожелания</Label>
                      <Textarea
                        id="comments"
                        value={formData.comments}
                        onChange={(e) => setFormData(prev => ({...prev, comments: e.target.value}))}
                        placeholder="Расскажите подробнее о ваших требованиях..."
                        rows={4}
                      />
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                    disabled={currentStep === 1}
                  >
                    Назад
                  </Button>
                  
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(prev => Math.min(3, prev + 1))}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Далее
                    </Button>
                  ) : (
                    <Button 
                      type="submit"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Отправить заявку
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Process info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Как это работает
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-medium">Оставьте заявку</h4>
                  <p className="text-sm text-gray-600">Заполните форму с параметрами желаемого автомобиля</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-medium">Мы найдем авто</h4>
                  <p className="text-sm text-gray-600">Наши специалисты найдут подходящие варианты</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-medium">Доставка и оформление</h4>
                  <p className="text-sm text-gray-600">Привезем автомобиль и поможем с документами</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle>Преимущества заказа</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="text-sm">Сроки поиска: 1-14 дней</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm">Проверка истории автомобиля</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="h-5 w-5 text-purple-600" />
                <span className="text-sm">Лучшие цены на рынке</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm">Гарантия на автомобиль</span>
              </div>
            </CardContent>
          </Card>

          {/* Contact info */}
          <Card>
            <CardHeader>
              <CardTitle>Нужна помощь?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-sm">+7 (931) 963-83-81</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-600" />
                <span className="text-sm">custom@alifautoco.tj</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="text-sm">Пн-Сб: 9:00-18:00</span>
              </div>
            </CardContent>
          </Card>

          {/* Popular requests */}
          <Card>
            <CardHeader>
              <CardTitle>Популярные запросы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline" className="w-full justify-start p-2">
                  Toyota Camry 2022-2024
                </Badge>
                <Badge variant="outline" className="w-full justify-start p-2">
                  BMW X5 2021-2023
                </Badge>
                <Badge variant="outline" className="w-full justify-start p-2">
                  Mercedes C-Class 2020+
                </Badge>
                <Badge variant="outline" className="w-full justify-start p-2">
                  Audi A6 любой год
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}