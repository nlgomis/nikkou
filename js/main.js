const images =  Array.from(document.querySelectorAll('#slider img'));
let index = 0;

function animate() {
images[index].classList.add('hidden');
index = (index + 1) % images.length;
images[index].classList.remove('hidden');
}

setInterval(animate, 2000);
 gsap.registerPlugin(ScrollTrigger);

gsap.to("#progress", {
width: "100%",
scrollTrigger: {
 trigger: document.body,
 start: "top top",
 end: "bottom bottom",
 scrub: true
}
});
 gsap.from(".bg-blue-500", { duration: 1, x: -200, ease: "power1.out" });
 gsap.from("#animated-text", {duration: 1, delay: 0.5, x: -200, opacity: 0});

 gsap.from(".flex-1", { duration: 1, delay: 0.5, y: 50, opacity: 0, ease: "power1.out" });
