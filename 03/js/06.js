var i,j;
for(i=1; i<9; i++){
    document.write("<table>");
    document.write("<tr><th>"+i+"단</th></tr>");
    for(j=1; j<9; j++){
        document.write("<tr><td>"+i+"x"+j+"="+i*j+"단</td></tr>")
    }
    document.write("</table>")
}

