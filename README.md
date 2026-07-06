# GenevaJUG Website

This is the official website for the Geneva Java User Group, built with [Astro](https://astro.build/) and deployed on GitHub Pages.

## Setup

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:4321`

### Build

To build the website for production:

```bash
npm run build
```

The compiled website will be in the `dist/` directory.

## Content Management

### Adding a Session/Event

Create a new markdown file in the `_posts` directory with the naming convention: `_posts/YYYY-MM-DD-event-name.md`

**Example:** `_posts/2024-06-25-event-sourcing.md`

The file consists of two parts:
1. **Front matter** (metadata) - delimited by three dashes (`---`)
2. **Content** - markdown or HTML format

#### Available Metadata

- `title` (required): Event title
- `speaker` (optional): Speaker identifier(s) - can be a string or array
  - Example: `speaker: nicolas_piguet` or `speaker: [nicolas_piguet, david_pilato]`
- `date` (required): Date in YYYY-MM-DD format (extracted from filename)
- `img` (optional): Session image URL
- `slideshare` (optional): SlideShare presentation ID(s)
- `location`: Event venue name
- `locationlink`: URL to venue website
- `address`: Full venue address
- `transport`: Nearby public transportation stops
- `parking`: Nearby parking options
- `eventbrite`: EventBrite ticket reference
- `eventbriteid`: EventBrite event ID

#### Example

```markdown
---
title: Event sourcing - Reliability and Performance
speaker:
  - nicolas_piguet
  - david_pilato
date: 2024-06-25
location: Foound
locationlink: https://www.foound.ch/
address: Rue Jean-Dassier 7, 1201 Genève
transport: Gare Cornavin, TPG Stops
parking: HEPIA building
---

## Event Description

This is the markdown content for the event...
```

**Note:** Sessions are automatically organized by locale based on the directory:
- `_posts/en/` - English sessions
- `_posts/fr/` - French sessions

### Adding a Speaker

Create a new markdown file in the `_speakers` directory with the naming convention: `_speakers/YYYY-MM-DD-speaker-id.md`

**Example:** `_speakers/2024-06-25-nicolas_piguet.md`

The speaker ID is extracted from the filename (everything after the date) and used in URLs and links.

#### Available Metadata

- `title` (required): Speaker's full name

#### Speaker Image

Add a speaker image to `images/speakers/` with the filename matching the speaker ID.

**Supported formats:** `.jpg` or `.png`

**Example:** `images/speakers/nicolas_piguet.jpg`

**Image dimensions:** Any size (will be cropped/styled by CSS)

#### Example

```markdown
---
title: Nicolas Piguet
---

Nicolas Piguet is a Principal Software Engineer at Swissquote...
```

## Project Structure

```
├── _posts/              # Event/session posts
│   ├── en/             # English posts
│   └── fr/             # French posts
├── _speakers/          # Speaker profiles
├── images/
│   └── speakers/       # Speaker images
├── src/
│   ├── components/     # Astro components
│   ├── pages/          # Astro pages
│   └── utils/          # Utility functions
└── dist/               # Built website (generated)
```

## Building and Deploying

The website is automatically built and deployed to GitHub Pages when pushing to the main branch.

### Manual Deployment

```bash
npm run build
```

The `dist/` directory contains the static website ready for deployment.

## Technologies

- **Astro** - Static site generator
- **Markdown** - Content format
- **CSS** - Styling with CSS variables for theming
- **JavaScript** - Interactive features

## Features

- Bilingual support (English/French)
- Dark mode toggle
- Responsive design
- Session and speaker management
- Static site generation for optimal performance

## License

Please check the LICENSE file for details.
