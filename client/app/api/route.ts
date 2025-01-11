import { NextResponse } from "next/server"
import dbConnect from "@/lib/dbConnect";
export async function GET(){
    try {
        await dbConnect(); // Attempt to connect to MongoDB
    
        return NextResponse.json({"success": true})
      } catch (error) {
        return NextResponse.json({"error": error})
      } 
}