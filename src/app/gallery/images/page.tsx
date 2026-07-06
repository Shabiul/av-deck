import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import { GALLERY_IMAGES } from '@/data/gallery';

export const metadata = {
  title: 'Image Gallery | AV-TEC',
  description: 'Event photos, equipment setups and production moments from AV-TEC.',
};

export default function GalleryImagesPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        eyebrow="Gallery"
        title="Images"
        subtitle="Hover to see the name — click any photo to view it full size."
        bg="/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg"
      />
      <section className="section">
        <Gallery variant="image" images={GALLERY_IMAGES} />
      </section>
    </div>
  );
}
