#jquery厉害之处
- write less,do more
    
## 学习关注点
- 如何实现
- 为什么这么写？好处有哪些
- 其他延伸方面

### 1.只有$,jQuery2个变量暴露在全局中
实现方法：

    (function(window,undefined){
        var jQuery = function(a,b,c){
            //do something
        }
        window.jQuery = window.$ = jQuery;
    })(window)
    
- window作为参数传递
- undefined 作为参数传递
- $能否换成其他符号（为什么很多框架都使用$符号，而不是#%@等等）

#### window作为参数传递

1. 提高效率
    为什么能提高效率，得从javascript的作用域链说起，在当前作用域中如果没有该属性（局部变量）则向上一层作用域中寻找，一直到最上层，也就是window，查找速度慢。
    当我们把window作为参数传进来时，使得window由全局变量变为局部变量，这是如果访问window，就可以直接在当前作用域找到，而不用再向上查找
    
2. 压缩代码后节约资源
将window 作为参数传入，可以在压缩代码后，代码为


    (function(a,b) {} )(window); // window 被优化为 a 

#### undefined 作为参数传递

1. 按照ECMA规范，关键字为是语言保留的，不能用作标识符,保留字也是一样。
undefined当初没被设计在其中，所以undefined是可以被重写的。
在有些低版本浏览器（ie8）中，运行如下代码


    var undefined = '慕课网'
    ;(function(window) {
      alert(undefined);//IE8 '慕课网'
    })(window)
    
所以实参没有第二个参数，传递形参undefined的值为undefined以防止在低版本浏览器重写undefined造成的问题。
2. 和window参数一样，提高效率，所有的undefined===window.undefined，传递undefined，则每次使用undefined直接使用当前作用域中的，不用调用window下的。

