function Game(data){
	this.gameDataExist=typeof(data)!=='undefined';
	this.ballIDID=(this.gameDataExist && typeof(data.ballID)=='string')?data.ballID:null;
	this.scoreID=(this.gameDataExist && typeof(data.ballID)=='string')?data.score:null;
	this.score=0
	this.square=(this.gameDataExist && typeof(data.square)=='string')?data.square:null;
	this.timer=0;
	this.randomXY=function(){
		return {};
	};
	this.init=function(){
		if(this.gameDataExist){
			if(typeof(data.score)=='string'){
				document.querySelector('#'+data.score).value=0;
			}
			if(typeof(data.timer)=='string'){
				document.querySelector('#'+data.timer).value=0+' ms';
			}
		}
	};
	this.incrementScore=function(){
		this.score++;

		if(this.gameDataExist && typeof(data.score)=='string'){
			document.querySelector('#'+data.score).value=this.score;
		}
	};
	this.start=function(){
		this.init();
	};
	this.hideBall=function(){
		setTimeout(function(){
			

		},1000,ballID=this.ballID);
	};
	this.showBall=function(){
		setTimeout(function(){},2000);
	};
}