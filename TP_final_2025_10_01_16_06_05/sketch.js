
//variable global para saber en que pantalla estoy 
let pantalla;

//variable global para subir la foto
let miFoto;

function preload(){
  pantalla1= loadImage ("Pantalla 1.jpg");
   pantalla1= loadImage ("Pantalla 2.jpg");
}

function setup() {
  createCanvas(640, 480);
  //valor inicial a la pantalla 
  pantalla = 0; 
}

//funciones de pantallas:
function mostrarPantallaInicio() {
  background(50,150,200);
  fill(255);
  textSize(32);
  textAlign(CENTER,CENTER);
  text("Pantalla de inicio", width/2, height/2);
}

function draw() {
  background(220);
   image(pantalla1, 0, 0, 400, 400);

  if (pantalla === 0) {
    // Pantalla de inicio
    push();
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Pulsa para comenzar", width/2, height/2);
    pop();

  } else if (pantalla == 1) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("El soldado Teseo llega a la Isla de Creta para terminar con la vida del Minotauro. Al llegar a la entrada del laberinto, decide si quiere pelear o no ¿Teseo ingresa al laberinto para pelear contra el Minotauro?", 0, height*0.55, width, height*0.4); 
    pop();
    mostrarBoton("si", 100, 400, 80, 40);
    mostrarBoton("no", 540, 400, 80, 40);

  } else if (pantalla == 2) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("Teseo entra al laberinto ¿Deseas pelear contra los amigos del Minotauro (Centauros y Cíclopes)?", 0, height*0.55, width, height*0.4);
    pop();
    mostrarBoton("si", 100, 400, 80, 40);
    mostrarBoton("no", 540, 400, 80, 40);

  } else if (pantalla == 3) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("Teseo lucha contra los seres mitológicos ¿Teseo les gana a los seres mitológicos?", 0, height*0.55, width, height*0.4);
    pop();
    mostrarBoton("si", 100, 400, 80, 40);
    mostrarBoton("no", 540, 400, 80, 40);

  } else if (pantalla == 4) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("Teseo lucha y gana ¿Teseo está listo para liberar a la ciudad del Minotauro?", 0, height*0.55, width, height*0.4);
    pop();
    mostrarBoton("si", 100, 400, 80, 40);
    mostrarBoton("no", 540, 400, 80, 40);

  } else if (pantalla == 5) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("Teseo por fin encuentra al Minotauro y usa su espada para luchar contra él , vencerlo y así poder regresar a Atenas ¿Teseo le gana al Minotauro?", 0, height*0.55, width, height*0.4);
    pop();
    mostrarBoton("si", 100, 400, 80, 40);
    mostrarBoton("no", 540, 400, 80, 40);

  } else if (pantalla == 6) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("Teseo gana la batalla, terminando con la vida del Minotauro y con ayuda del Ovillo de hilo que le obsequió Ariadna la hija de Minos (rey de Creta) logra volver al inicio del laberinto y escapar FELICITACIONES has ayudado a Teseo a vencer al Minotauro y liberar a la ciudad de este monstruo! Fin de la historia.", 0, height*0.55, width, height*0.4); 
    pop();

  } else if (pantalla == 7) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("Pantalla 7", 0, height*0.55, width, height*0.4); 
    pop();

  } else if (pantalla == 8) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("pantalla 8", 0, height*0.55, width, height*0.4); 
    pop();
    mostrarBoton("si", 100, 400, 80, 40);
    mostrarBoton("no", 540, 400, 80, 40);

  } else if (pantalla == 9) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("pantalla 9", 0, height*0.55, width, height*0.4); 
    pop();
    mostrarBoton("si", 100, 400, 80, 40);
    mostrarBoton("no", 540, 400, 80, 40);

  } else if (pantalla == 10) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("pantalla 10", 0, height*0.55, width, height*0.4); 
    pop();
    mostrarBoton("si", 100, 400, 80, 40);
    mostrarBoton("no", 540, 400, 80, 40);

  } else if (pantalla == 11) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("pantalla 11", 0, height*0.55, width, height*0.4); 
    pop();

  } else if (pantalla == 12) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("pantalla 12", 0, height*0.55, width, height*0.4); 
    pop();
    mostrarBoton("si", 100, 400, 80, 40);
    mostrarBoton("no", 540, 400, 80, 40);

  } else if (pantalla == 13) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("pantalla 13", 0, height*0.55, width, height*0.4); 
    pop();
    mostrarBoton("si", 100, 400, 80, 40);
    mostrarBoton("no", 540, 400, 80, 40);

  } else if (pantalla == 14) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("pantalla 14", 0, height*0.55, width, height*0.4); 
    pop();
    mostrarBoton("si", 100, 400, 80, 40);
    mostrarBoton("no", 540, 400, 80, 40);

  } else if (pantalla == 15) {
    push();
    fill(100, 40); 
    rect(0, height*0.55, width, height*0.4);
    fill(0, 0, 200);
    textSize(24);
    text("pantalla 15", 0, height*0.55, width, height*0.4); 
    pop();
  }
}


