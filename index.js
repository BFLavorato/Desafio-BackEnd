class Usuario{
    constructor (nombre, apellido,) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = [{nombre:"", 
        autor:""}]
        this.mascotas = []
    }
    getFullName = () =>{
        console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota = mascota =>{
        this.mascotas.push(mascota);
    }
    countMascotas = () =>{
         console.log(`${this.nombre} tiene ${this.mascotas.length} mascotas`)
    }
    addBook = (nombre,autor) => {
        this.libros.push([{nombre,autor}])
    }
    getBooksName = () => {
        console.log(this.libros.map(libros.nombre))
    }
}

const usuario = new Usuario ("Benjamin","Lavorato")
usuario.getFullName();
usuario.addMascota("Tayzon");
usuario.addMascota("Cielo");
usuario.countMascotas();
usuario.addBook("El Camino de los reyes", "Brandon Sanderson")
usuario.addBook("Palabras radiantes", "Brandon Sanderson")
usuario.addBook("Juramentada", "Brandon Sanderson")
usuario.addBook("El ritmo de la guerra", "Brandon Sanderson")

console.log(this.libros)
const usuario2 = new Usuario("Alfonzo","Ramirez")
