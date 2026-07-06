import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Speaker {
  name: string;
  bio: string;
  image?: string;
  id: string;
}

function nameToImageFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[éèê]/g, 'e')
    .replace(/[àâ]/g, 'a')
    .replace(/[ôö]/g, 'o')
    .replace(/[ç]/g, 'c');
}

export function getSpeakers(): Speaker[] {
  const speakersDir = path.join(process.cwd(), '_speakers');
  const imagesDir = path.join(process.cwd(), 'images', 'speakers');
  const imageFiles = new Set(fs.readdirSync(imagesDir).map(f => f.replace('.jpg', '').replace('.png', '')));

  const files = fs.readdirSync(speakersDir);

  const speakers = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(speakersDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      const name = data.title || 'Unknown';
      const imageFilename = nameToImageFilename(name);
      const hasImage = imageFiles.has(imageFilename);
      const id = file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace('.md', '');

      return {
        name,
        bio: content.trim(),
        image: hasImage ? `/images/speakers/${imageFilename}.jpg` : undefined,
        id,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return speakers;
}
