
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 animate-fade-in">
              你好，我是<span className="text-blue-600">王科文</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg animate-fade-in" style={{animationDelay: "0.2s"}}>
              软件开发工程师 | 咖啡爱好者
            </p>
            <div className="flex justify-center md:justify-start space-x-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <a href="#contact">联系我</a>
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <a href="#about">了解更多</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-scale-in">
              <img 
                src="https://s1.imagehub.cc/images/2025/05/05/e7166d5970748332f6e8097efc04a5cd.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-blue-600 hover:text-blue-800">
            <ArrowDownCircle size={36} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
