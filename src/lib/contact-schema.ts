import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please share your name")
    .max(80, "Name is a little too long"),
  email: z.email("Please enter a valid email address"),
  business: z.string().trim().max(120, "Business name is a little too long").optional().or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a little more — 10 characters minimum")
    .max(1500, "Message is a little too long"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const SERVICE_OPTIONS = [
  "Monthly Bookkeeping",
  "Cleanup & Catch-Up",
  "Financial Reporting",
  "Payroll Support",
  "Invoices & Bills",
  "Software Setup & Training",
  "Not sure yet",
] as const;
