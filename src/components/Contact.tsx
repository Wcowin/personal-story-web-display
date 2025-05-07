
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">联系我</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            有任何问题或合作机会，欢迎随时与我联系，我会尽快回复您。
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">联系信息</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Mail className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-800 mb-1">电子邮件</h4>
                <p className="text-gray-600">wcowin@qq.com</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Phone className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-800 mb-1">电话</h4>
                <p className="text-gray-600">+86 189 3953 3255</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <MapPin className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-800 mb-1">地址</h4>
                <p className="text-gray-600">重庆市南岸区学府大道19号</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
