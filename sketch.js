function setup() {
  //図面表示全体的に表示するスペースの位置
createCanvas(200, 200);

}


class Asan{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  moveRight(){
    this.x++;
  }
}

class Bsan{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
//B さんは1.5倍で動きます
  moveRight(){
    this.x += 1.5;
  }
}

var x = 0;
var a_san = new Asan(50, 100);
var b_san = new Bsan(0, 100);

function draw() {
  line(0, 100, 200, 100);
  //駅
  ellipse(150, 100, 50, 50);
  //BさんはAさｎの1.5倍の速さで移動しています。
  ellipse(b_san.x, b_san.y, 10, 10);
  b_san.moveRight();
  //Aさんは移動中
  //(x+a_san.x, a_san.y, 10, 10);
  ellipse(a_san.x, a_san.y, 10, 10);//x+してない理由は自分で右に動きます
  //x++;
  a_san.moveRight();
}
