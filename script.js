/*
$( document ).ready(function() {

    const element = document.querySelector('.xf');
    element.classList.add('animated', 'fadeInUp');
    setTimeout(function() {
    element.classList.remove('fadeInUp');
    }, 1000);
    console.log("hi");
    
    });
*/
$( document ).ready(function() {
    console.log($(window).width());
    console.log("hi");
    var top=$(this).scrollTop()
    if (top>200){
        $(".xf").show()
    }if (top>600){
        $(".details").show()

    }if (top>900){
        $(".section_k").show()
    }
   $(window).scroll(function(){
       var top=$(this).scrollTop()
       if (top>200){
           $(".xf").show()
       }if(top>600){
           $(".details").show()
       }if (top>900){
        $(".section_k").show()
    }
   })
    
});
 




