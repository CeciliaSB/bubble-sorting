
let suits = ["heart", "spade", "club", "diamond"]; // change 'suit'  for 'suits' 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let cardNumber = document.getElementById("cardNumber");
let draw = document.getElementById("draw");
let generatedCards = document.getElementById("generatedCards");
let sorting = document.getElementById("sorting"); 
let sort =document.getElementById("sort"); 

let arrGeneratedCards =[]; 

function drawCards(e) {
    generatedCards.innerHTML = ""
    arrGeneratedCards = []
    for(let i = 0; i < cardNumber.value; i++){ // change cardNumber, instead use cardTotal 
        let card = document.createElement("div");
        card.classList.add("card");
        let number = document.createElement("div"); //symbol - number
        number.classList.add("number");
        let lettersForNumbers = Math.floor(Math.random() * 4); 
        number.classList.add(suits[lettersForNumbers]);
        let randomNumber = Math.floor(Math.random * 13); 
        if (randomNumber === 10){
            number.innerHTML = "J";
        } else if (randomNumber === 0) {
            number.innerHTML = "A";
        } else if (randomNumber === 11) {
            number.innerHTML = "Q";
        } else if (randomNumber === 12) {
            number.innerHTML = "K";
        } else {
            number.innerHTML = numbers[randomNumber];
        }
        card.appendChild(number);
        generatedCards.appendChild(card);
        let finalCard = {"number":numbers[randomNumber], "suit": suits[lettersForNumbers]} 
        arrGeneratedCards.push(finalCard)
        console.log(arrGeneratedCards.length)
    }
}

function iteration (e){ //bubble sorting 
    sorting.innerHTML = ""
    let wall = arrGeneratedCards.length -1;
    let counter = 0;
    while (wall > 0){
        let index = 0;
        while(index < wall){
            counter++;
            if(arrGeneratedCards [index].number > arrGeneratedCards[index + 1].number){
                let aux = arrGeneratedCards[index].number;
                let aux2 =  arrGeneratedCards [index].suit;
                arrGeneratedCards[index].number = arrGeneratedCards[index + 1].number;
                arrGeneratedCards[index].suit = arrGeneratedCards[index + 1].suit;
                arrGeneratedCards[index + 1].number = aux;
                arrGeneratedCards[index + 1].suit = aux2;
            }
            let iterate = document.createElement("div"); 
            let eCounter = document.createElement("span");
            eCounter.classList.add("x" + counter)
            eCounter.innerHTML = counter;
            iterate.appendChild(eCounter);
            for (let i = 0; i < arrGeneratedCards.length; i++){
                let nCard =  document.createElement("div");
                nCard.classList.add("card");
                let inCard = document.createElement("div");
                inCard.classList.add("number");
                inCard.classList.add(arrGeneratedCards[i].suit);
                if (arrGeneratedCards[i].number=== 11){
                    inCard.innerHTML = "J";
                } else if (arrGeneratedCards[i].number ===1){
                    inCard.innerHTML = "A";
                } else if (arrGeneratedCards[i].number ===12){
                    inCard.innerHTML = "Q";
                } else if (arrGeneratedCards[i].number ===13){
                    inCard.innerHTML = "K"
                } else {
                    inCard.innerHTML = arrGeneratedCards[i].number;
                }
                nCard.appendChild(inCard);
                iterate.appendChild(nCard)
                sorting.appendChild(iterate)
            }
            index++
        }
        wall--;
    }
    return arrGeneratedCards;
};

draw.addEventListener("click", drawCards)
sort.addEventListener("click", iteration)

