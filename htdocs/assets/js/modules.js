var $$$ = $$$ || {};
$(function() {
	/*************************************************************************************
	* pcかスマホか判定（幅で）
	*************************************************************************************/
	var pcsp = {
		breakpoint: 667
	}
	pcsp.change = function(){
		if (this.mode) {
			var oldMode = this.mode;
		}
		if ($(window).innerWidth() > this.breakpoint) {
			this.mode = 'pc'
		} else {
			this.mode = 'sp'
		}
		//modeが変わったらpcsp.changedイベント発火
		if (this.mode !== oldMode) {
			$(window).trigger('pcsp.changed', [pcsp.mode]);
		}
	}
	$$$.pcsp = pcsp;

	/*************************************************************************************
	* コメント
	*************************************************************************************/

});