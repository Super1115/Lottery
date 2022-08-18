var prizeList =["一隻企鵝","下次會更好","一頭大象","下次會更好"]
let prizeNum = prizeList.length-1
let thePrize = Math.round(Math.random()*prizeNum)
document.write("<h3>"+prizeList[thePrize]+"</h3>")
function pay(){
    alert("您需要付費才能繼續抽獎!點擊確認前往付款!")
    location.href = "https://super1115.github.io/Lottery/pay/index.html"
}
