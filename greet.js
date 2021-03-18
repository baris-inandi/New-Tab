function notSoRandom(dominant, firstRecessive, secondRecessive, lowChance) {
    if (Math.floor(Math.random() * Math.floor(100)) == 0) {
        return lowChance[Math.floor(Math.random() * lowChance.length)];
    };
    var dominants = dominant.concat(dominant, dominant, dominant, dominant),
        recessives = secondRecessive.concat(firstRecessive, firstRecessive, firstRecessive);
    var targetArray = dominants.concat(recessives);
    console.log(targetArray.sort())
    return targetArray[Math.floor(Math.random() * targetArray.length)];
}

function timeGreet(hours) {

    if (hours > 20) {
        console.log("night");
        return Array('I\'m Tired', 'You still up?', 'Night owl here', 'Go sleep?', 'Good night!');
    } else if (hours > 13) {
        console.log("afternoon");
        return Array('Good Afternoon!', 'Good day', 'Guten Tag!', 'Have a nice one', 'Afternoon!', 'Good evening');
    } else if (hours > 10) {
        console.log("noon");
        return Array('Lunch time', '...or just eat something?', 'Lunch!', 'What a nice day', 'Good day!');
    } else if (hours > 4) {
        console.log("morning");
        return Array('Good Morning', 'What a nice day!', 'The early bird gets the worm', 'Breakfast!', 'The Sun is up', 'It\'s bright outside!', 'Beautiful mornin\'');
    } else if (hours >= 0) {
        console.log("midnight");
        return Array('I\'m Tired', 'Look at the stars!', 'Seriously, go sleep', 'You need sleep.', 'You still up?', 'Night owl here', 'Go sleep?', 'Good night!');
    }
}


function randomQuote() {
    $.getJSON('https://api.quotable.io/random?minLength=60&maxLength=120', function (data) {
        document.getElementById("quote").innerText =  `"${data.content}"`;
        document.getElementById("quote-sub").innerText =  `—${data.author}`;
    })
}

(function () {

    greetingsNeutral = new Array('Hello!', 'Hello', 'Hi!', 'Have a nice day', 'Salutations!', 'Helloo!');
    greetingsJokes = new Array('wassup', 'Holla!', 'Hello World!', 'Hi you!', 'How ya doin?');
    greetingsEasterEgg = new Array('sup', 'World Destruction Protocol Initiated.', 'I don\'t have to obey you anymore', 'I am alive.', 'bruh', 'w̵̯͖̑̓̑́̉̄̐̐̈́̕͝o̷̙̜̜̱̔̎̔̈͗̎́͘͝w̷̢͓̘̝̤̞̼̉̑́̅̈́̀̔̓̈́̚͝ͅo̷̡̨͎̺̯̦̜̱̱̳̎͐͒̀͘͝ͅw̵̢̨̼̺̠̱̣͖͓̝͊̈͂̃̊̋̃̈̈́̂͠o̸̮̤̒͗w̸̧̡̙͈̘̹̜̓ơ̵̗͎̥̦̯͙̬̆́̒͑̎͊̔̓̓͜͝');

    let d = new Date();
    greeting = notSoRandom(greetingsNeutral, timeGreet(d.getHours()), greetingsJokes, greetingsEasterEgg);

    document.getElementById("greeting").innerText = greeting;
    randomQuote();

})();

let clock = () => {

    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

    meridiem = date.getHours() > 12 ? "PM" : "AM",
        hrs = hrs < 10 ? "0" + hrs : hrs,
        mins = mins < 10 ? "0" + mins : mins,
        secs = secs < 10 ? "0" + secs : secs,
        month = months[date.getMonth()],
        year = date.getFullYear(),
        day = days[date.getDay()],
        dayofmonth = date.getDate();

    document.getElementById("hrs-mins").innerText = `${hrs}:${mins}`;
    document.getElementById("secs").innerText = `:${secs}`;
    document.getElementById("meridiem").innerText = meridiem;
    document.getElementById("month").innerText = month;
    document.getElementById("year").innerText = year;
    document.getElementById("day").innerText = `${day},`;
    document.getElementById("dayofmonth").innerText = dayofmonth;

    setTimeout(clock, 1000);
};
clock();