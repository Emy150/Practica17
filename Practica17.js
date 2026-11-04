// EMILY LARA 
// 00000270719

// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {

  // Recorremos cada tarea del arreglo para revisar su informaciónn
  lista.forEach((tarea) => {

    // Si completada es true, significa que ya hicimos la tarea YAY c:
    // Si es false... bueno, sigue esperando por nosotros
    if (tarea.completada) {
      console.log("Tarea:", tarea.nombre, "- Estado: Completada");
    } else {
      console.log("Tarea:", tarea.nombre, "- Estado: Pendiente");
    }

  });

}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {
  // filter revisa cada elemento y solamente guarda
  // aquellos que cumplan con la condición.
  // En este caso, buscamos las tareas completadas
  return lista.filter((tarea) => tarea.completada == true);

};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  
  // Aquí hacemos prácticamente lo mismo que arriba,
  // pero ahora buscamos las tareas que todavía faltan. wow
  return lista.filter((tarea) => tarea.completada == false);

};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  
  // map nos permite crear un nuevo arreglo modificando
  // o seleccionando la información de cada elemento.
  // Aquí solamente necesitamos los nombres, sin todo lo demás.
  return lista.map((tarea) => tarea.nombre);

};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
  
  // length nos dice cuántos elementos tiene el arreglo O:
  // Así sabemos cuántas tareas hay en total.
  return lista.length;

}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {

    // this.tareas hace referencia al arreglo que pertenece
    // a este mismo objeto. Llamamos a la función para mostrarlo.
    mostrarTareas(this.tareas);

  },

  mostrarCompletadas: function() {

    // Obtenemos solamente las tareas que ya se terminaron
    console.log("Tareas completadas:", obtenerCompletadas(this.tareas));

  },

  mostrarPendientes: function() {

    // Mostramos las tareas que todavía tenemos pendientes
    console.log("Tareas pendientes:", obtenerPendientes(this.tareas));

  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/


// Primero revisamos si el arreglo tiene elementos.
// Si su longitud es 0, significa que no tenemos tareas.
if (tareas.length == 0) {

  console.log("No hay tareas");

} 
// Si no está vacío, revisamos si todas están completadas.
else if (tareas.every((tarea) => tarea.completada == true)) {

  // every comprueba que todos los elementos cumplan la condición.
  console.log("Todas las tareas completadas");

}


// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

const opcion = 1;

switch (opcion) {
  
  case 1:

    // Si elegimos 1, mostramos todas las tareas.
    sistema.mostrarTareas();

    break;

  case 2:

    // Si elegimos 2, mostramos solamente las completadas.
    sistema.mostrarCompletadas();

    break;

  case 3:

    // Si elegimos 3, mostramos las que todavía faltan.
    sistema.mostrarPendientes();

    break;

  default:

    // Si escribimos cualquier otro número, la opción no existe.
    console.log("Opción inválida");

}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

// Probamos cuántas tareas tenemos.
console.log("Total de tareas:", contarTareas(tareas));

// Probamos obtener solamente las completadas.
console.log("Completadas:", obtenerCompletadas(tareas));

// Probamos obtener solamente las pendientes.
console.log("Pendientes:", obtenerPendientes(tareas));

// Probamos obtener los nombres de todas las tareas.
console.log("Nombres de las tareas:", obtenerNombres(tareas));