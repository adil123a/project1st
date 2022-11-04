const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if(soundState === 'off'){
        on.style.display = 'block';
        off.style.display = 'none';
        soundCloud.style.color = "#08fdd8";
        myAudio.play();
    }
    else if(soundState === 'on'){
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color = "#f50057";
        myAudio.pause();
    }
}

// Play music functionality

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const SideNav = document.querySelector('.aside');
const navItem2=document.querySelector('.menuIcon')
const Header1=document.querySelector('mainHeader')
var isTrue=true
navItem2.addEventListener('click',()=>{
if (isTrue) {
    SideNav.style.right="0px"
    mainHeader.style.width="90%"
    isTrue=false
}else{
    SideNav.style.right="-450px"
    mainHeader.style.width="100%"
    isTrue=true
}})
window.addEventListener('scroll',()=>{
    let s=window.scrollY
    if (isTrue) {
        mainHeader.style.width="100%"
    }if(s>120){
        mainHeader.style.background="#262626"
    }else if(s<60){
        mainHeader.style.background="transparent"
        // mainHeader.style.width="90%"

    }
})


btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
        SideNav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if(navCondition === 'close'){
            SideNav.classList.remove('show-nav');
            btnTimes.style.display = "none";
            btnBars.style.display = "block";
    }
}



var mainBody = document.getElementById('bodyTag')
// let cnvas=document.querySelector('#myCanvas')
let sectionAbout=document.querySelector('#section-about')
// let widthNum= mainBody.clientWidth
// if (widthNum>=1024) {
// cnvas.width=widthNum/2.5
// }
// if (widthNum<=500) {
//     cnvas.width=widthNum-50
//     }
// preloader
    var mainSection = document.getElementById('mainSection')
    var asideCont = document.getElementById('aside')

    function loader() {
        setTimeout(() => {
            mainSection.style.display = 'block'
        },000);
        setTimeout(() => {
            mainBody.style.overflowY = 'auto'
        }, 100);
    }