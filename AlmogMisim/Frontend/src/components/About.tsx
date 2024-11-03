import React from "react";
import { Users, Award, Clock, Shield } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-16 h-16 text-primary-600" />,
    title: "צוות מקצועי",
    value: "5+",
    description: "מומחים בתחומם",
  },
  {
    icon: <Award className="w-16 h-16 text-primary-600" />,
    title: "מומחיות",
    value: "1000+",
    description: "לקוחות מרוצים",
  },
  {
    icon: <Clock className="w-16 h-16 text-primary-600" />,
    title: "ניסיון",
    value: "25",
    description: "שנות ניסיון",
  },
  {
    icon: <Shield className="w-16 h-16 text-primary-600" />,
    title: "אמינות",
    value: "100%",
    description: "שביעות רצון",
  },
];

function About() {
  return (
    <section className="py-24 bg-luxury-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">אודותינו</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          משרד אלמוג מיסים מוביל בתחום הנהלת החשבונות וייעוץ המס כבר למעלה מ-25
          שנה
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-luxury hover:shadow-luxury-hover transition-all duration-300 hover-lift text-center"
            >
              <div className="flex justify-center mb-6">{stat.icon}</div>
              <div className="text-4xl font-bold text-primary-900 mb-2">
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
