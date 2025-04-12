import { MENSAJES, MENSAJES_DE_ERROR } from "./constants";

/*Practica #1

📝 1. Diferencias entre Browser y Node.js
🔹 Escribe un script que detecte si se está ejecutando en el navegador o en Node.js y muestre un mensaje adecuado.
✅ Si se ejecuta en Node.js, imprime la versión de Node.js.
💡 Conceptos: global vs window, process.version.


📝 2. Temporizador con Fecha y Hora
🔹 Crea un temporizador que imprima la fecha y hora actual cada segundo.
✅ Detén la ejecución automáticamente después de 10 segundos.
💡 Conceptos: setInterval(), clearInterval(), Date().


📝 3. Módulo de Conversión de Unidades
🔹 Crea un módulo llamado conversor.js que convierta:
Metros a kilómetros
Kilogramos a libras
Grados Celsius a Fahrenheit
✅ Luego, importa el módulo en otro archivo y usa las funciones.
💡 Conceptos: exports, módulos.


📝 4. Información del Sistema Operativo
🔹 Escribe un script que muestre:

El sistema operativo

La cantidad de memoria total y libre

El tiempo en que el sistema está encendido (uptime)
💡 Conceptos: os.platform(), os.totalmem(), os.freemem(), os.uptime().


📝 5. Lectura y Escritura de Archivos (Modo Asíncrono)
🔹 Escribe un programa que lea entrada.txt, convierta su contenido a mayúsculas y lo guarde en salida.txt.
💡 Conceptos: fs.readFile(), fs.writeFile().


📝 6. Analizador de Rutas
🔹 Escribe un programa que reciba una ruta de archivo y muestre:
💡 Conceptos: path.dirname(), path.basename(), path.extname().

El directorio
El nombre del archivo
La extensión


📝 7. Gestión de Directorios
🔹 Crea un script que:

Cree una carpeta logs si no existe.
Genere 5 archivos (log1.txt, ..., log5.txt).
Liste todos los archivos de la carpeta logs.
💡 Conceptos: fs.mkdirSync(), fs.writeFileSync(), fs.readdir().


📝 8. Eliminación de Archivos
🔹 Crea un programa que elimine todos los archivos dentro de logs y luego borre la carpeta.
💡 Conceptos: fs.unlinkSync(), fs.rmdirSync().


📝 9. Temporizador con Promesa
🔹 Implementa una función esperar(ms) que espere un tiempo y luego resuelva una promesa.
💡 Conceptos: Promesas, setTimeout(), async/await.


📝 10. Servidor HTTP con Respuesta Dinámica
🔹 Crea un servidor HTTP que devuelva la hora actual en formato JSON.
💡 Conceptos: http.createServer(), res.writeHead(), JSON.stringify().
*/
const script_uno = () => {
  const environmentIsNotBrowser = () => {
    if (typeof global !== "undefined") return true;
    if (typeof window !== "undefined") return false;
    throw new Error("Se rompió la matrix, no se puede determinar el entorno.");
  };

  const nodeVersion = () => {
    return process.version;
  };

  environmentIsNotBrowser()
    ? console.dir(nodeVersion())
    : console.dir("El entorno no es Node.js.");
};

script_uno();
