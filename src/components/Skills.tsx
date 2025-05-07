
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "SQL/数据库", level: 70 },
  ];
  
  const softSkills = [
    "团队协作",
    "问题解决",
    "项目管理",
    "沟通能力",
    "时间管理",
    "适应能力",
    "创新思维"
  ];
  
  const interests = [
    "人工智能",
    "机器学习",
    "用户体验设计",
    "创业",
    "阅读",
    "旅行",
    "摄影",
    "音乐"
  ];
  
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">技能与兴趣</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">专业技能</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">软技能</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm py-2 px-4 bg-white border-blue-200 hover:bg-blue-50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">兴趣爱好</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge 
                    key={index}
                    className="text-sm py-2 px-4 bg-blue-100 text-blue-800 hover:bg-blue-200 border-none"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
