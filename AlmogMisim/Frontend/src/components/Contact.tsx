import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "שדה זה חובה";
    if (!formData.email) newErrors.email = "שדה זה חובה";
    if (!formData.phone) newErrors.phone = "שדה זה חובה";
    if (!formData.message) newErrors.message = "שדה זה חובה";

    // Optionally add email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'כתובת דוא"ל אינה תקינה'; // Added semicolon here
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Display the pop-up message

      setShowPopup(true);

      // Hide the pop-up after 3 seconds
      setTimeout(() => setShowPopup(false), 3000);
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Optionally, reset the form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <section className="py-24 bg-luxury-light relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">צור קשר</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          נשמח לעמוד לרשותכם ולסייע בכל שאלה או בקשה
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-xl shadow-luxury">
            <h3 className="text-2xl font-bold mb-8 text-primary-900">
              פרטי התקשרות
            </h3>
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="flex items-center p-4 bg-primary-50 rounded-lg">
                <Phone className="w-6 h-6 text-primary-600 ml-4" />
                <div>
                  <div className="font-semibold">טלפון</div>
                  <div className="text-gray-600">02-6722033</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-primary-50 rounded-lg">
                <Mail className="w-6 h-6 text-primary-600 ml-4" />
                <div>
                  <div className="font-semibold">דוא"ל</div>
                  <div className="text-gray-600">almogmisim@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-primary-50 rounded-lg">
                <MapPin className="w-6 h-6 text-primary-600 ml-4" />
                <div>
                  <div className="font-semibold">כתובת</div>
                  <div className="text-gray-600">התעשייה 8, ירושלים</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-primary-50 rounded-lg">
                <Clock className="w-6 h-6 text-primary-600 ml-4" />
                <div>
                  <div className="font-semibold">שעות פעילות</div>
                  <div className="text-gray-600">א'-ה' 9:00-17:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-white p-10 rounded-xl shadow-luxury"
            onSubmit={handleFormSubmit}
            noValidate
          >
            <h3 className="text-2xl font-bold mb-8 text-primary-900">
              השאירו פרטים
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  שם מלא
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  } focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  דוא"ל
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  טלפון
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  הודעה
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors h-32`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
              >
                שליחת הודעה
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Pop-up Message */}
      {showPopup && (
        <div
          className="fixed bottom-8 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-md animate-bounce"
          style={{
            left: "40%",
            alignItems: "center",
            backgroundColor: "#E8EAF6", // Light blue background
            color: "#000000", // Black text color
            border: "2px solid #565C65", // Dark gray border
            zIndex: 1000,
          }}
        >
          ההודעה נשלחה בהצלחה!
        </div>
      )}
    </section>
  );
}

export default Contact;
