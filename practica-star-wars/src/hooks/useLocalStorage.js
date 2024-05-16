export default function useLocalStorage() {
  function guardarLS(name, datos) {
    localStorage.setItem(name, JSON.stringify(datos));
  }

  function leerLS(name) {
    const ls = JSON.parse(localStorage.getItem(name));
    return ls;
  }

  return {
    guardarLS,
    leerLS,
  };
}
