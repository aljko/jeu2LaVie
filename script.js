let coordX;
let coordY;

let colonne = [];
let compVieEnv
let etat;
let compTour = 0;
let nbNaiss = 0;
let vitesse = 500;
let nbCol = 103;
let nbLign = 30;
let zone = [];
let zoneTMoinsUn = [];


function vie(){
    //Effacement du contenu du tableau
    zoneTMoinsUn = [];
    // Copie de tableau
    for(let i=Math.ceil(-nbCol/2-1); i<=Math.floor(nbLign/2+1); i++){
        zoneTMoinsUn[i]=[];
        for(let j=Math.ceil(-nbLign/2-1); j<=Math.floor(nbLign/2+1); j++){
            zoneTMoinsUn[i][j] = zone[i][j].style.backgroundColor;
        }
    }
    
    console.log(zoneTMoinsUn);

    for(let i=Math.ceil(-nbCol/2); i<=Math.floor(nbLign/2); i++){
        for(let j=Math.ceil(-nbLign/2); j<=Math.floor(nbLign/2); j++){
            
            //console.log(i + ', ' + j);
            
            //Donneur de mort, sous condition de presence de moins 2 de forme de vie ou de plus de 3
            if(zoneTMoinsUn[i][j] == 'black'){
                compVieEnv = 0;
                for(let k=i-1; k<=i+1; k++ ){
                    for(let l=j-1; l<=j+1; l++ ){
                        console.log('la position ' + k + ', ' + l + ' est ' + zoneTMoinsUn[k][l])
                        if(zoneTMoinsUn[k][l] == 'black'){
                            compVieEnv++;
                        }
                    }
                }
                console.log(compVieEnv + ' vie, pour ' + i + ', ' + j)
                if(compVieEnv < 3 || compVieEnv > 4){
                    zone[i][j].style.backgroundColor = 'white';
                      
                }
            }
            
            // Donneur de vie, sous condition de presence de 3 formes de vie dans le voisinage proche
            if(zoneTMoinsUn[i][j] == 'white'){
                compVieEnv = 0;
                for(let k=i-1; k<=i+1; k++ ){
                    for(let l=j-1; l<=j+1; l++ ){
                        if(zoneTMoinsUn[k][l] == 'black'){
                            compVieEnv++;
                        }
                    }
                }
                console.log(compVieEnv + ' vie, pour ' + i + ', ' + j)
                if(compVieEnv == 3){
                    zone[i][j].style.backgroundColor = 'black'; 
                    nbNaiss++;
                    naiss.textContent = "Birth : " + nbNaiss;
                }
            }
        }
    }
    compTour++
    console.log("Tour : " + compTour);
    tour.textContent = "Turn : " + compTour;
    if(etat == "pause"){
        return;
    }
    setTimeout(vie, vitesse);
    
}

let plateau = document.createElement('div');
document.body.appendChild(plateau);
plateau.style.display = 'flex';
plateau.style.flexDirection = 'row';
plateau.style.flexWrap = 'wrap';
plateau.style.justifyContent = 'center';

for(let i=Math.ceil(-nbCol/2)-1; i<=Math.floor(nbLign/2)+1; i++){
   zone[i] = [];
    for(let j=Math.ceil(-nbLign/2-1); j<=Math.floor(nbLign/2)+1; j++){
        zone[i][j] =  document.createElement('div');
        zone[i][j].style.border = '1px solid #CECECE';
        zone[i][j].style.backgroundColor = 'white';
        zone[i][j].style.height = "25px";
        zone[i][j].style.width = "25px";
        // zone[i][j].textContent = i + ", " + j;
        zone[i][j].style.fontSize = "9px";
    }
}

for(let i=Math.ceil(-nbCol/2); i<=Math.floor(nbLign/2); i++){
    colonne[i] = document.createElement('div');
    plateau.appendChild(colonne[i]);
    for(let j=Math.ceil(-nbLign/2); j<=Math.floor(nbLign/2); j++){

    }
    
    for(let j=Math.ceil(-nbLign/2); j<=Math.floor(nbLign/2); j++){
        
        if(i<10){
            coordX = "0" + i;
        }else{
            coordX = i;
        }

        if(j<10){
            coordY = "0" + j;
        }else{
            coordX = j;
        }
        
        zone[i][j].addEventListener('click', function(){
            if(zone[i][j].style.backgroundColor == 'white'){
                zone[i][j].style.backgroundColor = 'black';
            }else{
                zone[i][j].style.backgroundColor = 'white';
            }
        })

        colonne[i].appendChild(zone[i][j]);
        
    }
    plateau.appendChild(colonne[i]); 
}

let info = document.createElement('div');
document.body.appendChild(info);
info.textContent = 'info';
info.style.display = 'flex';
info.style.flexDirection = 'row';

let player = document.createElement('div');
info.appendChild(player);
player.textContent = 'player';
document.body.appendChild(player);

let stat = document.createElement('div');
info.appendChild(stat);
stat.textContent = 'stat'
document.body.appendChild(stat);

let play = document.createElement('div');
player.appendChild(play);
document.body.appendChild(play);
play.textContent = "Play";
play.addEventListener('click', function(){
    if(play.textContent == "Play"){
        play.textContent = "Pause";
        etat = "play";
        vie();
    }else{
        play.textContent = "Play"
        etat = "pause";
    }
})

let  avanR = document.createElement('div');
player.appendChild(avanR);
document.body.appendChild(avanR);
avanR.textContent = "Speed X2";
avanR.addEventListener('click', function(){
    vitesse = vitesse / 2;
})

let  avanL = document.createElement('div');
player.appendChild(avanL);
document.body.appendChild(avanL);
avanL.textContent = "Speed 1/2";cd 
avanL.addEventListener('click', function(){
    vitesse = vitesse * 2;
})

let tour = document.createElement('div');
stat.appendChild(tour);
document.body.appendChild(tour);
tour.textContent = "Turn : " + compTour;

let naiss = document.createElement('div');
stat.appendChild(naiss);
document.body.appendChild(naiss);
naiss.textContent = "Birth : " + nbNaiss;