import { Car, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const navigation = [
    { name: "Главная", id: "home" },
    { name: "Б/У авто", id: "used" },
    { name: "Новые авто", id: "new" },
    { name: "Под заказ", id: "custom" },
    { name: "Контакты", id: "contacts" }
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate("home")}>
            <Car className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">AlifAutoCo</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 transition-colors ${
                  currentPage === item.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact info */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+7 (931) 963-83-81</span>
            </div>
            <Button 
              size="sm" 
              onClick={() => onNavigate("contacts")}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <MapPin className="h-4 w-4 mr-1" />
              Адрес
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden px-4 py-2 border-t">
        <div className="flex flex-wrap gap-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 py-1 text-sm rounded ${
                currentPage === item.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}