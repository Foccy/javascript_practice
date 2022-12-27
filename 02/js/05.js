let x = 10,	y = 20, z="10";
document.write(`x &gt; y  ${x > y} <br>`);
document.write(`x &lt; y  ${x < y} <br>`);
document.write(`x &lt;= y  ${x <= y} <br>`);//10<=20 true
document.write(`x!=z  ${x!=z} <br>`);//10!="10" false
document.write(`x!==z  ${x!==z} <br>`);//10!=="10" true
document.write(`x=z ${x=z} <br>`);//할당
document.write(`x==z ${x==z} <br>`);//10=="10" true 얕비교
document.write(`x===z ${x===z} <br>`);//10==="10" false 깊비교