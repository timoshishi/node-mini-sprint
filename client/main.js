$(document).ready(function () {
  const quoteArea = document.getElementById('quote')
// get a quote from the server when the page loads and add it to the dom

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  const getQuote = async () => {

   const quote = await fetch('http://localhost:3000/quote').then(data =>{
      return data.text()
    })
    quoteArea.innerText = quote
    //YOUR CODE HERE, Add a GET request

  }
  getQuote();

  function addQuote(quote){

    //YOUR CODE HERE, Add a POST request

  }
});
