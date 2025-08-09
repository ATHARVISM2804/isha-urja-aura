import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-amber-900/30 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <style>
        {`
        @keyframes socialGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(139, 69, 19, 0.2); }
          50% { box-shadow: 0 0 25px rgba(139, 69, 19, 0.3), 0 0 35px rgba(139, 69, 19, 0.15); }
        }
        .social-icon {
          background: linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(160, 82, 45, 0.08));
          border: 1px solid rgba(139, 69, 19, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
        }
        .social-icon:hover {
          animation: socialGlow 2s ease-in-out infinite;
          transform: translateY(-3px) scale(1.15);
          background: linear-gradient(135deg, rgba(139, 69, 19, 0.2), rgba(160, 82, 45, 0.15));
          border: 1px solid rgba(139, 69, 19, 0.5);
        }
        .footer-link {
          transition: all 0.3s ease;
          position: relative;
          color: rgba(92, 48, 15, 0.8);
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #d97706, #b45309);
          transition: width 0.3s ease;
        }
        .footer-link:hover::after {
          width: 100%;
        }
        .footer-link:hover {
          color: #8b4513;
          transform: translateX(4px);
        }
        .newsletter-input {
          background: linear-gradient(135deg, rgba(255,255,255,0.6), rgba(139, 69, 19, 0.05));
          border: 1px solid rgba(139, 69, 19, 0.3);
          backdrop-filter: blur(10px);
        }
        .newsletter-input:focus {
          border: 1px solid rgba(139, 69, 19, 0.6);
          box-shadow: 0 0 20px rgba(139, 69, 19, 0.2);
        }
        .premium-button {
          background: linear-gradient(135deg, #8b4513, #a0522d);
          transition: all 0.3s ease;
        }
        .premium-button:hover {
          background: linear-gradient(135deg, #654321, #8b4513);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139, 69, 19, 0.3);
        }
        `}
      </style>
      
      <div className="container grid gap-12 py-16 md:grid-cols-4">
        <div className="space-y-6">
          <div>
            <img 
              src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1754750548/asgtehj_gu63sc.jpg"
              alt="Isha Urja"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-base text-amber-900/80 leading-relaxed">
              Premium Ayurvedic skincare and wellness crafted with devotion to nature and ancient wisdom.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-amber-900/70">
              <MapPin className="h-4 w-4 text-amber-700" />
              <span className="text-sm">New Delhi, India</span>
            </div>
            <div className="flex items-center gap-3 text-amber-900/70">
              <Phone className="h-4 w-4 text-amber-700" />
              <span className="text-sm">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-amber-900/70">
              <Mail className="h-4 w-4 text-amber-700" />
              <span className="text-sm">hello@ishaurja.com</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="social-icon p-3 rounded-xl group">
              <Instagram className="h-5 w-5 text-amber-800 group-hover:text-amber-900 transition-colors" />
            </a>
            <a href="#" className="social-icon p-3 rounded-xl group">
              <Facebook className="h-5 w-5 text-amber-800 group-hover:text-amber-900 transition-colors" />
            </a>
            <a href="#" className="social-icon p-3 rounded-xl group">
              <Twitter className="h-5 w-5 text-amber-800 group-hover:text-amber-900 transition-colors" />
            </a>
            <a href="#" className="social-icon p-3 rounded-xl group">
              <Linkedin className="h-5 w-5 text-amber-800 group-hover:text-amber-900 transition-colors" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-semibold text-xl text-amber-900">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="/shop" className="footer-link">Shop All Products</a></li>
            <li><a href="/gifting" className="footer-link">Gift Collections</a></li>
            <li><a href="/custom-order" className="footer-link">Custom Orders</a></li>
            <li><a href="/blog" className="footer-link">Wellness Blog</a></li>
            <li><a href="/about" className="footer-link">Our Story</a></li>
            <li><a href="/contact" className="footer-link">Contact Us</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-semibold text-xl text-amber-900">Customer Care</h4>
          <ul className="space-y-3">
            <li><a href="#" className="footer-link">Shipping & Delivery</a></li>
            <li><a href="#" className="footer-link">Returns & Exchanges</a></li>
            <li><a href="#" className="footer-link">Size Guide</a></li>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Terms of Service</a></li>
            <li><a href="#" className="footer-link">FAQ</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-semibold text-xl text-amber-900">Stay Connected</h4>
          <p className="text-amber-900/70 leading-relaxed">
            Subscribe to our newsletter for exclusive rituals, wellness tips, and special offers.
          </p>
          <form className="space-y-4">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input w-full rounded-xl px-4 py-3 text-amber-900 placeholder-amber-700/60 focus:outline-none focus:ring-2 focus:ring-amber-700/50" 
              />
            </div>
            <button className="premium-button w-full rounded-xl px-6 py-3 font-semibold text-white">
              Subscribe to Newsletter
            </button>
          </form>
          <p className="text-xs text-amber-800/60">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>

      <div className="border-t border-amber-900/20 bg-gradient-to-r from-amber-100/50 via-orange-100/50 to-amber-100/50 backdrop-blur-sm">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-amber-900/70">
              © {new Date().getFullYear()} Isha Urja. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-amber-900/70">
              <a href="#" className="hover:text-amber-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-amber-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-amber-900 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
