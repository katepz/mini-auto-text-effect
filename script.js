const containerEl = document.querySelector(".container");

const birds = ["magpie", "crow", "finch", "eagle"];

let birdIndex = 0;

let characterIndex = 0;

updateText()

function updateText(){
    characterIndex++;
    containerEl.innerHTML = `<h1>I am ${birds[birdIndex].slice(0,1) === 'e' ? "an" : "a"} ${birds[birdIndex].slice(0,characterIndex)}</h1>`;
    if (characterIndex===birds[birdIndex].length){
        birdIndex++;
        characterIndex = 0;
    }
    if(birdIndex === birds.length){
        birdIndex = 0;
    }
    setTimeout(updateText, 400);
}

