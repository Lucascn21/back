import {
  script1Ej1,
  script2Ej1,
  script3Ej1,
  script4Ej1,
  script5Ej1,
  script6Ej1,
  script7Ej1,
  script8Ej1,
  script9Ej1,
  script10Ej1,
} from "./ejercitaciones/ejercitacionUno";

import {
  script1_Ej2,
  script2_Ej2,
  script3_Ej2,
  script4_Ej2,
  script5_Ej2,
  Rectangulo,
  script7_Ej2,
  script8_Ej2,
  script9_Ej2,
  script10_Ej2,
} from "./ejercitaciones/ejercitacionDos";

//Primera Tanda de Ejercicios
/*
script1Ej1();
script2Ej1();
script3Ej1();
script4Ej1();
script5Ej1();
script6Ej1("entrada.txt");
script7Ej1();
script8Ej1();
script9Ej1();
script10Ej1();
*/

// Segunda Tanda de Ejercicios

script1_Ej2();

const arrayFiltrado = script2_Ej2();

script3_Ej2(arrayFiltrado);

script4_Ej2(4, () => {
  console.log("El número es par.");
});

console.dir(script5_Ej2("Juan", 25));

const rect = new Rectangulo(10, 20);
console.log("Instancia de Rectangulo:", rect);
console.log("Propiedades del objeto", Object.getOwnPropertyNames(rect));
console.log(
  "Métodos del objeto",
  Object.getOwnPropertyNames(Object.getPrototypeOf(rect))
);
console.log("Área calculada con calcularArea:", rect.calcularArea());

const persona = { nombre: "Ana", edad: 30, ciudad: "Rosario" };
script7_Ej2(persona);

const usuarios = [{ nombre: "Lucía" }, { nombre: "Juan" }, { nombre: "Pedro" }];

console.dir(usuarios);
console.dir(script8_Ej2(usuarios));

const usuariosConNuevaProp = script9_Ej2(usuarios);
console.dir(usuariosConNuevaProp);

const multiplicadorPor2 = script10_Ej2(2);
const multiplicadorPor3 = script10_Ej2(3);
console.log("Multiplicador por 2:", multiplicadorPor2(5)); // 10
console.log("Multiplicador por 3:", multiplicadorPor3(5)); // 15
