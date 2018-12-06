$(document).ready(function(){
	menu();
	footer();
	menuMobile();
	headerMobile();
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
		$('#menu-mobile').toggleClass('open');
	});

	$('.clickMenu').click(function(){
		if ($('.optsMenu').not($(this).find($('.optsMenu'))).hasClass('open')) {
			$('.optsMenu').not($(this).find($('.optsMenu'))).removeClass('open');
		}
		if ($(this).find(".optsMenu").hasClass('open')) {
			$(this).find(".optsMenu").removeClass('open');
		}else{
			$(this).find(".optsMenu").addClass('open');
		}
	});

	$('.clickProy').click(function(){
		var height = $(this).find(".info > div").height();
		console.log(height)
		if ($('.info').not($(this).find($('.info'))).hasClass('open')) {
			$('.info').not($(this).find($('.info'))).removeClass('open');
			$('.info').not($(this).find($('.arrow'))).removeClass('up');
			$('.info').not($(this).find($('.info'))).css('height',0);
		}
		if ($(this).find(".info").hasClass('open')) {
			$(this).find(".info").removeClass('open');
			$(this).find(".arrow").removeClass('up');
			$(this).find(".info").css('height',0);
		}else{
			$(this).find(".info").addClass('open');
			$(this).find(".arrow").addClass('up');
			$(this).find(".info").css('height', height);
		}
	});
	$('#banner').hover(function(){
		$('.arrows img').css('visibility','visible');
		console.log("hover")
	},function(){
		$('.arrows img').css('visibility','hidden');
		console.log("hover")
	}
	)
});
var pageName = window.location.pathname.split('/')[window.location.pathname.split('/').length-1].substring(0,4)
var pathImg = '';
var path = '';
function menu(){
	console.log(pageName)
	if (pageName == 'bole') {
		pathImg = '../image';
		path = '../';
	}else{
		pathImg = 'image';
	}
	$('header').append(`
		<div class="cont">
			<div class="col-4 float p-0">
				<a href="index.html">
					<img src="`+pathImg+`/logos/logo_elevadores.png" alt="logoElevadores" class="">
				</a>				
			</div>
			<div class="col-8 float p-0">
				<nav class="navbar nav-bar-default p-10 center-cont">
					<div class="container-fluid p-0 center-elem">
						<ul class="nav navbar-right nav-pills">
							<li>
								<a href="#empresa" role="button" aria-haspopup="true" aria-expanded="false">
									EMPRESA<span class="caret"></span>
								</a>
							</li>
							<li>
								<a href="#productos" role="button" aria-haspopup="true" aria-expanded="false">
									PRODUCTOS <span class="caret"></span>
								</a>
							</li>
							<li>
								<a href="#servicios" role="button" aria-haspopup="true" aria-expanded="false">
									SERVICIOS<span class="caret"></span>
								</a>
							</li>	
							<li>
								<a href="#clientes" role="button" aria-haspopup="true" aria-expanded="false">
									CLIENTES<span class="caret"></span>
								</a>
							</li>
							<li>
								<a href="#contacto" role="button" aria-haspopup="true" aria-expanded="false">
									CONTACTO<span class="caret"></span>
								</a>
							</li>						
						</ul>
					</div>
				</nav>
			</div>
		</div>
	`)
};

function footer(){
	if (pageName == 'bole') {
		pathImg = '../image';
		path = '../';
	}else{
		pathImg = 'image';
	}
	$('footer').append(`
		
	`);
};

function menuMobile(){
	if (pageName == 'bole') {
		pathImg = '../image';
		path = '../';
	}else{
		pathImg = 'image';
	}
	$('#menu-mobile').append(`
		<div class="cont-menu">			
			<div class="clickMenu">
				<div class="op">EMPRESA</div>
				<div id="optsPro" class="optsMenu">
					<div>
						<a href="`+path+`#empresa" >
							<div></div>
						</a>
					</div>									
				</div>
			</div>
			<div class="clickMenu">
				<div class="op">PRODUCTOS</div>
				<div id="optsPro" class="optsMenu">
					<a href="`+path+`#productos" >
						
					</a>					
				</div>
			</div>
			<div class="clickMenu">
				<div class="op">SERVICIOS</div>
				<div id="optsPro" class="optsMenu">
								
				</div>
			</div>
			<div class="clickMenu">
				<div class="op">CLIENTES</div>
				<div id="optsPro" class="optsMenu">
					
				</div>
			</div>	
			<div class="clickMenu">
				<div class="op">CONTACTO</div>
				<div id="optsPro" class="optsMenu">
					
				</div>
			</div>			
		</div>
	`);
};

function headerMobile(){
	if (pageName == 'bole') {
		pathImg = '../image';
		path = '../';
	}else{
		pathImg = 'image';
	}
	$('#header-mobile').append(`
		<a href="index.html">
			<img src="`+pathImg+`/logos/logo_elevadores.png" alt="logoElevadores">
		</a>
		<div id="nav-icon2">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	`);
}