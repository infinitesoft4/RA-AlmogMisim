import React from 'react';
import { Wave } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')"
           }}>
        <span className="w-full h-full absolute opacity-50 bg-blue-900"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 mx-auto text-center">
            <div className="flex justify-center items-center">
              <h1 className="text-white font-semibold text-5xl">
                ברוכים הבאים למשרד 'אלמוג מיסים'!
              </h1>
              <Wave className="h-8 w-8 text-white mr-2" />
            </div>
            <div className="mt-4 text-lg text-gray-200">
              <p>צוות מומחה עם ניסיון של מעל 25 שנה בתחום הנהלת החשבונות וייעוץ המס</p>
              <p className="mt-2">אנו מספקים שירותי הנהלת חשבונות מקצועית וייעוץ מס אישי ומותאם</p>
            </div>
            <div className="mt-8">
              <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                צור קשר עכשיו
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;