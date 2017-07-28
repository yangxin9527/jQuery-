



console.log(document.addEventListener);
console.log(document.readyState);


// 驼峰表示法，将 font-size 形式转化为 fontSize
console.log("驼峰表示法转换");
function camelCase(string){
    return string.replace(/-([a-z])/g,function(all,letter){
        return letter.toUpperCase();
    })
}

window.onload=function () {
    console.log($);
    console.log($("#abc"))
}