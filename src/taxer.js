
$("#l_tax_action").on('click',function(){    
    let total = $("#l_tax_total").val();
    let tax = total * .2;
    $("#l_tax_tax_spot").html(tax);
    $("#l_tax_ttc_spot").html(parseInt(total) + parseInt(tax));
});