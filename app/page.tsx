import Image from "next/image";

export default function Home() {
  return (
    <div className="mainSection">
      <Image src="/logo-full-dark.png" alt="logo" height={100} width={200}/>
      <Image src="/cs.png" alt="" height={350} width={350}/>
    </div>
  );
}
