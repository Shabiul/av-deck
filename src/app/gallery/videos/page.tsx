import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import { GALLERY_VIDEOS } from '@/data/gallery';

export const metadata = {
  title: 'Video Gallery | AV-TEC',
  description: 'Event highlights, system demos and production reels from AV-TEC.',
};

export default function GalleryVideosPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Gallery"
        title="Videos"
        subtitle="Click any clip to play it in the viewer."
        bg="/gallery/432d250b-2aca-433c-8a97-2261da7f376a.jpg"
      />
      <section className="section">
        <Gallery variant="video" videos={GALLERY_VIDEOS} />
      </section>
    </div>
  );
}
