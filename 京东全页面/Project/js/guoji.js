


//全球直采   tab栏
let li = document.getElementById("tabss").getElementsByTagName("li");
let tabCnt = document.getElementById("content").getElementsByClassName("tab-cnt");

for (let i = 0; i < li.length; i++) {

	li[i].index = i;
	li[i].onclick = function() {
		for (let j = 0; j < li.length; j++) {
			li[j].className = "";
		}
		li[i].className = "curr";
		for (let a = 0; a < tabCnt.length; a++) {
			tabCnt[a].style.display = "none"
		}
		tabCnt[i].style.display = "block"

	}
}






//  全球名店
let salesA = document.getElementsByClassName("sales")[0].getElementsByTagName("a")
let ct = document.getElementById("control").getElementsByClassName("ct")
for (let i = 0; i < ct.length; i++) {
	ct[i].onmouseover = function() {
		ct[i].classList.add("curr")
		for (let j = 0; j < salesA.length; j++) {
			salesA[j].style.display = "block"
		}
		salesA[i].style.display = "none"
	}

	ct[i].onmouseout = function() {
		ct[i].classList.remove("curr")
		for (let k = 0; k < salesA.length; k++) {
			salesA[k].style.display = "none"
		}
		salesA[i].style.display = "block"
	}

}


//   鼠标移过文字显示
let brands = document.getElementsByClassName("brands")
let brand = document.getElementsByClassName("brand")
for (let i = 0; i < brands.length; i++) {
	for (let j = 0; j < brand.length; j++) {
		brand[j].onmouseover = function() {
			// 	let name1=document.getElementsByClassName("mengbao")[0].getElementsByClassName("name")[j]
			// 	let img1=document.getElementsByClassName("mengbao")[0].getElementsByClassName("img111")[j]
			// 	name1.style.display="block"
			// 	img1.style.display="none"

			let a = $(this);
			a.find("img").addClass("hide"),
				a.find(".name").removeClass("hide")

		}


		brand[j].onmouseout = function() {
			let b = $(this);
			b.find("img").removeClass("hide"),
				b.find(".name").addClass("hide")

		}
	}
}



//吃遍全球  tab栏
let tabIi = document.getElementById("tabsItem").getElementsByClassName("tab")
let tabCon = document.getElementById("tabsItem").getElementsByClassName("tab-contents");
for (let i = 0; i < tabIi.length; i++) {
	tabIi[i].onclick = function() {
		for (let j = 0; j < tabIi.length; j++) {

			tabIi[j].classList.remove("curr");

		}
		tabIi[i].classList.add("curr");
		for (let a = 0; a < tabCon.length; a++) {

			tabCon[a].classList.add("hide")
		}

		tabCon[i].classList.remove("hide")
	}
}




/*居家生活   tab栏*/
let tabIi2 = document.getElementById("tabsItem2").getElementsByClassName("tab")
let tabCon2 = document.getElementById("tabsItem2").getElementsByClassName("tab-contents");
for (let i = 0; i < tabIi2.length; i++) {
	tabIi2[i].onclick = function() {
		for (let j = 0; j < tabIi2.length; j++) {

			tabIi2[j].classList.remove("curr");

		}
		tabIi2[i].classList.add("curr");
		for (let a = 0; a < tabCon2.length; a++) {

			tabCon2[a].classList.add("hide")
		}

		tabCon2[i].classList.remove("hide")
	}
}




//猜你喜欢
let prev = document.getElementsByClassName("guessLike")[0].getElementsByClassName("prev")[0]
let next1 = document.getElementsByClassName("guessLike")[0].getElementsByClassName("next")[0]
let handle = document.getElementsByClassName("guessLike")[0].getElementsByClassName("handle")[0]
let hScroll = document.getElementById("hScroll")

let num2 = 0;
let maxnum = 846;
let imgTran = 0;

//下一个
for (let i = 0; i < 5;) {
	next1.onclick = function() {
		if (num2 < maxnum) {
			num2 += 141;
			handle.style.transform = "translateZ(0px) translateX(" + num2 + "px)"
			imgTran -= 205
			hScroll.style.transform = " translateZ(0px) translateX(" + imgTran + "px)"
		}
	}
	i++;
}

//上一页
for (let j = 0; j < 5;) {
	prev.onclick = function() {
		if (num2 > 0) {
			num2 -= 141;
			handle.style.transform = "translateZ(0px) translateX(" + num2 + "px)"
			imgTran += 205
			hScroll.style.transform = " translateZ(0px) translateX(" + imgTran + "px)"
		}
	}
	j++;
}






		