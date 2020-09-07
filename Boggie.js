class Boggie{
    constructor(x,y,w,h){
      var options ={ 
        isStatic: false
      }


      this.body =  Bodies.rectangle(x,y,w ,h,options);
      this.image= loadImage("images/coach.png");
      World.add(myWorld,this.body);
      this.w = w;
      this.h = h;
    }
    show()
    {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
       imageMode(CENTER);
      image(this.image,this.body.position.x, this.body.position.y,this.w, this.h);
    }


}
