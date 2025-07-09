
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("story");
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">关于我</h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="story" className="w-full" onValueChange={setActiveTab}>
            <TabsList className={`${isMobile ? 'flex flex-col h-auto bg-muted/50 p-2 gap-2' : 'grid grid-cols-3 h-10 bg-muted p-1'} w-full mb-6 md:mb-8`}>
              <TabsTrigger 
                value="story" 
                className={`${isMobile ? 'w-full h-12 text-sm font-medium justify-center' : 'h-8'} transition-all`}
              >
                关于我
              </TabsTrigger>
              <TabsTrigger 
                value="education" 
                className={`${isMobile ? 'w-full h-12 text-sm font-medium justify-center' : 'h-8'} transition-all`}
              >
                教育背景
              </TabsTrigger>
              <TabsTrigger 
                value="experience" 
                className={`${isMobile ? 'w-full h-12 text-sm font-medium justify-center' : 'h-8'} transition-all`}
              >
                工作经历
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="story">
              <Card className="p-4 md:p-6 border-border bg-card">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-card-foreground">Who am I</h3>
                <ul className="list-disc pl-4 md:pl-6 text-muted-foreground space-y-2 md:space-y-3">
                  <li className="text-sm md:text-base">
                    Hey, I'm <a href="https://wcowin.work/VitePress/" className="text-primary underline hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">Wcowin</a> ~
                  </li>
                  <li className="text-sm md:text-base">咖啡重度爱好者</li>
                  <li className="text-sm md:text-base">
                    热爱折腾技术/数学，目前研究领域为
                    <a href="https://ctf-wiki.org/crypto/introduction/" className="text-primary underline hover:text-primary/80 transition-colors ml-1" target="_blank" rel="noopener noreferrer">密码学</a>
                  </li>
                  <li className="text-sm md:text-base">读书明志可识春秋；诗词爱好者；喜欢村上春树；擅长羽毛球</li>
                  <li className="text-sm md:text-base">清醒，知趣，明得失，知进退</li>
                </ul>
              </Card>
            </TabsContent>
            
            <TabsContent value="education">
              <Card className="p-4 md:p-6 border-border bg-card">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-card-foreground">教育背景</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="border-l-4 border-primary pl-3 md:pl-4">
                    <h4 className="font-semibold text-card-foreground text-sm md:text-base">电子信息工程 | 学士学位</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">CTBU | 2021 - 2025</p>
                    <p className="text-muted-foreground mt-2 text-sm md:text-base">专注于电子研究，毕业论文获得优秀评价。</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-3 md:pl-4">
                    <h4 className="font-semibold text-card-foreground text-sm md:text-base">密码学 | 硕士学位</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">XDU | 2026 - 至今</p>
                    <p className="text-muted-foreground mt-2 text-sm md:text-base">未完待续</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="experience">
              <Card className="p-4 md:p-6 border-border bg-card">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-card-foreground">工作经历</h3>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h4 className="font-semibold text-card-foreground text-sm md:text-base">前端工程师</h4>
                      <span className="text-muted-foreground text-xs md:text-sm mt-1 md:mt-0">2022 - 至今</span>
                    </div>
                    <p className="text-primary mb-2 font-medium text-sm md:text-base">Wcowin科技创新公司</p>
                    <p className="text-muted-foreground text-sm md:text-base">负责核心产品开发，优化性能并实现新功能，独立开发者。</p>
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
