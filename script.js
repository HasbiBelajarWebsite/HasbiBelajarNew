const quiz=document.getElementById("quiz");
const hasil=document.getElementById("hasil");
const waBox=document.getElementById("waBox");
const tanggal=document.getElementById("tanggal");

function r(a,b){
return Math.floor(Math.random()*(b-a+1))+a;
}

let j=[];

function buat(){
quiz.innerHTML="";
j=[];

for(let i=1;i<=10;i++){

let a=r(1,20);
let b=r(1,10);

let benar=a+(b*b);
j.push(benar);

let pilihan=[
benar,
benar+r(1,5),
benar-r(1,5),
benar+r(6,10)
];

pilihan.sort(()=>Math.random()-0.5);

let html=`
<div class="soal">
<p>${i}. X=${a} Y=${b} → X + Y² = ?</p>
`;

pilihan.forEach(p=>{
html+=`
<label>
<input type="radio" name="soal${i}" value="${p}">
${p}
</label><br>
`;
});

html+="</div>";

quiz.innerHTML+=html;
}
}

buat();

document.getElementById("submit").onclick=function(){

let skor=0;

for(let i=1;i<=10;i++){
let pilih=document.querySelector(`input[name="soal${i}"]:checked`);
if(pilih && Number(pilih.value)===j[i-1]){
skor+=10;
}
}

hasil.innerHTML="Nilai kamu: "+skor;
}

// muncul saat scroll
window.addEventListener("scroll",function(){

if(window.scrollY>200){
waBox.style.display="block";
tanggal.style.display="block";
}else{
waBox.style.display="none";
tanggal.style.display="none";
}

});
// TIMER 30 MENIT
let waktu = 30 * 60;
const timer = document.getElementById("timer");

const hitung = setInterval(function(){

let menit = Math.floor(waktu / 60);
let detik = waktu % 60;

if(detik < 10){
detik = "0" + detik;
}

timer.innerHTML = menit + ":" + detik;

waktu--;

if(waktu < 0){
clearInterval(hitung);
document.getElementById("submit").click();
alert("Waktu habis! Nilai otomatis dikirim.");
}

},1000);