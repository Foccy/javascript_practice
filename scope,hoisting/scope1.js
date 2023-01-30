function add(){
    var sum=10+20; //지역변수 
    multi=10*20; //식별자만 쓴거는 전역변수
    total=sum; //30
    return total
}
add();
console.log(multi)
console.log(total)
console.log(sum)