$(window).scroll(function (){
	parallax();
})



function parallax() {

	var wScroll = $(window).scrollTop();
	console.log(wScroll);
	$('.parallax').css('background-position', 'center ' + (wScroll*0.7) +'px').css('top', "0" -(wScroll*0.7)+'px').css('bottom', '0' + (wScroll ) +'px');
}

const faders = document.querySelectorAll(".fade-in");


const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
	entries.forEach(entry => {
		if(!entry.isIntersecting){
			return;
		}else{ 
			entry.target.classList.add("appear");
			 appearOnScroll.unobserve(entry.target);
	}
	});
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});