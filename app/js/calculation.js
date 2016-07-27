$().ready(function()
{
    $('#calculate').click(function(){
        var invest = parseInt($('#invest').val());
        var res = parseInt($('#res').val());
        var percent = parseInt($('#percent').val());
        var annual_distributions = 0; //
        var revenue = res * (1 + percent / 100); //
        var annual = 0.05 * revenue; //
        var multiple = ((annual_distributions + annual) / invest).toFixed(1); //
        var total = (annual_distributions + annual); //
        $('#fundraise').append('<p>$ ' + invest + '</p>');
        $('#dohod').append('<p>$ ' + res + '</p>');
        $('#one').append('<p>$ ' + revenue + '</p>');
        $('#two').append('<p>$ ' + annual + '</p>');
        $('#three').append('<p>' + multiple + 'x</p>');
        $('#four').append('<p>$ ' + total + '</p>');
        var all = total;

        //
        // Данные для графика положить в массив
        // graphData = []
        //
        // при каждой итерации цикла делать:
        // data.push([X,Y])
        //

        for (var i = 0; i <= 10; ++i) {
            $('#year').append('<p> Year' + i + '</p>');
            var res = revenue;
            var total = 0;
            var revenue = Math.round(res * (1 + percent / 100));
            var annual = Math.round(0.05 * revenue);
            var annual_distributions = revenue;
            var annual_distributions = ++revenue;
            var rea = all + annual;
            var text = '';
            var multiple = ((rea) / invest).toFixed(1);
            var check_one = invest * 2;
            if (rea > check_one) {
                rea = check_one;
                text = ' Congratulations, PayBack Equity Contract is complete and your obligations are finished';
                multiple = '2.0';
                for (var t = 0; t <= 4; ++t) {
                    var res = revenue;
                    var revenue = Math.round(res * (1 + percent / 100));
                    var annual = Math.round(0.05 * revenue);
                    var annual_distributions = revenue;
                    var annual_distributions = ++revenue;
                    var rea = all + annual;
                    var multiple = '2.0';
                    var check_one = invest * 2;
                    ++i;
                    $('#year').append('<p> Year' + i + '</p>');
                    $('#one').append('<p>$ ' + revenue + '</p>');
                    $('#two').append('<p>$ ' + annual + '</p>');
                    $('#three').append('<p>' + multiple + 'x</p>');
                    $('#four').append('<p>$ ' + rea +  text + '</p>');
                }
                break;
            }
            $('#one').append('<p>$ ' + revenue + '</p>');
            $('#two').append('<p>$ ' + annual + '</p>');
            $('#three').append('<p>' + multiple + 'x</p>');
            $('#four').append('<p>$ ' + rea +  text + '</p>');
            var all = rea;
        }
    });
});
