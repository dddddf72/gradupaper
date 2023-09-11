function handleTitle(value){
  if (value.length > 6) {
      return value.slice(0, 6) + "..."
  }
  return value;
}
function transfromStar(num){
  let arr = [];
  for(let i=0;i<5;i++){
    if(num>2){
      arr.push(2)
    }else if(num>0){
      arr.push(Number(num.toFixed(1)))
    }else{
      arr.push(0)
    }
    num=num-2;
  }
  return arr;
}
module.exports ={
  handleTitle,
  transfromStar
}