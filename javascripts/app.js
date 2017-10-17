// Rover Object Goes Here
// ======================
rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
}
// ======================
// Al inicio de cada refresco se crean 10 obstaculos aleatorios
// ========================================================================================
// visualizar la malla:
// console.log(grid)
// Comandos de movimiento:
// turnLeft(rover)-turnRight(rover)-moveForward(rover)-moveBackward(Rover)-goForward("")
// ========================================================================================
var grid = [
  ['R','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','','']
];
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case 'N':
      rover.direction = "W";
      break;
    case 'W':
      rover.direction = "S";
      break;
    case 'S':
      rover.direction = "E";
      break;
    case 'E':
      rover.direction = "N";
      break;
    default:
      console.log("Direccion incorrecta.");
  }
  console.log("Orientado direccion " + rover.direction);
}
function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case 'N':
      rover.direction = "E";
      break;
    case 'E':
      rover.direction = "S";
      break;
    case 'S':
      rover.direction = "W";
      break;
    case 'W':
      rover.direction = "N";
      break;
    default:
      console.log("Direccion incorrecta.");
  }
  console.log("Orientado direccion " + rover.direction);
}
function moveForward(rover){
  rover.validateCommand = true;
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      console.log("Orientado direccion " + rover.direction);
      if(rover.y != 0 && rover.validateCommand === true && grid[rover.y -1][rover.x]!="O"){
        grid[rover.y][rover.x]="";
        rover.y--;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover avanza hacia el Norte: se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.y!=0){
        console.log("Hay un obstaculo Rover no puede avanzar");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover no puede avanzar, zona restringida. Lista de comandos interrumpida");
        console.log("rover se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    case "E":
      console.log("Orientado direccion " + rover.direction);
      if(rover.x != 9 && rover.validateCommand === true && grid[rover.y][rover.x +1]!="O"){
        grid[rover.y][rover.x]="";
        rover.x++;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover avanza hacia el Este: se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.x!=9){
        console.log("Hay un obstaculo Rover no puede avanzar");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover no puede avanzar, zona restringida. Lista de comandos interrumpida");
        console.log("rover se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    case "S":
      console.log("Orientado direccion " + rover.direction);
      if(rover.y !=9 && rover.validateCommand === true && grid[rover.y +1][rover.x]!="O"){
        grid[rover.y][rover.x]="";
        rover.y++;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover avanza hacia el Sur: se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.y!=9){
        console.log("Hay un obstaculo Rover no puede avanzar");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover no puede avanzar, zona restringida. Lista de comandos interrumpida");
        console.log("rover se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    case "W":
      console.log("Orientado direccion " + rover.direction);
      if(rover.x !=0 && rover.validateCommand === true && grid[rover.y -1][rover.x]!="O"){
        grid[rover.y][rover.x]="";
        rover.x--;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover avanza hacia el Oeste: se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.x!=0){
        console.log("Hay un obstaculo Rover no puede avanzar");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover no puede avanzar, zona restringida. Lista de comandos interrumpida");
        console.log("rover se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    default:
      console.log("Esto es Norte Sur Oeste Este, no es Proa Popa Babor o Estribor");
      break;
  }
}
function moveBackward(rover){
  rover.validateCommand = true;
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      console.log("Orientado direccion " + rover.direction);
      if(rover.y != 9 && rover.validateCommand === true && grid[rover.y +1][rover.x]!="O"){
        grid[rover.y][rover.x]="";
        rover.y++;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover retrocede hacia el Sur: se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.y!=9){
        console.log("Hay un obstaculo Rover no puede retroceder");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover no puede retroceder, zona restringida. Lista de comandos interrumpida");
        console.log("rover se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    case "E":
      console.log("Orientado direccion " + rover.direction);
      if(rover.x != 0 && rover.validateCommand === true && grid[rover.y][rover.x -1]!="O"){
        grid[rover.y][rover.x]="";
        rover.x--;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover retrocede hacia el Oeste: se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.x!=0){
        console.log("Hay un obstaculo Rover no puede retroceder");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover no puede retroceder, zona restringida. Lista de comandos interrumpida");
        console.log("rover se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    case "S":
      console.log("Orientado direccion " + rover.direction);
      if(rover.y !=0 && rover.validateCommand === true && grid[rover.y -1][rover.x]!="O"){
        grid[rover.y][rover.x]="";
        rover.y--;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover retrocede hacia el Norte: se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.y!=0){
        console.log("Hay un obstaculo Rover no puede retroceder");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover no puede retroceder, zona restringida. Lista de comandos interrumpida");
        console.log("rover se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    case "W":
      console.log("Orientado direccion " + rover.direction);
      if(rover.x !=9 && rover.validateCommand === true && grid[rover.y][rover.x +1]!="O"){
        grid[rover.y][rover.x]="";
        rover.x++;
        grid[rover.y][rover.x]="R";
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        console.log("Rover retrocede hacia el Este: se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }else if(rover.x!=9){
        console.log("Hay un obstaculo Rover no puede retroceder");
        rover.validateCommand = false;
      }else{
        rover.validateCommand = false;
        console.log("Rover no puede retroceder, zona restringida. Lista de comandos interrumpida");
        console.log("rover se encuentra en " + "(" + rover.x + "," + rover.y + ")");
      }
      break;
    default:
      console.log("Esto es Norte Sur Oeste Este, no es Proa Popa Babor o Estribor");
      break;
  }
}
function validate(command){
  var validate = 0;
  for(var i = 0; i < command.length; i++){
    if(command[i]==="f" || command[i]==="l" || command[i]==="r" || command[i]==="b"){
      validate++;
    }
  }
  if(validate === command.length){
    rover.validateCommand = true;
  }else{
    rover.validateCommand = false;
  }
}
function goForward(command){
  validate(command);
  if(rover.validateCommand === true){
    console.log("se inicia la lista de comandos");
    for(var i = 0; i < command.length; i++){
      if(rover.validateCommand === true){
        switch (command[i]) {
          case "f":
            moveForward(rover);
            break;
          case "l":
            turnLeft(rover);
            break;
          case "r":
            turnRight(rover);
            break;
          case "b":
            moveBackward(rover);
            break;
          default:
            console.log("Lista de comandos interrumpida");
            break;
        }
      }
    }
    console.log("Lista de comandos finalizada");
  }else{
      console.log("comando incorrecto");
    }
  console.log("TravelLog")
  rover.travelLog.forEach(function(travelLog){
    console.log(travelLog);
  });
}
function randomNum(){
  return Math.floor(Math.random() * 10);
}
for (var i = 0; i < 10; i++){
  var row = randomNum();
  var column = randomNum();
  if (grid[column][row]!="R") {
    grid[column][row] = "O";
    console.log("Row " + row + " " + "Column " + column);
  }else{
    console.log("Rover en Row "+ 0 + " " + "Column" + 0);
  }
}