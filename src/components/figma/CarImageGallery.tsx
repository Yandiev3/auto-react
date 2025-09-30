// CarImageGallery.tsx
import { useState } from 'react';
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "./ImageWithFallback";

interface CarImageGalleryProps {
  images: string[];
  carName: string;
}

export function CarImageGallery({ images, carName }: CarImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const displayImages = images.slice(0, 4); // Показываем только первые 4 фото
  const remainingCount = images.length - 4; // Количество оставшихся фото

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    // Разделяем контейнер на зоны для каждого изображения (включая заглушку)
    const totalItems = displayImages.length + (remainingCount > 0 ? 1 : 0);
    const segmentWidth = width / totalItems;
    const newIndex = Math.min(Math.floor(x / segmentWidth), totalItems - 1);
    
    if (newIndex !== currentImageIndex) {
      setCurrentImageIndex(newIndex);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  // Стили для индикаторов
  const indicatorStyle = "absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium";
  const progressBarStyle = "absolute bottom-0 left-0 right-0 h-1 bg-gray-400 bg-opacity-30";
  const progressFillStyle = "h-full bg-white bg-opacity-90 transition-all duration-200";

  return (
    <div 
      className="relative w-full h-48 overflow-hidden bg-gray-100 cursor-pointer rounded-lg"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Показываем основное изображение или заглушку */}
      {currentImageIndex < displayImages.length ? (
        <ImageWithFallback
          src={displayImages[currentImageIndex]}
          alt={`${carName} - фото ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      ) : (
        // Заглушка для оставшихся фото
        <Card className="w-full h-full flex items-center justify-center bg-gray bg-opacity-10 border-0 rounded-none">
          <CardContent className="text-center p-4">
            <div className="text-2xl font-bold text-gray-600">+{remainingCount}</div>
            <div className="text-sm text-gray-500 mt-1">еще фото</div>
          </CardContent>
        </Card>
      )}
      
      {/* Индикатор текущей позиции */}
      <div className={indicatorStyle}>
        {currentImageIndex + 1} / {displayImages.length + (remainingCount > 0 ? 1 : 0)}
      </div>
      
      {/* Прогресс-бар */}
      <div className={progressBarStyle}>
        <div 
          className={progressFillStyle}
          style={{ 
            width: `${((currentImageIndex + 1) / (displayImages.length + (remainingCount > 0 ? 1 : 0))) * 100}%` 
          }}
        />
      </div>
    </div>
  );
}