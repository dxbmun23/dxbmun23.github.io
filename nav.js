$('.link').click(function(e){
    window.location.href=`./${e.target.id}.html`;
})

//loader
$(window).on("load",function(){
    setTimeout(function(){
        $("#preloader").fadeOut("slow",complete=function(){
            $("#preloader").css("display","none")
        })
        $("html").css("overflow","auto")
    }, 500)
})
