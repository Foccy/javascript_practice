const color=['yellow','red','green','blue', 'pink']
let i=0;

function colorBg(){
    let bodyTag=document.getElementsByTagName("body")[0];
    bodyTag.style.backgroundColor=color[i]
    i++;
    if(i>=color.length){
        i=0;
    }    
    console.log(i);
}