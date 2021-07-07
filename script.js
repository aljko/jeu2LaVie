
let plateau = document.createElement('div');
document.body.appendChild(plateau);
plateau.style.display = 'flex';
plateau.style.flexDirection = 'row';
plateau.style.flexWrap = 'wrap';
plateau.style.justifyContent = 'center';

let coordX;
let coordY;
let zone = [];

for(let i=1; i<=5; i++){
    let colonne = document.createElement('div');

    for(let j=1; j<=1; j++){
        
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
        
        zone[i, j] =  document.createElement('div');
        
        zone[i, j].style.border = '1px solid #CECECE';
        zone[i, j].style.backgroundColor = 'white';
        //
        zone[i, j].style.height = "150px";
        zone[i, j].style.width = "150px";
        
        zone[i, j].textContent = i + ", " + j;
        zone[i, j].style.fontSize = "9px";
        //
       

        zone[i, j].addEventListener('click', function(){
            // if(zone[i, j].style.backgroundColor == 'white'){
            //     zone[i, j].style.backgroundColor = 'black';
            // }else{
            //     zone[i, j].style.backgroundColor = 'white';
            // }
            zone[5, 1].textContent = i + ", " + j;

        })
        colonne.appendChild(zone[i, j]);
        
    }
    plateau.appendChild(colonne); 
}
