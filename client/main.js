$(document).ready(function () {
  const quoteArea = document.getElementById('quote')
  const getQuotesButton = document.querySelector('#allQuotesButton')
// get a quote from the server when the page loads and add it to the dom

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);

  });

  const getQuote = async () => {

    const res = await fetch('http://localhost:3000/quote');
    const quote = await res.text();
    console.log({quote})
    quoteArea.innerText = quote
    //YOUR CODE HERE, Add a GET request

  }
  const getAllQuotes = async () => {

    const res = await fetch('http://localhost:3000/all');
    const quotes = await res.json();
   $('#quotesContainer').html('')
    quotes.forEach(quote => {
      $('#quotesContainer').append(`<p>${quote}</p>`);
    });
    //YOUR CODE HERE, Add a GET request

  }
  getQuote();

  const addQuote = (quote) => {
    jQuery.post('http://localhost:3000/add', quote);
  }

getQuotesButton.addEventListener('click', () => getAllQuotes())

});
