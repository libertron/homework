function Game(data){
	this.counter=0;
	this.stop=false;
	this.isShown=true;
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
			if(this.ballID!==null){
				document.querySelector('#'+this. ballID).style.display='none';
			}
			this.counter=0;
			this.score=0;
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
		setTimeout(function(){
			document.querySelector('#'+ ball).style.display='block';
			setTimeout(function(){
				document.querySelector('#'+this. ballID).style.display='none';
			},1000,ball=this.ballID);
		},2000);
	};

	this.resetTimer=function(){
		this.counter=0;
		if(this.timer!==null){
			document.querySelector('#'+this.timer).value=0+' ms';
		}
	};
}