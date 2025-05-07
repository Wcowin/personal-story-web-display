
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("story");
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">关于我</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="story" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="story">我的故事</TabsTrigger>
              <TabsTrigger value="education">教育背景</TabsTrigger>
              <TabsTrigger value="experience">工作经历</TabsTrigger>
            </TabsList>
            
            <TabsContent value="story">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">我的人生旅程</h3>
                <p className="text-gray-700 mb-4">
                  我从小对技术充满好奇心，总是喜欢拆解玩具和电子设备，探索它们的工作原理。这种好奇心引导我走上了软件工程的道路。
                </p>
                <p className="text-gray-700 mb-4">
                  在大学期间，我发现自己对解决问题和创造有用的软件产品充满热情。毕业后，我加入了一家科技创业公司，开始了我的职业生涯。
                </p>
                <p className="text-gray-700">
                  如今，我致力于开发高质量、用户友好的软件解决方案，帮助企业和个人实现数字化转型。我相信技术的力量可以改变世界，让生活变得更美好。
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="education">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">教育背景</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold">计算机科学与技术 | 硕士学位</h4>
                    <p className="text-gray-600">北京大学 | 2018 - 2020</p>
                    <p className="text-gray-700 mt-2">专注于人工智能和机器学习研究，毕业论文获得优秀评价。</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold">软件工程 | 学士学位</h4>
                    <p className="text-gray-600">华中科技大学 | 2014 - 2018</p>
                    <p className="text-gray-700 mt-2">获得学院奖学金，参与多个校级软件开发竞赛并获奖。</p>
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
                      <h4 className="font-semibold">高级软件工程师</h4>
                      <span className="text-gray-600">2022 - 至今</span>
                    </div>
                    <p className="text-blue-600 mb-2">科技创新公司</p>
                    <p className="text-gray-700">负责核心产品开发，优化性能并实现新功能，带领3人开发团队。</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-semibold">软件开发工程师</h4>
                      <span className="text-gray-600">2020 - 2022</span>
                    </div>
                    <p className="text-blue-600 mb-2">领先科技有限公司</p>
                    <p className="text-gray-700">开发和维护企业级应用程序，参与完整软件开发生命周期。</p>
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
