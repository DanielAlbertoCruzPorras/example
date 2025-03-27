// Definimos la clase Mascota
class Mascota {
  constructor(nombre, especie, edad, peso, salud) {
      this.nombre = nombre;  
      this.especie = especie;  
      this.edad = edad;  
      this.peso = peso;  
      this.salud = salud;  
  }

  // Método para mostrar información de la mascota
  mostrarInformacion() {
      return `Nombre: ${this.nombre}\nEspecie: ${this.especie}\nEdad: ${this.edad} años\nPeso: ${this.peso} kg\nSalud: ${this.salud}`;
  }
}

let mascotas = [];

// Función para mostrar el menú
function mostrarMenu() {
  let opcion;
  do {
      // Mostrar el menú con las opciones
      opcion = prompt(`
          Seleccione una opción:
          1. Registrar una nueva mascota.
          2. Listar todas las mascotas registradas.
          3. Buscar una mascota por nombre.
          4. Actualizar el estado de salud de una mascota.
          5. Eliminar una mascota por nombre.
          6. Salir del programa.
      `);

      switch (opcion) {
          case "1":
              registrarMascota();
              break;
          case "2":
              listarMascotas();
              break;
          case "3":
              buscarMascota();
              break;
          case "4":
              actualizarSalud();
              break;
          case "5":
              eliminarMascota();
              break;
          case "6":
              alert("¡Gracias por usar el programa!");
              break;
          default:
              alert("Opción no válida, por favor seleccione una opción del 1 al 6.");
      }
  } while (opcion !== "6");
}

function registrarMascota() {
  let nombre = prompt("¿Cuál es el nombre de la mascota?");
  let especie = prompt("¿Qué especie es tu mascota? (Perro, Gato, Caballo, etc.)");
  let edad = prompt("¿Cuántos años tiene tu mascota?");
  let peso = prompt("¿Cuánto pesa tu mascota en kilogramos?");
  let salud = prompt("¿Cómo está la salud de tu mascota? (Sano, Enfermo, En tratamiento)");

  // Crear una nueva instancia de la clase Mascota usando el constructor
  let nuevaMascota = new Mascota(nombre, especie, edad, peso, salud);

  // Agregar la nueva mascota al arreglo
  mascotas.push(nuevaMascota);
  alert("¡Mascota registrada exitosamente!");
}


//============================= Listar Mascota ==========================================

function listarMascotas() {
  if (mascotas.length === 0) {
      alert("No hay mascotas registradas.");
  } else {
      let lista = "Mascotas registradas:\n";
      for (let i = 0; i < mascotas.length; i++) {
          lista += `\n${i + 1}. ${mascotas[i].mostrarInformacion()}`;
      }
      alert(lista);
      console.log(mascotas)
  }
}

//============================= Buscar Mascota ==========================================

function buscarMascota() {
  let nombreBuscado = prompt("Ingrese el nombre de la mascota que desea buscar:");
  
  // Buscar la mascota en el arreglo
  let mascotaEncontrada = mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreBuscado.toLowerCase());

  if (mascotaEncontrada) {
      alert("Mascota encontrada:\n" + mascotaEncontrada.mostrarInformacion());
  } else {
      alert("No se encontró ninguna mascota con ese nombre.");
  }
}

//============================= Actualizar Mascota ==========================================

function actualizarSalud() {
  let nombreBuscado = prompt("Ingrese el nombre de la mascota cuya salud desea actualizar:");

  // Buscar la mascota en el arreglo
  let mascotaEncontrada = mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreBuscado.toLowerCase());

  if (mascotaEncontrada) {
      let nuevoEstado = prompt("Ingrese el nuevo estado de salud (Sano, Enfermo, En tratamiento):");
      mascotaEncontrada.salud = nuevoEstado;
      alert("Estado de salud actualizado exitosamente.\n" + mascotaEncontrada.mostrarInformacion());
  } else {
      alert("No se encontró ninguna mascota con ese nombre.");
  }
}

//============================= Eliminar Mascota ==========================================

function eliminarMascota() {
  let nombreBuscado = prompt("Ingrese el nombre de la mascota que desea eliminar:");

  // Buscar el índice de la mascota en el arreglo
  let indice = mascotas.findIndex(mascota => mascota.nombre.toLowerCase() === nombreBuscado.toLowerCase());

  if (indice !== -1) {
      // Confirmar la eliminación
      let confirmacion = confirm(`¿Está seguro de que desea eliminar a "${mascotas[indice].nombre}"?`);
      
      if (confirmacion) {
          mascotas.splice(indice, 1);
          alert("Mascota eliminada exitosamente.");
      } else {
          alert("Operación cancelada.");
      }
  } else {
      alert("No se encontró ninguna mascota con ese nombre.");
  }
}



mostrarMenu();


