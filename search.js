function searchQuery() {
    var query = document.getElementById("search-input").value;
    var engine = localStorage.getItem('searchEngine');
    if (engine == "Google") {
        google();
    } else if (engine == "Bing") {
        bing();
    } else if (engine == "Yandex") {
        yandex();
    } else if (engine == "DuckDuckGo") {
        duckDuckGo();
    }
}

$(document).ready(function() {
    $('.field input').keyup(function() {

        var empty = false;
        $('.field input').each(function() {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });

        if (empty) {
            $('.actions input').attr('disabled', 'disabled');
        } else {
            $('.actions input').attr('disabled', false);
        }
    });
});

document.getElementById("search-button").addEventListener("click", searchQuery);

//google search
function google() {
    var query = document.getElementById("search-input").value;
    location.replace("https://www.google.com/search?q=" + query, '_blank');
}

function bing() {
    var query = document.getElementById("search-input").value;
    location.replace("https://www.bing.com/search?q=" + query + "", '_blank');
}

function yandex() {
    var query = document.getElementById("search-input").value;
    location.replace("https://yandex.com/search/?text=" + query + "", '_blank');
}

function duckDuckGo() {
    var query = document.getElementById("search-input").value;
    location.replace("https://www.duckduckgo.com/?q=" + query + "", '_blank');
}

//search engine list
var supportedSearchEngines = new Array("Google", "Bing", "Yandex", "DuckDuckGo");

function setEngine(engine) {
    if (engine !== null && supportedSearchEngines.includes(engine)) {
        localStorage.setItem('searchEngine', engine);
        document.getElementById("search-input").placeholder = `Search ${engine}`;
        if (engine == "Google") {
            document.getElementById("engine-icon").className = 'fab fa-google';
            console.log(`search engine: ${engine}`)
        } else if (engine == "Bing") {
            document.getElementById("engine-icon").className = 'fab fa-microsoft';
            console.log(`search engine: ${engine}`)
        } else if (engine == "Yandex") {
            document.getElementById("engine-icon").className = 'fab fa-yandex-international';
            console.log(`search engine: ${engine}`)
        } else if (engine == "DuckDuckGo") {
            document.getElementById("engine-icon").className = 'fas fa-globe';
            console.log(`search engine: ${engine}`)
        }
    } else {
        setEngine("Google");
    }
}

(function () {
    if (localStorage.getItem('searchEngine') !== null && supportedSearchEngines.includes(localStorage.getItem('searchEngine'))) {
        setEngine(localStorage.getItem('searchEngine'));
    } else {
        setEngine('Google');
    }
})();