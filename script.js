const quizeData = [
    {
        question:'How old is MS.dhoni?',
        a: '24',
        b: '45',
        c: '30',
        d: '40',
        correct: 'd',
    } ,{
        question: 'Who is best Captain? ',
        a: 'MS.DHONI',
        b: 'Rohit Sharma',
        c: 'Hardik Pandy',
        d: 'KL. Rahul',
        correct: 'b',
    }, {
        question:'What is the most used Prgramming language in 2022?',
        a: 'java',
        b: 'Paython',
        c: 'c',
        d: 'Java Script',
        correct: 'b'
          
    }, {
        question: 'Who is the President of India',
        a: 'Rohit Shahane ',
        b: 'Abhi kambale',
        c: 'Narendra Modi',
        d: 'Ajay andhaare',
        correct:'c'
    }, {
        question:'Who is Royal man',
        a: 'Rohit Shahane',
        b: 'Abhi kambale',
        c: 'Ajay Andhare',
        d: 'All of the above',
        correct:'d'
    },{
        question: 'HTML stand form',
        a: 'Hypertext markup language',
        b: 'Hyper language',
        c: 'Hyper markup language',
        d: 'non of the above',
        correct:'a'
    }
    
]
const questionEl =document.getElementById('question')
const a_text =document.getElementById('a_text')
const b_text =document.getElementById('b_text')
const c_text =document.getElementById('c_text')
const d_text =document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz =0;
var score = 0;

loadQuiz()

function loadQuiz() {
    const currentQuizData =quizeData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question

    a_text.innerHTML =currentQuizData.a;
    b_text.innerHTML =currentQuizData.b;
    c_text.innerHTML =currentQuizData.c;
    d_text.innerHTML =currentQuizData.d;
    
}
submitBtn.addEventListener('click', () =>{
    var temp = document.getElementsByTagName('input')

    for(ele of temp){
        if(ele.checked == true && ele.value == quizeData[currentQuiz].correct){
            score++;
        }
    }
    currentQuiz++;
    if(currentQuiz<quizeData.length){
        loadQuiz();
    }
    else (
        alert(`${score} out of ${quizeData.length} are correct answers !`)
    )

})