var kocka1 = document.getElementById("koc1");
var kocka2 = document.getElementById("koc2");
var kocka3 = document.getElementById("koc3");
var kocka4 = document.getElementById("koc4");
var kocka5 = document.getElementById("koc5");
var kocka6 = document.getElementById("koc6");
var kocka7 = document.getElementById("koc7");
var kocka8 = document.getElementById("koc8");
var kocka9 = document.getElementById("koc9");
var kocka10 = document.getElementById("koc10");
var kocka11 = document.getElementById("koc11");
var kocka12 = document.getElementById("koc12");
var kocka13 = document.getElementById("koc13");
var kocka14 = document.getElementById("koc14");
var kocka15 = document.getElementById("koc15");
var kocka16 = document.getElementById("koc16");
var kocka17 = document.getElementById("koc17");
var kocka18 = document.getElementById("koc18");
var kocka19 = document.getElementById("koc19");
var kocka20 = document.getElementById("koc20");
var kocka21 = document.getElementById("koc21");
var kocka22 = document.getElementById("koc22");
var kocka23 = document.getElementById("koc23");
var kocka24 = document.getElementById("koc24");
var kocka25 = document.getElementById("koc25");

function alap(){
	kocka7.value = 1;
	kocka21.value = 1;
	kocka4.value = 2;
	kocka13.value = 2;
	kocka19.value = 3;
	kocka16.value = 3;
}

function urit(){
	
	kocka1.value = 0;
	kocka2.value = 0;
	kocka3.value = 0;
	kocka5.value = 0;
	kocka6.value = 0;
	kocka8.value = 0;
	kocka9.value = 0;
	kocka10.value = 0;
	kocka11.value = 0;
	kocka12.value = 0;
	kocka14.value = 0;
	kocka15.value = 0;
	kocka17.value = 0;
	kocka18.value = 0;
	kocka20.value = 0;
	kocka22.value = 0;
	kocka23.value = 0;
	kocka24.value = 0;
	kocka25.value = 0;
	
	kocka1.style.background = "white";
	kocka2.style.background = "white";
	kocka3.style.background = "white";
	kocka4.style.background = "white";
	kocka5.style.background = "white";
	kocka6.style.background = "white";
	kocka7.style.background = "white";
	kocka8.style.background = "white";
	kocka9.style.background = "white";
	kocka10.style.background = "white";
	kocka11.style.background = "white";
	kocka12.style.background = "white";
	kocka13.style.background = "white";
	kocka14.style.background = "white";
	kocka15.style.background = "white";
	kocka16.style.background = "white";
	kocka17.style.background = "white";
	kocka18.style.background = "white";
	kocka19.style.background = "white";
	kocka20.style.background = "white";
	kocka21.style.background = "white";
	kocka22.style.background = "white";
	kocka23.style.background = "white";
	kocka24.style.background = "white";
	kocka25.style.background = "white";
}


alap();
urit();



var elso = false;
var masik = false;
var harom = false;

var arr=[
[kocka1,kocka2,kocka3,kocka4,kocka5],
[kocka6,kocka7,kocka8,kocka9,kocka10],
[kocka11,kocka12,kocka13,kocka14,kocka15],
[kocka16,kocka17,kocka18,kocka19,kocka20],
[kocka21,kocka22,kocka23,kocka24,kocka25],
];

var count = 0;
var szamelso = new Array();
var szammasodik = new Array();
var szamharom = new Array();
var szam2 = new Array();
var alapx = 0;
var alapy = 0;


document.oncontextmenu = function(){
	return false;
}
document.onmousedown = function(){
	return false;
}



