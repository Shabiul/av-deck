export interface GalleryImage {
  src: string;
  title: string;
  service: string;
  equipment: string;
  venue?: string;
  project?: string;
}

export interface GalleryVideo {
  src: string;
  poster: string;
  title: string;
  service: string;
  equipment: string;
  venue?: string;
  duration?: string;
}

/* ============================================================
   EDIT NAMES HERE — example labels only.
   Replace `title` / `service` / `equipment` / `venue` with the
   real tool / service / event names for each media item.
   ============================================================ */

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg', title: 'Main Stage Line Array', service: 'Audio Systems', equipment: 'D&B GSL Series', venue: 'Outdoor Festival' },
  { src: '/gallery/0fffa344-8289-404e-bec4-1fb754115443.jpg', title: 'Concert Lighting Rig', service: 'Stage Lighting', equipment: 'Robe MegaPointe', venue: 'Arena Show' },
  { src: '/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg', title: 'LED Wall — Product Launch', service: 'Video & LED Walls', equipment: 'P2.6 Indoor LED', venue: 'Corporate Launch' },
  { src: '/gallery/19b57f7c-e740-4d10-80f1-7e226abafcfd.jpg', title: 'Ground-Support Truss', service: 'Trussing & Rigging', equipment: 'Prolyte H40V', venue: 'Festival Ground' },
  { src: '/gallery/7900fd62-19bf-4ca3-aa5c-5a20b7b7b2b5.jpg', title: 'FOH Control Position', service: 'Tech Consultancy', equipment: 'DiGiCo SD12', venue: 'Conference' },
  { src: '/gallery/30bdfd59-7b60-4b0c-b87d-20193dedff55.jpg', title: 'Auditorium Install', service: 'Installs & Integrations', equipment: 'Crestron / QSC', venue: 'Auditorium' },
  { src: '/gallery/11f99473-86af-4540-a76f-ecb6983817c9.jpg', title: 'Wedding Stage Wash', service: 'Stage Lighting', equipment: 'Astera AX1', venue: 'Wedding' },
  { src: '/gallery/1d40fc12-8399-4681-a4c7-eec07cfeff98.jpg', title: 'Corporate Keynote Screen', service: 'Video & LED Walls', equipment: 'Blackmagic ATEM', venue: 'Corporate' },
  { src: '/gallery/3e7f749e-e078-4ec2-b892-2b2981e9084f.jpg', title: 'Monitor World', service: 'Audio Systems', equipment: 'Shure PSM1000', venue: 'Live Concert' },
  { src: '/gallery/432d250b-2aca-433c-8a97-2261da7f376a.jpg', title: 'Festival Night Show', service: 'Stage Lighting', equipment: 'Clay Paky Sharpy', venue: 'Music Festival' },
  { src: '/gallery/8f52f091-e10a-4dd9-b06c-be58925150b4.jpg', title: 'Outdoor LED Screen', service: 'Video & LED Walls', equipment: 'P6 Outdoor LED', venue: 'Public Event' },
  { src: '/gallery/c4b439fe-114e-4322-a8b4-c694e440fe49.jpg', title: 'Roof & Rigging Build', service: 'Trussing & Rigging', equipment: 'CM Lodestar Hoists', venue: 'Concert' },
  { src: '/gallery/d02eea4a-448b-41ef-b4d2-ab51063d38e9.jpg', title: 'Boardroom AV', service: 'Installs & Integrations', equipment: 'Poly Studio X', venue: 'Corporate Office' },
  { src: '/gallery/e88e9f35-4aa0-46fc-87e6-9698d8297471.jpg', title: 'Stage Front-of-House', service: 'Audio Systems', equipment: 'D&B SL Subs', venue: 'Live Event' },
  { src: '/gallery/dj.jpg', title: 'DJ & Club Setup', service: 'Audio Systems', equipment: 'Pioneer / D&B', venue: 'Club Night' },
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
  { src: '/video/hero-video.mp4', poster: '/gallery/bc440e23-1ff3-4169-af77-40c874848a1b.jpg', title: 'Event Highlights Reel', service: 'Event Production', equipment: 'Full Production', duration: '0:30' },
  { src: '/video/hero-new-video.mp4', poster: '/gallery/0fffa344-8289-404e-bec4-1fb754115443.jpg', title: 'Rental Showcase', service: 'Rental', equipment: 'Sound · Light · Video', duration: '0:25' },
  { src: '/video/equipment-video.mp4', poster: '/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg', title: 'Equipment Walkthrough', service: 'Sales & Distribution', equipment: 'Inventory Tour', duration: '0:40' },
  { src: '/video/why-video.mp4', poster: '/gallery/7900fd62-19bf-4ca3-aa5c-5a20b7b7b2b5.jpg', title: 'Why AV-TEC', service: 'About', equipment: 'Since 1992', duration: '0:35' },
  { src: '/video/Sequence 04.mp4', poster: '/gallery/432d250b-2aca-433c-8a97-2261da7f376a.jpg', title: 'Live Show Clip 1', service: 'Stage Lighting', equipment: 'Moving Heads', duration: '0:15' },
  { src: '/video/Sequence 04_1.mp4', poster: '/gallery/0fffa344-8289-404e-bec4-1fb754115443.jpg', title: 'Live Show Clip 2', service: 'Stage Lighting', equipment: 'Beam Effects', duration: '0:15' },
  { src: '/video/Sequence 04_2.mp4', poster: '/gallery/19b57f7c-e740-4d10-80f1-7e226abafcfd.jpg', title: 'Live Show Clip 3', service: 'Trussing & Rigging', equipment: 'Roof System', duration: '0:15' },
  { src: '/video/Sequence 04_3.mp4', poster: '/gallery/7894e275-c490-404a-b279-a4366824bd16.jpg', title: 'Live Show Clip 4', service: 'Video & LED Walls', equipment: 'LED Wall', duration: '0:15' },
  { src: '/video/Sequence 04_4.mp4', poster: '/gallery/3e7f749e-e078-4ec2-b892-2b2981e9084f.jpg', title: 'Live Show Clip 5', service: 'Audio Systems', equipment: 'Line Array', duration: '0:15' },
  { src: '/video/Sequence 04_5.mp4', poster: '/gallery/8f52f091-e10a-4dd9-b06c-be58925150b4.jpg', title: 'Live Show Clip 6', service: 'Video & LED Walls', equipment: 'Outdoor LED', duration: '0:15' },
  { src: '/video/Sequence 04_6.mp4', poster: '/gallery/11f99473-86af-4540-a76f-ecb6983817c9.jpg', title: 'Live Show Clip 7', service: 'Stage Lighting', equipment: 'Pixel Mapping', duration: '0:15' },
  { src: '/video/Sequence 04_7.mp4', poster: '/gallery/c4b439fe-114e-4322-a8b4-c694e440fe49.jpg', title: 'Live Show Clip 8', service: 'Trussing & Rigging', equipment: 'Chain Hoists', duration: '0:15' },
  { src: '/video/Sequence 04_8.mp4', poster: '/gallery/e88e9f35-4aa0-46fc-87e6-9698d8297471.jpg', title: 'Live Show Clip 9', service: 'Audio Systems', equipment: 'Subwoofers', duration: '0:15' },
  { src: '/video/Sequence 04_9.mp4', poster: '/gallery/1d40fc12-8399-4681-a4c7-eec07cfeff98.jpg', title: 'Live Show Clip 10', service: 'Video & LED Walls', equipment: 'Live IMAG', duration: '0:15' },
  { src: '/video/Sequence 04_10.mp4', poster: '/gallery/30bdfd59-7b60-4b0c-b87d-20193dedff55.jpg', title: 'Live Show Clip 11', service: 'Installs & Integrations', equipment: 'Fixed Install', duration: '0:15' },
  { src: '/video/Sequence 04_11.mp4', poster: '/gallery/d02eea4a-448b-41ef-b4d2-ab51063d38e9.jpg', title: 'Live Show Clip 12', service: 'Event Production', equipment: 'Show Control', duration: '0:15' },
];
