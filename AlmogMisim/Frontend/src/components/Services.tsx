import React from 'react';
import { Calculator, FileSpreadsheet, FileCheck, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <Calculator className="w-12 h-12 text-primary-600" />,
    title: 'ייעוץ מס',
    description: 'ייעוץ מס מקצועי ומותאם אישית לצרכי הלקוח, תכנון מס אופטימלי'
  },
  {
    icon: <FileSpreadsheet className="w-12 h-12 text-primary-600" />,
    title: 'הנהלת חשבונות',
    description: 'ניהול חשבונות מקצועי ומדויק לעסקים ויחידים, דוחות פיננסיים'
  },
  {
    icon: <FileCheck className="w-12 h-12 text-primary-600" />,
    title: 'דוחות שנתיים',
    description: 'הכנה והגשת דוחות שנתיים לרשויות המס, ליווי מול רשויות המס'
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-primary-600" />,
    title: 'תכנון פיננסי',
    description: 'תכנון וייעוץ פיננסי מקיף, אסטרטגיות לצמיחה עסקית'
  }
];

function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">השירותים שלנו</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          אנו מציעים מגוון רחב של שירותים מקצועיים בתחום המיסים והנהלת החשבונות
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-white rounded-xl shadow-luxury hover:shadow-luxury-hover transition-shadow duration-300 hover-lift">
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-center mb-4">{service.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;