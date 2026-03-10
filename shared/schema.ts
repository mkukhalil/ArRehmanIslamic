import { z } from "zod";

export const insertContactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().min(1, "Message is required"),
});

export const contactMessageSchema = insertContactMessageSchema.extend({
  id: z.number().int().positive().optional(),
  createdAt: z.string().optional(),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = z.infer<typeof contactMessageSchema>;
