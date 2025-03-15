import AdminPanel from "@/app/components/Admin";
import { redirect } from "next/navigation";

export default function AdminPage() {
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  if (typeof window !== "undefined") {
    const enteredPassword = prompt("Enter Admin Password:");
    if (enteredPassword !== adminPassword) {
      alert("Access Denied!");
      redirect("/");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <AdminPanel />
    </main>
  );
}
