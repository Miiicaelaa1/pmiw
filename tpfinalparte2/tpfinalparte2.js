let juego; 
let rocaImg;
let gameOverImg;
let winImg;
let rocas = [];
let plat;
let minotauroImg;
let personajeImg;

function preload() { 
  rocaImg = loadImage('data/roca.png');
  gameOverImg = loadImage('data/gameOver.jpg');
  winImg = loadImage('data/win.jpg');
  minotauroImg = loadImage('data/minotauro.jpg');
  personajeImg = loadImage('data/personaje.jpg');
}

function setup() {
  createCanvas(640, 480);
  plat = new Plataforma();
  juego = new Juego();
}

function draw() { 
  background(200);
  juego.actualizar();
}

function keyPressed() {
  juego.presionarTecla();
}

class Personaje {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vel = 2;
    this.tam = 28;
  }
  
  actualizar() {
    let dx = 0;
    let dy = 0;

    if (keyIsDown(87)) dy = -this.vel; // W
    if (keyIsDown(83)) dy =  this.vel; // S
    if (keyIsDown(65)) dx = -this.vel; // A
    if (keyIsDown(68)) dx =  this.vel; // D

    this.mover(dx, dy);
  }

  mover(dx, dy) {
    let nuevoX = this.x + dx;
    let nuevoY = this.y + dy;

    if (!this.chocaConRoca(nuevoX, this.y)) this.x = nuevoX;
    if (!this.chocaConRoca(this.x, nuevoY)) this.y = nuevoY;
  }

  chocaConRoca(nx, ny) {
    for (let r of rocas) {
      if (nx < r.x + 32 &&
          nx + this.tam > r.x &&
          ny < r.y + 32 &&
          ny + this.tam > r.y) {
        return true;
      }
    }
    return false;
  }

  mostrar() {
    image(personajeImg, this.x, this.y, 32, 32);
  }
}

class Enemigo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  mostrar() {
    image(minotauroImg, this.x, this.y, 32, 32);
  }
}

class Juego { 

  constructor() {
    this.estado = 'inicio';
    this.personaje = null;
  }

  reiniciarJuego() {
    this.estado = 'jugando';
    this.personaje = new Personaje(32, 32);
  }

  actualizar() {
    if (this.estado === 'inicio') { 
      this.pantallaInicio();
      return;
    }

    if (this.estado === 'gameover') { 
      this.pantallaGameOver();
      return;
    }

    if (this.estado === 'jugando') {
      this.jugar();
    }
  }

  presionarTecla() {
    // Iniciar juego
    if (this.estado === 'inicio' && key === ' ') {
      this.estado = 'jugando';

      // Crear rocas
      rocas = [];
      for (let i = 0; i < plat.filas; i++) {
        for (let j = 0; j < plat.columnas; j++) {
          if (plat.plataform[i][j] === 1) {
            rocas.push(new Roca(j * 32, i * 32));
          }
        }
      }

      this.personaje = new Personaje(32, 32);
    }

    // Reiniciar
    if (this.estado === 'gameover' && key === ' ') {
      this.reiniciarJuego();
    }
  }

  pantallaInicio() {
    push();
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(0);
    text('Espacio para jugar\nWASD para moverte', width/2, height/2);
    pop();
  }

  pantallaGameOver() {
    image(gameOverImg, 0, 0, width, height);
    push();
    textAlign(CENTER, CENTER);
    textSize(25);
    fill(200, 0, 0);
    text("GAME OVER", width/2, height/2 - 20);
    textSize(15);
    fill(0);
    text("Presiona ESPACIO para reiniciar", width/2, height/2 + 20);
    pop();
  }

  jugar() {
    // Mostrar rocas
    for (let r of rocas) {
      r.mostrar();
    }

    // Personaje
    if (this.personaje) {
      this.personaje.actualizar();
      this.personaje.mostrar();
    }
  }
}

class Roca {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mostrar() {
    image(rocaImg, this.x, this.y, 32, 32);
  }
}

class Plataforma {
  constructor() {
    this.fijas = 15;
    this.columnas = 20;

    this.filas = 15; 
    this.plataform = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
      [1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1],
      [1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1],
      [1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1],
      [1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1],
      [1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1],
      [1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1],
      [1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1],
      [1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1],
      [1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1],
      [1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
  }
}
