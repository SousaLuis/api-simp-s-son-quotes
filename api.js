function fetchSimpsonJSON() {
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=1` ; axios
    .get(url)
    .then(function(response) {
      return response.data[0];
    })
    .then(function(simpson) {
      console.log('data decoded from JSON:', simpson);

      const simpsonHtml =
       `<p><strong>${simpson.character}</strong></p>
       <p>${simpson.quote}</p>
       <img src="${simpson.image}" />`;
       
       document.querySelector('#simpson').innerHTML = simpsonHtml ;
    }) ;
      
  }
  fetchSimpsonJSON() ;
  
  document.getElementById("button").onclick=fetchSimpsonJSON;
  