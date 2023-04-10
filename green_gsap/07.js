let scroll_tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".factsContainer", //가장 큰요소
		markers: false,
		start: "top center",
		end: "+=300",
		scrub: true,  // 부드러운 스크러빙, 스크롤바를 "잡는"데 1초가 걸립니다.
	},
});
let facts = document.querySelectorAll(".fact");

scroll_tl.to(".factsContainer h2", {
	scale: 1.2,
	duration: 1,
	ease: "slow",
});

scroll_tl.to(facts, {
	xPercent: -85 * (facts.length - 1),
	scrollTrigger: {
		trigger: ".factsContainer_sm",
		start: "center center",
		pin: true,
		scrub: 1,
		snap: 1 / (facts.length - 1),
		end: () => `+=4320`,
	},
});
