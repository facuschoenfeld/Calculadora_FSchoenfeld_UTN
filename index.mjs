import { input } from "./utils.mjs"
import { Calculadora } from "./calculadora_clase.mjs"

const calc = new Calculadora()

while(true){
    console.clear()
    console.log(`
        --- CALCULADORA ---
        1. Sumar
        2. Restar
        3. Multiplicar
        4. Dividir
        5. Resto
        6. Potencia
        0. Salir
        `)
    const opcion = await input(":")

    if(opcion === "0"){
        console.log("Hasta luego...")
        break
    }
}