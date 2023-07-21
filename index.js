let words = [
    {
        "inputs":5,
        "category":Sports, 
        "word":chess
    },

    

    {
        "inputs":7,
        "category":European_Country,
        "word":Germany 
    },


    {
        "inputs":5,
        "category":Food,
        "word":Fries
    },

    {
        "inputs":12,
        "category":Space_movies,
        "word":interstellar
    },

    {
        "inputs":8,
        "category":birds,
        "word":Flamingo
    }
] 

var gameOver = false 

$(".clickable").click(function(){

var correctGuess= false 

let id = $(this).attr("id") 
 

var life = parsInt$(("#Life").text()) 

for(var i = 0; i <randomWord.word.length; i++){

    if(randomWord.word.charAt(i).toLowerCase() == id){

        if(life > 0 && ($(".fill_blanks").eq(i).html == "_"|| $(".fill_blanks").eq(i).html() == id)){
            if ($("#blanks").text() === randomWord.word.toLowerCase()){

                $("#result").text("You Win!!") 
                correctGuess = true;
                gameOver = true;
            }




        }
    }


}




})