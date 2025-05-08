
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("story");
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">关于我</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="story" className="w-full" onValueChange={setActiveTab}>
            <TabsList className={`grid w-full ${isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-3'} mb-8`}>
              <TabsTrigger value="story" className="py-3">关于我</TabsTrigger>
              <TabsTrigger value="education" className="py-3">教育背景</TabsTrigger>
              <TabsTrigger value="experience" className="py-3">工作经历</TabsTrigger>
            </TabsList>
            

<TabsContent value="story">
  <Card className="p-4 md:p-6">
    <h3 className="text-xl font-semibold mb-4">Who am I</h3>
    <ul className="list-disc pl-5 md:pl-6 text-gray-700 space-y-2">
      <li>
        Hey, I'm <a href="https://wcowin.work/VitePress/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Wcowin</a> ~
      </li>
      <li>咖啡重度爱好者</li>
      <li>
        热爱折腾技术/数学，目前研究领域为
        <a href="https://ctf-wiki.org/crypto/introduction/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">密码学</a>
      </li>
      <li>读书明志可识春秋；诗词爱好者；喜欢村上春树；擅长羽毛球</li>
      <li>清醒，知趣，明得失，知进退</li>
    </ul>
  </Card>
</TabsContent>
            
            <TabsContent value="education">
              <Card className="p-4 md:p-6">
                <h3 className="text-xl font-semibold mb-4">教育背景</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-3 md:pl-4">
                    <h4 className="font-semibold">电子信息工程 | 学士学位</h4>
                    <p className="text-gray-600">CTBU | 2021 - 2025</p>
                    <p className="text-gray-700 mt-2">专注于电子研究，毕业论文获得优秀评价。</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-3 md:pl-4">
                    <h4 className="font-semibold">密码学 | 硕士学位</h4>
                    <p className="text-gray-600">XDU | 2026 - 至今</p>
                    <p className="text-gray-700 mt-2">未完待续</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="experience">
              <Card className="p-4 md:p-6">
                <h3 className="text-xl font-semibold mb-4">工作经历</h3>
                <div className="space-y-6">

                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                      <h4 className="font-semibold">前端工程师</h4>
                      <span className="text-gray-600 text-sm md:text-base mt-1 md:mt-0">2022 - 至今</span>
                    </div>
                    <p className="text-blue-600 mb-2">Wcowin科技创新公司</p>
                    <p className="text-gray-700">负责核心产品开发，优化性能并实现新功能，独立开发者。</p>
                  </div>

                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
