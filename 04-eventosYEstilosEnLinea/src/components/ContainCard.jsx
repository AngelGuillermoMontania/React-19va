import Card from "./Card";

export default function ContainCard({ eliminarPersona, datos }) {
  return (
    <div>
      {datos.map((persona) => (
        <Card
          key={persona.id}
          id={persona.id}
          name={persona.name}
          eliminarPersona={eliminarPersona}
        />
      ))}
    </div>
  );
}
