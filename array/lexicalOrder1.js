var lexicalOrder = function (n) {
  var numbers = []
  if (n < 10) {
    for (var index = 1; index <= n; index++) {
      numbers.push(index)
    }
  } else {
    for(var index = 1; index < n; index++){
      if(numbers.length!==0){
        var j = getIndex(numbers,index)
      }else {
        numbers.push(index)
        continue
      }
      console.log(j)
      numbers.splice(j,0,index)
    }
  }
  return numbers
};
var getIndex = function(numbers,index){
  var flag = 0
  for(var i = 0; i < numbers.length; i ++){
    var str = numbers[i]+''
    var str2 = index + ''
    if(str.length === str2.length){
      flag = numbers.length
      break
    }
    if(str2.match(new RegExp(str))){
      flag = i
    }
  }
  return flag
}

console.log(JSON.stringify(lexicalOrder(12)))