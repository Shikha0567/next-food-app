import { foodData } from "@/app/utils/data";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  if (foodData.length > 0) {
    return NextResponse.json({ data: foodData, error: {} });
  }
}
