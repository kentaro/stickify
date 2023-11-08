import { NextRequest, NextResponse } from "next/server"
import axios from "axios";

import config from "@/config";

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const image = formData.get("image")

  if (!image) {
    return NextResponse.json({
      "error": true,
      "message": "画像を指定してください。"
    }, {
      status: 400
    })
  }

  const buffer = Buffer.from(await (image as Blob).arrayBuffer())
  const base64_image = buffer.toString("base64");
  const base64_url = `data:image/png;base64,${base64_image}`

  const response = await axios.post("https://suzuri.jp/api/v1/materials", {
    texture: base64_url,
    title: config.title,
    description: `${config.description} ${config.url}`,
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
    const url = res.data.products[0].sampleUrl;

    return NextResponse.json({
      "shopUrl": url,
      "message": "ステッカーを作成しました。",
    }, {
      status: res.status
    })
  }).catch((e) => {
    console.error(e.response.data.error.message)

    return NextResponse.json({
      "error": true,
      "message": "ステッカーの作成に失敗しました。",
    }, {
      status: 400
    })
  })

  return response
}
