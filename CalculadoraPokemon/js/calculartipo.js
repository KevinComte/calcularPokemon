// Obtener referencia a los elementos del DOM
var contenedor = document.getElementById("contenedor");
var debilidades = document.getElementById("debilidades");
var tipos = document.getElementsByName("tipo");
var tipos2 = document.getElementsByName("tipo2");
const tablaTipos = [];
const tablaTipos2 = [];
const tablaFinal = [];
const defTipos = {
  ninguno: {
    Lucha: 1,
    Normal: 1,
    Volador: 1,
    Veneno: 1,
    Tierra: 1,
    Roca: 1,
    Bicho: 1,
    Acero: 1,
    Fuego: 1,
    Agua: 1,
    Planta: 1,
    Eléctrico: 1,
    Psíquico: 1,
    Hielo: 1,
    Dragón: 1,
    Siniestro: 1,
    Hada: 1,
    Fantasma: 1
  },
  normal: {
    Lucha: 2,
    Normal: 1,
    Volador: 1,
    Veneno: 1,
    Tierra: 1,
    Roca: 1,
    Bicho: 1,
    Acero: 1,
    Fuego: 1,
    Agua: 1,
    Planta: 1,
    Eléctrico: 1,
    Psíquico: 1,
    Hielo: 1,
    Dragón: 1,
    Siniestro: 1,
    Hada: 1,
    Fantasma: 0
  },
  lucha: {
    Volador: 2,
    Psíquico: 2,
    Hada: 2,
    Normal: 1,
    Lucha: 1,
    Veneno: 1,
    Tierra: 1,
    Fantasma: 1,
    Acero: 1,
    Fuego: 1,
    Agua: 1,
    Planta: 1,
    Eléctrico: 1,
    Hielo: 1,
    Dragón: 1,
    Roca: 0.5,
    Bicho: 0.5,
    Siniestro: 0.5
  },
  volador: {
    Roca: 2,
    Eléctrico: 2,
    Hielo: 2,
    Normal: 1,
    Volador: 1,
    Veneno: 1,
    Fantasma: 1,
    Acero: 1,
    Fuego: 1,
    Agua: 1,
    Psíquico: 1,
    Dragón: 1,
    Siniestro: 1,
    Hada: 1,
    Lucha: 0.5,
    Bicho: 0.5,
    Planta: 0.5,
    Tierra: 0
  },
  veneno: {
    Tierra: 2,
    Psíquico: 2,
    Normal: 1,
    Volador: 1,
    Roca: 1,
    Fantasma: 1,
    Acero: 1,
    Fuego: 1,
    Agua: 1,
    Eléctrico: 1,
    Hielo: 1,
    Dragón: 1,
    Siniestro: 1,
    Lucha: 0.5,
    Veneno: 0.5,
    Bicho: 0.5,
    Planta: 0.5,
    Hada: 0.5
  },
  tierra: {
    Agua: 2,
    Planta: 2,
    Hielo: 2,
    Normal: 1,
    Lucha: 1,
    Volador: 1,
    Tierra: 1,
    Bicho: 1,
    Fantasma: 1,
    Acero: 1,
    Fuego: 1,
    Psíquico: 1,
    Dragón: 1,
    Siniestro: 1,
    Hada: 1,
    Veneno: 0.5,
    Roca: 0.5,
    Eléctrico: 0
  },
  roca: {
    Lucha: 2,
    Tierra: 2,
    Acero: 2,
    Agua: 2,
    Planta: 2,
    Roca: 1,
    Bicho: 1,
    Fantasma: 1,
    Eléctrico: 1,
    Psíquico: 1,
    Hielo: 1,
    Dragón: 1,
    Siniestro: 1,
    Hada: 1,
    Normal: 0.5,
    Volador: 0.5,
    Veneno: 0.5,
    Fuego: 0.5
  },
  bicho: {
    Volador: 2,
    Roca: 2,
    Fuego: 2,
    Normal: 1,
    Veneno: 1,
    Bicho: 1,
    Fantasma: 1,
    Acero: 1,
    Agua: 1,
    Eléctrico: 1,
    Psíquico: 1,
    Hielo: 1,
    Dragón: 1,
    Siniestro: 1,
    Hada: 1,
    Lucha: 0.5,
    Tierra: 0.5,
    Planta: 0.5
  },
  fantasma: {
    Fantasma: 2,
    Siniestro: 2,
    Volador: 1,
    Tierra: 1,
    Roca: 1,
    Acero: 1,
    Fuego: 1,
    Agua: 1,
    Planta: 1,
    Eléctrico: 1,
    Psíquico: 1,
    Hielo: 1,
    Dragón: 1,
    Hada: 1,
    Veneno: 0.5,
    Bicho: 0.5,
    Normal: 0,
    Lucha: 0
  },
  acero: {
    Lucha: 2,
    Tierra: 2,
    Fuego: 2,
    Fantasma: 1,
    Agua: 1,
    Eléctrico: 1,
    Siniestro: 1,
    Normal: 0.5,
    Volador: 0.5,
    Roca: 0.5,
    Bicho: 0.5,
    Acero: 0.5,
    Planta: 0.5,
    Psíquico: 0.5,
    Hielo: 0.5,
    Dragón: 0.5,
    Hada: 0.5,
    Veneno: 0
  },
  fuego: {
    Tierra: 2,
    Roca: 2,
    Agua: 2,
    Normal: 1,
    Lucha: 1,
    Volador: 1,
    Veneno: 1,
    Fantasma: 1,
    Eléctrico: 1,
    Psíquico: 1,
    Dragón: 1,
    Siniestro: 1,
    Bicho: 0.5,
    Acero: 0.5,
    Fuego: 0.5,
    Planta: 0.5,
    Hielo: 0.5,
    Hada: 0.5
  },
  agua: {
    Planta: 2,
    Eléctrico: 2,
    Normal: 1,
    Lucha: 1,
    Volador: 1,
    Veneno: 1,
    Tierra: 1,
    Roca: 1,
    Bicho: 1,
    Fantasma: 1,
    Psíquico: 1,
    Dragón: 1,
    Siniestro: 1,
    Hada: 1,
    Acero: 0.5,
    Fuego: 0.5,
    Agua: 0.5,
    Hielo: 0.5
  },
  planta: {
    Volador: 2,
    Veneno: 2,
    Bicho: 2,
    Fuego: 2,
    Hielo: 2,
    Normal: 1,
    Lucha: 1,
    Roca: 1,
    Fantasma: 1,
    Acero: 1,
    Psíquico: 1,
    Dragón: 1,
    Siniestro: 1,
    Hada: 1,
    Tierra: 0.5,
    Agua: 0.5,
    Planta: 0.5,
    Eléctrico: 0.5
  },
  eléctrico: {
    Tierra: 2,
    Normal: 1,
    Lucha: 1,
    Veneno: 1,
    Roca: 1,
    Bicho: 1,
    Fantasma: 1,
    Fuego: 1,
    Agua: 1,
    Planta: 1,
    Psíquico: 1,
    Hielo: 1,
    Dragón: 1,
    Siniestro: 1,
    Hada: 1,
    Volador: 0.5,
    Acero: 0.5,
    Eléctrico: 0.5
  },
  psíquico: {
    Bicho: 2,
    Fantasma: 2,
    Siniestro: 2,
    Normal: 1,
    Volador: 1,
    Veneno: 1,
    Tierra: 1,
    Roca: 1,
    Acero: 1,
    Fuego: 1,
    Agua: 1,
    Planta: 1,
    Eléctrico: 1,
    Hielo: 1,
    Dragón: 1,
    Hada: 1,
    Lucha: 0.5,
    Psíquico: 0.5
  },
  hielo: {
    Lucha: 2,
    Roca: 2,
    Acero: 2,
    Fuego: 2,
    Normal: 1,
    Volador: 1,
    Veneno: 1,
    Tierra: 1,
    Bicho: 1,
    Fantasma: 1,
    Agua: 1,
    Planta: 1,
    Eléctrico: 1,
    Psíquico: 1,
    Dragón: 1,
    Siniestro: 1,
    Hada: 1,
    Hielo: 0.5
  },
  dragón: {
    Hielo: 2,
    Dragón: 2,
    Hada: 2,
    Normal: 1,
    Lucha: 1,
    Volador: 1,
    Veneno: 1,
    Tierra: 1,
    Roca: 1,
    Bicho: 1,
    Fantasma: 1,
    Acero: 1,
    Psíquico: 1,
    Siniestro: 1,
    Fuego: 0.5,
    Agua: 0.5,
    Planta: 0.5,
    Eléctrico: 0.5
  },
  siniestro: {
    Lucha: 2,
    Bicho: 2,
    Hada: 2,
    Normal: 1,
    Volador: 1,
    Veneno: 1,
    Tierra: 1,
    Roca: 1,
    Acero: 1,
    Fuego: 1,
    Agua: 1,
    Planta: 1,
    Eléctrico: 1,
    Hielo: 1,
    Dragón: 1,
    Fantasma: 0.5,
    Siniestro: 0.5,
    Psíquico: 0
  },
  hada: {
    Veneno: 2,
    Acero: 2,
    Normal: 1,
    Volador: 1,
    Tierra: 1,
    Roca: 1,
    Fantasma: 1,
    Fuego: 1,
    Agua: 1,
    Planta: 1,
    Eléctrico: 1,
    Psíquico: 1,
    Hielo: 1,
    Hada: 1,
    Lucha: 0.5,
    Bicho: 0.5,
    Siniestro: 0.5,
    Dragón: 0
  }

}
// Obtener el valor del radio seleccionado
var tipoSeleccionado;
var tipoSeleccionado2;
var labelSeleccionado;
var labelSeleccionado2;

