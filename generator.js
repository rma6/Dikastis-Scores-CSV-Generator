function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

names = document.querySelectorAll('div[style="white-space: pre-wrap; text-align: justify; font-size: 14px; max-width: 80%;"]');
scores = document.querySelectorAll('div[style="white-space: pre-wrap; text-align: justify; font-size: 14px;"]');
csv = "";
for (let i=0; i< names.length; i++){
    csv+=names[i].textContent+","+scores[i].textContent+"\n";
}

download("notas.csv",csv);
