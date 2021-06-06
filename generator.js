function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

rows = Array.from(document.getElementsByTagName('tr')).filter((e,i) => i%2 === 1);
data = rows.map((e) => {
    columns = Array.from(e.querySelectorAll('td'))
    return [columns[0], columns[columns.length-1]]
});
names = data.map((e) => e[0].innerText);
scores = data.map((e) => e[1].innerText);

csv = "";
for (let i=0; i< names.length; i++){
    csv+=names[i]+","+scores[i]+"\n";
}

download("notas.csv",csv);
