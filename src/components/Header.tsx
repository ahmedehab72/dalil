import { useState, useEffect } from "react";
import { Menu, X, Building2 } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", active: true },
    { name: "Companies", href: "/companies", active: false },
    // { name: "About", href: "#about", active: false },
    // { name: "Blog", href: "#blog", active: false },
    { name: "Contact", href: "/contact", active: false },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-lg border-b border-purple-100"
          : "bg-white"
      }`}
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="px-6 py-2.5 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, #404e7a 0%, #4d5e99ff 100%)",
              }}
            >
              List Your Company
            </button>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-md font-medium transition-colors duration-200 ${
                  item.active
                    ? "text-[#404e7a]"
                    : "text-gray-700 hover:text-[#404e7a]"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
            {/* logo */}
          <div className="flex items-center space-x-3">
            <div
              className="w-22 h-10 p-1 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
              }}
            >
              {/* <Building2 className="w-6 h-6 text-white" /> */}
              <img src="/logoImage.jpg" alt="logo image" />
            </div>
            <div>
              {/* <h1 className="text-xl font-bold text-[#404e7a]">DALEEL</h1> */}
              {/* <p className="text-xs text-[#404e7a]">Construction Directory</p> */}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    item.active
                      ? "text-[#404e7a]"
                      : "text-gray-700 hover:text-[#404e7a]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                className="self-start px-6 py-2.5 text-white font-medium rounded-lg transition-all duration-200"
                style={{
                  background:
                    "linear-gradient(135deg, #404e7a 0%, #404e7a 100%)",
                }}
              >
                List Your Company
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
