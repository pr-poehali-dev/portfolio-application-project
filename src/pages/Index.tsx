import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const portfolioSections = [
    {
      id: 'about',
      title: 'Обо мне',
      description: 'Личная история и мотивация',
      icon: 'User',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      accent: 'border-purple-200'
    },
    {
      id: 'vk-posts',
      title: 'Публикации в ВК',
      description: 'Социальная журналистика',
      icon: 'MessageSquare',
      color: 'bg-gradient-to-br from-pink-500 to-pink-600',
      accent: 'border-pink-200'
    },
    {
      id: 'video',
      title: 'Видеосюжет',
      description: 'Телевизионная журналистика',
      icon: 'Video',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      accent: 'border-green-200'
    },
    {
      id: 'stories',
      title: 'Рассказы',
      description: 'Художественная проза',
      icon: 'BookOpen',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      accent: 'border-orange-200'
    },
    {
      id: 'poems',
      title: 'Стихотворения',
      description: 'Поэтическое творчество',
      icon: 'Feather',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      accent: 'border-purple-200'
    },
    {
      id: 'photos',
      title: 'Фотографии',
      description: 'Визуальная журналистика',
      icon: 'Camera',
      color: 'bg-gradient-to-br from-green-500 to-teal-500',
      accent: 'border-green-200'
    },
    {
      id: 'drawings',
      title: 'Рисунки',
      description: 'Графическое искусство',
      icon: 'Paintbrush',
      color: 'bg-gradient-to-br from-pink-500 to-rose-500',
      accent: 'border-pink-200'
    },
    {
      id: 'comics',
      title: 'Комиксы',
      description: 'Визуальное повествование',
      icon: 'Layers',
      color: 'bg-gradient-to-br from-orange-500 to-yellow-500',
      accent: 'border-orange-200'
    },
    {
      id: 'essays',
      title: 'Эссе',
      description: 'Аналитическая журналистика',
      icon: 'FileText',
      color: 'bg-gradient-to-br from-indigo-500 to-blue-500',
      accent: 'border-indigo-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="Sparkles" size={16} className="text-white" />
            <span className="text-white text-sm font-medium">Творческое портфолио</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Playfair_Display']">
            Портфолио для поступления
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-['Inter']">
            на факультет журналистики
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge className="bg-white/20 text-white border-white/30">Журналистика</Badge>
            <Badge className="bg-white/20 text-white border-white/30">Творчество</Badge>
            <Badge className="bg-white/20 text-white border-white/30">Медиа</Badge>
          </div>
          <Button 
            className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Посмотреть содержание
            <Icon name="ArrowDown" size={20} className="ml-2" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </header>

      {/* Content Navigation */}
      <section id="content" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-['Playfair_Display']">
              Содержание портфолио
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Inter']">
              Коллекция моих работ, демонстрирующая разносторонние навыки и творческий подход к журналистике
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioSections.map((section, index) => (
              <Card 
                key={section.id} 
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 ${section.accent} animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${section.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={section.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 font-['Playfair_Display']">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 font-['Inter']">
                    {section.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-purple-50 group-hover:border-purple-200 group-hover:text-purple-600 transition-all duration-300"
                  >
                    Открыть раздел
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12 font-['Playfair_Display']">
            Портфолио в цифрах
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-gray-600 font-['Inter']">Публикаций</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">3</div>
              <div className="text-gray-600 font-['Inter']">Видеосюжета</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
              <div className="text-gray-600 font-['Inter']">Творческих работ</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-gray-600 font-['Inter']">Фотографий</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Icon name="Mail" size={24} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
            <Icon name="Phone" size={24} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
            <Icon name="ExternalLink" size={24} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
          </div>
          <p className="text-gray-400 font-['Inter']">
            © 2024 Портфолио для поступления на журналистику
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;