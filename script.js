function vie(){
    for(let i=1; i<=nbCol; i++){
        for(let j=1; j<=nbLign; j++){
            if(zone[i][j].style.backgroundColor == 'black' && j-1>0)
            zone[i][j-1].style.backgroundColor = 'black';
            zone[i][j].style.backgroundColor = 'white'

        }
    }
    setTimeout(vie, 1000);
}

let coordX;
let coordY;
let zone = [];
let colonne = [];
let etat;
let nbCol = 5;
let nbLign = 5;

let plateau = document.createElement('div');
document.body.appendChild(plateau);
plateau.style.display = 'flex';
plateau.style.flexDirection = 'row';
plateau.style.flexWrap = 'wrap';
plateau.style.justifyContent = 'center';

for(let i=1; i<=nbCol; i++){
    zone[i] = [];
    colonne[i] = document.createElement('div');
    plateau.appendChild(colonne[i]);
    
    for(let j=1; j<=nbLign; j++){
        
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
        
        zone[i][j] =  document.createElement('div');
        zone[i][j].style.border = '1px solid #CECECE';
        zone[i][j].style.backgroundColor = 'white';
        zone[i][j].style.height = "150px";
        zone[i][j].style.width = "150px";
        zone[i][j].textContent = i + ", " + j;
        zone[i][j].style.fontSize = "9px";
       
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