import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {


  const projects = [
    {
      id: 1,
      title: "Драматический сериал",
      category: "Сериал",
      beforeImage: "/img/a130df5a-bf11-49fe-b59d-96d6623e1926.jpg",
      afterImage: "/img/3afdf0d6-76e8-437d-8097-13e9b8f71880.jpg"
    },
    {
      id: 2,
      title: "Художественный фильм",
      category: "Кино",
      beforeImage: "/img/a38a7d2c-e917-4a16-b09f-b4c84f3ad960.jpg",
      afterImage: "/img/3afdf0d6-76e8-437d-8097-13e9b8f71880.jpg"
    },
    {
      id: 3,
      title: "Рекламный ролик",
      category: "Реклама",
      beforeImage: "/img/a38a7d2c-e917-4a16-b09f-b4c84f3ad960.jpg",
      afterImage: "/img/a130df5a-bf11-49fe-b59d-96d6623e1926.jpg"
    }
  ];

  const BeforeAfterSlider = ({ beforeImage, afterImage, title }: { beforeImage: string; afterImage: string; title: string }) => {
    const [position, setPosition] = useState(50);

    const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setPosition(Math.max(0, Math.min(100, percentage)));
    };

    return (
      <div 
        className="relative w-full h-64 cursor-pointer before-after-slider"
        onMouseMove={handleSliderMove}
      >
        <img 
          src={beforeImage} 
          alt={`${title} - До`}
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(${position}% 0%, 100% 0%, 100% 100%, ${position}% 100%)` }}
        >
          <img 
            src={afterImage} 
            alt={`${title} - После`}
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <Icon name="GripVertical" size={16} className="text-primary-foreground" />
          </div>
        </div>
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 text-white text-sm rounded">
          До
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded">
          После
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-bebas text-6xl md:text-8xl mb-6">
            <span className="gradient-text">ЦВЕТОКОРРЕКЦИЯ</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Профессиональная цветокоррекция для кино, сериалов и рекламы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cinema-glow hover:animate-pulse">
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть портфолио
            </Button>
            <Button variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
              <Icon name="Mail" className="mr-2" size={20} />
              Связаться
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-yellow-400" />
        </div>

      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-5xl text-center mb-16">
            <span className="gradient-text">УСЛУГИ</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-yellow-400/50 transition-all duration-300 cinema-glow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/10 mb-6">
                  <Icon name="Film" size={32} className="text-yellow-400" />
                </div>
                <h3 className="font-bebas text-2xl mb-4 text-white">Кинематограф</h3>
                <p className="text-gray-400 mb-6">Цветокоррекция художественных фильмов с кинематографичным подходом</p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center text-sm text-gray-300">
                    <Icon name="Check" size={16} className="text-yellow-400 mr-2" />
                    DaVinci Resolve
                  </li>
                  <li className="flex items-center justify-center text-sm text-gray-300">
                    <Icon name="Check" size={16} className="text-yellow-400 mr-2" />
                    HDR мастеринг
                  </li>
                  <li className="flex items-center justify-center text-sm text-gray-300">
                    <Icon name="Check" size={16} className="text-yellow-400 mr-2" />
                    Кинематографичные LUT
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-800 hover:border-yellow-400/50 transition-all duration-300 cinema-glow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/10 mb-6">
                  <Icon name="Tv" size={32} className="text-yellow-400" />
                </div>
                <h3 className="font-bebas text-2xl mb-4 text-white">Сериалы</h3>
                <p className="text-gray-400 mb-6">Профессиональная цветокоррекция сериалов и многосерийных проектов</p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center text-sm text-gray-300">
                    <Icon name="Check" size={16} className="text-yellow-400 mr-2" />
                    Консистентность серий
                  </li>
                  <li className="flex items-center justify-center text-sm text-gray-300">
                    <Icon name="Check" size={16} className="text-yellow-400 mr-2" />
                    Быстрый workflow
                  </li>
                  <li className="flex items-center justify-center text-sm text-gray-300">
                    <Icon name="Check" size={16} className="text-yellow-400 mr-2" />
                    Broadcast стандарты
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-800 hover:border-yellow-400/50 transition-all duration-300 cinema-glow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/10 mb-6">
                  <Icon name="Megaphone" size={32} className="text-yellow-400" />
                </div>
                <h3 className="font-bebas text-2xl mb-4 text-white">Реклама</h3>
                <p className="text-gray-400 mb-6">Яркая и привлекательная цветокоррекция для рекламных роликов</p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center text-sm text-gray-300">
                    <Icon name="Check" size={16} className="text-yellow-400 mr-2" />
                    Креативный подход
                  </li>
                  <li className="flex items-center justify-center text-sm text-gray-300">
                    <Icon name="Check" size={16} className="text-yellow-400 mr-2" />
                    Быстрые сроки
                  </li>
                  <li className="flex items-center justify-center text-sm text-gray-300">
                    <Icon name="Check" size={16} className="text-yellow-400 mr-2" />
                    Все форматы
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-4xl md:text-5xl text-center mb-16">
            <span className="gradient-text">ПОРТФОЛИО</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-yellow-400/50 transition-all duration-300">
                <CardContent className="p-0">
                  <BeforeAfterSlider 
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    title={project.title}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-yellow-400 font-medium">{project.category}</span>
                    </div>
                    <h3 className="font-bebas text-xl text-white">{project.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bebas text-4xl md:text-5xl mb-8">
            <span className="gradient-text">КОНТАКТЫ</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Готов обсудить ваш проект и превратить видео в произведение искусства
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Icon name="Mail" size={32} className="text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bebas text-xl mb-2">EMAIL</h3>
              <p className="text-gray-400">colorist@example.com</p>
            </div>
            <div className="text-center">
              <Icon name="Phone" size={32} className="text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bebas text-xl mb-2">ТЕЛЕФОН</h3>
              <p className="text-gray-400">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon name="MapPin" size={32} className="text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bebas text-xl mb-2">ЛОКАЦИЯ</h3>
              <p className="text-gray-400">Москва, Россия</p>
            </div>
          </div>
          <Button size="lg" className="cinema-glow">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Обсудить проект
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2024 Профессиональная цветокоррекция. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;