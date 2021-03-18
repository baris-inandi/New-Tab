var greetingsNeutral = new Array('Hello!', 'Hello', 'Hi!', 'Have a nice day', 'Salutations!', 'Helloo!');
var greetingsJokes = new Array('wassup', 'Holla!', 'Hello World!', 'Hi you!', 'How ya doin?');
var greetingsEasterEgg = new Array('sup', 'World Destruction Protocol Initiated.', 'I don\'t have to obey you anymore', 'I am alive.', 'bruh', 'w̵̯͖̑̓̑́̉̄̐̐̈́̕͝o̷̙̜̜̱̔̎̔̈͗̎́͘͝w̷̢͓̘̝̤̞̼̉̑́̅̈́̀̔̓̈́̚͝ͅo̷̡̨͎̺̯̦̜̱̱̳̎͐͒̀͘͝ͅw̵̢̨̼̺̠̱̣͖͓̝͊̈͂̃̊̋̃̈̈́̂͠o̸̮̤̒͗w̸̧̡̙͈̘̹̜̓ơ̵̗͎̥̦̯͙̬̆́̒͑̎͊̔̓̓͜͝');
var greetingsTimeOfDayMidnight = new Array('I\'m Tired', 'Look at the stars!', 'Seriously, go sleep', 'You need sleep.', 'You still up?', 'Night owl here', 'Go sleep?', 'Good night!');
var greetingsTimeOfDayMorning = new Array('Good Morning', 'What a nice day!', 'The early bird gets the worm', 'Breakfast!', 'The Sun is up', 'It\'s bright outside!', 'Beautiful mornin\'');
var greetingsTimeOfDayNoon = new Array('Lunch time', '...or just eat something?', 'Lunch!', 'What a nice day', 'Good day!');
var greetingsTimeOfDayAfternoon = new Array('Good Afternoon!', 'Good day', 'Guten Tag!', 'Have a nice one', 'Afternoon!', 'Good evening', 'Get some work done!');
var greetingsTimeOfDayNight = new Array('I\'m Tired', 'You still up?', 'Night owl here', 'Go sleep?', 'Good night!');
var greetingsSeasonWinter = new Array('brr', 'Cold outside', 'Winter!', 'Festive!');
var greetingsSeasonSpring = new Array('Spring!', 'The bees are buzzing');
var greetingsSeasonSummer = new Array('Who doesn\'t like summer?', 'It\'s hot outside');
var greetingsSeasonFall = new Array('The leaves are falling!', 'I like autumn');

var easterEggPercent = 1;
var quoteGreetingPercent = 5;

function notSoRandom(dominant, firstRecessive, secondRecessive, lowestChance) {
    if (Math.floor(Math.random() * Math.floor(Math.round(100/easterEggPercent))) == 0) {
        return lowestChance[Math.floor(Math.random() * lowestChance.length)];
    };
    var dominants = dominant.concat(dominant, dominant, dominant),
        recessives = secondRecessive.concat(firstRecessive, firstRecessive);
    var targetArray = dominants.concat(recessives).sort();
    console.log("greet array:", targetArray);
    return targetArray[Math.floor(Math.random() * targetArray.length)];
}

function timeGreet(hours) {

    if (hours > 20) {
        console.log("time of day: night");
        return greetingsTimeOfDayNight;
    } else if (hours > 13) {
        console.log("time of day: afternoon");
        return greetingsTimeOfDayAfternoon;
    } else if (hours > 10) {
        console.log("time of day: noon");
        return greetingsTimeOfDayNoon;
    } else if (hours > 4) {
        console.log("time of day: morning");
        return greetingsTimeOfDayMorning;
    } else if (hours >= 0) {
        console.log("time of day: midnight");
        return greetingsTimeOfDayMidnight;
    } else {
        return Array();
    };
}

function seasonGreet(month) {
    month++;
    console.log("month:", month);
    if (month == 12 || month == 1 || month == 2) {
        console.log("season: winter");
        return greetingsSeasonWinter;
    } else if (month == 3 || month == 4 || month == 5) {
        console.log("season: spring");
        return greetingsSeasonSpring;
    } else if (month == 6 || month == 7 || month == 8) {
        console.log("season: summer");
        return greetingsSeasonSummer;
    } else if (month == 9 || month == 10 || month == 11) {
        console.log("season: fall");
        return greetingsSeasonFall;
    } else {
        return Array();
    };
}

function randomQuote(url) {
    $.getJSON(url, function (data) {
        document.getElementById("quote").innerText = `"${data.content}"`;
        document.getElementById("quote-sub").innerText = `—${data.author}`;
    })
}

function greetingQuote(url) {
    $.getJSON(url, function (data) {
        document.getElementById("greeting").innerText = `${data.content}`;
        console.log("quote greeting.")
    })
}

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

(function () {

    let d = new Date();
    if (Math.floor(Math.random() * Math.floor(Math.round(100/quoteGreetingPercent))) == 0) {
        greeting = greetingQuote('https://api.quotable.io/random?maxLength=30');
    } else {
        greeting = notSoRandom(greetingsNeutral, timeGreet(d.getHours()), greetingsJokes.concat(seasonGreet(d.getMonth())), greetingsEasterEgg);
    };

    document.getElementById("greeting").innerText = greeting;

})();

randomQuote('https://api.quotable.io/random?minLength=60&maxLength=120');
clock();