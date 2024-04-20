import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import { authOptions } from "./api/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">users</Link>
      <h1></h1>
      <ProductCard />
    </main>
  );
}
