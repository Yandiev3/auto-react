import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car,
  MessageSquare,
  Navigation,
  Users,
  Calendar
} from "lucide-react";

export function ContactsPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Сообщение отправлено! Мы ответим вам в ближайшее время.");
  };

  const workingHours = [
    { day: "Понедельник - Пятница", hours: "9:00 - 18:00" },
    { day: "Суббота", hours: "9:00 - 17:00" },
    { day: "Воскресенье", hours: "10:00 - 16:00" }
  ];

  const departments = [
    {
      name: "Продажи новых авто",
      phone: "+7 (931) 963-83-81",
      email: "sales@alifautoco.tj",
      manager: "Имя Сотрудника"
    },
    {
      name: "Продажи б/у авто",
      phone: "+7 (931) 963-83-81", 
      email: "used@alifautoco.tj",
      manager: "Имя Сотрудника"
    },
    {
      name: "Заказ под заказ",
      phone: "+7 (931) 963-83-81",
      email: "custom@alifautoco.tj", 
      manager: "Имя Сотрудника"
    },
    {
      name: "Сервисный центр",
      phone: "+7 (931) 963-83-81",
      email: "service@alifautoco.tj",
      manager: "Имя Сотрудника"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Контакты</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Мы всегда готовы помочь вам с выбором автомобиля и ответить на все ваши вопросы
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main contact info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Address and main info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Наш автосалон
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Адрес:</h3>
                  <p className="text-gray-700">
                    Республика Ингушетия<br />
                    г. Назрань
                    ул. Рудаки, 123<br />
                    "Алиф Плаза"
                  </p>
                  <Button className="mt-3 bg-blue-600 hover:bg-blue-700" size="sm">
                    <Navigation className="h-4 w-4 mr-1" />
                    Построить маршрут
                  </Button>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Основные контакты:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-blue-600 mr-2" />
                      <span>+7 (931) 963-83-81</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-blue-600 mr-2" />
                      <span>+7 (931) 963-83-81</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-blue-600 mr-2" />
                      <span>yandiev3@mail.ru</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Местоположение на карте</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-medium">Интерактивная карта</p>
                  <p className="text-sm">г. Назрань ул. Рудаки, 123</p>
                  <Button variant="outline" className="mt-2">
                    Открыть в Яндекс.Картах
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Departments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Отделы и специалисты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <h3 className="font-semibold text-blue-600 mb-2">{dept.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">Менеджер: {dept.manager}</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center">
                        <Phone className="h-3 w-3 text-gray-400 mr-2" />
                        <span>{dept.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-3 w-3 text-gray-400 mr-2" />
                        <span>{dept.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Working hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Время работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{schedule.day}</span>
                    <span className="text-sm font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <Clock className="h-4 w-4 inline mr-1" />
                  Консультации по телефону круглосуточно
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick actions */}
          <Card>
            <CardHeader>
              <CardTitle>Быстрые действия</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Car className="h-4 w-4 mr-2" />
                Записаться на тест-драйв
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Забронировать время визита
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                Онлайн чат
              </Button>
              <Button className="w-full justify-start bg-green-600 hover:bg-green-700 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Заказать звонок
              </Button>
            </CardContent>
          </Card>

          {/* Social media & additional info */}
          <Card>
            <CardHeader>
              <CardTitle>Дополнительная информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Парковка</h4>
                <p className="text-sm text-gray-600">
                  Бесплатная парковка для клиентов на 50+ мест
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Общественный транспорт</h4>
                <p className="text-sm text-gray-600">
                  Остановка "Рудаки-123"
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Wi-Fi</h4>
                <p className="text-sm text-gray-600">
                  Бесплатный Wi-Fi в зоне ожидания
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact form */}
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Отправить сообщение</CardTitle>
          <p className="text-center text-gray-600">
            Есть вопросы? Напишите нам, и мы обязательно ответим!
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contact-name">Ваше имя *</Label>
                <Input id="contact-name" placeholder="Введите ваше имя" required />
              </div>
              <div>
                <Label htmlFor="contact-phone">Телефон *</Label>
                <Input id="contact-phone" placeholder="+7 (931) XXX-XX-XX" required />
              </div>
            </div>
            <div>
              <Label htmlFor="contact-email">Email</Label>
              <Input id="contact-email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="contact-subject">Тема сообщения</Label>
              <Input id="contact-subject" placeholder="О чем вы хотите спросить?" />
            </div>
            <div>
              <Label htmlFor="contact-message">Сообщение *</Label>
              <Textarea 
                id="contact-message" 
                placeholder="Напишите ваше сообщение..." 
                rows={4}
                required 
              />
            </div>
            <div className="text-center">
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 px-8"
                size="lg"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Отправить сообщение
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}