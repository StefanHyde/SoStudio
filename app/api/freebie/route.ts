import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, societyStatus } = body;

    if (!lastName || !firstName || !email || !societyStatus) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const sheetMonkeyUrl = `https://api.sheetmonkey.io/form/${process.env.SHEETMONKEY_FORM_ID}`;

    if (!sheetMonkeyUrl) {
      throw new Error("Url de réception Sheet Monkey maquante");
    }

    const response = await fetch(sheetMonkeyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom: lastName,
        prenom: firstName,
        email: email,
        statut: societyStatus,
        Created: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("Impossible d'enregistrer le prospect");
    }

    const filePath = path.join(process.cwd(), "private", "freebie-test.pdf");
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="SoStudio-guide.pdf"',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
