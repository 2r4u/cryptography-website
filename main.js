const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const elements = Array.from(document.querySelectorAll("[data-key]"));

//dictionary that
const ogtext ={
    t1:document.getElementById("title").innerHTML,
    st1:document.getElementById("st1").innerHTML,
}

function start(){
    window.location.href="map.html"
}
// function calculateDistance(elem, mouseX, mouseY) {
//     return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offsetLeft+(elem.offsetWidth/2)), 2) + Math.pow(mouseY - (elem.offsetTop+(elem.offsetHeight/2)), 2)));
// }

// function encrypt(ele){
//     let text = ele.innerHTML;
//     let ectext="";
//     for(let i=0; i<text.length;i++){
//         if(text[i]==" "){
//             ectext+=" ";
//         }
//         else{
//             ectext+=letters[Math.floor(Math.random()*letters.length)];
//         }
//     }
//     ele.innerHTML=ectext;
// }

// function mouseAction(e){
//     for(let ele of elements){
//         // console.log(calculateDistance(maintitle, e.clientX, e.clientY));
//         if(calculateDistance(ele,e.clientX,e.clientY)<150){
//             console.log(ele.getAttribute("data-key"));
//             ele.innerHTML=ogtext[ele.getAttribute("data-key")];
//         }
//         else{
//             encrypt(ele);
//         }
//     }
    
// }
// document.onload =function(){
//     for(let ele of elements){
//         encrypt(ele);
//     }
    
// }
// document.onmousemove =function(e){
//     console.log(e.clientX, e.clientY);
//     mouseAction(e);
    
// }



