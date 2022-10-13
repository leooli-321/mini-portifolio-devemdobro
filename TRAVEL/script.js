//  Como Calcular 1 Ano - luz ?

//  Para saber quanto equivale um ano - luz basta multiplicar a velocidade da luz pelo número de segundos que existem num ano.

//  Um ano tem 31.536.000 de segundos.

//  300.000 km * 31.536.000 s = 9.460.800.000.000 km

//  Então, se 1 ano - luz equivale a aproximadamente 9, 5 trilhões de quilômetros, quanto vale 2 anos - luz ?

//    300.000 km * 31.536.000 s = 9.460.800.000.000 km

//  9.460.800.000.000 km * 2 km = 18.921.600.000.000 km, ou seja, dezoito trilhões, novecentos e vinte e um bilhões e seiscentos milhões de quilômetros.


var anoLuz = 9460800000000;  // distancia

//var terra = 1; // local atual

var velocidadeLuz = 300000; //velocidade km

var lua = 384400; //distancia da terra (depende da epoca do ano)

var marted = 54000000; //distancia de marte

let tempo = lua / velocidadeLuz;



console.log("Viajando na velocidade da luz, demorariamos: " + lua / velocidadeLuz + " segundos para chegar na lua!")

console.log("Viajando na velocidade da luz, demorariamos: " + marted / velocidadeLuz + " segundos para chegar em Marte!")


//funcoes de Mercúrio
function mercuriotexto() {

    var mercurio = document.getElementById("00");

    var mercurio = document.getElementById("espacoTexto");

    var mercurioinfo = "Mercúrio é o planeta mais próximo do Sol, é também o menor do Sistema Solar. Um ano em Mercúrio demora 88 dias! Rápido, né? Mas em contrapartida, um dia lá leva em torno de 58 dias. Os mercurianos devem aguardar ansiosos pelo final de semana";



    mercurio.innerHTML = mercurioinfo;

}


//funcoes de Vênus
function venustexto() {

    var venus = document.getElementById("11");

    var venus = document.getElementById("espacoTexto");

    var venusinfo = "Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza. Em sua atmosfera chove ácido sulfúrico devido à ação fotoquímica em função do sol. Vênus tem uma temperatura média de 484 graus Celsius! Não parece tão belo assim :( ";



    venus.innerHTML = venusinfo;

}



//funcoes da Terra
function terratexto() {

    var terra = document.getElementById("22");

    var terra = document.getElementById("espacoTexto");

    var terrainfo = "Terra, o berço da humanidade. A terra já está aqui a mais de 4,5 bilhões de anos! Cerca de 70% da superfície do nosso planeta é coberto por água, elemento essencial para existência da vida.";



    terra.innerHTML = terrainfo;

}



//funcoes de Marte
function martetexto() {

    var marte = document.getElementById("33");

    var marte = document.getElementById("espacoTexto");

    var marteinfo = "Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o Planeta Vermelho, porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.";



    marte.innerHTML = marteinfo;

}


//funcoes de Júpiter

function jupitertexto() {

    var jupiter = document.getElementById("44");

    var jupiter = document.getElementById("espacoTexto");

    var jupiterinfo = "Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno.";



    jupiter.innerHTML = jupiterinfo;

}
