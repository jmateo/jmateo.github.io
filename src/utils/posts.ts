import { getCollection } from 'astro:content';
import { marked } from 'marked';

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
  locale: string;
}

export async function getPosts(locale: string = 'en'): Promise<Post[]> {
  const allPosts = await getCollection('posts');

  const posts = allPosts
    .filter((post) => post.data.locale === locale)
    .map((post) => {
      const filename = post.id.replace(/\.md$/, '');
      // Remove locale prefix from filename to get slug
      const slug = filename.startsWith(`${locale}-`)
        ? filename.slice(locale.length + 1)
        : filename;

      // Extract date from filename if not in frontmatter
      let date = post.data.date;
      if (!date) {
        const match = slug.match(/^(\d{4}-\d{2}-\d{2})-/);
        date = match ? match[1] : '';
      }

      return {
        slug,
        metadata: {
          title: post.data.title || 'Untitled',
          speaker: post.data.speaker,
          img: post.data.img,
          slideshare: post.data.slideshare,
          date,
        },
        content: marked(post.body),
        locale: post.data.locale,
      };
    })
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  return posts;
}

export async function getAllPosts(): Promise<Post[]> {
  const enPosts = await getPosts('en');
  const frPosts = await getPosts('fr');
  return [...enPosts, ...frPosts];
}
