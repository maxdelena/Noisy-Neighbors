$(document).ready(function (){
    $(".main_container").parent().children('.hidden_container').slideUp();
    $(".main_container").click(function (){
        const selectedContainer=$(this).parent().children('.hidden_container');
        
        const isHidden = $(this).parent().children('.hidden_container').css("display");
        if (isHidden == "none") {
            selectedContainer.slideDown(); 
        }else{
            selectedContainer.slideUp();
            }
        })

       
    });

   //start none