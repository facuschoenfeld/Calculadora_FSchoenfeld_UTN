import { input } from "./utils.mjs"
import { Calculadora } from "./calculadora_clase.mjs"

const calc = new Calculadora()

while(true){
    console.clear()
    console.log(`
        --- CALCULADORA ---
        |1. Sumar         |
        |2. Restar        |
        |3. Multiplicar   |
        |4. Dividir       |
        |5. Resto         |
        |6. Potencia      |
        |0. SALIR         |
        -------------------
        `)
    const opcion = await input("Seleccione una operacion: ")

    if(opcion === "0"){
        console.log("Hasta luego...")
        break
    }

    const opcionesValidas = ["1","2","3","4","5","6"]
    if(!opcionesValidas.includes(opcion)){
        await input("Opcion no valida")
        continue
    }

    const num1 = parseFloat(await input ("Ingrese el primer valor: "))
    const num2 = parseFloat(await input ("Ingrese el segundo valor: "))
    let resultado
    
    switch(opcion){
        case "1":
            resultado = calc.sumar(num1, num2)
            break
        case "2":
            resultado = calc.restar(num1,num2)
            break
        case "3":
            resultado = calc.multiplicar(num1,num2)
            break
        case "4":
            resultado = calc.dividir(num1,num2)
            break
        case "5":
            resultado = calc.resto(num1,num2)
            break
        case "6":
            resultado = calc.potencia(num1,num2)
            break
    }

    console.clear()
    console.log(`Resultado: ${resultado}`)
    await input("Presione cualquier tecla para volver al menu")
}