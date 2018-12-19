function Game(data){
	this.ball=null;
	this.score=0;
	this.square=null;
	this.timer=0;
	this.randomXY=function(){
		return {};
	};
	this.init=function(){
		if(typeof(data!=='undefined')){
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

		if(typeof(data)!=='undefined' && typeof(data.score)=='string'){
			document.querySelector('#'+data.score).value=this.score;
		}
	};
	this.start=function(){
		this.init();
	};
	this.hideBall=function(){
		setTimeout(function(){},1000);
	};
	this.showBall=function(){
		setTimeout(function(){},2000);
	};
}