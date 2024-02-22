import imageFirma from "../assets/firma.png";

export default function MiPrimerComponente() {
  const title = "Licuadora Philco";

  return (
    <>
      <p className="titulo">{title}</p>
      <img src={imageFirma} alt="Not found" />
    </>
  );
}

// React.Fragment
