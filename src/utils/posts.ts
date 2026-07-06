import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PostMetadata {
  title: string;
  speaker?: string | string[];
  img?: string;
  slideshare?: number | number[];
  date: string;
}

interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
}

export function getPosts(): Post[] {
  const postsDir = path.join(process.cwd(), '_posts');
  const files = fs.readdirSync(postsDir);

  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      const match = file.match(/^(\d{4}-\d{2}-\d{2})-/);
      const date = match ? match[1] : '';

      return {
        slug: file.replace(/\.md$/, ''),
        metadata: {
          title: data.title || 'Untitled',
          speaker: data.speaker,
          img: data.img,
          slideshare: data.slideshare,
          date,
        },
        content,
      };
    })
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  return posts;
}
