import Image from "next/image";
import { Inter } from "@next/font/google";
import Balancer from "react-wrap-balancer";
import "./output.css";
import blackhole from "../public/hero.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto relative">
      <div className="text-center relative flex-col h-80 justify-center flex items-center">
        <Balancer>
          <p className="z-9 text-5xl font-extrabold text-amber-100">
            "Maybe we’ve spent too long trying to figure this out with theory.”
          </p>
        </Balancer>
      </div>
      <div className="flex justify-center -mt-40">
        <Image src={blackhole} alt="Picture of BlackHole" />
      </div>
    </div>
  );
}
