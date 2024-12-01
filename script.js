$('#dropdown').on('mouseover',function(){
	$('#dropList-1').addClass('visual-1')
})

$('body').click(function(){
	$('#dropList-1').removeClass('visual-1')
})

$('#dropList-1').on('mouseleave',function(){
	$('#dropList-1').removeClass('visual-1')
})

$('.carousel-item').waypoint(function(){
$('h1').toggleClass('animate__slideInDown')
$('p').toggleClass('animate__fadeInDown')
},{offset:"100%"})

$('.comon').waypoint(function(){
$('.comonPic').toggleClass('animate__zoomIn')
$('.mainTitle').toggleClass('animate__slideInDown')
$('.subTitle').toggleClass('animate__fadeInDown')
},{offset:"50%"})

$('.comon-2').waypoint(function(){
$('.comonPic-2').toggleClass('animate__zoomIn')
$('.main-head').toggleClass('animate__slideInLeft')
$('.main').toggleClass('animate__slideInLeft')
$('.sub-1').toggleClass('animate__slideInLeft')
$('.sub-2').toggleClass('animate__slideInLeft')
$('.sub-3').toggleClass('animate__slideInLeft')
$('#btn').toggleClass('animate__jackInTheBox')
},{offset:"50%"})

$('.service').waypoint(function(){
	$('h2').toggleClass('animate__fadeInDown')
	$('h3').toggleClass('animate__slideInDown')
	$('.serviceItem').toggleClass('animate__flipInY')
	},{offset:"50%"})

$('.servicePic-1').hover(function(){
$('.serviceContent-1').toggleClass('contentActive')
})

$('.servicePic-2').hover(function(){
$('.serviceContent-2').toggleClass('contentActive')
})

$('.servicePic-3').hover(function(){
$('.serviceContent-3').toggleClass('contentActive')
})

$('.servicePic-4').hover(function(){
$('.serviceContent-4').toggleClass('contentActive')
})

$('.servicePic-5').hover(function(){
$('.serviceContent-5').toggleClass('contentActive')
})

$('.servicePic-6').hover(function(){
$('.serviceContent-6').toggleClass('contentActive')
})

$('.servicePic-7').hover(function(){
$('.serviceContent-7').toggleClass('contentActive')
})

$('.servicePic-8').hover(function(){
$('.serviceContent-8').toggleClass('contentActive')
})

$('.servicePic-9').hover(function(){
$('.serviceContent-9').toggleClass('contentActive')
})

$('.testimonials').waypoint(function(){
$('h2').toggleClass('animate__slideInDown')
$('h3').toggleClass('animate__fadeInDown')
$('.testiContent').toggleClass('animate__zoomInUp')
},{offset:"50%"})

$('.tech').waypoint(function(){
$('h2').toggleClass('animate__slideInDown')
$('h3').toggleClass('animate__fadeInDown')
$('.techCard-1').toggleClass('animate__slideInUp')
$('.techCard-2').toggleClass('animate__slideInUp')
$('.techCard-3').toggleClass('animate__slideInUp')
},{offset:"50%"})

$('.login').waypoint(function(){
$('h4').toggleClass('animate__fadeInDown')
$('.subscribe').toggleClass('animate__pulse')
},{offset:"40%"})


$('.subscribe').click(() => {

	let input=$('.input-field').val()
	let gender=$('#gender').val()

	if((input && gender) != ""){
		alert('Login Successfully..!',)
	}
})
 
$('footer').waypoint(function(){
	$('.footer-item').toggleClass('animate__pulse')
	},{offset:"65%"})

$('.field-header').waypoint(function(){
	$('h4').toggleClass('animate__slideInDown')
	$('h2').toggleClass('animate__fadeInDown')
	},{offset:"65%"})

$('.field').waypoint(function(){
	$('img').toggleClass('animate__pulse')
	},{offset:"65%"})