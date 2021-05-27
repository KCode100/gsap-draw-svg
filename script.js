gsap.registerPlugin(ScrollTrigger);

gsap.from('.space', {
	ScrollTrigger: {
		trigger: '.space',
		start: 'bottom bottom',
	},
	duration: 0.8,
	x: 400,
});
TweenLite.from('.g-line', 1, { drawSVG: 0, stagger: 0.01 });
