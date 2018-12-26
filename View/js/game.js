function Game(data){
	this.counter=0;
	this.xy=0;
	this.timeAndInt={interval1:null,interval2:null,timeout1:null,timeout2:null};
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
			if(this.ballID!==null){
<<<<<<< HEAD
				document.querySelector('#'+this. ballID).style.display='none';
=======
				document.querySelector('#'+this.ballID).style.display='none';
>>>>>>> 74a56435a950e75197453c25b6338ab4ca766e5d
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
<<<<<<< HEAD
		setTimeout(function(){
			document.querySelector('#'+ ball).style.display='block';
			setTimeout(function(){
				document.querySelector('#'+this. ballID).style.display='none';
			},1000,ball=this.ballID);
		},2000);
=======
		this.randomXY();
		this.timeAndInt.interval1=setInterval(function(){
			document.querySelector('#'+timer).value=++counter+' ms';
		},1,timer=this.timer,counter=this.counter);

		this.timeAndInt.interval2=setInterval(function(){
			randomxy();
			timeAndInt.timeout1=setTimeout(function(){
				var bal=document.querySelector('#'+ball);
				bal.style.top=xy.y+'px';
				bal.style.left=xy.x+'px'; 
				bal.style.display='block';
				timeAndInt.timeout2=setTimeout(function(){
					document.querySelector('#'+ball).style.display='none';
				},1000,ball=this.ball);
			},2000,ball=this.ball,xy=xy,timeAndInt=this.timeAndInt);
		},3000,ball=this.ballID,randomxy=this.randomXY,xy=this.xy,timeAndInt=this.timeAndInt);	
>>>>>>> 74a56435a950e75197453c25b6338ab4ca766e5d
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
		clearTimeout(this.timeAndInt.timeout1);
		clearTimeout(this.timeAndInt.timeout2);
		this.init();
	}
}