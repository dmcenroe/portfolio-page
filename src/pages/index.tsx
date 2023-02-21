import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Derek McEnroe Portfolio</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="border-8 w-screen h-screen">
        <div className="flex gap-8 h-full border-green-500 border justify-between items-center">
          <div className="border w-full">
            <p className="font-Jaldi text-6xl border">HEY!</p>
            <p className="font-Jaldi text-5xl">
              {"I'm Derek McEnroe, a software engineer."}
            </p>
            <p className="font-Jaldi text-lg">
              I love learning new technologies, building enjoyable experiences
              on the web, and finding solutions to problems.
            </p>
          </div>

          <div className="border w-full">pic</div>
        </div>
      </main>
    </>
  );
}
