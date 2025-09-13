//Gil Micaela PMIW C3
//https://youtu.be/py-X9uN4VZk
//https://youtu.be/pLwSsT9wwwE
//https://youtu.be/IdZyLhIKnv8

let miFoto;
let cant = 10;
let tam;
let filas=10;
let x=0;
let y=0;
let originalX, originalY;
function coloresRandom() { //Función propia que retorna un valor
  return color(random(255), random(255), random(255));
}
let contadorTiempo;
let colores;

function preload(){
  miFoto= loadImage ("arte.jpg");
}


function setup() {
  createCanvas(800, 400)
  tam = width/2/cant;
  colores= 1;
  contadorTiempo = 0;
}

function draw() {
   background(255);
  image(miFoto, 0, 0, 400, 400);
  // dibujarGrilla();
  if (colores ==1) {
    grillaBlancoYNegro(); //Primer Grilla
    //fill(coloresRandom());
  } else if (colores==2) { //Segunda Grilla
    grillaVioleta();
  } else if (colores==3) { //Tercer Grilla
    grillaAzul();
  } else if (colores==4) { //Cuarta Grilla
    grillaCeleste();
  } else if (colores==5) { //Quinta Grilla
    grillaVerde();
  } else if (colores==6) { //Sexta Grilla
    grillaAmarilla();
  } else if (colores==7) { //Septima Grilla
    grillaNaranja();
  } else if (colores==8) { //Octava Grilla
    grillaRandomYBlanca();
  } else if (colores==9) { //Novena Grilla
    grillaRandomYNegra();
  } else if (colores==10) {//Décima Grilla
    tableroDeAjedrez();
  } else if (colores==11) {//Onceava Grilla
    grillaCuadradosRandom();
  } else if (colores==12) {//Doceava Grilla
    grillaRandom();
  }
  contadorTiempo++; // contador para ir cambiando los colores
  if (contadorTiempo> 30) {
    contadorTiempo=0;
    colores++;
    if (colores>9) {
      colores=9;
    }
  }
  if (mouseX<400) {
    grillaBlancoYNegro();
  }
}

// Función propia que no retorna un valor. Grilla blanco y negro
function grillaBlancoYNegro() {
  for (let x=0; x< cant; x++) {
    for ( let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        noStroke();
        fill(0);//color negro
      } else {
        fill(255);
      }
      rect(x*tam+400, y*tam, tam, tam);
      if ((x+y)%2==0) { //par
        fill(255); //blanco
      } else { // impar
        fill(0);
      }
      ellipse( x*tam+420, y*tam +20, 18, 18); //x*tam e y*tam son las coordenandas del ellipse y 18,18 es el radio
    }
}
}

//Función propia que no retorna un valor. Grilla con color  Violeta
function grillaVioleta() {
  for (let x=0; x<cant; x++) {
    for ( let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        noStroke();
        fill(221, 3, 255);// violeta
      } else {
        fill(coloresRandom());
      }
      rect(x*tam+400, y*tam, tam, tam);
      if ((x+y)%2==0) { //par
        fill(250, 255, 3); //amarillo
      } else { // impar
        fill(coloresRandom());
      }
      ellipse( x*tam+420, y*tam +20, 18, 18); //x*tam e y*tam son las coordenandas del ellipse y 18,18 es el radio
    }
  }
}

//Función propia que retorna un valor. Grilla con color azul
function grillaAzul() {
  for (let x=0; x<cant; x++) {
    for ( let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        noStroke();
        fill(coloresRandom());
      } else {
        fill(90, 3, 255);//azul
      }
      rect(x*tam+400, y*tam, tam, tam);
      if ((x+y)%2==0) { //par
        fill(coloresRandom());
      } else { // impar
        fill(255, 154, 3); //naranja
      }
      ellipse( x*tam+420, y*tam +20, 18, 18); //x*tam e y*tam son las coordenandas del ellipse y 18,18 es el radio
    }
  }
}

//Función propia que no retorna un valor. Grilla con color Celeste
function grillaCeleste(){
  for (let x=0; x<cant; x++) {
    for ( let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        noStroke();
        fill(coloresRandom());
      } else {
        fill(3, 255, 253); //celeste
      }
      rect(x*tam+400, y*tam, tam, tam);
      if ((x+y)%2==0) { //par
        fill(coloresRandom());
      } else { // impar
        fill(255, 3, 3); //rojo
      }
      ellipse( x*tam+420, y*tam +20, 18, 18); //x*tam e y*tam son las coordenandas del ellipse y 18,18 es el radio
    }
  }
}

//Función propia que no retorna un valor. Grilla con color verde
function grillaVerde() {
  for (let x=0; x<cant; x++) {
    for ( let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        noStroke();
        fill(coloresRandom());
      } else {
        fill(25, 206, 2); // Verde
      }
      rect(x*tam+400, y*tam, tam, tam);
      if ((x+y)%2==0) { //par
        fill(coloresRandom());
      } else { // impar
        fill(206, 2, 149);// violeta
      }
      ellipse( x*tam+420, y*tam +20, 18, 18); //x*tam e y*tam son las coordenandas del ellipse y 18,18 es el radio
    }
  }
}

