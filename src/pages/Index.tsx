import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

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
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bebas text-primary">COLOR CORRECTION STUDIO</div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center cinema-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-bebas text-primary mb-6 animate-fade-in">
              ЦВЕТОКОРРЕКЦИЯ
            </h1>
            <h2 className="text-4xl md:text-6xl font-bebas text-white mb-8 animate-fade-in">
              КИНО • СЕРИАЛЫ • РЕКЛАМА
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in">
              Профессиональная цветокоррекция и грейдинг для кинематографических проектов. 
              Создаю атмосферу и настроение через цвет.
            </p>
            <div className="flex gap-4 animate-fade-in">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 gold-glow">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute right-10 top-1/2 hidden lg:block">
          <div className="space-y-8 opacity-30">
            <Icon name="Film" size={40} className="text-primary animate-pulse" />
            <Icon name="Palette" size={40} className="text-primary animate-pulse" style={{ animationDelay: '1s' }} />
            <Icon name="Camera" size={40} className="text-primary animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bebas text-primary mb-4">ПОРТФОЛИО</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Примеры работ с интерактивными слайдерами сравнения до и после цветокоррекции
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-secondary border-border hover:border-primary transition-colors group">
                <CardContent className="p-0">
                  <BeforeAfterSlider 
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    title={project.title}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary font-medium">{project.category}</span>
                      <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bebas text-primary mb-4">УСЛУГИ</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center p-8 hover:border-primary transition-colors">
              <Icon name="Film" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bebas text-card-foreground mb-4">КИНО</h3>
              <p className="text-muted-foreground">
                Цветокоррекция художественных и документальных фильмов
              </p>
            </Card>

            <Card className="bg-card border-border text-center p-8 hover:border-primary transition-colors">
              <Icon name="Tv" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bebas text-card-foreground mb-4">СЕРИАЛЫ</h3>
              <p className="text-muted-foreground">
                Обработка многосерийных проектов с единым стилем
              </p>
            </Card>

            <Card className="bg-card border-border text-center p-8 hover:border-primary transition-colors">
              <Icon name="Video" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bebas text-card-foreground mb-4">РЕКЛАМА</h3>
              <p className="text-muted-foreground">
                Яркие и запоминающиеся рекламные ролики
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bebas text-primary mb-4 md:mb-0">
              COLOR CORRECTION STUDIO
            </div>
            <div className="flex gap-6">
              <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Youtube" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Mail" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 Color Correction Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;