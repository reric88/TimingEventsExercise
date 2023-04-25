// #region QUESTION 1
const div1 = document.querySelector('#first');
const p1 = document.createElement('p');
p1.innerText = 'Hi'

setTimeout(() => {
    div1.append(p1);
}, 1000);
// #endregion

// #region QUESTION 2
const div2 = document.querySelector('#timeout-nesting');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
p2.innerText = 'One';
p3.innerText = 'Two';

setTimeout(() => {
    div2.append(p2);
    setTimeout(() => {
        div2.append(p3);
    }, 1000);
}, 2000);
// #endregion

// #region QUESTION 3a
let i = 1;
const stopWatch = 
    setInterval(() => {
        console.log(i);
        i++
    }, 1000);
// #endregion

// #region 3b
const stopBtn = document.querySelector('button');
stopBtn.addEventListener('click', ()=>{
    clearInterval(stopWatch);
});
// #endregion

// #region BONUS 4
const div3 = document.querySelector('#countdown');
const p4 = document.createElement('p');
let minute = 2;
let second = 0;
div3.append(p4);

const timer = setInterval(() => {
    if (minute < 0 && second === 59){
        // clearInterval(timer)
        p4.innerText = 'TIME IS UP!'
            beep.play(); // Fluff
            div3.append(btn2); // Fluff
    }else 
    if (second === 0){
        p4.innerText = `${minute}:0${second}`;
        minute--;
        second = 59;
    }
     else if (second > 0 && second <= 9){
        p4.innerText = `${minute}:0${second}`;
        second--;
    } else if (second >= 10){
        p4.innerText = `${minute}:${second}`;
        second--;
    }
}, 1000);
// #endregion

// #region Fluff
const btn2 = document.createElement('button');
btn2.innerText = 'plz stop this';
let beep = new Audio('beep-beep.mp3');

btn2.addEventListener('click', ()=>{
    clearInterval(timer);
});
// #endregion
