function getData() {
   var dataURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + document.getElementById('search-results').innerText.replace(' ', '+') + '&type=video&videoCaption=closedCaption&key=AIzaSyDtuQhW0KfBXKOFAFZsTCskExpFG6mdxvE';
   var xhr = new XMLHttpRequest();
   xhr.open('GET', encodeURI('https://www.googleapis.com/youtube/v3/search?part=snippet&q=waffles+waffle+syrup&type=video&videoCaption=closedCaption&key=AIzaSyDtuQhW0KfBXKOFAFZsTCskExpFG6mdxvE'));
   xhr.onload = function () {
       if (xhr.status === 200) {
           var youTubeData = JSON.parse(xhr.responseText);
           alert(xhr.responseText);

           alert(youTubeData.items[0].id.videoId);
           var videoURL = "<iframe src='https://www.youtube.com/embed/" + youTubeData.items[0].id.videoId + "?autoplay=0&enablejsapi=1' frameborder='0' allowfullscreen></iframe>"
           document.getElementById('results-col').innerHTML = videoURL
       } else {
           alert('Request failed.  Returned status of ' + xhr.status);
       }
   };
   xhr.send();
}





/*function searchValidate() {
	var searchEntry = document.getElementById('search-results').value;

	if (searchEntry == "") {
		document.getElementById('label-info').innerText = "Please enter a product name";
		return false;
	}
	else if (searchEntry != "") {

}*/
// var ytRequest = new XMLHttpRequest();
// ytRequest.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=waffles+waffle+syrup&type=video&videoCaption=closedCaption&key=AIzaSyDtuQhW0KfBXKOFAFZsTCskExpFG6mdxvE", false);
// ytRequest.send(null)

// var status = ytRequest.status;

// if (status == 200) {
//  console.log("The files are found");
// } else {
//  console.log("The server returned a status code of " + status);
// }
// function videoTest() {
//  console.log(ytRequest);
// }

// var videosReturned = {}

// </head>
// <body>
//    <input id="txtBox" type="text" />
//    <input id="Button1" type="button" onclick="getData();" value="button" />
//    <div id="divVideo">