$("#l_reverse_action").on('click',function(){
    let original = $("#l_reverse_text").val();
    let reversed = "";        
    
    for(let i = original.length-1; i>=0 ; i-- ){
        reversed += original[i];
    }

    $("#l_reverse_spot").html(reversed);
});