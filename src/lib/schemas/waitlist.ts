import { z } from "zod";

export const waitlistSchema = z.object({
  fullname: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  role: z.string().min(1, "Please select your role").refine(
    (val) => ["tenant", "landlord", "agent", "other"].includes(val),
    { message: "Please select your role" }
  ),
  location: z.string().min(2, "Please enter your location"),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
