// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger di klik 
document.querySelector('#hamburger-menu').onclick = () => {
	navbarNav.classList.toggle('active');
};

// klik diluar side bar untuk menghilangkan hamburger 
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
});


// efek parralax

// halaman utama
$(window).on('load', function() {
	$('.hero .content').addClass('cMuncul');
});


$(window).scroll(function() { 
	var wScroll = $(this).scrollTop();

	// Menu Kami
	if (wScroll > 1100 ) {
		$('.menu .menu-card').each(function(i) {
			setTimeout(function() {
				$('.menu .menu-card').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
		
	}

	// tentang kami 
	if (wScroll > $('.about').offset().top - 330) {
		$('.row .about-img').addClass('aMuncul');
		$('.row .aContent').addClass('aMuncul');
	}

	// kontak
	if (wScroll > $('.kontak').offset().top - 330) {
		$('.kontak .row').addClass('kMuncul');
	}

});