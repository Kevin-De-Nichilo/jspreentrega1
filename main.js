/**
 * Objetivos:
 * Estructura HTML.
 * Funciones.
 * Objetos.
 * Arrays.
 * Algun metodo de los arrays.
 */

// Clase item.
class Item{
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// Items del game.
const pocion = new Item("Pocion de vida", 80, "pocion.png");
const espada = new Item("Espada", 180, "espada.png");
const escudo = new Item("Escudo", 90, "escudo.png");

// Array de inventario.
const Inventario = []

//Oro del juego
let oro = 500;