function lepes(i,j,szam){
	
	if(count == 0){
		alapx = i;
		alapy = j;
	}
		
	if(count > 0){
		for(var q = 0;q<szam.length;q++){
			if(szam[q] == arr[i][j]){
				var w=0;
				for(var val = 0; val < szam.length; val++){
					if(szam[val] != arr[i][j]){
						szam2.push(szam[val]);
						w++;
					}
					else{
						val=szam.length+1;
					}
				}
				for(var t = w+1;t<szam.length;t++){
					for(var a = 0; a < 5;a++){
						for(var b=0;b<5;b++){
							if(szam[t] == arr[a][b]){
								arr[a][b].value = 0;
								arr[a][b].style.background = "white";
							}
						}
					}
				}
				szam = [];
				szam = szam2;
				szam2 = [];
			}
		}
	}
	var m = arr[i][j];
	szam.push(m);
	
		arr[i][j].onmouseup = function(){
			if(arr[alapx][alapy].innerHTML == arr[i][j].innerHTML && i!=alapx || arr[alapx][alapy].innerHTML == arr[i][j].innerHTML && j!=alapy){
				vege1(alapx,alapy);
				count = 0;
				alap();
			}
			else{
				vege2(alapx,alapy);
				count = 0;
				alap();
			}
	
			
		}
	
		
	if(j!=4)
	if(arr[i][j+1].value == 0 || arr[i][j+1].value == arr[i][j].value){
		arr[i][j+1].onmouseenter = function(){
				arr[i][j+1].value = arr[i][j].value;
				arr[i][j+1].style.background = arr[i][j].style.background;
				if(j!=4)
					lepes(i,j+1,szam);
		}
	}
	if(j>0)
	if(arr[i][j-1].value == 0 || arr[i][j-1].value == arr[i][j].value){
		arr[i][j-1].onmouseenter = function(){
				arr[i][j-1].value = arr[i][j].value;
				arr[i][j-1].style.background = arr[i][j].style.background;
				if(j>0)
				lepes(i,j-1,szam);
		}
	}
	if(i != 4)
	if(arr[i+1][j].value == 0 || arr[i+1][j].value == arr[i][j].value){
		arr[i+1][j].onmouseenter = function(){
				
				arr[i+1][j].value = arr[i][j].value;
				arr[i+1][j].style.background = arr[i][j].style.background;
				if(i !=4)
				lepes(i+1,j,szam);
		}
	}
	if(i>0)
	if(arr[i-1][j].value == 0 || arr[i-1][j].value == arr[i][j].value){
		arr[i-1][j].onmouseenter = function(){
				arr[i-1][j].value = arr[i][j].value;
				arr[i-1][j].style.background = arr[i][j].style.background;
				if(i>0)
				lepes(i-1,j,szam);
		}
	}
	count++;	
	for(var h = 0; h < szam.length; h++){
		console.log(szam[h].style.background);
		console.log(szam[h].value);
	}
	if( alapx == 0 && alapy == 3 || alapx == 2 && alapy == 2){
		szammasodik = szam;
	}
	else if(alapx == 1 && alapy == 1 || alapx == 4 && alapy == 0){
		szamelso = szam;
	}
	else if(alapx == 3 && alapy == 0 || alapx == 3 && alapy == 3){
		szamharom = szam;
	}
}

function vege1(i,j){
	for(var k=0;k<5;k++){
		for(var l=0;l<5;l++){
			arr[k][l].onmouseenter = function(){
				return false;
			}
			arr[k][l].onclick = function(){
				return false;
			}
		}
	}
	if(szammasodik.length >0 && i == 0 && j == 3 || szammasodik.length > 0 && i == 2 && j == 2){
		masik = true;
		console.log(masik);
		
	}
	else if(szamelso.length > 0 && i == 1 && j == 1 || szamelso.length > 0 &&  i == 4 && j == 0){
		elso = true;
		console.log(elso);
		
	}
	else if(szamharom.length > 0 && i == 3 && j == 0 || szamharom.length > 0 && i == 3 && j == 3){
		harom = true;
		console.log(harom);
		
	}
	torol(i,j);
	gameover();
	alap();
}
function vege2(i,j){
	
	if( i == 0 && j == 3 && masik == false || i == 2 && j == 2 && masik == false){
		for(var o=0;o<szammasodik.length;o++){
					for(var k=0;k<5;k++){
						for(var l=0;l<5;l++){
							if(szammasodik[o] == arr[k][l]){
								arr[k][l].value = 0;
								arr[k][l].style.background = "white";
							}
						}
					}
				}
		masik = false;
		szammasodik = [];
		console.log(masik);
	}
	else if(i == 1 && j == 1 && elso == false || i == 4 && j == 0 && elso == false){
		for(var o=0;o<szamelso.length;o++){
					for(var k=0;k<5;k++){
						for(var l=0;l<5;l++){
							if(szamelso[o] == arr[k][l]){
								arr[k][l].value = 0;
								arr[k][l].style.background = "white";
							}
						}
					}
				}
		elso = false;
		szamelso = [];
		console.log(elso);
	}
	else if(i == 3 && j == 0 && harom == false || i == 3 && j == 3 && harom == false){
		for(var o=0;o<szamharom.length;o++){
					for(var k=0;k<5;k++){
						for(var l=0;l<5;l++){
							if(szamharom[o] == arr[k][l]){
								arr[k][l].value = 0;
								arr[k][l].style.background = "white";
							}
						}
					}
				}
		harom = false;
		szamharom = [];
		console.log(harom);
	}
	alap();
	for(var k=0;k<5;k++){
		for(var l=0;l<5;l++){
			arr[k][l].onmouseenter = function(){}
		}
	}
}
function torol(i,j){
			if( i == 0 && j == 3 || i == 2 && j == 2 ){
				console.log(szammasodik.length);
				for(var q = 0; q < szammasodik.length; q++){
					szammasodik[q].oncontextmenu = function(){
						for(var g = 0;g < szammasodik.length; g++){
							for(var a = 0; a < 5;a++){
								for(var b=0;b<5;b++){
									if(g==szammasodik.length-1 && szammasodik[g] == arr[a][b]){
										arr[a][b].style.background = "white";
									}
									else{
										if(szammasodik[g] == arr[a][b]){
											arr[a][b].value = 0;
											arr[a][b].style.background = "white";
										}
									}
									
								}
							}
						}
						alap();
						masik = false;
						szammasodik = [];
						console.log(masik);
					}
				}
				
			}
			else if(i == 1 && j == 1 || i == 4 && j == 0){
				console.log(szamelso.length);
				for(var q = 0; q < szamelso.length; q++){
					szamelso[q].oncontextmenu = function(){
						for(var g = 0;g < szamelso.length; g++){
							for(var a = 0; a < 5;a++){
								for(var b=0;b<5;b++){
									if(g==szamelso.length-1 && szamelso[g] == arr[a][b]){
										arr[a][b].style.background = "white";
									}
									else{
										if(szamelso[g] == arr[a][b]){
											arr[a][b].value = 0;
											arr[a][b].style.background = "white";
										}
									}
									
								}
							}
						}
						alap();
						elso = false;
						szamelso = [];
						console.log(elso);
					}	
				}
				alap();
			}
			else if(i == 3 && j == 0 || i == 3 && j == 3){
				console.log(szamharom.length);
				for(var q = 0; q < szamharom.length; q++){
					szamharom[q].oncontextmenu = function(){
						for(var g = 0;g < szamharom.length; g++){
							for(var a = 0; a < 5;a++){
								for(var b=0;b<5;b++){
									if(g==szamharom.length-1 && szamharom[g] == arr[a][b]){
										arr[a][b].style.background = "white";
									}
									else{
										if(szamharom[g] == arr[a][b]){
											arr[a][b].value = 0;
											arr[a][b].style.background = "white";
										}
									}
									
								}
							}
						}
						alap();
						harom = false;
						szamharom = [];
						console.log(harom);
					}	
				}
				alap();
			}
			
		

}
arr[0][3].onmousedown = function(){
	console.log(masik);
	console.log(arr[0][3].value);
	console.log(arr[0][3].style.background);
	console.log(szammasodik.length);
		if(masik == false){
			this.style.background = "gold";
			lepes(0,3,szammasodik);
		}
}

