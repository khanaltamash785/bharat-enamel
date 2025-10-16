import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Path to public/gallery folder
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(galleryDir)) {
      fs.mkdirSync(galleryDir, { recursive: true });
      return res.status(200).json({ images: [] });
    }

    // Read all files from gallery directory
    const files = fs.readdirSync(galleryDir);
    
    // Filter only image files
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });

    // Return image paths (relative to public folder)
    const images = imageFiles.map(file => ({
      name: file,
      url: `/gallery/${file}`,
      size: fs.statSync(path.join(galleryDir, file)).size
    }));

    return res.status(200).json({ images });
  } catch (error) {
    console.error('Error listing images:', error);
    return res.status(500).json({ error: 'Failed to list images' });
  }
}