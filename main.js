// const nombreDelProfe = "Lucas";

// const apellidoDelProfe = "Ruiz";

// const edadDelProfe = 17;

// console.log(nombreDelProfe, apellidoDelProfe, edadDelProfe);

// Objetos: nos resuelven la problemática de poder agrupar varios datos que pertenezcan a una misma entidad. En resumen: a todo lo que le pueda describir características, lo puedo representar como objeto.

// Creamos un objeto literal
// const profe = {
//     nombre: "Lucas",
//     apellido: "Ruiz",
//     edad: 17,
//     mayorDeEdad: false,
//     cursos: {
//         js: true,
//         react: true,
//         backend: false,
//         dw: false,
//     },
// };

// N  Nombre  Apellido
// 1  Lucas   Ruiz

// console.log("Objeto");
// console.log(profe);

// alert(profe);

// Un objeto se puede mostrar perfectamente por console.log, pero por alert nos da algunas complicaciones ya que alert transforma a string y un objeto no se transforma de esa manera. Vamos a ver más adelante la manera más avanzada de mostrar información de objetos en un alert.

const lionelMessi = {
    nombre: "Lionel",
    apellido: "Messi",
    goat: true,
    equipo: "Inter Miami",
    estatura: 170,
    piernaHabil: "Izquierda",
    posicion: "TODO",
    pais: "Argentina",
};


// const charmander = {
//     color: "naranja",
//     faseEvolutiva: 1,
//     tieneEvolucion: true,
//     evolucion: "Charmeleon",
//     tipo: "Fuego",
// }

// if (profe.edad > 17) {
//     alert("MAYOR");
// } else {
//     // alert("Sos el profe, sos un pibardo.")
//     console.log("Nombre: " + profe.nombre);
//     console.log("Apellido: " + profe["apellido"]);
// };

// profe.edad = 18;
// profe.peinado = false;

// console.log(profe);

// Funciones constructoras: van a servirnos de "plantilla" creadora de objetos.

// function Alumno(nombre, apellido){
//     this.nombre = nombre;
//     this.apellido = apellido;
// };

// // const alumnoNuevo = new Alumno("Alan", "Patsi");

// // console.log(alumnoNuevo);

// // const otroAlumno = new Alumno("Alexander", "Otero García");

// // console.log(otroAlumno);

// // let obj = {
//     //     prop: "valor",
//     //     prop: "valor",
//     //     prop: "valor",
//     //     prop: "valor",
//     //     prop: "valor",
//     //     prop: "valor",
//     //     prop: "valor",
//     //     prop: "valor",
// // }

// const alumnoGanador = new Alumno(prompt("Ingresá el nombre"), prompt("Ingresá el apellido"));

// alert("Nombre: " + alumnoGanador.nombre + "\nApellido: " + alumnoGanador.apellido);

// let objDePrueba = {
//     nombre: "Gimnasia y Esgrima de Jujuy",
//     estadio: "Estadio 23 de agosto",
//     colores: "Celeste y blanco",
//     apodo: "Lobo Jujeño"
// }

// function Equipo(nombre, estadio, colores, apodo){
//     this.nombre = nombre;
//     this.estadio = estadio;
//     this.colores = colores;
//     this.apodo = apodo;
// };

// const primerEquipo = new Equipo("Talleres", "La Boutique", "Albiazul", "Matador");
// const segundoEquipo = new Equipo("Racing", "Juan Domingo Perón", "Celeste y blanco", "La academia");
// const tercerEquipo = new Equipo("Booookeee", "Alberto J Armando", "Azul y oro", "Xeneizes");
// const cuartoEquipo = new Equipo("Peñarol", "Campeón del siglo", "Aurinegro", "Carbonero");

// console.log(primerEquipo);
// console.log(segundoEquipo);
// console.log(tercerEquipo);
// console.log(cuartoEquipo);

// const quintoEquipo = new Equipo(prompt("Ingrese nombre"), prompt("Ingrese estadio"), prompt("Ingrese colores"), prompt("Ingrese apodo"));

// console.log(quintoEquipo);

// const objetoLiteral = {
//     nombre: "Cosme",
//     apellido: "Fulanito",
//     saludo: () => alert(objetoLiteral.nombre)
// };

// const objetoLiteral2 = {
//     nombre: "Cosme",
//     apellido: "Fulanito",
//     saludo: () => alert("Hello, my name is Cosme Fulanito"),
// };

// console.log(objetoLiteral.nombre);
// objetoLiteral.saludo();
// objetoLiteral2.saludo();

// Métodos: los métodos son funciones propias de un objeto. Es decir, puedo asignarle una función a una propiedad de un objeto. Esa función se conoce como método.

// // // // UN OBJETO QUE TIENE UNA PROPIEDAD CUYO VALOR ES UNA FUNCIÓN, TIENE UN "MÉTODO"

// FOR IN: nos permite recorrer (es decir, mirar de punta a punta) el objeto con sus propiedades. Es el caso en el cual usamos bracket notation [] si es que queremos sus valores

 for(const propiedad in lionelMessi){
     // lionelMessi.propiedad ESTO NO SE PUEDE HACER, ESTÁ MAL
     console.log(lionelMessi[propiedad]);
 };

// class Equipo {
//     constructor(nombre, estadio, colores, apodo) {
//         this.nombre = nombre;
//         this.estadio = estadio;
//         this.colores = colores;
//         this.apodo = apodo;
//     }
// };

class Artista {
    constructor(nombre, genero, instrumento){
        this.nombreyapellido = nombre;
        this.genero = genero;
        this.instrumento = instrumento;
    }
};

 const primerArtista = new Artista("Luciano Persoglia", "Folklore", "Voz");
 console.log(primerArtista);
// const segundoArista = new Artista("Billie Eilish", "Pop", "Voz");
// const tercerArtista = new Artista("Pablito Lescano", "Cumbia", "Keytar");

// console.log(primerArtista)
// console.log(segundoArista)
// console.log(tercerArtista)

// // Nombre      Género         Instrumento.
// // Luciano     Folklore       Voz


// FINAL BOSSSSSSSSSSSSSS

// class Producto{
//     constructor(){

//     }
// }

/*function cargarProducto(){
    const nombre = prompt("Ingrese nombre");
    const precio = parseInt(prompt("Ingrese precio"));

    const nuevoObjeto = {
        nombre,
        precio
    };

    // const nuevoObjeto = new Producto(nombre,precio);
    console.log(nuevoObjeto);
};

let salir = true;

do{
    let confirmacion = confirm("Desea cargar un producto?");

    if(confirmacion){
        // LOGICA CARGA PRODUCTO
        cargarProducto();
    } else {
        salir = false;
    }
}while(salir)*/



// Tarea: el profe hizo el ejemplo con objeto literal. Tienen que hacerlo con una clase constructora. Ya se provee el resto del esqueleto del programa. 

// De la 190 a la 199 es tema de la clase de hoy. Todo lo demás, es de clases pasadas.

console.log(lionelMessi);