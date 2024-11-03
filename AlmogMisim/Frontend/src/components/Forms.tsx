import React from 'react';
import { FileText, Download } from 'lucide-react';

const forms = [
  {
    title: 'טופס פתיחת תיק',
    description: 'טופס להתחלת התקשרות עם המשרד',
    downloadUrl: '#'
  },
  {
    title: 'טופס דיווח שנתי',
    description: 'טופס לדיווח הכנסות שנתי',
    downloadUrl: '#'
  },
  {
    title: 'בקשת שירותים נוספים',
    description: 'טופס להזמנת שירותים נוספים',
    downloadUrl: '#'
  }
];

function Forms() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">טפסים</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {forms.map((form, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow">
              <FileText className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-3">{form.title}</h3>
              <p className="text-gray-600 text-center mb-4">{form.description}</p>
              <button className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                הורדה
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Forms;