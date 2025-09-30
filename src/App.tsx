import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { UsedCarsPage } from "./components/UsedCarsPage";
import { NewCarsPage } from "./components/NewCarsPage";
import { CustomOrderPage } from "./components/CustomOrderPage";
import { ContactsPage } from "./components/ContactsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "used":
        return <UsedCarsPage />;
      case "new":
        return <NewCarsPage />;
      case "custom":
        return <CustomOrderPage />;
      case "contacts":
        return <ContactsPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      <main>{renderCurrentPage()}</main>
      <Footer />
    </div>
  );
}