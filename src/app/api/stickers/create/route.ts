import { NextRequest, NextResponse } from "next/server"
import axios from "axios";

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const image = formData.get("image")

  if (!image) {
    return NextResponse.json({
      "x-error": "ファイルがありません。"
    }, {
      status: 400
    })
  }

  const buffer = Buffer.from(await (image as Blob).arrayBuffer())
  const base64_image = buffer.toString("base64");
  const base64_url = `data:image/png;base64,${base64_image}`

  const response = await axios.post("https://suzuri.jp/api/v1/materials", {
    texture: base64_url,
    title: "Stickify",
    description: "ステッカー制作ツールStickify: https://stickify.xyz",
    price: 0,
    products: [
      {
        itemId: 11,
        published: true,
      }
    ],
  }, {
    headers: {
      "Authorization": `Bearer ${process.env.SUZURI_API_KEY}`,
      "Content-Type": "application/json"
    },
  }).then((res) => {
    const url = res.data.products[0].url;

    return NextResponse.json({
      "x-callback": url,
      "x-success": "ステッカーを作成しました。",
      ...res.data,
    }, {
      status: res.status
    })
  }).catch((e) => {
    return NextResponse.json({
      "x-error": e.response.data.error.message,
      ...e.response.data,
    }, {
      status: 400
    })
  })

  return response
}
