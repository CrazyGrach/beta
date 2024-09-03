var countDownDate2 = new Date("Sep 6, 2024 08:20:00").getTime();

    var countdownfunction2 = setInterval(function() {
    
    // Get todays date and time

    var now2 = new Date().getTime();
    // Find the distance between now an the count down date
    var distance2 = countDownDate2 - now2;
    
    // Time calculations for days, hours, minutes and seconds
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"


    document.getElementById("demo2").innerHTML = 'До урока физкультуры осталось ' + days2 + " дней, " + hours2 + " часов, " + minutes2 + " минут, " + seconds2 + ' секунд';

    /* if (days2 < 90) {
        document.getElementById("demo2").style.color = "green";
    }

    if (days2 < 60) {
        document.getElementById("demo2").style.color = "orange";
    }
    
    if (days2 < 30) {
        document.getElementById("demo2").style.color = "red";
    } --for summer */ 

    // If the count down is over, write some text 
    if (distance2 < 0) {
        clearInterval(countdownfunction2);
        document.getElementById("demo2").innerHTML = "Урок физкультуры уже прошел.";
    }
}, 1000); 

var countDownDate = new Date("Sep 1, 2024 00:00:00").getTime();

    var countdownfunction = setInterval(function() {
    var month = new Date().getMonth()
    //var month = 7             TEST
    if (month == 5) {
        var day_percent = new Date().getDate() * 1.08
        var hour_percent = new Date().getHours() * 4.16 / 92
        var min_percent = new Date().getMinutes() * 4.16 / 92 /60
        var sec_percent = new Date().getSeconds() * 4.16 / 92 /60 /60
        var percent = day_percent + hour_percent + min_percent + sec_percent // idk how it works xd
        var res = percent.toFixed(4);
    }
    if (month == 6) {
        var day_percent = (new Date().getDate() + 30) * 1.08
        var hour_percent = new Date().getHours() * 4.16 / 92
        var min_percent = new Date().getMinutes() * 4.16 / 92 /60
        var sec_percent = new Date().getSeconds() * 4.16 / 92 /60 /60
        var percent = day_percent + hour_percent + min_percent + sec_percent
        var res = percent.toFixed(4);
    }
    if (month == 7) {
        var day_percent = (new Date().getDate() + 61) * 1.08
        //var day_percent = (31 + 61) * 1.08           TEST
        var hour_percent = new Date().getHours() * 4.16 / 92
        //var hour_percent = 23 * 4.16 / 92            TESTadgad
        var min_percent = new Date().getMinutes() * 4.16 / 92 /60
        var sec_percent = new Date().getSeconds() * 4.16 / 92 /60 /60
        var percent = day_percent + hour_percent + min_percent + sec_percent
        var res = percent.toFixed(4);
    }




    document.getElementById("demo").innerHTML = 'Прошло ' + res + '% лета';

    if (month == 5) {
        document.getElementById("demo").style.color = "darkgreen";
    }
    if (month == 6) {
        document.getElementById("demo").style.color = "orange";
    }
    if (month == 7) {
        document.getElementById("demo").style.color = "red";
    }
    if (month > 7) {
        clearInterval(countdownfunction2);
        document.getElementById("demo").innerHTML = 'Прошло 100% лета';
    }
}, 1000);
