import Image from "next/image";
import Link from "next/link";

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
import YouTubePlayer from "./youtube";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-lg">
        <Card className="border-none shadow-none">
          <CardHeader></CardHeader>
          <CardContent>
            <Image
              src="/hero.webp"
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
                <Button asChild>
                  <Link href="https://www.icloud.com/shortcuts/5cf2cc69406346a6902426b5baaf8822">
                    StickifyをiPhoneにインストール
                  </Link>
                </Button>
              </div>
              <Link href="https://suzuri.jp/stickify" className="underline">
                みんなのステッカーは、SUZURIのStickifyストアで販売中。
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <Card className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-lg">Stickifyの使い方</CardTitle>
                <CardDescription>
                  ちょっとコツをおぼえれば一瞬で作れます。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <YouTubePlayer videoId="MIQYYtswlyg" />
                </div>
              </CardContent>
            </Card>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
        <Separator />
        <div className="text-center m-4">
          このサービスは栗林健太郎が個人で運営しています。
          <br />
          ご要望は、kentarok@gmail.comか、Xの
          <Link href="https://x.com/kentaro">@kentaro</Link>へ。
        </div>
      </div>
    </>
  );
}
