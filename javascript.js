setInterval(function(){
    var date = new Date();

    var format = [
        (date.getHours(),
         date.getMinutes(),
         date.getSeconds())
    ]
    document.getElementById('clock').innerHTML = format;
}) 