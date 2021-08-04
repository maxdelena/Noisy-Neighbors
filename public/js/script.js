$(document).ready(function (){
    $(".main_container").click(function (){
        const isHidden = $(".hidden_container").css("display");
        if (isHidden == "none") {
            $(".hidden_container").slideDown(); 
        }else{
            $(".hidden_container").slideUp();
            }
        })

       
    });

   //start none