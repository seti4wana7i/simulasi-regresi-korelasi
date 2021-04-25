// UTS Pemrograman Simulasi
// Setiawan Aji C, 152017135, B





function regkorelasi(){

    var xi = document.getElementsByName('input');
    var yi = document.getElementsByName('input2');
    
    var x = [];
    var y = [];

    for(var i=0;i<xi.length;i++){
        x.push(parseFloat(xi[i].value));
        y.push(parseFloat(yi[i].value));
    }

    var sumx = 0;
    var sumy = 0;
    var sumx_2 = 0;
    var sumy_2 = 0;
    var sumxy = 0;
    var x_2 = [];
    var y_2 = [];
   
   
     // x , y kuadrat

     var x_2 = x.map(kuadrat);
     var y_2 = y.map(kuadrat);
 
     function kuadrat(arr){
             return Math.pow(arr, 2);
     }
 
   
    //jumlah
    for(var i in x){
        sumx += x[i];
        sumy += y[i]; 
        sumx_2 += x_2[i];
        sumy_2 += y_2[i];
    }

    // var kuadrat = n => {
    //     for(var i in n){
    //     x_2.push(Math.pow(n[i],2)) }
    // } 

   

    // jumlah xy

    var sumxy = x.reduce(arrkali,0);

    function arrkali(r,a,i){
        return r+a*y[i];
    }

    // korelasi

    n = x.length;

    r = (n*sumxy - sumx*sumy) / Math.sqrt((n*sumx_2 - Math.pow(sumx, 2)) * (n*sumy_2 - Math.pow(sumy, 2))); 

    // regresi

    a = (sumy*sumx_2 - sumx * sumxy) / (n * sumx_2 - Math.pow(sumx, 2));
    
    b = (n * sumxy - sumx*sumy) / (n * sumx - Math.pow(sumx, 2));

    var Y = a + b;
    
    document.getElementById('reg').innerHTML = Y.toFixed(4);

    document.getElementById('kor').innerHTML = r.toFixed(4);

    console.log(x)
}



function buatinput(){
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var tdno = document.createElement('td');

    var num = "";

    
    var n = 3;

    n++;
    num = n.toString();
    

    var no = document.createTextNode(num);

    
    
    var inp = document.createElement("INPUT");
    var inp2 = document.createElement("INPUT");

    inp.setAttribute("type", "text");
    inp.setAttribute("name", "input");
    inp.setAttribute("class", "form-control");
    inp.setAttribute("onblur", "regkorelasi");

    inp2.setAttribute("type", "text");
    inp2.setAttribute("name", "input2");
    inp2.setAttribute("class", "form-control");
    inp2.setAttribute("onblur", "regkorelasi");

    tdno.appendChild(no);

    td.appendChild(inp);
    td2.appendChild(inp2);
    
    tr.appendChild(tdno);
    tr.appendChild(td);
    tr.appendChild(td2);

    var tbl = document.getElementById("tbl");
    
    tbl.appendChild(tr);
    }

function buat(){
    var jml = document.getElementById('data').value;
    z = parseInt(jml);
    za = z-3;
    for(var i=0;i<za;i++){
        buatinput();
    }

    var x = document.getElementById('mytb');
    for(i=1; i<=z;i++){
        var r = x.rows[i];
        r.cells[0].innerHTML = i.toString() + '.';
    }
}



