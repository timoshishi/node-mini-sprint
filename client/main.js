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

  const addQuote = (quote) => {
    console.log('adding')
    let res =  fetch('http://localhost:3000/add', {
     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'text/html'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'error', // manual, *follow, error
    body: quote // body data type must match "Content-Type" header
    }).then(res => console.log(res.text()))

  }



});
