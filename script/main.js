//Button
const button = document.getElementById("button"),
bg_button = document.getElementById("bg-button"),
circle_button = document.getElementById("circle-button");

//Background
const background = document.body, 
top_background = document.getElementById("top-bg");

//Titles and numbers
const titles_numbers = document.querySelectorAll(".title_number");

//Subtitles
const subtitles = document.querySelectorAll(".subtitle");

//Small cards
const small_card = document.querySelectorAll(".small-card");

//Header
const header = document.getElementById("header");

let dark_mode = true;

button.addEventListener("click", dark_light_mode);

small_card.forEach(function(item){
    item.addEventListener("hover", event => {
        if (!dark_light_mode){
            console.log("light mode");
            item.style.backgroundColor = "#E1E3F0";
        }
        else{
            console.log("dark mode");
            item.style.backgroundColor = "#333A56";
        }
    });
});

function dark_light_mode(){
    if (dark_mode){
        //Button
        dark_mode = false;
        bg_button.style.backgroundImage = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%)"
        circle_button.style.backgroundColor = "hsl(230, 17%, 14%)";
        circle_button.style.left = "4px";
        //Background
        background.style.backgroundColor = "hsl(230, 17%, 14%)";
        top_background.style.backgroundColor = "hsl(232, 19%, 15%)";
        //Titles and numbers
        titles_numbers.forEach(function(item){
            item.style.color = "hsl(0, 0%, 100%)";
        });
        //Subtitles
        subtitles.forEach(function(item){
            item.style.color = "hsl(228, 34%, 66%)";
        });
        //Small cards
        small_card.forEach(function(item){
            item.style.backgroundColor = "hsl(228, 28%, 20%)";
        })
        //Header
        header.style.borderColor = "hsl(228, 34%, 66%)";
    }   
    else{
        //Button
        dark_mode = true;
        bg_button.style.backgroundImage = "";
        bg_button.style.backgroundColor = "hsl(230, 22%, 74%)";
        circle_button.style.backgroundColor = "hsl(0, 0%, 100%)";
        circle_button.style.left = "";
        circle_button.style.right = "4px";
        //Background
        background.style.backgroundColor = "hsl(0, 0%, 100%)";
        top_background.style.backgroundColor = "hsl(225, 100%, 98%)";
        //Titles and numbers
        titles_numbers.forEach(function(item){
            item.style.color = "hsl(230, 17%, 14%)";
        });
        //Subtitles
        subtitles.forEach(function(item){
            item.style.color = "hsl(228, 12%, 44%)";
        });
        //Small cards
        small_card.forEach(function(item){
            item.style.backgroundColor = "hsl(227, 47%, 96%)";
        });
        //Header
        header.style.borderColor = "hsl(230, 17%, 14%)";
    }
}
