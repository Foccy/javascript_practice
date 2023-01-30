//i=1; i<10; i++
let output='';
for(i=1; i<10; i++){
    output=output+"*";
    for(let j=0; j<i; j++){
        output+="*";
    }
    output=output+"<br>"
}
document.write("<br>"+output)