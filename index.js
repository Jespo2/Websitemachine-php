const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;
start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset);
function timer(){
   seconds++;    // immer when gerufen wird incrementiert
   if (seconds > 7200) {
    reset();
}
   let hrs = Math.floor(seconds / 3600); // Format
   let mins = Math.floor((seconds-(hrs*3600))/60);
   let secs = seconds%60;
   if(secs < 10 ) secs = '0' + secs;
   if(mins < 10 ) mins = '0' + mins;
   if(hrs < 10 ) hrs = '0' + hrs;
   
   time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start(){
    if(interval){
        return;
    }
    interval = setInterval(timer,1000);
}

function stop(){
    clearInterval(interval);
    interval = null;    
}

function reset(){
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00';
}

// __________________________Waschmaschine 1 Haus 5

const time_el1 = document.querySelector('.watch1 .time1');
const start_btn1 = document.getElementById('start1');
const stop_btn1 = document.getElementById("stop1");
const reset_btn1 = document.getElementById("reset1");

let seconds1 = 0;
let interval1 = null;
start_btn1.addEventListener('click',start1);
stop_btn1.addEventListener('click',stop1);
reset_btn1.addEventListener('click',reset1);
function timer1(){
   seconds1++;    // immer when gerufen wird incrementiert
   if (seconds1 > 7200) {
    reset1();
}
   let hrs1 = Math.floor(seconds1 / 3600); // Format
   let mins1 = Math.floor((seconds1-(hrs1*3600))/60);
   let secs1 = seconds1%60;
   if(secs1 < 10 ) secs1 = '0' + secs1;
   if(mins1 < 10 ) mins1 = '0' + mins1;
   if(hrs1 < 10 ) hrs1 = '0' + hrs1;
   
   time_el1.innerText = `${hrs1}:${mins1}:${secs1}`;
}

function start1(){
    if(interval1){
        return;
    }
    interval1 = setInterval(timer1,1000);
}

function stop1(){
    clearInterval(interval1);
    interval1 = null;    
}

function reset1(){
    stop1();
    seconds1 = 0;
    time_el1.innerText = '00:00:00';
}

// __________________________Waschmaschine 2  Haus 5

const time_el2 = document.querySelector('.watch2 .time2');
const start_btn2 = document.getElementById('start2');
const stop_btn2 = document.getElementById("stop2");
const reset_btn2 = document.getElementById("reset2");

let seconds2 = 0;
let interval2 = null;

start_btn2.addEventListener('click', start2);
stop_btn2.addEventListener('click', stop2);
reset_btn2.addEventListener('click', reset2);

function timer2() {
   seconds2++;    // immer when gerufen wird incrementiert
   if (seconds2 > 7200) {
      reset2();
   }
   let hrs2 = Math.floor(seconds2 / 3600); // Format
   let mins2 = Math.floor((seconds2 - (hrs2 * 3600)) / 60);
   let secs2 = seconds2 % 60;
   if(secs2 < 10 ) secs2 = '0' + secs2;
   if(mins2 < 10 ) mins2 = '0' + mins2;
   if(hrs2 < 10 ) hrs2 = '0' + hrs2;
   
   time_el2.innerText = `${hrs2}:${mins2}:${secs2}`;
}

function start2() {
   if(interval2) {
      return;
   }
   interval2 = setInterval(timer2, 1000);
}

function stop2() {
   clearInterval(interval2);
   interval2 = null;    
}

function reset2() {
   stop2();
   seconds2 = 0;
   time_el2.innerText = '00:00:00';
}

// __________________________Waschmaschine 3  Haus 5

const time_el3 = document.querySelector('.watch3 .time3');
const start_btn3 = document.getElementById('start3');
const stop_btn3 = document.getElementById("stop3");
const reset_btn3 = document.getElementById("reset3");

let seconds3 = 0;
let interval3 = null;
start_btn3.addEventListener('click',start3);
stop_btn3.addEventListener('click',stop3);
reset_btn3.addEventListener('click',reset3);

function timer3(){
   seconds3++;    // always increment when called
   if (seconds3 > 7200) {
    reset3();
   }
   let hrs3 = Math.floor(seconds3 / 3600); // Format
   let mins3 = Math.floor((seconds3-(hrs3*3600))/60);
   let secs3 = seconds3%60;
   if(secs3 < 10 ) secs3 = '0' + secs3;
   if(mins3 < 10 ) mins3 = '0' + mins3;
   if(hrs3 < 10 ) hrs3 = '0' + hrs3;
   
   time_el3.innerText = `${hrs3}:${mins3}:${secs3}`;
}

function start3(){
    if(interval3){
        return;
    }
    interval3 = setInterval(timer3,1000);
}

function stop3(){
    clearInterval(interval3);
    interval3 = null;    
}

function reset3(){
    stop3();
    seconds3 = 0;
    time_el3.innerText = '00:00:00';
}

// __________________________Trockner  Haus 9

const time_el4 = document.querySelector('.watch4 .time4');
const start_btn4 = document.getElementById('start4');
const stop_btn4 = document.getElementById("stop4");
const reset_btn4 = document.getElementById("reset4");

let seconds4 = 0;
let interval4 = null;
start_btn4.addEventListener('click',start4);
stop_btn4.addEventListener('click',stop4);
reset_btn4.addEventListener('click',reset4);
function timer4(){
   seconds4++;    // immer when gerufen wird incrementiert
   if (seconds4 > 7200) {
    reset4();
}
   let hrs4 = Math.floor(seconds4 / 3600); // Format
   let mins4 = Math.floor((seconds4-(hrs4*3600))/60);
   let secs4 = seconds4%60;
   if(secs4 < 10 ) secs4 = '0' + secs4;
   if(mins4 < 10 ) mins4 = '0' + mins4;
   if(hrs4 < 10 ) hrs4 = '0' + hrs4;
   
   time_el4.innerText = `${hrs4}:${mins4}:${secs4}`;
}

function start4(){
    if(interval4){
        return;
    }
    interval4 = setInterval(timer4,1000);
}

function stop4(){
    clearInterval(interval4);
    interval4 = null;    
}

function reset4(){
    stop4();
    seconds4 = 0;
    time_el4.innerText = '00:00:00';
}


// __________________________Waschmaschine 1  Haus 9

const time_el5 = document.querySelector('.watch5 .time5');
const start_btn5 = document.getElementById('start5');
const stop_btn5 = document.getElementById("stop5");
const reset_btn5 = document.getElementById("reset5");

let seconds5 = 0;
let interval5 = null;
start_btn5.addEventListener('click',start5);
stop_btn5.addEventListener('click',stop5);
reset_btn5.addEventListener('click',reset5);
function timer5(){
   seconds5++;    // increment every time it's called
   if (seconds5 > 7200) {
    reset5();
}
   let hrs5 = Math.floor(seconds5 / 3600); // Format
   let mins5 = Math.floor((seconds5-(hrs5*3600))/60);
   let secs5 = seconds5%60;
   if(secs5 < 10 ) secs5 = '0' + secs5;
   if(mins5 < 10 ) mins5 = '0' + mins5;
   if(hrs5 < 10 ) hrs5 = '0' + hrs5;
   
   time_el5.innerText = `${hrs5}:${mins5}:${secs5}`;
}

function start5(){
    if(interval5){
        return;
    }
    interval5 = setInterval(timer5,1000);
}

function stop5(){
    clearInterval(interval5);
    interval5 = null;    
}

function reset5(){
    stop5();
    seconds5 = 0;
    time_el5.innerText = '00:00:00';
}


// __________________________Waschmaschine 2  Haus 9

const time_el6 = document.querySelector('.watch6 .time6');
const start_btn6 = document.getElementById('start6');
const stop_btn6 = document.getElementById("stop6");
const reset_btn6 = document.getElementById("reset6");

let seconds6 = 0;
let interval6 = null;
start_btn6.addEventListener('click',start6);
stop_btn6.addEventListener('click',stop6);
reset_btn6.addEventListener('click',reset6);
function timer6(){
   seconds6++;    // immer when gerufen wird incrementiert
   if (seconds6 > 7200) {
    reset6();
}
   let hrs6 = Math.floor(seconds6 / 3600); // Format
   let mins6 = Math.floor((seconds6-(hrs6*3600))/60);
   let secs6 = seconds6%60;
   if(secs6 < 10 ) secs6 = '0' + secs6;
   if(mins6 < 10 ) mins6 = '0' + mins6;
   if(hrs6 < 10 ) hrs6 = '0' + hrs6;
   
   time_el6.innerText = `${hrs6}:${mins6}:${secs6}`;
}

function start6(){
    if(interval6){
        return;
    }
    interval6 = setInterval(timer6,1000);
}

function stop6(){
    clearInterval(interval6);
    interval6 = null;    
}

function reset6(){
    stop6();
    seconds6 = 0;
    time_el6.innerText = '00:00:00';
}
