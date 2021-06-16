
$(document).ready(function(){
    $(".buttons").hover(function(){  
        $(this).children('div').animate({
                left:"50%",
                fontSize: "30px"
            
        },1000)
        $(this).animate({
            backgroundColor: '#FCFCD8',
            width:'80%',
            height:'15%',
        },500)

    },function(){
        $(this).children('div').animate({
            left:"0",
            fontSize: "20px"
        
    },1000)
    $(this).animate({
        backgroundColor: '#deb887',
        width:'70%',
        height:'15%',
    },500) 

 //   $(this).slideUp(500);

    });
});

