import { LRUCache } from "lru-cache";

const rateLimiter = new LRUCache<string, { count: number; expires: number }>({
  max: 500, // Max 500 unique IPs stored
  ttl: 60 * 1000, // 1-minute window
});

export default async function rateLimit(req: Request): Promise<boolean> {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";

  if (ip === "unknown") return false; // Allow request if IP can't be determined

  const entry = rateLimiter.get(ip) || { count: 0, expires: Date.now() + 60 * 1000 };

  if (entry.count >= 5) {
    return true; // Block request (rate limit exceeded)
  }

  rateLimiter.set(ip, { count: entry.count + 1, expires: entry.expires });
  return false; // Allow request
}
