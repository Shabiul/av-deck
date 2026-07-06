'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICE_LIST } from '@/data/services';
import { GALLERY_IMAGES } from '@/data/gallery';
import { TESTIMONIALS } from '@/data/testimonials';

const STATS = [
  { num: '30+', label: 'Years' },
  { num: '2000+', label: 'Events Delivered' },
  { num: '40+', label: 'Cities Served' },
];

const FEATURED = GALLERY_IMAGES.slice(0, 6);
const t = TESTIMONIALS[0];

export default function Home() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline preload="auto" poster="/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg">
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <motion.div className="hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
          <h1>Audio Visual &amp; Event Technology Since 1992</h1>
          <p>Professional sound systems, stage lighting, LED video walls, and technical crew for events across India. 30+ years of dependable service.</p>
          <div className="hero-actions">
            <Link href="/services" className="btn-pill btn-crimson">Our Services</Link>
            <Link href="/work" className="btn-pill">See Our Work</Link>
          </div>
        </motion.div>
      </section>

      {/* ═══ BUSINESS DIVISIONS STRIP ═══ */}
      <section className="diversification">
        <div className="section-center">
          <span className="eyebrow">Diversification</span>
          <h2 className="heading-crimson">Our Business Divisions</h2>
          <p>Rental of Sound, Lighting &amp; Audio Visual Equipment &nbsp;|&nbsp; Event Production &amp; Technical Services</p>
        </div>
      </section>

      {/* ═══ ABOUT TEASER ═══ */}
      <section className="section deep-section">
        <div className="section-center" style={{ maxWidth: '820px' }}>
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>What we&apos;re all about</span>
          <h2 className="heading-crimson">Audio Visual &amp; Event Technology</h2>
          <p className="section-lead">
            AV-TEC has delivered professional audio visual and event technology since 1992 — supporting concerts,
            conferences, weddings, exhibitions, and large-scale productions with dependable equipment and steady technical support.
          </p>
          <div className="stat-row">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '32px' }}>
            <Link href="/about" className="btn-pill">Read Our Story</Link>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW ═══ */}
      <section className="section services-section">
        <div className="services-heading">
          <span className="eyebrow">Our Services</span>
          <h2>Practical AV Support for Real Events</h2>
        </div>
        <div className="services-grid">
          {SERVICE_LIST.map((svc) => (
            <Link key={svc.slug} href={`/services/${svc.slug}`} className="service-card">
              <img src={svc.hero} alt={svc.title} loading="lazy" />
              <h3>{svc.title}</h3>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link href="/services" className="btn-pill">All Services</Link>
        </div>
      </section>

      {/* ═══ FEATURED WORK STRIP ═══ */}
      <section className="section gallery-section">
        <div className="gallery-heading">
          <span className="eyebrow">Our Work</span>
          <h2>Recent Productions</h2>
        </div>
        <div className="featured-strip">
          {FEATURED.map((img) => (
            <Link key={img.src} href="/gallery" className="gallery-thumb">
              <img src={img.src} alt={img.title} loading="lazy" />
              <span className="thumb-label">{img.title}<small>{img.service}</small></span>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link href="/gallery" className="btn-pill btn-crimson">View Full Gallery</Link>
        </div>
      </section>

      {/* ═══ TESTIMONIAL HIGHLIGHT ═══ */}
      <section className="section testimonials-section">
        <div className="section-bg"><img src="/gallery/432d250b-2aca-433c-8a97-2261da7f376a.jpg" alt="" aria-hidden="true" loading="lazy" /></div>
        <div className="testimonial-content">
          <span className="eyebrow">Testimonials</span>
          <h2>What Our Clients Say</h2>
          <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
          <div className="testimonial-avatar">{t.initials}</div>
          <p className="testimonial-name">{t.name}</p>
          <p className="testimonial-role">{t.role}</p>
          <div style={{ marginTop: '28px' }}>
            <Link href="/work" className="btn-pill">See Proof of Work</Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ═══ */}
      <section className="cta-band">
        <div className="section-center" style={{ maxWidth: '640px' }}>
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>Get In Touch</span>
          <h2>Let&apos;s Plan Your Event</h2>
          <p className="section-lead">Tell us about your event and we&apos;ll shape the technical solution — sound, light, video, and crew.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-pill btn-crimson">Get a Quote</Link>
            <Link href="/rental" className="btn-pill">Rental Inquiry</Link>
          </div>
        </div>
      </section>

      {/* ═══ WHATSAPP FLOAT ═══ */}
      <a className="whatsapp-float" href="https://wa.me/919876543210?text=Hi%20AV-TEC%2C%20I%20would%20like%20a%20quote" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.6L1 23l5.5-1.4A11.8 11.8 0 0 0 20.5 3.5Zm-8.7 16.2a9.6 9.6 0 0 1-4.9-1.3l-.4-.2-3.2.8.9-3.1-.2-.4a9.7 9.7 0 1 1 7.8 4.2Zm5.3-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.4.2-.7.1a7.9 7.9 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.5.1-.7l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L9 4.9c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.1-1.3-.1-.1-.2-.2-.5-.3Z" /></svg>
      </a>
    </div>
  );
}
