$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-60;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({scrollTop: pos}, 700); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	$('.mobile-nav').removeClass('menu-open');
    $('.mobile-menu__main').removeClass('active');
    $('.black-bg').removeClass('bg-open');
    return false;
});
