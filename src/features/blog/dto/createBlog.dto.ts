import { Blog } from "@prisma/client";
import { z } from "zod";

export const createBlogRequestDto = z.object({
  title: z.string().min(3, { message: "Title is required" }),
  subtitle: z.string().optional(),
  description: z.string(),
  content: z.string().min(1, { message: "Content is required" }),
  tags: z.array(z.string()),
  thumbnail: z.string().optional(),
  words: z.number().positive(),
});

export type CreateBlogRequest = z.infer<typeof createBlogRequestDto>;
export type CreateBlogResponse = Blog;
