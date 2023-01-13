/* JS
let list1=document.querySelectorAll("#list1>li");
list1.forEach(function(el,idx){
  console.log(el,idx);
  el.classList.add("a"+idx)
  el.textContent="aaa"+idx;
})
let list2=document.querySelector(".theObj");
list2.innerHTML="<span>"+ Math.random() +"</span>"
list2.setAttribute("data-role","accessbillity");
let list22=list2.getAttribute("class");
console.log(list22);
list2.nextElementSibling.textContent=list22;
//list2.innerHTML="<span>"+ list22 +"</span>"

let list3=document.querySelector("#list3")
list3.innerHTML+="<li>🎃추가한 list6</li>"
//afterbegin 내부에서 가장 첫째
list3.insertAdjacentHTML("afterbegin","<li>🎃추가한 list6</li>")
//afterbegin 내부에서 가장 막내
list3.insertAdjacentHTML("beforeend","<li>🎎추가한 list6</li>")
//beforebegin바로 앞에
list3.insertAdjacentHTML("beforebegin","<div>🎎추가한 div</div>")
//afterend바로 뒤에
list3.insertAdjacentHTML("afterend","<div>🎎추가한 div</div>")

let list3Li=document.querySelectorAll("#list3 li");
list3Li[4].insertAdjacentHTML('beforebegin', '<li>🎨넣어보세요</li>');
*/

/*  */
$(() => {
	let list1 = $("#list1>li");
	console.log(list1);
	list1.each(function (idx, el) {
		$(el)
			.addClass("a" + idx)
			.text("aaa" + idx);
	});

	let list2 = $(".theObj");

	list2.html("<span>" + Math.random() + "</span>");
	list2.attr("data-role", "accessbillity");
	//한개는 가져와
	//한개 안에 속성을 쓰면 그 속성을 가져옴
	//두개 쓰면 교체
	list2.attr("class", "abcd");
	let list22 = list2.attr("class");
	console.log(list22);
	list2.next().text(list22);
	list2.html("<span>" + list22 + "</span>");

	let list3 = $("#list3");
	list3.append("<li>🎃추가한 list6</li>");
	list3.prepend("<li>🎃추가한 list6</li>");
  let list33=$("#list3 li");
	list33.eq(4).before("<li>🎎추가한 list6</li>");
	list33.eq(4).after("<li>🎎추가한 list6</li>");


}); //jQuery
