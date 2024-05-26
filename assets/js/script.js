$('button[name="function"]').click(function(){
    var operator = $(this).data('id');
    var number_1 = parseInt($('input[name="number_1"]').val());
    var number_2 = parseInt($('input[name="number_2"]').val());
    var output = 0;
    if(operator == '+'){
        output = number_1+number_2;
    }else if (operator == '-'){
        output = number_1-number_2;
    }else if (operator == '*'){
        output = number_1*number_2;
    }else{
        output = number_1/number_2;
    }

    $('input[name="output"]').val(output);
});