var colorLabel1;
var colorLabel2;



mostrarDebilidades();

// Función que se ejecuta cuando se selecciona un radio button
function mostrarDebilidades() {

  tablaTipos.length = 0;
  tablaTipos2.length = 0;
  tablaFinal.length = 0;
  let coloricon = '';


  for (let i = 0; i < tipos.length; i++) {
    if (tipos[i].checked) {

      tipoSeleccionado = tipos[i].value;
      colorLabel1 = document.getElementById(`label-${tipos[i].value}1`);
      coloricon = document.querySelectorAll(`.icon-${tipos[i].value}`)[0];

      switch (tipos[i].value) {
        case 'normal':
          colorLabel1.style.backgroundColor = '#6c767c';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(30%) sepia(1%) saturate(2549%) hue-rotate(120deg) brightness(89%) contrast(96%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'lucha':
          colorLabel1.style.backgroundColor = '#b02352';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(35%) sepia(13%) saturate(4922%) hue-rotate(303deg) brightness(100%) contrast(90%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'volador':
          colorLabel1.style.backgroundColor = '#5776a5';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(34%) sepia(6%) saturate(2238%) hue-rotate(183deg) brightness(90%) contrast(92%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'veneno':
          colorLabel1.style.backgroundColor = '#904cac';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(46%) sepia(18%) saturate(1679%) hue-rotate(253deg) brightness(86%) contrast(86%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';

          break;

        case 'tierra':
          colorLabel1.style.backgroundColor = '#b85d2c';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(28%) sepia(20%) saturate(1527%) hue-rotate(335deg) brightness(91%) contrast(85%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'roca':
          colorLabel1.style.backgroundColor = '#827649';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(39%) sepia(9%) saturate(1043%) hue-rotate(9deg) brightness(92%) contrast(91%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'bicho':
          colorLabel1.style.backgroundColor = '#518300';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(37%) sepia(70%) saturate(439%) hue-rotate(38deg) brightness(104%) contrast(94%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'fantasma':
          colorLabel1.style.backgroundColor = '#33548f';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(41%) sepia(8%) saturate(3143%) hue-rotate(182deg) brightness(96%) contrast(86%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'acero':
          colorLabel1.style.backgroundColor = '#367489';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(33%) sepia(43%) saturate(427%) hue-rotate(149deg) brightness(88%) contrast(87%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'fuego':
          colorLabel1.style.backgroundColor = '#b65e16';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(25%) sepia(46%) saturate(974%) hue-rotate(320deg) brightness(100%) contrast(102%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';

          break;

        case 'agua':
          colorLabel1.style.backgroundColor = '#2e78ba';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(18%) sepia(47%) saturate(4964%) hue-rotate(186deg) brightness(93%) contrast(80%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'planta':
          colorLabel1.style.backgroundColor = '#2b8721';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(25%) sepia(84%) saturate(325%) hue-rotate(64deg) brightness(87%) contrast(82%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'eléctrico':
          colorLabel1.style.backgroundColor = '#907200';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(14%) sepia(48%) saturate(512%) hue-rotate(322deg) brightness(103%) contrast(46%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'psíquico':
          colorLabel1.style.backgroundColor = '#cb4851';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(32%) sepia(34%) saturate(860%) hue-rotate(308deg) brightness(100%) contrast(96%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'hielo':
          colorLabel1.style.backgroundColor = '#1d8373';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(26%) sepia(31%) saturate(457%) hue-rotate(118deg) brightness(93%) contrast(90%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'dragón':
          colorLabel1.style.backgroundColor = '#0052a8';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(25%) sepia(79%) saturate(2120%) hue-rotate(197deg) brightness(96%) contrast(87%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'siniestro':
          colorLabel1.style.backgroundColor = '#433d4c';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(33%) sepia(15%) saturate(425%) hue-rotate(224deg) brightness(92%) contrast(88%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'hada':
          colorLabel1.style.backgroundColor = '#a955a4';
          colorLabel1.style.color = 'white';
          colorLabel1.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon.style.filter = 'invert(31%) sepia(57%) saturate(458%) hue-rotate(273deg) brightness(94%) contrast(96%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;
      }
    }

    if (tipos[i].checked == false) {

      colorLabel1 = document.getElementById(`label-${tipos[i].value}1`);
      colorLabel1.style.backgroundColor = 'hsl(0 0% 100%)';
      colorLabel1.style.color = 'black';
      colorLabel1.style.textShadow = 'none';
      colorLabel1.style.border = '1px solid black';
      coloricon = document.querySelectorAll(`.icon-${tipos[i].value}`)[0];
      coloricon.style.filter = 'brightness(0%)';

    }
  }

  // CAMBIO PARA RB ABAJO
  // Variables para cambiar colores de label
  let desactivarlabel;
  let desactivarlabel2 = 'normal';
  let coloricon2 = '';

  // Ciclo para desactivar rb inferior - de 2 tipo
  for (let j = 0; j < tipos2.length; j++) {


    if (tipoSeleccionado == tipos2[j].value) {

      tipos2[j].disabled = true;

      desactivarlabel = document.getElementById(`label-${tipos2[j].value}2`);
      desactivarlabel.style.backgroundColor = 'hsl(0 0% 96%)';
      desactivarlabel.style.cursor = 'not-allowed';

    } else {
      tipos2[j].disabled = false;
      desactivarlabel2 = document.getElementById(`label-${tipos2[j].value}2`);
      desactivarlabel2.style.backgroundColor = 'hsl(0 0% 100%)';
      desactivarlabel2.style.cursor = 'pointer';

    }


    if (tipos2[j].checked) {
      tipoSeleccionado2 = tipos2[j].value;
      colorLabel2 = document.getElementById(`label-${tipos2[j].value}2`);
      coloricon2 = document.getElementById(`icon-${tipos2[j].value}2`);

      switch (tipos2[j].value) {
        case 'normal':
          colorLabel2.style.backgroundColor = '#6c767c';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(30%) sepia(1%) saturate(2549%) hue-rotate(120deg) brightness(89%) contrast(96%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'lucha':
          colorLabel2.style.backgroundColor = '#b02352';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(35%) sepia(13%) saturate(4922%) hue-rotate(303deg) brightness(100%) contrast(90%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'volador':
          colorLabel2.style.backgroundColor = '#5776a5';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(34%) sepia(6%) saturate(2238%) hue-rotate(183deg) brightness(90%) contrast(92%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'veneno':
          colorLabel2.style.backgroundColor = '#904cac';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(46%) sepia(18%) saturate(1679%) hue-rotate(253deg) brightness(86%) contrast(86%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';

          break;

        case 'tierra':
          colorLabel2.style.backgroundColor = '#b85d2c';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(28%) sepia(20%) saturate(1527%) hue-rotate(335deg) brightness(91%) contrast(85%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'roca':
          colorLabel2.style.backgroundColor = '#827649';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(39%) sepia(9%) saturate(1043%) hue-rotate(9deg) brightness(92%) contrast(91%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'bicho':
          colorLabel2.style.backgroundColor = '#518300';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(37%) sepia(70%) saturate(439%) hue-rotate(38deg) brightness(104%) contrast(94%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'fantasma':
          colorLabel2.style.backgroundColor = '#33548f';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(41%) sepia(8%) saturate(3143%) hue-rotate(182deg) brightness(96%) contrast(86%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'acero':
          colorLabel2.style.backgroundColor = '#367489';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(33%) sepia(43%) saturate(427%) hue-rotate(149deg) brightness(88%) contrast(87%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'fuego':
          colorLabel2.style.backgroundColor = '#b65e16';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(25%) sepia(46%) saturate(974%) hue-rotate(320deg) brightness(100%) contrast(102%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';

          break;

        case 'agua':
          colorLabel2.style.backgroundColor = '#2e78ba';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(18%) sepia(47%) saturate(4964%) hue-rotate(186deg) brightness(93%) contrast(80%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'planta':
          colorLabel2.style.backgroundColor = '#2b8721';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(25%) sepia(84%) saturate(325%) hue-rotate(64deg) brightness(87%) contrast(82%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'eléctrico':
          colorLabel2.style.backgroundColor = '#907200';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(14%) sepia(48%) saturate(512%) hue-rotate(322deg) brightness(103%) contrast(46%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'psíquico':
          colorLabel2.style.backgroundColor = '#cb4851';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(32%) sepia(34%) saturate(860%) hue-rotate(308deg) brightness(100%) contrast(96%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'hielo':
          colorLabel2.style.backgroundColor = '#1d8373';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(26%) sepia(31%) saturate(457%) hue-rotate(118deg) brightness(93%) contrast(90%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'dragón':
          colorLabel2.style.backgroundColor = '#0052a8';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(25%) sepia(79%) saturate(2120%) hue-rotate(197deg) brightness(96%) contrast(87%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'siniestro':
          colorLabel2.style.backgroundColor = '#433d4c';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(33%) sepia(15%) saturate(425%) hue-rotate(224deg) brightness(92%) contrast(88%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'hada':
          colorLabel2.style.backgroundColor = '#a955a4';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(31%) sepia(57%) saturate(458%) hue-rotate(273deg) brightness(94%) contrast(96%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

        case 'ninguno':
          colorLabel2.style.backgroundColor = '#6c733c';
          colorLabel2.style.color = 'white';
          colorLabel2.style.textShadow = '0 1px 0 #000, 0 0 1px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 70%), 0 0 3px rgb(0 0 0 / 80%), 0 0 4px rgb(0 0 0 / 90%)';
          coloricon2.style.filter = 'invert(30%) sepia(1%) saturate(2549%) hue-rotate(120deg) brightness(89%) contrast(96%) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))';
          break;

      }
    }



    if (tipoSeleccionado == tipoSeleccionado2) {

      colorLabel2 = document.getElementById(`label-${tipoSeleccionado2}2`);
      coloricon2 = document.getElementById(`icon-${tipos2[j].value}2`);
      coloricon2.style.filter = 'brightness(50%)';
      colorLabel2.style.backgroundColor = 'hsl(0 0% 96%)';
      colorLabel2.style.color = 'hsl(0 0% 96%)';
      colorLabel2.style.color = 'gray';
      colorLabel2.style.textShadow = 'none';

      tipoSeleccionado2 = "ninguno";

    }

    if (tipos2[j].checked == false) {
      colorLabel2 = document.getElementById(`label-${tipos2[j].value}2`);
      colorLabel2.style.backgroundColor = 'hsl(0 0% 100%)';
      colorLabel2.style.color = 'black';
      colorLabel2.style.textShadow = 'none';
      colorLabel2.style.border = '1px solid black';
      coloricon2 = document.getElementById(`icon-${tipos2[j].value}2`);
      coloricon2.style.filter = 'brightness(0%)';

    }
  }



  // Inicializa una cadena vacía para almacenar los resultados
  let resultadox4 = '', resultadox2 = '', resultadox1 = '', resultadox05 = '', resultadox025 = '', resultadox0 = '';


  // Recorre todos los tipos de Pokémon en la tabla de multiplicadores
  for (const type in defTipos[tipoSeleccionado]) {
    // Obtiene el multiplicador de daño para el tipo seleccionado
    var damageMultiplier = defTipos[tipoSeleccionado][type];

    if (damageMultiplier == 2) {

      tablaTipos.push({ type: type, damage: damageMultiplier });

    } else if (damageMultiplier == 1) {

      tablaTipos.push({ type: type, damage: damageMultiplier });

    } else if (damageMultiplier == 0.5) {

      tablaTipos.push({ type: type, damage: damageMultiplier });
    } else if (damageMultiplier == 0.25) {

      tablaTipos.push({ type: type, damage: damageMultiplier });

    } else if (damageMultiplier == 0) {

      tablaTipos.push({ type: type, damage: damageMultiplier });
    }
  }

  // Calcular daños para tipo2
  for (const type2 in defTipos[tipoSeleccionado2]) {
    var damageMultiplier2 = defTipos[tipoSeleccionado2][type2];

    if (damageMultiplier2 == 2) {

      tablaTipos2.push({ type: type2, damage: damageMultiplier2 });

    } else if (damageMultiplier2 == 1) {

      tablaTipos2.push({ type: type2, damage: damageMultiplier2 });

    } else if (damageMultiplier2 == 0.5) {

      tablaTipos2.push({ type: type2, damage: damageMultiplier2 });

    } else if (damageMultiplier2 == 0.25) {
      tablaTipos.push({ type: type2, damage: damageMultiplier2 });

    } else if (damageMultiplier2 == 0) {

      tablaTipos2.push({ type: type2, damage: damageMultiplier2 });
    }
  }


  // Formar tabla final con los daños
  for (let i = 0; i < tablaTipos.length; i++) {

    for (let j = 0; j < tablaTipos2.length; j++) {

      if (tablaTipos[i].type == tablaTipos2[j].type) {

        tablaFinal.push({ type: tablaTipos[i].type, damage: tablaTipos[i].damage * tablaTipos2[j].damage });
      }
    }
  }

  // Calcular daño
  for (let i = 0; i < tablaFinal.length; i++) {
    if (tablaFinal[i].damage == 4) {
      resultadox4 += `<p id="debilidad-${tablaFinal[i].type}"> ${tablaFinal[i].type}</p>`;
    } else if (tablaFinal[i].damage == 2) {
      resultadox2 += `<p id="debilidad-${tablaFinal[i].type}"> ${tablaFinal[i].type}</p>`;
    } else if (tablaFinal[i].damage == 1) {
      resultadox1 += `<p id="debilidad-${tablaFinal[i].type}"> ${tablaFinal[i].type}</p>`;
    } else if (tablaFinal[i].damage == 0.5) {
      resultadox05 += `<p id="debilidad-${tablaFinal[i].type}"> ${tablaFinal[i].type}</p>`;
    } else if (tablaFinal[i].damage == 0.25) {
      resultadox025 += `<p id="debilidad-${tablaFinal[i].type}"> ${tablaFinal[i].type}</p>`;
    } else if (tablaFinal[i].damage == 0) {
      resultadox0 += `<p id="debilidad-${tablaFinal[i].type}"> ${tablaFinal[i].type}</p>`;
    }
  }


  // Variable para obtener un resultado final para mostrar en debilidades
  let resultadofinal = '';

  if (resultadox4 != '') {

    resultadofinal += `<br><h3>Sufre x4 contra - </h3><span>¡Es súper eficaz!</span><br><div>${resultadox4}</div>`;
  }
  if (resultadox2 != '') {

    resultadofinal += `<br><h3>Sufre x2 contra - </h3><span>¡Es muy eficaz!</span><br><div>${resultadox2}</div>`;
  }
  if (resultadox1 != '') {

    resultadofinal += `<br><h3>Sufre x1 contra - </h3><span>¡No es muy eficaz!</span><br><div>${resultadox1}</div>`;
  }
  if (resultadox05 != '') {

    resultadofinal += `<br><h3>Sufre x1/2 contra - </h3><span>¡Es poco eficaz!</span><br><div>${resultadox05}</div>`;
  }
  if (resultadox025 != '') {

    resultadofinal += `<br><h3>Sufre x1/4 contra - </h3><span>¡Muy poco eficaz!</span><br><div>${resultadox025}</div>`;
  }
  if (resultadox0 != '') {

    resultadofinal += `<br><h3>Sufre x0 contra - </h3><span>¡No hace efecto!</span><br><div>${resultadox0}</div>`;
  }

  // Mostrar debilidades en base a los tipos elegidos
  debilidades.innerHTML = `${resultadofinal}`;

}

// Asociar la función a los radio buttons
for (let i = 0; i < tipos.length; i++) {
  tipos[i].addEventListener("change", mostrarDebilidades);

}
for (let j = 0; j < tipos2.length; j++) {
  tipos2[j].addEventListener("change", mostrarDebilidades);
}

/////////////////////////////
// Prueba de consumir PokeApi 
/////////////////////////////

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
  const random = getRandomInt(1, 898);
  console.log(random);
  fetchData(random);
});

const btnCapturar = document.querySelector(".btn-captura");
var contador;
const textoPokeball = document.querySelector(".textopokeball");
const infoPoke = document.querySelector(".info-poke-captura");

const agregarAnimacion = () => {
  const ratioCaptura = getRandomInt(1, 6);

  if (contador == 1) {
    contador = contador + 1;
    btnCapturar.classList.add('animacionPokeball');
    setTimeout(quitarAnimacion, 1200);
  }
  else if (ratioCaptura < 5) {
    contador = contador + 1;
    btnCapturar.classList.add('animacionPokeball');
    setTimeout(quitarAnimacion, 1200);
  } else {
    textoPokeball.textContent = 'No capturado😭';
    infoPoke.textContent = '😎';
    console.log("no capturado");
  }
}
const quitarAnimacion = () => {
  btnCapturar.classList.remove('animacionPokeball');
  if (contador == 4) {
    textoPokeball.textContent = '¡Capturado! 😄';
    infoPoke.textContent = '😭';
    return console.log("capturado");
  }
  setTimeout(agregarAnimacion, 1000);
}


btnCapturar.addEventListener("click", () => {
  btnCapturar.style.cursor = 'not-allowed';
  contador = 1;
  agregarAnimacion();
}, { once: true });



const fetchData = async (id) => {
  try {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    const pokemon = {
      imgJuego: data.sprites.front_default,
      imgShiny: data.sprites.front_shiny,
      nombre: data.species.name,
    };

    pintarPokemon(pokemon);
  } catch (error) {
    console.log(error);
  }
};

var nombrePoke = ''; 
function capitalizarPrimeraLetra(pokeNombre) {
  return nombrePoke = pokeNombre.charAt(0).toUpperCase() + pokeNombre.slice(1);
}

const shiny = getRandomInt(1, 4);
const pintarPokemon = (pokemon) => {

  // const textoPokemon = document.querySelector(".textopoke");
  const nombrePokemon = document.querySelector(".nombrepoke");
  capitalizarPrimeraLetra(pokemon.nombre);

  // Comprobar si es shiny
  if (shiny == 1) {
    const setPokemon = document.querySelector(".poke");
    setPokemon.setAttribute("src", pokemon.imgShiny);
    // textoPokemon.style.color = 'white';
    // textoPokemon.textContent = '¡Es Shiny!';
    nombrePokemon.textContent = `${nombrePoke} ¡Shiny!`;
    setPokemon.style.filter = 'drop-shadow(1px 1px 10px black)';

  } else {
    const setPokemon = document.querySelector(".poke");
    setPokemon.setAttribute("src", pokemon.imgJuego);
    // textoPokemon.style.color = 'rgb(231, 4, 15)';
    nombrePokemon.textContent = nombrePoke;
    setPokemon.style.filter = 'drop-shadow(1px 1px 15px rgb(221, 217, 217))';

  }

}


