console.log('jQuery - $.getJSON()');

$(document).ready(function () {

    $('#get-data').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            // console.log(data);
            // console.log(data.firma);
            // console.log(data.imie);
            // console.log(data.nazwisko);
            // console.log(data.zawod);
        })
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {
                // console.log(data);
                // console.log(data.firma);
                // console.log(data.imie);
                // console.log(data.nazwisko);
                // console.log(data.zawod);

                $('#dane-programisty').append(data.firma+' - '+data.imie+' '+data.nazwisko+': '+data.zawod);
            })
            .fail(function (error) {
                console.error(error);
            })
    });
});