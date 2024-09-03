let compareBtn=document.querySelector('#Compare');
let head1=document.querySelector('#head1');
let char = [ "super wizard","globins", "gaint", "archer", "healer", "dragon", "head hunter", "ice wizard", "miner", "minions", "baloon", "pekka", "dragon", "bomber", "dragon", "super bomber", "slammer", "super minions"];
let images = ["SuperWizard.png" ,'globin.png' , "gaint.png" , "archer.png" , "healer.png" , "reddragon.png" , "headHunter.png" , "ice-wizard.png" , "miner.png" , "multiMinions.png" , "onebaloon.png" , "pekka.png" , "reddragon.png" , "SkelitonBomber1.png" , "skelitonDragon.png" , "SkelitonRollerBomber.png" , "stoneSlammer.png" ,  "SuperMinion.png"];
let MainImg = document.querySelector("#heroImg");
let imgDiv = document.querySelector(".nextChar");
let nextImg = document.querySelector("#imgChanger");
let nextImg2 = document.querySelector("#imgChanger2");

/*
let array=[];
let i=0;
imgDiv.onclick = () =>{
    let random = Math.floor(Math.random() * char.length);
    head1.textContent=char[random];
    MainImg.src=images[random];
    console.log(images[random]);
    // console.log(random);
    array.push(random);
    NoRepeat(array);
    i++;
}
console.log(array);

function NoRepeat(array){
    if(array[i]===array[i-1] || array[i]===array[i-2] ){
        console.log('😒');
    }
    else{
        console.log('👌');
    }
}
    */
let i=0;
// //right button clicked
nextImg2.onclick = () =>{
    i++;
    console.log("i=",i);
    head1.textContent=char[i];
    MainImg.src=images[i];
    console.log(images[i]);
}

// let i=18;
//left button clicked
nextImg.onclick = () =>{
    i++;
    console.log(18-i);
    console.log("i=",i);
    head1.textContent=char[18-i];
    MainImg.src=images[18-i];
    console.log(images[18-i]);
    
}