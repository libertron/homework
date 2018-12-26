function Game(data){
	this.counter=0;
	this.xy=0;
	this.timeAndInt={interval1:null,interval2:null,interval3:null};
	this.stop=false;
	this.gameDataExist=typeof(data)!=='undefined';
	this.ballID=(this.gameDataExist && typeof(data.ball)=='string')?data.ball:null;
	this.scoreID=(this.gameDataExist && typeof(data.scoreScreen)=='string')?data.scoreScreen:null;
	this.score=0
	this.square=(this.gameDataExist && typeof(data.squarePan)=='string')?data.squarePan:null;
	this.timer=(this.gameDataExist && typeof(data.timer)=='string')?data.timer:null;

	this.randomXY=function(){
		var x=Math.round(Math.random()*460);
		var y=Math.round(Math.random()*460);
		if(y>460 || x>460)
			this.randomXY();
		else
			this.xy={x,y};
	};

	this.init=function(){
		if(this.gameDataExist){
			if(this.scoreID!==null){
				document.querySelector('#'+this.scoreID).value=0;
			}
			if(this.timer!==null){
				document.querySelector('#'+this.timer).value=0+' ms';
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
		this.randomXY();
		this.timeAndInt.interval1=setInterval(function(){
			document.querySelector('#'+timer).value=++counter+' ms';
		},1,timer=this.timer,counter=this.counter);

		this.timeAndInt.interval3=setInterval(function(){
			document.querySelector('#'+ball).style.display='none';
		},1000,ball=this.ballID);

		this.timeAndInt.interval2=setInterval(function(){
			randomxy();
			var bal=document.querySelector('#'+ball);
			bal.style.top=xy.y+'px';
			bal.style.left=xy.x+'px'; 
			bal.style.display='block';
		},3000,ball=this.ballID,randomxy=this.randomXY,xy=this.xy,timeAndInt=this.timeAndInt);
	};

	this.resetTimer=function(){
		this.counter=0;
		if(this.timer!==null){
			document.querySelector('#'+this.timer).value=0+' ms';
		}
	};

	this.stop=function(){
		clearInterval(this.timeAndInt.interval1);
		clearInterval(this.timeAndInt.interval2);
		clearInterval(this.timeAndInt.interval3);
		this.init();
	}
}