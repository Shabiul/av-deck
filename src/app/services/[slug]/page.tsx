import Link from 'next/link';
import { notFound } from 'next/navigation';

const SERVICES: Record<string, {
  title: string; hero: string; intro: string;
  features: { heading: string; text: string }[];
  equipment: string[];
  cta: string;
}> = {
  audio: {
    title: 'Audio Systems',
    hero: '/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg',
    intro: 'AV-TEC provides end-to-end professional sound reinforcement for events of every scale — from intimate corporate boardrooms to 50,000-capacity outdoor festivals. With over three decades of live-sound expertise and a partnership with D&B audiotechnik, we deliver crystal-clear audio tailored to your venue acoustics and audience size.',
    features: [
      { heading: 'Line Array Systems', text: 'Our D&B audiotechnik GSL, SL, J, and V-Series line arrays deliver consistent SPL coverage across large venues with minimal distortion. Each deployment includes full system design using ArrayCalc simulation to guarantee even coverage from front row to the back fence.' },
      { heading: 'Monitor & In-Ear Systems', text: 'Dedicated monitor world with Yamaha CL/PM series consoles and Shure PSM1000 in-ear systems. Our monitor engineers work directly with artists to ensure every performer hears exactly what they need on stage.' },
      { heading: 'Mixing & Processing', text: 'Front-of-house mixing on DiGiCo SD-Series and Yamaha RIVAGE PM consoles with full outboard processing. All systems include redundant signal paths, network audio distribution via Dante, and recording capability.' },
      { heading: 'Wireless Microphones', text: 'Shure Axient Digital and Sennheiser Digital 6000 wireless systems with automatic frequency coordination. We carry extensive inventory of handheld, lavalier, and headset microphones for any presenter count.' },
    ],
    equipment: ['D&B audiotechnik GSL / SL / J-Series line arrays', 'D&B SL subs & infra-subs', 'DiGiCo SD7 / SD12 mixing consoles', 'Yamaha RIVAGE PM10 / CL5', 'Shure Axient Digital wireless', 'Sennheiser Digital 6000', 'Shure PSM1000 in-ear monitors', 'Lake LM44 system processors', 'Dante network audio infrastructure', 'Crown / Powersoft amplification'],
    cta: 'Whether it\'s a 200-person conference or a 50,000-seat concert, our audio team designs and delivers systems that sound flawless. Get in touch for a custom quote.',
  },
  lighting: {
    title: 'Stage Lighting',
    hero: '/gallery/0fffa344-8289-404e-bec4-1fb754115443.jpg',
    intro: 'AV-TEC\'s lighting division transforms venues with intelligent lighting design — from elegant wash lighting for weddings to high-energy concert productions with moving heads, beam effects, and pixel-mapped LED fixtures. Our team of qualified lighting designers and programmers create immersive visual environments that enhance every moment.',
    features: [
      { heading: 'Intelligent Moving Lights', text: 'Full inventory of Robe, Clay Paky, and Martin moving head fixtures including spots, washes, and beam effects. Our designers use Capture and WYSIWYG pre-visualization to program complex cue sequences before arriving on site.' },
      { heading: 'LED & Pixel Mapping', text: 'Architectural LED wash lights, pixel bars, and strip fixtures with full Madrix pixel-mapping control. Create dynamic patterns, ambient washes, and synchronized effects across any surface or structure.' },
      { heading: 'Conventional & Follow Spots', text: 'Complete conventional lighting rig with ETC Source Four profiles, Fresnels, PARs, and Robert Juliat follow spots. Ideal for theatre, fashion shows, and events requiring precise beam control and warm color temperatures.' },
      { heading: 'Control & Dimming', text: 'grandMA3 and ChamSys MagicQ lighting consoles with ArtNet / sACN distribution. All systems include backup consoles, UPS power protection, and dimmer racks for conventional fixtures.' },
    ],
    equipment: ['Robe BMFL / MegaPointe moving heads', 'Clay Paky Sharpy / Mythos', 'Martin MAC Aura / Viper', 'ETC Source Four profiles & Fresnels', 'SGM P-6 / P-2 LED wash fixtures', 'Astera AX1 wireless pixel tubes', 'grandMA3 full-size console', 'ChamSys MagicQ MQ500M', 'Madrix pixel mapping controller', 'Robert Juliat Cyrano follow spots'],
    cta: 'From intimate wedding ambience to full-scale concert lighting rigs, our designers create visual experiences that captivate your audience. Contact us for a lighting design consultation.',
  },
  video: {
    title: 'Video & LED Walls',
    hero: '/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg',
    intro: 'AV-TEC delivers stunning visual impact through indoor and outdoor LED walls, projection mapping, camera systems, and live switching. Our video department handles everything from corporate presentation displays to massive festival screens, ensuring your content looks sharp and your message reaches every seat in the house.',
    features: [
      { heading: 'LED Wall Displays', text: 'Indoor fine-pitch LED panels (P1.9 – P3.9) and outdoor weatherproof LED walls (P4.8 – P10) in any configuration. Our flagship 20\' x 60\' LED wall has become a signature installation at major Indian events, delivering vibrant visuals visible in direct sunlight.' },
      { heading: 'Live Camera & IMAG', text: 'Broadcast-quality camera packages with Sony PXW-Z280 and PTZ cameras, Blackmagic ATEM constellation switchers, and full IMAG (Image Magnification) workflows. Multi-camera coverage with graphics overlay for corporate keynotes, concerts, and sports events.' },
      { heading: 'Projection Mapping', text: 'High-lumen Panasonic and Christie laser projectors for large-venue projection and 3D projection mapping. Transform building facades, stage sets, and architectural surfaces into dynamic canvases with Resolume and Disguise media servers.' },
      { heading: 'Content Management', text: 'Disguise and Resolume media servers for real-time content playback, generative visuals, and multi-surface mapping. Full content pre-production support including motion graphics, lower thirds, and presentation templates.' },
    ],
    equipment: ['Indoor LED panels P1.9 / P2.6 / P3.9', 'Outdoor LED panels P4.8 / P6 / P10', '20\' x 60\' flagship LED wall', 'Blackmagic ATEM 4 M/E Constellation', 'Sony PXW-Z280 broadcast cameras', 'PTZ Optics 30X NDI cameras', 'Panasonic PT-RQ35K laser projectors', 'Christie Crimson laser projectors', 'Disguise d3 media servers', 'Resolume Arena / Wire'],
    cta: 'From intimate conference screens to massive outdoor LED walls, our video team delivers visuals that make an impact. Reach out for a custom video solution.',
  },
  trussing: {
    title: 'Trussing & Rigging',
    hero: '/gallery/19b57f7c-e740-4d10-80f1-7e226abafcfd.jpg',
    intro: 'AV-TEC\'s structural department provides certified trussing, rigging, and staging solutions for events of all sizes. From ground-supported truss structures for outdoor festivals to flown rigging grids in concert halls, our team of certified riggers ensures every installation meets international safety standards while delivering the structural backbone your show needs.',
    features: [
      { heading: 'Truss Structures', text: 'Prolyte and Tyler Truss systems in 12" and 20.5" configurations — box truss, triangular, and circular segments for any design. Ground-supported arches, goal posts, and custom configurations built to your stage designer\'s specifications.' },
      { heading: 'Chain Hoists & Motors', text: 'CM Lodestar, Prolyft, and Movecat chain hoists from 0.5T to 2T capacity with certified load monitoring. All motors carry current load certificates and are operated by trained rigging personnel following PLASA safety guidelines.' },
      { heading: 'Staging & Decking', text: 'Modular staging platforms in various heights (0.6m – 2m) with adjustable legs, safety rails, and ADA-compliant ramps. Weather-protected outdoor stages with roof systems for festival and concert deployments.' },
      { heading: 'Custom Fabrication', text: 'In-house fabrication for custom set pieces, scenic elements, and branded structures. From corporate event backdrops to concert stage designs, our team builds what your creative vision demands.' },
    ],
    equipment: ['Prolyte H30V / H40V box truss', 'Tyler GT 12" and 20.5" truss', 'Prolyte MPT roof systems', 'CM Lodestar 1T chain hoists', 'Prolyft Aetos 500kg motors', 'Movecat D8+ variable speed hoists', 'Broadweigh load monitoring cells', 'Modular staging (Prolyte StageDex)', 'Crowd barriers & front-of-house systems', 'Scenic fabrication workshop'],
    cta: 'Safe, certified, and engineered for your event. Contact our rigging team for structural planning, load calculations, and a detailed quote.',
  },
  consultancy: {
    title: 'Tech Consultancy',
    hero: '/gallery/7900fd62-19bf-4ca3-aa5c-5a20b7b7b2b5.jpg',
    intro: 'AV-TEC\'s consultancy division brings three decades of technical expertise to your planning table. Whether you\'re designing a new venue, upgrading an existing AV installation, or planning a complex multi-day event, our consultants provide practical, budget-conscious advice grounded in real-world experience — not theoretical specifications.',
    features: [
      { heading: 'Venue Design & Acoustics', text: 'Acoustic analysis and AV system design for auditoriums, conference centres, houses of worship, and hospitality venues. We work with architects and interior designers from the blueprint stage to ensure optimal speaker placement, sight lines, and cable infrastructure.' },
      { heading: 'Event Technical Direction', text: 'Dedicated technical directors for complex events — managing timelines, crew coordination, vendor integration, and on-site troubleshooting. Our TDs have managed productions for India\'s largest corporate brands and international touring acts.' },
      { heading: 'System Architecture', text: 'Network audio (Dante/AVB), video distribution (NDI/SDI), lighting control (ArtNet/sACN), and IT infrastructure design. We specify, document, and oversee implementation of integrated AV systems that scale with your needs.' },
      { heading: 'Budget & Procurement', text: 'Equipment specification and vendor-neutral procurement guidance. We help you invest in the right gear at the right price point — whether you\'re building a rental inventory, outfitting a venue, or planning a one-time event.' },
    ],
    equipment: ['EASE acoustic modelling', 'ArrayCalc system simulation', 'AutoCAD / Vectorworks drafting', 'Dante network certification', 'PLASA / ESTA rigging standards', 'Project management & Gantt planning', 'Budget modelling & ROI analysis', 'Vendor evaluation & tendering', 'On-site commissioning & tuning', 'Staff training & documentation'],
    cta: 'Bring our 30+ years of experience to your next project. Schedule a consultation to discuss your venue, event, or AV investment.',
  },
  installations: {
    title: 'Installs & Integrations',
    hero: '/gallery/30bdfd59-7b60-4b0c-b87d-20193dedff55.jpg',
    intro: 'AV-TEC\'s installation division designs and delivers permanent AV solutions for corporate offices, conference rooms, auditoriums, houses of worship, hospitality venues, and educational institutions. From initial site survey through commissioning and training, we handle every stage of the integration process with a focus on reliability, usability, and long-term value.',
    features: [
      { heading: 'Conference & Boardroom AV', text: 'Integrated video conferencing with Poly, Cisco, and Crestron Flex systems. Wireless presentation (Barco ClickShare, Mersive Solstice), ceiling microphone arrays, and automated room control via Crestron or Extron processors.' },
      { heading: 'Auditorium & Worship', text: 'Complete sound, lighting, and video systems for auditoriums and houses of worship. Installed line arrays, architectural lighting, fixed projection or LED displays, and broadcast-ready camera systems with streaming capability.' },
      { heading: 'Digital Signage & Displays', text: 'Samsung, LG, and NEC commercial display networks with BrightSign or Scala content management. Lobby displays, wayfinding kiosks, menu boards, and video walls with remote management and scheduling.' },
      { heading: 'Network & Control Systems', text: 'Crestron, Extron, and QSC Q-SYS control system programming for automated AV environments. Touch panel interfaces, occupancy sensing, room scheduling integration, and remote monitoring dashboards.' },
    ],
    equipment: ['Crestron DigitalMedia & NVX', 'Extron DTP CrossPoint switchers', 'QSC Q-SYS Core processors', 'Poly Studio X video conferencing', 'Barco ClickShare wireless presentation', 'Samsung / LG commercial displays', 'BrightSign digital signage players', 'Shure MXA920 ceiling microphones', 'Biamp Tesira DSP processors', 'Structured cabling & rack builds'],
    cta: 'Ready to upgrade your space with reliable, integrated AV technology? Contact our installations team for a site survey and proposal.',
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = SERVICES[params.slug];
  if (!s) return {};
  return { title: `${s.title} | AV-TEC`, description: s.intro.slice(0, 160) };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES[slug];
  if (!s) notFound();

  return (
    <div>
      {/* HEADER BAR */}
      <header style={{ position:'fixed',inset:'0 0 auto',zIndex:100,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 32px',background:'rgba(6,13,24,0.95)',backdropFilter:'blur(12px)',borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
        <Link href="/" style={{ display:'flex',alignItems:'center',gap:'12px',color:'#f0f0f0',fontWeight:700,fontSize:'0.9rem' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          Back to Home
        </Link>
        <img src="/logo/av-tec-logo-web.png" alt="AV-TEC" style={{ height:'40px' }} />
      </header>

      {/* HERO */}
      <section style={{ position:'relative',height:'50vh',minHeight:'360px',display:'flex',alignItems:'flex-end',padding:'0 32px 48px' }}>
        <img src={s.hero} alt={s.title} style={{ position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover' }} />
        <div style={{ position:'absolute',inset:0,background:'linear-gradient(to bottom, rgba(6,13,24,0.4), rgba(6,13,24,0.85))' }} />
        <div style={{ position:'relative',zIndex:1,maxWidth:'1200px',margin:'0 auto',width:'100%' }}>
          <p style={{ color:'#cc0000',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'8px' }}>Our Services</p>
          <h1 style={{ fontFamily:'var(--font-display), Playfair Display, serif',fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:700,fontStyle:'italic',color:'#fff',margin:0,lineHeight:1.1 }}>{s.title}</h1>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ maxWidth:'900px',margin:'0 auto',padding:'clamp(40px,6vw,80px) 24px' }}>
        <p style={{ fontSize:'clamp(1rem,1.5vw,1.15rem)',lineHeight:1.8,color:'#8b9bb4' }}>{s.intro}</p>
      </section>

      {/* FEATURES */}
      <section style={{ background:'#0a1628',padding:'clamp(40px,6vw,80px) 24px' }}>
        <div style={{ maxWidth:'1000px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',gap:'32px' }}>
          {s.features.map((f, i) => (
            <div key={i} style={{ padding:'28px',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'6px',background:'rgba(6,13,24,0.6)' }}>
              <h3 style={{ fontFamily:'var(--font-display), Playfair Display, serif',fontSize:'1.25rem',color:'#fff',marginTop:0,marginBottom:'12px' }}>{f.heading}</h3>
              <p style={{ color:'#8b9bb4',fontSize:'0.92rem',lineHeight:1.7,margin:0 }}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPMENT LIST */}
      <section style={{ maxWidth:'900px',margin:'0 auto',padding:'clamp(40px,6vw,80px) 24px' }}>
        <h2 style={{ fontFamily:'var(--font-display), Playfair Display, serif',color:'#cc0000',textTransform:'uppercase',fontSize:'clamp(1.4rem,2.5vw,2rem)',marginTop:0,marginBottom:'24px',textAlign:'center' }}>Equipment Inventory</h2>
        <ul style={{ columns:2,columnGap:'32px',listStyle:'none',padding:0,margin:0 }}>
          {s.equipment.map((e, i) => (
            <li key={i} style={{ padding:'8px 0',color:'rgba(255,255,255,0.8)',fontSize:'0.9rem',borderBottom:'1px solid rgba(255,255,255,0.06)',breakInside:'avoid' }}>
              <span style={{ color:'#e8930c',marginRight:'8px' }}>▸</span>{e}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section style={{ background:'#0a1628',padding:'clamp(40px,6vw,60px) 24px',textAlign:'center',borderTop:'3px solid #e8930c' }}>
        <p style={{ maxWidth:'600px',margin:'0 auto 24px',color:'#8b9bb4',fontSize:'1rem',lineHeight:1.7 }}>{s.cta}</p>
        <Link href="/#contact" style={{ display:'inline-flex',alignItems:'center',gap:'8px',padding:'14px 32px',background:'#1a6dff',color:'#fff',borderRadius:'6px',fontWeight:700,fontSize:'0.9rem',textTransform:'uppercase',letterSpacing:'0.06em' }}>
          Get a Quote
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={{ background:'#0a1628',textAlign:'center',padding:'40px 24px 20px',borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <img src="/logo/av-tec-logo-web.png" alt="AV-TEC" style={{ height:'40px',margin:'0 auto 12px' }} />
        <p style={{ color:'rgba(139,155,180,0.5)',fontSize:'0.78rem',margin:0 }}>© 2026 AV-TEC. All rights reserved.</p>
      </footer>
    </div>
  );
}
