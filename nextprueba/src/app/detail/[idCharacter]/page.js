"use client";
import loading from "./loading.js";

import Image from "next/image";

export default function page({ params }) {
  return (
    <div>
      <h1>DETALLE CON PARAMETRO con numero {params.idCharacter}</h1>
      <Image src="/logo.png" alt="logo" width={200} height={200} />
    </div>
  );
}
