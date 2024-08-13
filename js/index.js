let dc = document.getElementById('dynamic-content');
let er = document.getElementById('error');
let controls = document.getElementById('controls');
let links = document.getElementsByTagName('a');
let url = "./partials/partials-1.html"


function selectPage(ev){
    ev.preventDefault();
    let click = ev.target;
    url = click.getAttribute("href");
    loadData(url);
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', selectPage);
    }

    function loadData(url) {
        fetch (url)
        .then (function (feedback){
            return feedback.text();
        }) 
        .then (function (data){
            dc.innerHTML = data;
        })
    
        .catch (function(error){
            er.innerHTML = "Page Not Found" + error;
        });
    }


loadData(links[0].getAttribute("href"));


