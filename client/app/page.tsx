"use client"
import { AuthScreen } from "@/components/auth-screen";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("http://localhost:3000/api");
      const data = await res.json();
      console.log(data);
    };
    fetchPosts();
  }, []);
  return (
   <AuthScreen/>
  );
}
