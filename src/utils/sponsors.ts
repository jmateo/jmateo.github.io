import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Sponsor {
  name: string;
  url?: string;
  img?: string;
  linkedin?: string;
  description: string;
  tier: 'premium' | 'season';
}

export function getSponsors(): Sponsor[] {
  const sponsors: Sponsor[] = [];

  const tiers = [
    { folder: '_sponsors_premium', tier: 'premium' as const },
    { folder: '_sponsors_saison', tier: 'season' as const },
  ];

  for (const { folder, tier } of tiers) {
    const sponsorsDir = path.join(process.cwd(), folder);
    if (!fs.existsSync(sponsorsDir)) continue;

    const files = fs.readdirSync(sponsorsDir);
    files
      .filter((file) => file.endsWith('.md'))
      .forEach((file) => {
        const filePath = path.join(sponsorsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        sponsors.push({
          name: data.title || 'Unknown',
          url: data.url,
          img: data.img,
          linkedin: data.linkedin,
          description: content.trim(),
          tier,
        });
      });
  }

  return sponsors.sort((a, b) => {
    if (a.tier !== b.tier) {
      return a.tier === 'premium' ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });
}
