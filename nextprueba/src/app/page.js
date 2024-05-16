import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>ESTE ES EL HOME</h1>
      <Link href="/detail/56">Ir a la ruta Detalle</Link>
    </main>
  );
}

//

// <Routes path="/detail/:idCharacter" element={import page from ../detail/[idCharacter]/page.js}>
