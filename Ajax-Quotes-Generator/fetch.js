const quote = document.querySelector('.quotes'),
      btn = document.querySelector('.get-quotes');
      number = document.querySelector('#number'),
      URL = 'https://type.fit/api/quotes';
btn.addEventListener('click', getQuotes);

function getQuotes(e) {
    e.preventDefault();

    if(number.value.lenght === 0) {
        alert('Please, enter the number');
    } else {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                data = shuffle(data)
                let output = '';
                for(let i = 0; i < data.length; i++){
                    if(i == number.value) break;

                    output += `
                        <hr>
                        <li>Text: ${data[i].text}</li>
                        <li>Author: ${data[i].author}</li>
                    `
                }
                quote.innerHTML = output;
            })
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