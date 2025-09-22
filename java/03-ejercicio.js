const manzana = "Manzana", cantidadm = 10, preciom = 3
const naranja = "Naranja", cantidadn = 5, precion = 2
const pera = "Pera", cantidadp = 10, preciop = 1

const totalm = cantidadm * preciom
const totaln = cantidadn * precion
const totalp = cantidadp * preciop

const total = totalm + totaln + totalp

console.log("      Factura      ")
console.log("12345678901234567890")

console.log(cantidadm +" Manzanas por el valor $ " + preciom + " = "+ totalm)
console.log(cantidadn +" Naranjas por el valor $ " + precion + " = "+ totaln)
console.log(cantidadp +" Peras por el valor $ " + preciop + " = "+ totalp)

console.log("Total: "+ total)

console.log(typeof totalm)
console.log(typeof totaln)
console.log(typeof totalp)
console.log(typeof total)