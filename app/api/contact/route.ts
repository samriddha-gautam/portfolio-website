import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { name, email, message } = await req.json();
    
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Log received data
    console.log("📩 Received data:", { name, email, message });

    const newContact = new Contact({ name, email, message });

    // Try saving and log potential issues
    await newContact.save();
    console.log("✅ Contact saved successfully");

    return NextResponse.json({ success: true, message: "Message sent!" }, { status: 201 });
  } catch (error: unknown) {
    console.error("❌ Error saving contact:", error);
    let errorMessage="An unknown error occured"
    if(error instanceof Error){
      errorMessage=error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
