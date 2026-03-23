export const getAssetUrl = (path: string) => {
  console.log('getAssetUrl path:', path);
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Remove 'images/' prefix if it exists
  let finalPath = cleanPath.startsWith('images/') ? cleanPath.slice(7) : cleanPath;
  
  const PROJECT_ID = 'muncxkojigqqaakscbjs';
  const BUCKET = 'Src';
  
  // If the path already contains a hyphen and ends in .jpeg, it's likely a direct filename
  if (finalPath.includes('-') && finalPath.endsWith('.jpeg')) {
     return `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET}/assets/${finalPath}`;
  }

  // Fallback: convert slashes to hyphens and try to match the user's flat structure
  // We keep the original path as well in case some are in folders
  return `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET}/assets/${finalPath}`;
};

export const showcases = [
  {
    title: 'Salt Lily',
    subtitle: 'Scaling Jewellery Content',
    imageSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png',
    slug: '/showcase/salt-lily',
  },
  {
    title: 'Franks Australia',
    subtitle: 'From Pattern to Production',
    imageSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/2Artboard%205-100.jpg',
    slug: '/showcase/franks-australia',
  },
  {
    title: 'Quinta Do Pinto',
    subtitle: 'Wine Branding',
    imageSrc: '',
    slug: '/showcase/quinta-do-pinto',
  },
  {
    title: 'O Palmeiral',
    subtitle: 'Social Automation / Content',
    imageSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/2Artboard%201.png',
    slug: '/showcase/o-palmeiral',
  },
];
