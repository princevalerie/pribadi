export interface PhotoMemory {
  id: string;
  title: string;
  caption: string;
  dateTag?: string;
  defaultDescription: string;
  customImage?: string;
}

export const INITIAL_MEMORIES: PhotoMemory[] = [
  {
    id: 'memory-1',
    title: 'Kencan Baju Denim Kembaran',
    caption: 'Foto kita di resto berdua pakai baju denim senada. Senyum jahil Alpi yang pose gemas sambil melet manja, dan Prince yang nyengir bahagia banget ada di samping kamu.',
    dateTag: 'Momen Kita Berdua',
    defaultDescription: 'Prince & Alpiyanti senyum ceria dengan baju denim biru kembaran di meja makan resto kayu.',
  },
  {
    id: 'memory-2',
    title: 'Pose Topang Dagu di Tangga',
    caption: 'Alpi duduk manis di anak tangga menopang dagu sambil senyum lembut natap kamera Prince dengan kacamata kesayangan. Ayu dan manis banget bidadariku.',
    dateTag: 'Tatapan Manis Alpi',
    defaultDescription: 'Alpiyanti duduk di anak tangga menopang dagu dengan senyum manis dan kacamata.',
  },
  {
    id: 'memory-3',
    title: 'Cubit Pipi Gemoy Alpi',
    caption: 'Pipi empuk kesayangan yang selalu pengen Prince unyel-unyel kalau lagi kangen. Eyeliner Alpi cantik banget, mukanya pasrah tapi ngegemesin maksimal.',
    dateTag: 'Pipi Paling Empuk',
    defaultDescription: 'Prince mencubit pipi lembut Alpiyanti dengan penuh rasa gemas dan cinta.',
  },
  {
    id: 'memory-4',
    title: 'Tatapan Mata Cantik Bidadariku',
    caption: 'Foto close-up wajah cantik Alpiyanti dengan senyum teduh dan tatapan mata yang jernih. Setiap ngeliat foto ini, Prince selalu diingetin betapa cantiknya pacar Prince.',
    dateTag: 'Wajah Paling Ayu',
    defaultDescription: 'Potret close-up wajah cantik Alpiyanti yang tersenyum manis dengan tatapan teduh.',
  },
];

export interface LoveCoupon {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export const LOVE_COUPONS: LoveCoupon[] = [
  {
    id: 'coupon-1',
    title: 'VC Bebas Ngapain Aja',
    description: 'Alpi boleh sambil maskeran, rebahan, scroll TikTok, atau ngerjain tugas. Prince bakal anteng nemenin tanpa protes!',
    iconName: 'Video',
    badge: 'Bebas Ribet',
  },
  {
    id: 'coupon-2',
    title: 'Traktir Makanan Kesukaan Alpi',
    description: 'Prince yang bayar dan jemput makanan apapun yang lagi Alpi pengenin hari ini. Es krim, seblak, boba, atau steak!',
    iconName: 'Utensils',
    badge: 'Kenyang Bahagia',
  },
  {
    id: 'coupon-3',
    title: 'Peluk Hangat & Cubit Pipi Bebas',
    description: 'Pelukan erat pas ketemu nanti sampai rasa kangennya ilang, plus Prince bakal elus kepala kamu.',
    iconName: 'Heart',
    badge: 'Unlimited Hugs',
  },
  {
    id: 'coupon-5',
    title: 'Dengerin Curhat Sampai Pulas',
    description: 'Prince siap jadi pendengar terbaik buat semua cerita dan unek-unek Alpi sampai kamu ketiduran dengan nyenyak.',
    iconName: 'Sparkles',
    badge: 'Pendengar Setia',
  },
];
