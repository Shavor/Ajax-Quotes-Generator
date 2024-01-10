const quote = document.querySelector('.quotes'),
      btn = document.querySelector('.get-quotes');
      number = document.querySelector('#number');
btn.addEventListener('click', getQuotes);

function getQuotes(e){
    if(number.value.length == 0) {
        alert('Pleas, enter the number')
    } else {
        e.preventDefault();
        const https = new XMLHttpRequest;

        https.open('GET', 'https://type.fit/api/quotes', true);
        https.onload = function(){
            if(this.status === 200) {
                let response = shuffle(JSON.parse(this.responseText));
                let output = '';
                for(let i = 0; i < response.length; i++){
                    if(i == number.value) break;

                    output += `
                        <hr>
                        <li>Text: ${response[i].text}</li>
                        <li>Author: ${response[i].author}</li>
                    `
                }
                quote.innerHTML = output;
            }

        };
        https.send();
    }
}

function shuffle(quotes){
    let CI = quotes.length, templValue, randomIndex;

    while(CI > 0) {
        randomIndex = Math.floor(Math.random() * CI);

        CI--;
        templValue = quotes[CI];
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = templValue;
    }
    return quotes;
}