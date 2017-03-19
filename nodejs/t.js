function mysum(s) {
    if (!/^[1-9]\d{2}$/.test(s)) {
        console.log("这不是一个有效的三位数");
        return;
    }
    var arr = ''.split.call(s, ''); //借用字符串的分割方法，变成一个数组
    //对数组的每个元素求和
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}
console.log(mysum('345'));
