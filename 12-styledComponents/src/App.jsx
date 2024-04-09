import { Button, ButtonError } from "./styled/Buttons";

function App() {
  return (
    <>
      <Button $color="primary">Haz click aqui!</Button>
      <Button $color="secondary">Haz click aqui!</Button>
      <Button>Haz click aqui!</Button>

      <ButtonError>Soy un boton de error</ButtonError>
    </>
  );
}

export default App;

/* 

  <Button $pepe>Haz click aqui!</Button>         Para react $pepe es true
  <Button $pepe={true}>Haz click aqui!</Button> 


*/
