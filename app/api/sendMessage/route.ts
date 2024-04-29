import { NextRequest, NextResponse } from "next/server";
const body = {
  messaging_product: "whatsapp",
  to: "918756467641",
  type: "template",
  template: {
    name: "hello_world",
    language: {
      code: "en_US",
    },
  },
};
const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const res = await fetch(
      "https://graph.facebook.com/v18.0/310041965521797/messages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.fbToken}`,
        },
        body: JSON.stringify(body),
      }
    );
    const result = await res.json();
    console.log("🚀 ~ POST ~ result:", result)
    if (!result.error) {
      return NextResponse.json(
        { status: 200, message: "message sent!", data: result },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          status: 400,
          message: "something went wrong! Please try again.",
          err: result.error,
        },
        { status: 400 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { status: 500, message: "something went wrong", err: err },
      { status: 500 }
    );
  }
};

export { POST };
