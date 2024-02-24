import "./App.css";
import Card from "./components/Card";

function App() {
  const personas = [
    {
      nombre: "Guillermo",
      apellido: "Montaña",
      edad: 31,
      ciudad: "San Juan",
      profesiones: [
        {
          nombre: "Profesor",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Tandem",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
    {
      nombre: "Rocio",
      apellido: "Chaparro",
      edad: 31,
      ciudad: "La Plata",
      profesiones: [
        {
          nombre: "Tutora",
          lugar: "Ada",
        },
        {
          nombre: "Programador",
          lugar: "Free Lance",
        },
      ],
    },
  ];

  return (
    <>
      {personas.map((persona, i) => (
        <Card
          key={i}
          nombre={persona.nombre}
          apellido={persona.apellido}
          edad={persona.edad}
          ciudad={persona.ciudad}
          profesiones={persona.profesiones}
        />
      ))}

      {}
    </>
  );
}

export default App;

/* 
{
  nombre: "Guillermo",
  apellido: "Montaña"
}
*/
