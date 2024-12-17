let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#newBtn");
let msgCont = document.querySelector(".msgCont");
let win = document.querySelector("#win");




let turnO = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
box.addEventListener("click",() =>{
    if(turnO){
        box.innerText = "O";
        turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
} );
});


function showWinner(winner){
    win.innerText = `Congratulations, Winner is ${winner}`;
    msgCont.classList.remove("hide");

    boxes.forEach((box) => {
        box.disabled = true;       // After winner is selected Disable all the rest boxes
    });
    
}




function checkWinner () {
    for(let pattern of winPatterns){
        
        let pos1 =  boxes[pattern[0]].innerText;
        let pos2 =  boxes[pattern[1]].innerText;
        let pos3 =  boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "" ){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("Winner",pos1);
            showWinner(pos1);
        }
     }  
        
    }
        
}


newBtn.addEventListener("click",function(){
    let turnO = true;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";  
  });
  msgCont.classList.add("hide");

});

reset.addEventListener("click",function(){
    let turnO = true;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";  
  });
  msgCont.classList.add("hide");
});





// console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );