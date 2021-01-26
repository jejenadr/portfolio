//enevt pada saat kilik akan scroll
//jackery tolong cari kan saya sebuah elemen, elemen yang punya nama clas (page-scroll) klo ketemu
//pada saat dia di klik jalankan fungsi berikut ini 
// $('.page-scroll').on('click', function(e){

$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
 	scrollTop: elemenTujuan.offset().top - 50
 }, 'easeInOutEx');

 e.preventDefault();
});


// Untuk menyimpan parallax
//about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	//komentar jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});


	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)' 
	});

	//portfolio
	if( wScroll > $('.portfolio').offset().top - 250 ) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});


		
	}

});


