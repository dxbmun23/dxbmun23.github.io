const observer = new window.IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        $("#small").css({
            minHeight: 0,
        }).slideUp(function(){
            $(this).css({
            minHeight: "15vh",
            height: "auto",
        });
        },complete=function(){
            $("#small").css("display", "none")
        });
        return
    }
    $("#small").css({
        minHeight: 0,
    }).slideDown(function(){
        $(this).css({
        minHeight: "15vh",
        height: "auto",
    });
    });
    $("#small").css("display", "flex")
}, {
  root: null,
  threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
})
observer.observe(document.querySelector('#header'));

const date = new Date(2023, 11, 8).getTime(); //mm(0-January, 11-December) dd 
const month = new Date().getMonth();
// countdown
let timer = setInterval(function() {
    // get today's date
    const today = new Date().getTime();
    console.log(new Date(date), new Date(today))
    // get the difference
    let diff;
    diff = date - today;
    let days, hours, minutes, second;
    //math
    if (diff <= 0){
        days = 0
        hours = 0
        minutes = 0
        seconds = 0
    } else {
        days = Math.floor(diff / (1000 * 60 * 60 * 24));
        hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((diff % (1000 * 60)) / 1000);
    }
    // display
    document.getElementById("count").innerHTML =
    `<div class="unit">
        <h1>${days}</h1>
        <span>Days</span>
    </div>
    <div class="unit">
        <h1>${hours}</h1>
        <span>Hours</span>
    </div>
    <div class="unit">
        <h1>${minutes}</h1>
        <span>Minutes</span>
    </div>
    <div class="unit">
        <h1>${seconds}</h1>
        <span>Seconds</span>
    </div>`
}, 1000);
