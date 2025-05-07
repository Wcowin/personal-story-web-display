
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
              <TabsTrigger value="story">关于我</TabsTrigger>
              <TabsTrigger value="education">教育背景</TabsTrigger>
              <TabsTrigger value="experience">工作经历</TabsTrigger>
            </TabsList>
            

<TabsContent value="story">
  <Card className="p-6">
    <h3 className="text-xl font-semibold mb-4">Who am I</h3>
    {/* <p className="text-gray-700 mb-4">
      从小我就对技术充满好奇，喜欢钻研计算机。这份好奇心引领我走上了编程之路。在大学期间，我发现自己热爱解决问题，也喜欢创造有用的软件产品。如今，我专注于密码学研究，坚信技术的力量能够改变世界，让生活变得更美好。
    </p> */}
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
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
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">教育背景</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold">电子信息工程 | 学士学位</h4>
                    <p className="text-gray-600">CTBU | 2021 - 2025</p>
                    <p className="text-gray-700 mt-2">专注于电子研究，毕业论文获得优秀评价。</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold">密码学 | 硕士学位</h4>
                    <p className="text-gray-600">XDU | 2026 - 至今</p>
                    <p className="text-gray-700 mt-2">未完待续</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="experience">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">工作经历</h3>
                <div className="space-y-6">

                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-semibold">前端工程师</h4>
                      <span className="text-gray-600">2022 - 至今</span>
                    </div>
                    <p className="text-blue-600 mb-2">Wcowin科技创新公司</p>
                    <p className="text-gray-700">负责核心产品开发，优化性能并实现新功能，独立开发者。</p>
                  </div>
                  
                  {/* <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-semibold">软件开发工程师</h4>
                      <span className="text-gray-600">2020 - 2022</span>
                    </div>
                    <p className="text-blue-600 mb-2">领先科技有限公司</p>
                    <p className="text-gray-700">开发和维护企业级应用程序，参与完整软件开发生命周期。</p>
                  </div> */}

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
