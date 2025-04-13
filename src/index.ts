import { join } from "path";
import { MENSAJES, MENSAJES_DE_ERROR } from "./constants";
import {
  gradosCelsiusAFahrenheit,
  kilogramosALibras,
  metrosAKilometros,
} from "./conversor";
import { joinPath, validateFilePath } from "./file_utils";
import { Request, Response } from "express";
const fs = require("fs");

/*Practica #1

📝 1. Diferencias entre Browser y Node.js
🔹 Escribe un script que detecte si se está ejecutando en el navegador o en Node.js y muestre un mensaje adecuado.
✅ Si se ejecuta en Node.js, imprime la versión de Node.js.
💡 Conceptos: global vs window, process.version.
*/
const scriptUno = () => {
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
/*

📝 2. Temporizador con Fecha y Hora
🔹 Crea un temporizador que imprima la fecha y hora actual cada segundo.
✅ Detén la ejecución automáticamente después de 10 segundos.
💡 Conceptos: setInterval(), clearInterval(), Date().

*/
const scriptDos = () => {
  console.log("Iniciando temporizador...");
  console.time("Temporizador");
  const startTime = Date.now();
  console.log(
    "Fecha de inicio:",
    new Date(startTime).toLocaleString("es-ES", {
      timeZone: "America/Argentina/Buenos_Aires",
    })
  );
  let count = 0;
  const timeInfoList: { Iteración: number; fechaYHora: string }[] = [];

  const timer = setInterval(() => {
    count++;
    timeInfoList.push({
      Iteración: count,
      fechaYHora: new Date().toLocaleString("es-ES", {
        timeZone: "America/Argentina/Buenos_Aires",
      }),
    });

    if (Date.now() - startTime >= 10000) {
      clearInterval(timer);
      console.table(timeInfoList);
      console.log(`Fin. Se mostraron ${count} tiempos.`);
      console.timeEnd("Temporizador");
    }
  }, 1000);
};

/*



📝 3. Módulo de Conversión de Unidades
🔹 Crea un módulo llamado conversor.js que convierta:
Metros a kilómetros
Kilogramos a libras
Grados Celsius a Fahrenheit
✅ Luego, importa el módulo en otro archivo y usa las funciones.
💡 Conceptos: exports, módulos.
*/
const scriptTres = () => {
  console.dir(metrosAKilometros(1000));
  console.dir(kilogramosALibras(100));
  console.dir(gradosCelsiusAFahrenheit(25));
};

/*

📝 4. Información del Sistema Operativo
🔹 Escribe un script que muestre:

El sistema operativo

La cantidad de memoria total y libre

El tiempo en que el sistema está encendido (uptime)
💡 Conceptos: os.platform(), os.totalmem(), os.freemem(), os.uptime().

*/

const scriptCuatro = () => {
  const os = require("os");
  const { platform, totalmem, freemem, uptime } = os;

  const SEGUNDOS_EN_UNA_HORA = 3600;
  const TIEMPO_ENCENDIDO_EN_SEGUNDOS = uptime();
  const TIEMPO_ENCENDIDO_EN_HORAS = Math.floor(
    TIEMPO_ENCENDIDO_EN_SEGUNDOS / SEGUNDOS_EN_UNA_HORA
  );
  const MEMORIA_LIBRE_EN_BYTES = freemem();
  const MEMORIA_TOTAL_EN_BYTES = totalmem();
  const MEMORIA_TOTAL_EN_MB = MEMORIA_TOTAL_EN_BYTES / 1024 / 1024;
  const MEMORIA_LIBRE_EN_MB = MEMORIA_LIBRE_EN_BYTES / 1024 / 1024;

  const systemInfo = {
    SistemaOperativo: platform(),
    MemoriaTotal: `${Math.floor(MEMORIA_TOTAL_EN_MB)} MB`,
    MemoriaLibre: `${Math.floor(MEMORIA_LIBRE_EN_MB)} MB`,
    TiempoEncendido: `${TIEMPO_ENCENDIDO_EN_HORAS} horas`,
  };

  console.table(systemInfo);
};
/*


📝 5. Lectura y Escritura de Archivos (Modo Asíncrono)
🔹 Escribe un programa que lea entrada.txt, convierta su contenido a mayúsculas y lo guarde en salida.txt.
💡 Conceptos: fs.readFile(), fs.writeFile().
*/
const scriptCinco = () => {
  const ENTRADA_PATH = joinPath("entrada.txt");
  const SALIDA_PATH = joinPath("salida.txt");

  if (!fs.existsSync(ENTRADA_PATH)) {
    throw new Error(`No existe el archivo entrada.txt`);
  }
  fs.readFile(ENTRADA_PATH, "utf8", (err: Error, data: string) => {
    if (err) {
      console.error("Error leyendo el archivo", err);
      return;
    }
    const upperCaseData = data.toUpperCase();
    fs.writeFile(SALIDA_PATH, upperCaseData, (err: Error) => {
      if (err) {
        console.error("Error escribiendo el archivo", err);
        return;
      }
      console.log("Archivo escrito con éxito:", upperCaseData);
    });
  });
};
/* 


📝 6. Analizador de Rutas
🔹 Escribe un programa que reciba una ruta de archivo y muestre:
💡 Conceptos: path.dirname(), path.basename(), path.extname().

El directorio
El nombre del archivo
La extensión
*/

const scriptSeis = (rutaArchivo: String) => {
  const pathArchivo = joinPath(rutaArchivo);
  validateFilePath(pathArchivo);

  const { dirname, relative, basename, extname } = require("path");

  const rutaAnalizada = {
    directorioAbsoluto: dirname(pathArchivo),
    rutaRelativa: relative(__dirname, pathArchivo),
    nombreArchivo: basename(pathArchivo),
    extension: extname(pathArchivo),
  };

  console.table(rutaAnalizada);
};
/*


📝 7. Gestión de Directorios
🔹 Crea un script que:

Cree una carpeta logs si no existe.
Genere 5 archivos (log1.txt, ..., log5.txt).
Liste todos los archivos de la carpeta logs.
💡 Conceptos: fs.mkdirSync(), fs.writeFileSync(), fs.readdir().
*/
const scriptSiete = () => {
  const path = require("path");

  const carpetaLogs = joinPath("logs");

  if (!fs.existsSync(carpetaLogs)) {
    fs.mkdirSync(carpetaLogs);
    console.log("Carpeta logs creada.");
  } else {
    console.log("La carpeta logs ya existe.");
  }

  for (let i = 1; i <= 5; i++) {
    fs.writeFileSync(
      path.join(carpetaLogs, `log${i}.txt`),
      `Contenido log ${i}`
    );
    console.log(`Archivo log${i}.txt creado.`);
  }

  const archivos = fs.readdirSync(carpetaLogs);
  console.log("Archivos en la carpeta logs:", archivos);
};
/*


📝 8. Eliminación de Archivos
🔹 Crea un programa que elimine todos los archivos dentro de logs y luego borre la carpeta.
💡 Conceptos: fs.unlinkSync(), fs.rmdirSync().
*/
const scriptOcho = () => {
  const path = require("path");
  const carpetaLogs = joinPath("logs");

  if (fs.existsSync(carpetaLogs)) {
    const archivos = fs.readdirSync(carpetaLogs);
    archivos.forEach((archivo: string) => {
      fs.unlinkSync(path.join(carpetaLogs, archivo));
      console.log(`Archivo ${archivo} eliminado.`);
    });
    fs.rmdirSync(carpetaLogs);
    console.log("Carpeta logs eliminada.");
  } else {
    console.log("La carpeta logs no existe.");
  }
};
/*

📝 9. Temporizador con Promesa
🔹 Implementa una función esperar(ms) que espere un tiempo y luego resuelva una promesa.
💡 Conceptos: Promesas, setTimeout(), async/await.
*/
const esperar = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Esperé ${ms} milisegundos.`);
    }, ms);
  });
};
const scriptNueve = async () => {
  console.log("Iniciando espera...");
  const resultado = await esperar(5000);
  console.log(resultado);
};
/*


📝 10. Servidor HTTP con Respuesta Dinámica
🔹 Crea un servidor HTTP que devuelva la hora actual en formato JSON.
💡 Conceptos: http.createServer(), res.writeHead(), JSON.stringify().
*/
const scriptDiez = () => {
  const http = require("http");

  const server = http.createServer((req: Request, res: Response) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    const fechaActual = new Date().toLocaleString("es-ES", {
      timeZone: "America/Argentina/Buenos_Aires",
    });
    res.end(JSON.stringify({ fechaActual }));
  });

  server.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });
};

/*
scriptUno();
scriptDos();
scriptTres();
scriptCuatro();
scriptCinco();
scriptSeis("entrada.txt");
scriptSiete();
scriptSiete();
scriptOcho();
scriptNueve();
scriptDiez();
*/