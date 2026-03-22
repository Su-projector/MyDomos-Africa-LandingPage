import { waitlistSchema, type WaitlistInput } from "../schemas/waitlist";

export async function joinWaitlist(data: WaitlistInput) {
  // 1. Server-side validation
  const result = waitlistSchema.safeParse(data);
  
  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  // 2. Simulate database save / API call
  // In production, connect to Prisma, Supabase, or an email service (Resend)
  console.log("New Waitlist Submission:", result.data);
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return { 
    success: true, 
    message: "Thank you for joining! You've been added to our early-access list." 
  };
}
