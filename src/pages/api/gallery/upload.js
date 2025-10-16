import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { isAuthenticated } from '@/lib/auth';

// Disable Next.js body parser to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // Check authentication
  if (!isAuthenticated(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Configure formidable
    const uploadDir = path.join(process.cwd(), 'public', 'gallery');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const form = formidable({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB max
      filename: (name, ext, part) => {
        // Generate unique filename with timestamp
        return `${Date.now()}-${part.originalFilename}`;
      },
    });

    // Parse the incoming form
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Upload error:', err);
        return res.status(500).json({ error: 'Upload failed' });
      }

      // Get uploaded file info
      const file = files.image;
      
      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // Return success with file info
      const fileName = path.basename(file[0].filepath);
      return res.status(200).json({
        success: true,
        message: 'Image uploaded successfully',
        file: {
          name: fileName,
          url: `/gallery/${fileName}`
        }
      });
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    return res.status(500).json({ error: 'Failed to upload image' });
  }
}