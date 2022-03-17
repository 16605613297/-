(function ($) {
	function add_BarrierFree() {
		var timer = setInterval(function() {
			if (document.getElementById("cniil_wza")) {
				clearInterval(timer);
				return;
			}
			else {
				var
				list = document.getElementById('shortcut-2014').getElementsByClassName('fr')[0],
				barrierFreeContainer = document.createElement('a');
				barrierFreeContainer.href = 'javascript:void(0)';
				barrierFreeContainer.id = 'cniil_wza';
				barrierFreeContainer.innerText = "\u7f51\u7ad9\u65e0\u969c\u788d";
				list.appendChild(barrierFreeContainer);
			}
		}, 500);
	}
	// 无障碍DOM添加
	add_BarrierFree();
	// 引入无障碍脚本 
	var script1 = document.createElement('script');
	script1.setAttribute('type','text/javascript');
	script1.setAttribute('src',"//static.360buyimg.com/item/assets/oldman/wza1/aria.js?appid=bfeaebea192374ec1f220455f8d5f952");
	document.getElementsByTagName('head')[0].appendChild(script1);
})(window.jQuery);