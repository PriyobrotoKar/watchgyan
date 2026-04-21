# WatchGyan

WatchGyan is a full-stack content platform for watch enthusiasts, built with Next.js, Prisma, and MongoDB. It features a sleek, public-facing blog and a comprehensive, protected admin dashboard for seamless content management. The platform is designed to provide expert watch reviews, in-depth guides, and horology insights, enabling content creators to manage and publish articles with a rich-text editor.

## Features

### Public-Facing Platform

- **Dynamic Homepage**: A visually engaging homepage with a parallax hero section, a feed of the latest YouTube videos, and recently published blog posts.
- **Themed Sections**: A unique user experience with dynamic theme switching between light and dark modes based on scroll position.
- **Blog Discovery**: A dedicated blog page featuring carousels for "Featured Posts" and "Latest Global Stories," a "Curated Picks" section, and a grid of all articles.
- **Rich Article Pages**: Individual blog post pages rendered from a secure backend, complete with a floating table of contents for easy navigation.
- **Newsletter Subscription**: A clean and simple interface for users to subscribe to a newsletter.

### Admin Dashboard

- **Secure Authentication**: Protected admin routes using NextAuth.js with a Google provider, restricted to a predefined list of admin emails.
- **"At a Glance" Overview**: A central dashboard displaying draft blogs, recent publications, and new subscribers for a quick overview of site activity.
- **Advanced Content Editor**: A powerful WYSIWYG editor built with **Novel (Tiptap)** for writing and editing blog posts.
  - **Autosaving**: Automatically saves drafts to prevent data loss during the writing process.
  - **Rich Media Support**: Integrated image uploads to Cloudinary and embedding of YouTube videos.
  - **Slash Commands**: An intuitive command menu for quick formatting of text, lists, images, tables, and more.
- **Comprehensive Content Management**:
  - Functionality to publish, unpublish, edit, and delete blog posts.
  - A robust system to assign blogs to specific categories like "Featured Posts" and "Curated Picks".
  - Search functionality for efficiently finding specific blogs and subscribers.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Database**: MongoDB
- **ORM**: Prisma
- **Styling**: Tailwind CSS with shadcn/ui and Framer Motion for animations.
- **Authentication**: NextAuth.js (Google Provider)
- **Content Editor**: Novel (Tiptap)
- **Image Hosting**: Cloudinary
- **State Management**: TanStack Query (React Query) for server-state management.
- **Containerization**: Docker and Docker Compose for local MongoDB replica set.

## Project Structure

The repository follows a feature-sliced architecture to promote modularity and scalability.

```
└── src/
    ├── app/
    │   ├── (public)/   # Public-facing routes (homepage, blog)
    │   └── admin/      # Protected admin routes
    ├── features/
    │   ├── blog/
    │   ├── category/
    │   └── newsletter/ # Feature folders with components, services, and DTOs
    ├── components/     # Shared UI components (incl. shadcn/ui)
    ├── lib/            # Core utilities, auth, server actions
    └── prisma/         # Database schema and seed scripts
```
