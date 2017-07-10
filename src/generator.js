$("#l_generator_action").on('click',function(){
    let random_number = Math.floor(Math.random()*1000);
    $("#l_generator_random_spot").html(random_number);
});