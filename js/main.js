


$btnBloc2 = document.querySelector(".bloc2");
$btnBloc1 = document.querySelector(".bloc1");
$btnBloc9 = document.querySelector(".bloc9");
$btnBloc10 = document.querySelector(".bloc10");
$pages = document.querySelectorAll(".page");

function hidePages(){
	for(var i = 0 ; i < $pages.length ; i++){
		$pages[i].classList.remove('visible');
	}
}


// PAGE 1 - DOTS bleus et rouges ===================================

$page1dots = document.querySelectorAll(".page1 .cell");

$btnBloc1.onclick = function(){
	hidePages();
	document.querySelector(".page1").classList.add('visible');
	setTimeout(function(){hidePages();}, 5000);
}

for(var i = 0 ; i < $page1dots.length ; i++){
	$page1dots[i].onmouseover = function(){
		this.classList.add('active');
	}
}


// PAGE 2 - WORDS ==================================================

$speWord = document.querySelector(".page2 .speWord");

$btnBloc2.onclick = function(){
	hidePages();
	document.querySelector(".page2").classList.add('visible');
	setTimeout(function(){document.querySelector(".page2").classList.add('wordsVisible');},100);
}

$speWord.onmouseover = function(){
	this.classList.add('active');
	setTimeout(function(){hidePages();}, 2000);
}


// PAGE 3 - DOUBLEWORDS ============================================

$grid = document.querySelector(".page3 .gridWrapper");
$wordWrapper = document.querySelector(".page3 .wordWrapper");


$btnBloc10.onclick = function(){
	hidePages();
	document.querySelector(".page3").classList.add('visible');
	setTimeout(function(){
		$grid.classList.add('moving');
		setTimeout(function(){
			$grid.classList.remove('moving');
			$wordWrapper.innerHTML = "Confondre";
			setTimeout(function(){hidePages();}, 4000);
		},4000);
	},100);
}


// PAGE 4 - EYES ===================================================

var speCellLeftClicked = false;
var speCellRightClicked = false;
var $speEyeLeft = document.querySelector(".page4 .speCellLeft");
var $speEyeRight = document.querySelector(".page4 .speCellRight");
var finalAnimLaunched = false;

$btnBloc9.onclick = function(){
	hidePages();
	document.querySelector(".page4").classList.add('visible');
}

$page4dots = document.querySelectorAll(".page4 .cell");

for(var i = 0 ; i < $page4dots.length ; i++){
	$page4dots[i].onclick = function(){
		this.classList.add('active');
	}
}

$speEyeLeft.onclick = function(){
	this.classList.add('active');
	speCellLeftClicked = true;
	checkIfEyesToClip();
}
$speEyeRight.onclick = function(){
	this.classList.add('active');
	speCellRightClicked = true;
	checkIfEyesToClip();
}

function checkIfEyesToClip(){
	if(!finalAnimLaunched && speCellLeftClicked && speCellRightClicked){
		finalAnimLaunched= true;
		launchFinalAnim();
	}
}

function launchFinalAnim(){
	setTimeout(function(){
		$speEyeLeft.classList.remove('active');
		$speEyeRight.classList.remove('active');

		setTimeout(function(){
			$speEyeLeft.classList.add('active');
			$speEyeRight.classList.add('active');

			setTimeout(function(){
				$speEyeLeft.classList.remove('active');
				$speEyeRight.classList.remove('active');

				setTimeout(function(){
					$speEyeLeft.classList.add('active');
					$speEyeRight.classList.add('active');

					setTimeout(function(){
						hidePages();
					},2000);
				},60);
			},700);
		},60);
	},1000);
}
