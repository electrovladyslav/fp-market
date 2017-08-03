(function () {
'use strict';

const getResponse = (url) => new Promise(
  (resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = (evt) =>
      resolve(evt.target.response);
    xhr.send();
  }
);
getResponse('http://webtask.future-processing.com:8068/stocks').then((data) => console.log(data));
/*

 const xhr = new XMLHttpRequest();

 xhr.open('GET', 'http://webtask.future-processing.com:8068/stocks', true);

 xhr.send();

 xhr.onreadystatechange = function() {
 if (xhr.readyState != 4) return;

 if (xhr.status != 200) {
 console.log(xhr.status + ': ' + xhr.statusText);
 } else {
 console.log(xhr.responseText);
 }
 }*/

}());

//# sourceMappingURL=main.js.map
