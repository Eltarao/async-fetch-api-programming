export function buscarPersonaje(nombre, contenedor) {
  const url = `https://www.swapi.tech/api/people/?name=${encodeURIComponent(nombre)}`;

  if (!nombre) {
    contenedor.innerHTML = `<div class="text-warning">Por favor ingresa un nombre válido.</div>`;
    return;
  }

  contenedor.innerHTML = `<div class="text-info">Buscando personaje...</div>`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Error en la conexión");
      return response.json();
    })
    .then(data => {

      if (!data.result || data.result.length === 0) {
        throw new Error("No encontrado");
      }

      const personaje = data.result[0].properties;

      contenedor.innerHTML = `
        <div class="card bg-dark text-light p-4 w-50 m-auto border-warning shadow-lg">
          <h2 class="text-warning text-center mb-3">${personaje.name}</h2>
          <p><strong>Altura:</strong> ${personaje.height} cm</p>
          <p><strong>Peso:</strong> ${personaje.mass} kg</p>
          <p><strong>Género:</strong> ${personaje.gender}</p>
          <p><strong>Color de Cabello:</strong> ${personaje.hair_color}</p>
          <p><strong>Nacimiento:</strong> ${personaje.birth_year}</p>
        </div>
      `;
    })
    .catch(() => {
      contenedor.innerHTML = `<div class="text-danger">No se encontró el personaje o hubo un problema de conexión.</div>`;
    })
    .finally(() => console.log("Petición completada (.then)"));
}
