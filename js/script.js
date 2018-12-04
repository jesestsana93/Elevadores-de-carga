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
				<nav class="navbar nav-bar-default p-0 center-cont">
					<div class="container-fluid p-0 center-elem">
						<ul class="nav navbar-right nav-pills">
							<li>
								<a href="#"  role="button" aria-haspopup="true" aria-expanded="false">
									EMPRESA<span class="caret"></span>
								</a>
							</li>
							<li>
								<a href="#">
									PRODUCTOS <span class="caret"></span>
								</a>
							</li>
							<li>
								<a href="#" role="button" aria-haspopup="true" aria-expanded="false">
									SERVICIOS<span class="caret"></span>
								</a>
							</li>	
							<li>
								<a href="#" role="button" aria-haspopup="true" aria-expanded="false">
									CLIENTES<span class="caret"></span>
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
		<div class="container foot">
			<div class="row">
               	
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <br><br>
                    	<h3 class="col-xs-12 col-md-12 blanco">DÓNDE ESTAMOS<hr color="blanco" width="60em"></h3>
                        <p class="col-xs-12 col-md-12 blanco">Nos encontramos en el centro de la Ciudad de México <br> y damos servicio a toda la República Mexicana.</p>                        
                        
						<center>
                        	<p class="col-xs-12 col-md-12 blanco">+(55) 57 61 53 90  <br>
                        	+(55) 55 88 56 74 </p>
                        </center>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6  col-lg-6">
                    <br><br>
                    	<center>
                        	<a href="mailto:elevadoresdecarga@gmail.com" class="blanco" target="_blank"><button class="btn btn-danger" style='width:150px; height:35px'>Solicita tu cotización</button> <br>
                        	 <br>
                        	<img src="image/trans-mail.png" alt="correo">elevadoresdecarga@gmail.com</a>
                        </center>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 negro">
                	<center>
						<p class="blanco">Copyrights 2018, Diseño: Patricia Peña y Ricardo Alvarado</p>
					</center>
                </div>
            </div>
		</div>
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
						<a href="`+path+`#" >
							<div></div>
						</a>
					</div>									
				</div>
			</div>
			<div class="clickMenu">
				<div class="op">PRODUCTOS</div>
				<div id="optsPro" class="optsMenu">
					<a href="`+path+`progacademicos.html" >
						<div></div>
					</a>					
				</div>
			</div>
			<div class="clickMenu">
				<div class="op">SERVICIOS</div>
				<div id="optsPro" class="optsMenu">
					<div>
						<a href="`+path+`eventosProximos.html" >
							<div></div>
						</a>
					</div>					
				</div>
			</div>
			<div class="clickMenu">
				<div class="op">CLIENTES</div>
				<div id="optsPro" class="optsMenu">
					<div>
						<a href="`+path+`comnoticias.html" >
							<div></div>
						</a>
					</div>
					
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
			<img src="`+pathImg+`/logotipos/species.png" alt="SPECIES">
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