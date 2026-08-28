import { NextRequest, NextResponse } from "next/server";
import { getSlot } from "@/lib/media-slots";
import { readManifest, saveSlotImage, saveSlotVideoUrl, clearSlot } from "@/lib/media-manifest";

export async function GET() {
  const manifest = await readManifest();
  return NextResponse.json({ manifest });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const slotId = formData.get("slot");
  const slot = typeof slotId === "string" ? getSlot(slotId) : undefined;

  if (typeof slotId !== "string" || !slot) {
    return NextResponse.json({ error: "Unknown slot" }, { status: 400 });
  }

  try {
    if (slot.type === "video") {
      const youtubeUrl = formData.get("youtubeUrl");
      if (typeof youtubeUrl !== "string" || !youtubeUrl.trim()) {
        return NextResponse.json({ error: "Paste a YouTube link" }, { status: 400 });
      }
      const entry = await saveSlotVideoUrl(slotId, youtubeUrl);
      return NextResponse.json({ entry });
    }

    const file = formData.get("file");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    const entry = await saveSlotImage(slotId, file);
    return NextResponse.json({ entry });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const slotId = request.nextUrl.searchParams.get("slot");
  if (!slotId || !getSlot(slotId)) {
    return NextResponse.json({ error: "Unknown slot" }, { status: 400 });
  }
  await clearSlot(slotId);
  return NextResponse.json({ ok: true });
}