//Función propia que no retorna un valor. Grilla con color Amarillo
function grillaAmarilla() {
  for (let x=0; x<cant; x++) {
    for ( let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        noStroke();
        fill(coloresRandom());
      } else {
        fill(254, 255, 0); // Amarillo
      }
      rect(x*tam+400, y*tam, tam, tam);
      if ((x+y)%2==0) { //par
        fill(coloresRandom());
      } else { // impar
        fill(206, 2, 149);// violeta
      }
      ellipse( x*tam+420, y*tam +20, 18, 18); //x*tam e y*tam son las coordenandas del ellipse y 18,18 es el radio
    }
  }
}

//Función propia que no retorna un valor. Grilla con color Naranja
function grillaNaranja() {
  for (let x=0; x<cant; x++) {
    for ( let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        noStroke();
        fill(coloresRandom());
      } else {
        fill(255, 94, 0); // Naranja
      }
      rect(x*tam+400, y*tam, tam, tam);
      if ((x+y)%2==0) { //par
        fill(coloresRandom());
      } else { // impar
        fill(246, 255, 0);//amarillo
      }
      ellipse( x*tam+420, y*tam +20, 18, 18); //x*tam e y*tam son las coordenandas del ellipse y 18,18 es el radio
    }
  }
}

//Función propia que no retorna un valor. Grilla con con algunos rect y ellipses blanco y negro y otros colores random
function grillaRandomYBlanca() {
  for (let x=0; x<cant; x++) {
    for ( let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        noStroke();
        fill(coloresRandom());
      } else {
        fill(255); //Blanco
      }
      rect(x*tam+400, y*tam, tam, tam);
      if ((x+y)%2==0) { //par
        fill(coloresRandom());
      } else { // impar
        fill(0);// negro
      }
      ellipse( x*tam+420, y*tam +20, 18, 18); //x*tam e y*tam son las coordenandas del ellipse y 18,18 es el radio
    }
  }
}

//Función  propia que no retorna un valor, que muestra la grilla en negro y blanco y otros rect y ellipses en colores random
function grillaRandomYNegra() {
  for (let x=0; x<cant; x++) {
    for (let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        noStroke();
        fill(0);// negro
      } else {
        fill(coloresRandom()); 
      }
      rect(x*tam+400, y*tam, tam, tam);
      if ((x+y)%2==0) { //par
        fill(255);//blanco
      } else { // impar
        fill(coloresRandom());
      }
      ellipse( x*tam+420, y*tam +20, 18, 18); //x*tam e y*tam son las coordenandas del ellipse y 18,18 es el radio
    }
  }
}

//Función propia que no retorna un valor que muestra la grilla sin elipses
function tableroDeAjedrez() {
  for (let x=0; x<cant; x++) {
    for ( let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        noStroke();
        fill(0);//negro
      } else {
        fill(255);//blanco
      }
      rect(x*tam+400, y*tam, tam, tam);
    }
  }
}


//Función propia que no retorna un valor, que hace que se vean rect y ellipse en blanco y negro y otros en colores random
function grillaCuadradosRandom() {
  for (let x=0; x<cant; x++) {
    for ( let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        noStroke();
        fill(coloresRandom());
      } else {
        fill(coloresRandom());
      }
      rect(x*tam+400, y*tam, tam, tam);
    }
  }
}

//Función propia que no retorna un valor que hace que se vea la grilla en colores random y negro solo rect, sin ellipses
function grillaRandom() {
  for (let x=0; x<cant; x++) {
    for ( let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        noStroke();
        fill(0); //negro
      } else {
        fill(coloresRandom());
      }
      rect(x*tam+400, y*tam, tam, tam);
    }
  }
}

//Función del mouse que hace que se vea toda la grilla en colores random
function mouseDragged() {
  for (let x=0; x<cant; x++) {
    for ( let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        noStroke();
        fill(coloresRandom());
      } else {
        fill(coloresRandom());
      }
      rect(x*tam+400, y*tam, tam, tam);
      if ((x+y)%2==0) { //par
        fill(coloresRandom());
      } else { // impar
        fill(coloresRandom());
      }
      ellipse( x*tam+420, y*tam +20, 18, 18); //x*tam e y*tam son las coordenandas del ellipse y 18,18 es el radio
    }
  }
}



//Función del teclado que vuelve las variables a su estado original con la "r" o "R"
function keyPressed() {
  if (key == 'r' || key == 'R') {
    colores=1;
  } else if (key == 'd' || key == 'D') { //sin ellipses
    colores=10;
  } else if (key == 't' || key == 'T') { //rect randoms
    colores=11;
  } else if (key == 'f' || key == 'F') { //rect randoms y negros
    colores=12;
  }
}