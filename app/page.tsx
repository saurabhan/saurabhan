import Image from "next/image";
import { Inter } from "@next/font/google";
import Balancer from "react-wrap-balancer";
import "./output.css"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Balancer>
        <p className="text-5xl font-extrabold">
          "Maybe we’ve spent too long trying to figure this out with theory.”
        </p>
      </Balancer>
    </div>
  );
}
