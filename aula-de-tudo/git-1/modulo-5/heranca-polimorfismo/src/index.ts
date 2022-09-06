import { Commerce } from "./Commerce";
import Customer from "./Customer";
import { Industry } from "./Industry";
import Place from "./Place";
import { Residence } from "./Residence";
import User from "./User";
import { Client } from "./Client";


const usuario1 = new User("1", "paivapedro16@gmail.com", "Joao Pedro Paiva", "123456") 

// console.log(usuario1)
// console.log(usuario1.getEmail())
const customer1 = new Customer("2", "jonascarvalho@gmail.com", "Jonas Carvalho", "123456", "999.9999")

// console.log(customer1.interoduceYourself())

// const place1 = new Place("22222")

const residence2 = new Residence(15, "123456798")
console.log(residence2.getResidentsQuantity())

const floorsQuantity2 = new Commerce(28, "489456")
console.log(floorsQuantity2.getfloorsQuantity())

const machinesQuantity2 = new Industry(27, "974123")
console.log(machinesQuantity2.getMachinesQuantity())