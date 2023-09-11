/* 页面加载完毕之后才会触发 */
window.onload = function () {
    var p = document.getElementById("p");
    p.onclick = function () {
        console.log("hello world")
    }
}
