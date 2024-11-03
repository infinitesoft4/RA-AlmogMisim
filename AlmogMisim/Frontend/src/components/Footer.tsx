import React from "react";

function Footer() {
  return (
    <footer className="bg-luxury text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">אלמוג מיסים</h3>
            <p className="text-primary-200">
              משרד הנהלת חשבונות וייעוץ מס מוביל, המעניק שירות מקצועי ואישי מזה
              25 שנה
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">שעות פעילות</h3>
            <div className="space-y-2 text-primary-200">
              <p>ימים א'-ה': 9:00-18:00</p>
              <p>שישי ושבת: המשרד סגור</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">ניווט מהיר</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-primary-200 hover:text-white transition-colors"
              >
                דף הבית
              </a>
              <a
                href="#services"
                className="block text-primary-200 hover:text-white transition-colors"
              >
                שירותים
              </a>
              <a
                href="#about"
                className="block text-primary-200 hover:text-white transition-colors"
              >
                אודות
              </a>
              <a
                href="#contact"
                className="block text-primary-200 hover:text-white transition-colors"
              >
                צור קשר
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 text-center">
          <p className="text-primary-200">
            © 2024 אלמוג מיסים. כל הזכויות שמורות.
          </p>
          <p className="mt-4 text-lg text-white bg-primary-900 px-4 py-2 rounded-md shadow-md">
            פותחים את הדלתות לעתיד דיגיטלי עם <strong>infiniteSoft</strong>!
            פתרונות תוכנה מתקדמים לכל הצרכים שלך.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
