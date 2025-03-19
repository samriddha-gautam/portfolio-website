// route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Contact from "@/models/Contact";
import { z } from "zod";
import rateLimit from "@/lib/rateLimiter";

// Zod Schema for Input Validation
const contactSchema = z.object({
  name: z.string().min(2).max(50).trim(),
  email: z.string().email().trim().toLowerCase(),
  message: z.string().max(1000).trim().or(z.literal("")),
});

export async function POST(req: Request) {
  try {
    // Apply rate limiting
    const limited = await rateLimit(req);
    if (limited) {
      return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
    }

    await connectToDatabase();
    const body = await req.json();

    // Validate Input
    const validatedData = contactSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json({ error: "Invalid input data." }, { status: 400 });
    }

    // Save to Database
    const newContact = new Contact(validatedData.data);
    await newContact.save();

    return NextResponse.json({ success: true, message: "Message sent!" }, { status: 201 });
  } catch (error: unknown) {
    console.error("❌ Error saving contact:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
