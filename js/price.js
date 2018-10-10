document.querySelector('.run-query').addEventListener('click', function() {
   fetch(document.querySelector('.url').value)
      .then( response => response.json() )
      .then( result => {
          document.querySelector('.public-api-result').innerText = JSON.stringify(result);
  }); 
});