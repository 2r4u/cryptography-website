const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const maintitle = document.getElementById("title");

const ogtext ={
    t1:maintitle.innerHTML
}
function calculateDistance(elem, mouseX, mouseY) {
    //fix this by using new way to get positioning
    return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
}

function encrypt(ele){
    let text = ele.innerHTML;
    let ectext="";
    for(let i=0; i<text.length;i++){
        if(text[i]==" "){
            ectext+=" ";
        }
        else{
            ectext+=letters[Math.floor(Math.random()*letters.length)];
        }
    }
    ele.innerHTML=ectext;
}

function decrypt(ele){
    let text = ele.innerHTML;

}
document.onload = function(){
    encrypt(this.getElementById("title"));
}

document.onmousemove =function(e){
    console.log(e.clientX, e.clientY);
    console.log(calculateDistance(this, e.clientX, e.clientY));
    
    // if(calculateDistance(maintitle,e.clientX,e.clientY)<9999999){
        
    //     encrypt(this);
    // }
    // else{
    //     this.innerHTML=ogtext.t1;
    // }
}


