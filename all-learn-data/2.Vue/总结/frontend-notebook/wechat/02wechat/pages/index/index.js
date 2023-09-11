Page({
  data:{
    price:3000,
    arr:"",
    rating:9  //[2,2,2,2,0]
  },
  transfromStar(num){
    let arr = [];
    for(let i=0;i<5;i++){
      if(num>2){
        arr.push(2)
      }else if(num>0){
        arr.push(num)
      }else{
        arr.push(0)
      }
      num=num-2;
    }
    return arr;
  },
  onLoad(){
    var data = this.data.rating;
    var res =  this.transfromStar(data);
    this.setData({
      arr:res
    })
    this.show()
  },
  show(){
    console.log("show")
  }

})
/* 
>=1.5  满星
>=1  半星
<1  没星
 */
