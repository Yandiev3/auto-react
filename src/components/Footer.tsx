import { Car, Phone, MapPin, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">AlifAutoCo</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Надежный автосалон в Ингушетии. Продажа новых и б/у автомобилей, 
              заказ авто под заказ. Гарантия качества и лучшие цены.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>+7 (931) 963-83-81</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>yandiev3@mail.ru</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Б/У авто</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Новые авто</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Под заказ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Финансирование</a></li>
            </ul>
          </div>

          {/* Working hours */}
          <div>
            <h3 className="font-semibold mb-4">Время работы</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <div>
                  <div>Пн-Пт: 9:00 - 18:00</div>
                  <div>Сб: 9:00 - 17:00</div>
                  <div>Вс: 10:00 - 16:00</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <div>г. Назрань ул. Рудаки, 123</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AlifAutoCo. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}