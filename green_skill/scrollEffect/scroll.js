const gap = 500;
function js() {
	const sections = document.querySelectorAll("section");
	const nav = document.querySelector("nav");
	const sideNavAnc = document.querySelectorAll(".sideNav>li");
	const gnb = nav.querySelectorAll(".gnb>li");

	function removeON(obj){
		obj.forEach((o) => {
			o.classList.remove("on");
		});
	}
	function smooth(el){
		document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
	}

	let scrollTop;
	window.addEventListener("scroll", function () {
		scrollTop = window.scrollY;
		animate(scrollTop);
	});
	const animate = (sct) => {
		sections.forEach((el, idx) => {
			let sectionTop = el.offsetTop;
			if (sct > sectionTop - gap) {
				gsap.to(el, { backgroundColor: "#8d3dae" });
				removeON(gnb)
				gnb[idx].classList.add("on");
				removeON(sideNavAnc)
				sideNavAnc[idx].classList.add("on");
			}
		});
		sct >= nav.clientHeight ? nav.classList.add("sticky") : nav.classList.remove("sticky");
	};
	gnb.forEach((el) => {
		el.addEventListener("click", function (e) {
			e.preventDefault();
			smooth(el)
			removeON(gnb)
			el.classList.add("on");
		});
	});
	sideNavAnc.forEach((el) => {
		el.addEventListener("click", function (e) {
			e.preventDefault();
			smooth(el)
			removeON(sideNavAnc)
			el.classList.add("on");
		});
	});
}
js();
