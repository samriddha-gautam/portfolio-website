import { NextResponse } from "next/server";
import vocabulary from "@/app/data/vocabulary.json";
import phonePatterns from "@/app/data/contacts.json";
import commands from "@/app/data/commands.json";
import help from "@/app/data/help.json";

interface Vocabulary { [key: string]: string[] }
interface PhonePatterns { [key: string]: string[] }
interface Commands { [key: string]: string[] }
interface Help { commands: string[] }

const vocabularyTyped = vocabulary as Vocabulary;
const phonePatternsTyped = phonePatterns as PhonePatterns;
const commandsTyped = commands as Commands;
const helpTyped = help as Help;

const phoneRegexes = Object.values(phonePatternsTyped).flat().map(pattern => new RegExp(pattern));

const urlMappings: { [key: string]: string } = {
  "open_url_github": "https://github.com/samriddha-gautam",
};

function isPhoneNumber(input: string): boolean {
  const cleanedInput = input.replace(/[\s-()]/g, "");
  return phoneRegexes.some(regex => regex.test(cleanedInput));
}

function findCommand(input: string): string | null {
  const inputLower = input.toLowerCase().trim();
  for (const command in commandsTyped) {
    if (commandsTyped[command].some(phrase => inputLower.includes(phrase))) {
      return command;
    }
  }
  return null;
}

function findKeyInVocabulary(input: string): string | null {
  const words = input.toLowerCase().split(" ");
  for (const word of words) {
    for (const key in vocabularyTyped) {
      if (key === word || vocabularyTyped[key].includes(word)) {
        return key;
      }
    }
  }
  return null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userInput = searchParams.get("message") || "";
  const inputLower = userInput.toLowerCase().trim();

  if (inputLower === "help") {
    const helpResponse = "Available commands:\n" + helpTyped.commands.join(",\n");
    return NextResponse.json({ reply: helpResponse });
  }

  if (isPhoneNumber(userInput)) {
    return NextResponse.json({
      reply: "Looks like a phone number! Taking you to the contact section...",
      action: "scroll",
      target: "contact",
    });
  }

  const matchedCommand = findCommand(inputLower);
  console.log("Input:", inputLower, "Matched command:", matchedCommand); // Debug log
  if (matchedCommand) {
    if (matchedCommand.startsWith("scroll_to_")) {
      const target = matchedCommand.replace("scroll_to_", "");
      console.log("Scroll response:", { reply: `Heading to the ${target} section!`, action: "scroll", target }); // Debug log
      return NextResponse.json({
        reply: `Heading to the ${target} section!`,
        action: "scroll",
        target,
      });
    } else if (matchedCommand.startsWith("open_url_")) {
      const url = urlMappings[matchedCommand];
      if (url) {
        const destination = matchedCommand.replace("open_url_", "");
        return NextResponse.json({
          reply: `Taking you to my ${destination}!`,
          action: "open_url",
          url,
        });
      }
    } else if (matchedCommand === "clear_chat") {
      return NextResponse.json({
        reply: "Chat cleared! Starting fresh...",
        action: "clear_chat",
      });
    }
  }

  const matchedKey = findKeyInVocabulary(inputLower);
  let response = "This is out of my Comprehension. Say 'help'.";
  switch (matchedKey) {
    case "hi": response = "Hey there! How can I help you today?"; break;
    case "good": response = "Oh, glad to hear that."; break;
    case "bad": response = "Ohh, okay"; break;
    case "projects": response = "Alrighty"; break;
    case "contact": response = "Okay"; break;
  }

  return NextResponse.json({ reply: response });
}