function mousePressed() {
  if (pantalla === 0) {
    //flujo de estado de pantalla 0 a pantalla 1 
    pantalla = 1;

  } else if (pantalla == 1) {
    //estoy en la pantalla 1
    //preguntar si hay colision con boton "si"
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 2; // si
    }
    //preguntar si hay colision con boton "no"
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 7; // no
    }

  } else if (pantalla == 2) {
    //acciones pantalla 2
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 3; // si
    }

   if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 8; // no
    }

  } else if (pantalla == 3) {
    //acciones pantalla 3
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 4; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 9; // no
    }

  } else if (pantalla == 4) {
    //acciones pantalla 4
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 5; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 7; // no
    }

  } else if (pantalla == 5) {
    //acciones pantalla 5
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 6; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 11; // no
    }

  } else if (pantalla == 8) {
    //acciones pantalla 8
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 7; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 9; // no
    }

  } else if (pantalla == 9) {
    //acciones pantalla 9
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 10; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 12; // no
    }

  } else if (pantalla == 10) {
    //acciones pantalla 10
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 5; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 13; // no
    }

  } else if (pantalla == 12) {
    //acciones pantalla 12
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 14; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 7; // no
    }

  } else if (pantalla == 14) {
    //acciones pantalla 14
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 5; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 15; // no
    }

  } else if (pantalla == 13) {
    //acciones pantalla 13
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 5; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 14; // no
    }

  } else if (pantalla == 15) {
    //acciones pantalla 15
    if (colisionRectangular(100, 400, 80, 40)) {
      pantalla = 5; // si
    }
    if (colisionRectangular(540, 400, 80, 40)) {
      pantalla = 7; // no
    }
  }
}

// Botón con rectMode(CENTER)
function mostrarBoton(texto_, x_, y_, ancho_, alto_) {
  push();
  rectMode(CENTER);
  fill(0, 100, 0);
  rect(x_, y_, ancho_, alto_);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(texto_, x_, y_);
  pop();
}

function colisionRectangular(x_, y_, ancho_, alto_) {
  if (
    mouseX > x_ - ancho_ / 2 && mouseX < x_ + ancho_ / 2 &&
    mouseY > y_ - alto_ / 2 && mouseY < y_ + alto_ / 2
  ) { return true;
  } else {
    return false;
  }
}
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- PLEASE NO CHANGES BELOW THIS LINE (UNTIL I SAY SO) -->
  <script language="javascript" type="text/javascript" src="libraries/p5.min.js"></script>
  <script language="javascript" type="text/javascript" src="TPFINAL_2_.js"></script>
  <!-- OK, YOU CAN MAKE CHANGES BELOW THIS LINE AGAIN -->

  <title>Teseo y el Minotauro</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #6061a7; /* Fondo de la página */
      display: flex;
      flex-direction: column; /* Texto arriba, canvas abajo */
      align-items: center;
      justify-content: flex-start; /* Comienza desde arriba */
      height: 100vh;
    }

    header {
      width: 100%;
      text-align: center;
      padding: 20px 0;
      font-family: sans-serif;
      font-size: 36px;
      font-weight: bold;
      color: white;
      background-color: #333;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    }

    .canvas-container {
      margin-top: 20px; /* Espacio entre el header y el canvas */
    }

    canvas {
      border: 5px solid black; /* Borde visible solo en el canvas */
      display: block;           /* Quita espacios extra */
    }
  </style>
</head>
<body>
  <header>Teseo y el Minotauro</header>
  <div class="canvas-container">
  </div>
</body>
</html>