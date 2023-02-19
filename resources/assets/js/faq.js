let questions = document.querySelectorAll('.question');
let answer = document.querySelectorAll('.answer');
let icon = document.querySelectorAll('.question i')


for(let i = 0; i < questions.length; i++) {
    questions[i].onclick = () => {
        answer[i].classList.toggle('active');
        icon[i].classList.toggle('iactive');
    }
}