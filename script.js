(function () {
  var httpRequest;
  document
    .getElementById("ajaxButton")
    .addEventListener("click", makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert("Abandon :( Impossible to create a XMLHTTP instance");
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
        // instructions de traitement de la réponse
    // httpRequest.open("GET", "test.html");
    httpRequest.open("GET", "https://dev-mind.fr/training/android/windows");
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      // tout va bien, la réponse a été reçue
      if (httpRequest.status === 200) {
       // alert(httpRequest.responseText);
        console.log(JSON.httpRequest);
        for (var i = 0; i < httpRequest.responseText.length; i++){
          var row = '<tr><td>' + httpRequest.responseText[i].id + '</td><td>' + httpRequest.responseText[i].id + '</td><td>' + httpRequest.responseText[i].status + '</td><td>' + httpRequest.responseText[i].room.id + '</td><td>' + httpRequest.responseText[i].id + '</td></tr>';
            //let row = '<tr><td>test</td></tr>' 
            //document.getElementById('#myTable' ).append(row);
            //console.log(row);
          myTable.append(row);
        }
      } else {
        alert("there is a problem with the request");
      }
    }
  }
})();

$.ajax({
  url: 'https://dev-mind.fr/training/android/windows',
  //url: 'https://liwei-xu.cleverapps.io/api/windows',
  dataType: 'json',
  success: function(data) {
      for (var i=0; i<data.length; i++) {
          var row = $('<tr><td>' + data[i].room.id+ '</td><td>' + data[i].id +  '</td><td>' + data[i].status + '</td><td>' + data[i].room.currentTemperature + '</td><td>' + data[i].room.targetTemperature + '</td><td>' + data[i].name + '</td><td>' + 'Please Switch' + '</td></tr>');
          $('#myTable').append(row);
      }
  },
  error: function(jqXHR, textStatus, errorThrown){
      alert('Error: ' + textStatus + ' - ' + errorThrown);
  }
});
