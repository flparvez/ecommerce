import Featured from "@/components/featured/Featured";
import Image from "next/image";

export default function Home() {
  // console.log("bearer " + process.env.STRAPI_TOKEN);
  return (
    <div>
      hellow
      <Featured />
    </div>
  );
}
