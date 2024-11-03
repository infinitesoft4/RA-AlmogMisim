export const scrollToSection = (id, setIsOpen) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    if (setIsOpen) {
      setIsOpen(false); // Close mobile menu on click
    }
  }
};
