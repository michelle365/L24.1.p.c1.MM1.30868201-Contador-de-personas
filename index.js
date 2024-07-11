class cl_persona {
  constructor(n, s) {
    this.nombre = n;
    this.sexo = s;
  }
}
class cl_datos {
  constructor() {
    this.contpersonas = 0;
    this.conthombres = 0;
    this.contmujeres = 0;
  }
  procesar(p) {
    this.contpersonas++;
    if (p.sexo == "h") this.conthombres++;
    else this.contmujeres++;
  }
}

let perUno = new cl_persona("luis", "h");
let perDos = new cl_persona("ana", "f");
let perTres = new cl_persona("josé", "h");
let perCuatro = new cl_persona("carmen", "f");
let perCinco = new cl_persona("rosa", "f");
let perSeis = new cl_persona("juan", "h");
let perSiete = new cl_persona("maria", "f");
let perOcho = new cl_persona("luz", "f");
let perNueve = new cl_persona("rafael", "h");
let perDiez = new cl_persona("liz", "f");
let perOnce = new cl_persona("marcos", "h");
let perDoce = new cl_persona("leo", "h");

let datos = new cl_datos();
datos.procesar(perUno);
datos.procesar(perDos);
datos.procesar(perTres);
datos.procesar(perCuatro);
datos.procesar(perCinco);
datos.procesar(perSeis);
datos.procesar(perSiete);
datos.procesar(perOcho);
datos.procesar(perNueve);
datos.procesar(perDiez);
datos.procesar(perOnce);
datos.procesar(perDoce);

let salida = document.getElementById("salida");

salida.innerHTML = "Resultados: <br><br>";

salida.innerHTML += `
el numero de personas es: ${datos.contpersonas}<br>
el numero de mujeres es de: ${datos.contmujeres}<br>
el numero de hombres es de: ${datos.conthombres}`;
