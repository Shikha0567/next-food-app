import { NextRequest, NextResponse } from "next/server";
import { subMenu } from "@/app/utils/data";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ submenuId: string }> }
) {
  // unwrap the promise
  const { submenuId } = await params;

  const filteredSubmenu = subMenu[Number(submenuId)];

  if (!filteredSubmenu) {
    return NextResponse.json(
      { error: `No submenu found for id ${submenuId}` },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: filteredSubmenu });
}
