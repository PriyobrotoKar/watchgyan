import React from 'react';
import { getTopBlogs } from '../interface/blog.controller';
import BlogCard from './BlogCard';

export default async function TopArticles() {
  const topArticles = await getTopBlogs();

  return (
    <section className="mx-auto w-fit space-y-16">
      <h2 className="text-center font-serif text-2xl">Top Articles</h2>
      <div className="flex gap-16">
        {topArticles.map((article) => (
          <BlogCard blog={article} key={article.id} />
        ))}
      </div>
    </section>
  );
}
