function Game(data){
	this.gameDataExist=typeof(data)!=='undefined';
	this.ballID=(this.gameDataExist && typeof(data.ball)=='string')?data.ball:null;
	this.scoreID=(this.gameDataExist && typeof(data.scoreScreen)=='string')?data.scoreScreen:null;
	this.score=0
	this.square=(this.gameDataExist && typeof(data.squarePan)=='string')?data.squarePan:null;
	this.timer=(this.gameDataExist && typeof(data.timer)=='string')?data.timer:null;
	this.randomXY=function(){
		return {};
	};
	this.init=function(){
		if(this.gameDataExist){
			if(this.scoreID!==null){
				document.querySelector('#'+this.scoreID).value=0;
			}
			if(this.timer!==null){
				document.querySelector('#'+this.timer).value=0+' ms';
			}
		}
	};
	this.incrementScore=function(){
		this.score++;

		if(this.gameDataExist && this.scoreID!==null){
			document.querySelector('#'+this.scoreID).value=this.score;
		}
	};
	this.start=function(){
		this.init();
	};
	this.hideBall=function(){
		setTimeout(function(){
			document.querySelector('#'+ballID).style.display='none';

		},1000,ballID=this.ballID);
	};
	this.showBall=function(){
		setTimeout(function(){},2000);
	};
}