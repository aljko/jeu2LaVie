function vie(){
    for(let i=Math.ceil(-nbCol/2); i<=Math.floor(nbLign/2); i++){
        for(let j=Math.ceil(-nbLign/2); j<=Math.floor(nbLign/2); j++){
            
            console.log("base : " + i + ", " + j)
            
            if(zone[i][j].style.backgroundColor == 'white'){
                compVieEnv = 0;
                for(let k=i-1; k<=i+1; k++ ){
                    for(let l=j-1; l<=j+1; l++ ){
                        
                        console.log("controle : " + k + ', ' + l + " est de couleur " + zone[k][l].style.backgroundColor)
                        
                        if(zone[k][l].style.backgroundColor == 'black'){
                            compVieEnv++;
                        }
                    }
                }
            console.log("compteur de vie :" + compVieEnv )
            if(compVieEnv >=3){
                zone[i][j].style.backgroundColor = 'black';  
            }
            }
        }
    }
    compTour++
    console.log("Tour : " + compTour);
    setTimeout(vie, 1000);
}

let coordX;
let coordY;

let colonne = [];
let compVieEnv
let etat;
let compTour = 0;
let nbCol = 5;
let nbLign = 5;
let zone = [];



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
        zone[i][j].style.height = "150px";
        zone[i][j].style.width = "150px";
        zone[i][j].textContent = i + ", " + j;
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

let play = document.createElement('div');
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