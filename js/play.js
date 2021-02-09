var spans = document.querySelectorAll("#clickSpans span");
        
for(const mySpan of spans){
    mySpan.addEventListener("click",function(event){
        //alert(mySpan.dataset.actor);
        highlightActor(mySpan.dataset.actor);
    });
}


//console.log(spans);

function highlightActor(myActor){

for(const mySpan of spans){

    if(mySpan.dataset.actor == myActor){//current actor highlighted
        mySpan.style.backgroundColor = 'yellow';
        mySpan.style.fontWeight = 'bold';
    }else{//not current actor, no highlight
        mySpan.style.backgroundColor = 'white';
        mySpan.style.fontWeight = 'normal';
}
}  
}