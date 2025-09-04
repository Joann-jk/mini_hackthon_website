import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import FooterBg from "../assets/image.png";

export default function Footer() {
  return (
    <footer
      className="relative text-gray-300 py-16 mt-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left - Event Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">HackTillDawn</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            An 18-hour mini hackathon organized as part of{" "}
            <span className="text-red-400 font-medium">Takshak 2025</span>.  
            Code. Innovate. Sprint to the finish!
          </p>
        </div>

        {/* Middle - Contact */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <a
            href="https://wa.me/919037820802"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors mb-2"
          >
            <FaWhatsapp size={20} />
            <span>Shawn Cheriyan Sony</span>
          </a>
          <a
            href="https://wa.me/919446946683"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
          >
            <FaWhatsapp size={20} />
            <span>Aharon Johnson</span>
          </a>
        </div>

        {/* Right - Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-red-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-red-400 transition">About</a></li>
            <li><a href="#problem-statements" className="hover:text-red-400 transition">Problem Statements</a></li>
            <li><a href="#countdown" className="hover:text-red-400 transition">Countdown</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative mt-12 border-t border-red-500/30 pt-6 text-center text-gray-400 text-sm">
        © 2025 Takshak. All Rights Reserved. <br />
        Developed by <span className="text-red-400 font-medium">Team HackTillDawn</span>
      </div>
    </footer>
  );
}
