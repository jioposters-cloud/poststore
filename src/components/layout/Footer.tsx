import { Link } from 'react-router-dom';
import { Instagram, Facebook, Send, MessageCircle } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/statusring.in', icon: Instagram },
  { name: 'Facebook', href: 'https://www.facebook.com/people/Status-Ring/100091664551945/', icon: Facebook },
  { name: 'Telegram', href: 'https://t.me/+MdMMOnmWX_9lM2I1', icon: Send },
  { name: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=919714293282', icon: MessageCircle },
];

const footerLinks = {
  shop: [
    { name: 'Dental Posters', href: '/shop?category=dental' },
    { name: 'Skin Posters', href: '/shop?category=skin' },
    { name: 'Artworks', href: '/shop?category=artworks' },
    { name: '3D Printed', href: '/shop?category=3d-printed' },
    { name: 'Books', href: '/shop?category=books' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping Policy', href: '/shipping' },
    { name: 'Returns & Refunds', href: '/returns' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-lg font-bold text-primary-foreground">SR</span>
              </div>
              <div>
                <h2 className="text-lg font-bold">STATUS RING</h2>
                <p className="text-xs text-secondary-foreground/70">Posters</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Best products for your presentation. Premium quality dental, skin, and educational posters.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                href="https://www.amazon.in/s?me=A178KJ0TJ3NFQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                Also available on Amazon →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} STATUS RING Posters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
