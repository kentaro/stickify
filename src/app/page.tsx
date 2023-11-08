import Image from "next/image";
import Link from "next/link";

import { AlertCircle } from "lucide-react";
import { Download } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import config from "@/config";
import { Button } from "@/components/ui/button";
import YouTubePlayer from "../components/youtube";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-lg">
        <Card className="border-none shadow-none">
          <CardHeader></CardHeader>
          <CardContent>
            <Image
              src="/hero.png"
              alt="Image"
              width={450}
              height={450}
              className="rounded-md object-cover"
            />
          </CardContent>
        </Card>
      </div>
      <div className="mx-auto max-w-lg">
        <Card className="border-none shadow-none">
          <CardHeader>
            <div className="text-center">
              <h1 className="font-bold text-xl text-center mb-4">
                {config.description}
              </h1>
              <div className="text-center mb-4">
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  <Link href="https://www.icloud.com/shortcuts/5cf2cc69406346a6902426b5baaf8822">
                    まずはStickifyをインストール！
                  </Link>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Card className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-lg">Stickifyの使い方</CardTitle>
                <CardDescription>
                  まずはこの動画をご覧ください。インストールしたiPhoneのショートカットを使って、さっそくステッカーを作ってみましょう。
                  <Alert variant="destructive" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>注意！</AlertTitle>
                    <AlertDescription>
                      Stickifyで共有した画像は、誰からでも見られる状態で公開されます。その点ご了承の上でご利用ください。
                    </AlertDescription>
                  </Alert>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mx-auto flex justify-center">
                  <YouTubePlayer videoId="MIQYYtswlyg" />
                </div>
                <div className="text-center mt-8">
                  さあ、素敵なステッカーを作ってみましょう！
                  <br />
                  <Link href="https://suzuri.jp/stickify" className="underline">
                    みんなのステッカーはSUZURIで販売中。
                  </Link>
                </div>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </CardContent>
        </Card>
        <Separator />
        <div className="text-center m-4">
          このサービスについてのご意見・ご要望は
          <br />
          kentarok@gmail.comか、Xの
          <Link href="https://x.com/kentaro">@kentaro</Link>へ。
        </div>
      </div>
    </>
  );
}
