
var arr, body, tab, tr, td, tn, row, col, p, s, max;
arr = [
    [0,1,2],
    [1,2,3,4],
    [2,3,4,5,6]
];

body = document.getElementsByTagName('body')[0];
tab = document.createElement('table');
max = arr[0].length;
for (row=0; row < arr.length; row++){
    tr = document.createElement('tr');
    for (col=0; col < arr[row].length; col++){
        td = document.createElement('td');
        tn = document.createTextNode(arr[row][col]);
        td.appendChild(tn);
        tr.appendChild(td);
    }
    tab.appendChild(tr);
    max = col > max ? col : max;
}
body.appendChild(tab);
p = document.createElement('p');
tn = document.createTextNode('Max columns: ');
p.appendChild(tn);
s = document.createElement('span');
tn = document.createTextNode(max);
s.appendChild(tn);
p.appendChild(s);
body.appendChild(p);
tr = document.getElementsByTagName('tr');
for (row=0; row<arr.length; row++){
  col = arr[row].length;
  while (col < max){
    td = document.createElement('td');
    tn = document.createTextNode(' ');
    td.appendChild(tn);
    tr[row].appendChild(td);
    col++;
  }
}
