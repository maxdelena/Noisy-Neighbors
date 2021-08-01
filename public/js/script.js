$(document).ready(function (){
    $(".hidden_container").slideUp();
    $(".main_container").click(function (){
        const isHidden = $(".hidden_container").css("display");
        if (isHidden == "none") {
            $(".hidden_container").slideDown(); 
        }else{
            $(".hidden_container").slideUp();
            }
        })

       
    });

   