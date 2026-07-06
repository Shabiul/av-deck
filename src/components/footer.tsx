import Link from 'next/link';

const SOCIAL = {
  linkedin: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM20 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0014 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z',
  facebook: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  instagram: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z',
  youtube: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27z',
};

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Work', href: '/work' },
  { label: 'Rental', href: '/rental' },
  { label: 'Contact', href: '/contact' },
];

const SocialIcon = ({ name }: { name: keyof typeof SOCIAL }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d={SOCIAL[name]} /></svg>
);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <img className="footer-logo" src="/logo/av-tec-logo-web.png" alt="AV-TEC" width="200" height="65" />
        <hr className="tricolor-rule" aria-hidden="true" />
        <nav className="footer-nav" aria-label="Footer navigation">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
        <div className="footer-social-row">
          <span className="footer-social-label">Follow Us</span>
          <div className="footer-social">
            {(['linkedin', 'facebook', 'instagram', 'youtube'] as const).map((s) => (
              <a key={s} href="#" aria-label={s}><SocialIcon name={s} /></a>
            ))}
          </div>
        </div>
        <div className="footer-address">
          Bengaluru, Karnataka, India<br />
          <a href="tel:+919876543210">+91 98765 43210</a> &nbsp;|&nbsp; <a href="mailto:hello@av-tec.in">hello@av-tec.in</a>
        </div>
        <p className="footer-origin">Proudly Indian &middot; Bengaluru &middot; Since 1992</p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} AV-TEC. All rights reserved.</p>
      </div>
    </footer>
  );
}
