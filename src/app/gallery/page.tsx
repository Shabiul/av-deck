import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Gallery | AV-TEC',
  description: 'Explore AV-TEC equipment and events through our image and video gallery.',
};

export default function GalleryHubPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Our Work"
        title="Gallery"
        subtitle="Explore our equipment and events through images and videos."
        bg="/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg"
      />
      <section className="section">
        <div className="gallery-hub-links">
          <Link href="/gallery/images" className="gallery-hub-card">
            <h2>Images</h2>
            <p>Event photos, equipment setups, and production moments</p>
          </Link>
          <Link href="/gallery/videos" className="gallery-hub-card">
            <h2>Videos</h2>
            <p>Event highlights, system demos, and production reels</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
