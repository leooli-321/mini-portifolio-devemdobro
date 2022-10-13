var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");


var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];


function play() {

    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Por favor selecione um número entre 1 - 100.");
    } else {
        guessed_nums.push(user_guess);
        no_of_guesses += 1;

        if (user_guess < answer) {

            msg1.textContent = "Você chutou muito baixo :(";
            msg2.textContent = "Número de tentativas: " + no_of_guesses;
            msg3.textContent = "Números anteriores: " + guessed_nums;

        } else if (user_guess > answer) {

            msg1.textContent = "Você chutou muito alto. Tente mais uma vez :)";
            msg2.textContent = "Número de tentativas: " + no_of_guesses;
            msg3.textContent = "Números anteriores: " + guessed_nums;

        } else if (user_guess == answer) {

            msg1.textContent = "Você acertou!!";
            msg2.textContent = "O Número era: " + answer;
            msg3.textContent =
                "Você concluiu em " +
                no_of_guesses +
                " tentativas. Vamos jogar de novo?";
            document.getElementById("my_btn").disabled = true;

        }
    }
}
