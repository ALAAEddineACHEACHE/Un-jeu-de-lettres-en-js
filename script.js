let A = document.getElementById("A");
let S = document.getElementById("S");
let D = document.getElementById("D");
let F = document.getElementById("F");
let G =document.getElementById("G");
let H = document.getElementById("H");
let J = document.getElementById("J");
let K = document.getElementById("K");
let L = document.getElementById("L");
let firstaudio= document.getElementById("a");
let secondaudio = document.getElementById("s");
let thirdaudio = document.getElementById("d");
let fourthaudio=document.getElementById("f")
let fifthaudio = document.getElementById("g");
let sixthaudio = document.getElementById("h");
let seventhaudio=document.getElementById("j");
let eighthaudio=document.getElementById("k");
let ninethaudio=document.getElementById("l");
A.addEventListener("click",function(event){
    event.preventDefault();
    firstaudio.play();
});
S.addEventListener("click",function(){
    secondaudio.play();
})
D.addEventListener("click",function(){
    thirdaudio.play();
})
F.addEventListener("click",function(){
    fourthaudio.play();
})
G.addEventListener("click",function(){
    fifthaudio.play();
})
H.addEventListener("click",function(){
    sixthaudio.play();
})
J.addEventListener("click",function(){
    seventhaudio.play();
})
K.addEventListener("click",function(){
    eighthaudio.play();
})
L.addEventListener("click",function(){
    ninethaudio.play();

 });
 //Deuxieme Methode l'écoute du clavier en utlisant le convertissement 
 //des codes ASCI II
window.addEventListener("keydown",function(event){
    console.log(event.keyCode);
    const currentAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    currentAudio.play();
})