arr[2][2].onmousedown = function(){
	console.log(masik);
	console.log(arr[2][2].value)
		if(masik == false){
			this.style.background = "gold";
			lepes(2,2,szammasodik);
		}		
}
arr[1][1].onmousedown = function(){
	console.log(elso);
	console.log(arr[1][1].value)
		if(elso == false){
			this.style.background = "silver";
			lepes(1,1,szamelso);
		}
			
}

arr[4][0].onmousedown = function(){
	console.log(elso);
	console.log(arr[4][0].value)
		if(elso == false){
			this.style.background = "silver";
			lepes(4,0,szamelso);
		}
			
}
arr[3][0].onmousedown = function(){
	console.log(harom);
	console.log(arr[3][0].value)
		if(harom == false){
			this.style.background = "red";
			lepes(3,0,szamharom);
		}
			
}
arr[3][3].onmousedown = function(){
	console.log(harom);
	console.log(arr[3][3].value)
		if(harom == false){
			this.style.background = "red";
			lepes(3,3,szamharom);
		}
			
}

function gameover(){
	var szamolo = 0;
	for(var c = 0; c < 5;c++){
		for(var z = 0; z < 5 ; z++){
			if(arr[c][z].style.background == "white")
				szamolo++;
		}
	}
	if(szamolo == 0){
		alert("Győzelem!!!4")
	}
}

function setLS(name, value)
{
	window.localStorage.setItem(name, value);
}
function getLS(name)
{
	return window.localStorage.getItem(name);
}

var vane = false;

function mentes(){
		for(var i = 0; i < 5;i++){
			for(var j = 0; j < 5; j++){
				for(var l = 0; l < localStorage.length;l++){
					if(i + ' value ' + j == localStorage.key(l)){
						vane = true;
					}
				}
			}
		}
	if(vane){
		if(confirm('Felülirja az előző mentést?')){
			for(var i = 0; i < 5;i++){
				for(var j = 0; j < 5; j++){
					setLS(i + ' value ' + j,arr[i][j].value);
					setLS(i + ' szin ' + j,arr[i][j].style.background);
				}
			}
		}
	}
	else{
		for(var i = 0; i < 5;i++){
			for(var j = 0; j < 5; j++){
				setLS(i + ' value ' + j,arr[i][j].value);
				setLS(i + ' szin ' + j,arr[i][j].style.background);
			}
		}
	}
}

function betolt(){
	for(var i = 0; i < 5;i++){
			for(var j = 0; j < 5; j++){
				for(var l = 0; l < localStorage.length;l++){
					if(i + ' value ' + j == localStorage.key(l)){
						vane = true;
					}
				}
			}
		}
		
	if(vane){
		for(var i = 0; i < 5;i++){
			for(var j = 0; j < 5; j++){
				arr[i][j].value = getLS(i + ' value ' + j);
				arr[i][j].style.background = getLS(i + ' szin ' + j);
			}
		}
	}
	else{
		alert("Nincs mentet!");
	}
}
