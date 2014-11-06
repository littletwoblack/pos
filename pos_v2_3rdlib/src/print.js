/**
 * Created by zh on 14-10-30.
 */
function print(purchase)
{
    var string='';
    string+='***<没钱赚商店>购物清单***\n'
        +'打印时间：'+getdatestring()
        +'\n'+'----------------------\n'
        +printpaylist()
        +'----------------------\n'
        +'挥泪赠送商品：\n'
        +printdiscountlist()
        +'----------------------\n'
        +'总计：'+sumofall().toFixed(2)+'(元)\n'
        +'节省：'+(this.getTotal()-this.getAllSubcount()).toFixed(2)+'(元)\n' +
        '**********************';
    return string;
}
function printpaylist()
{

}
function printdiscountlist()
{

}
function sumofall()
{

}
function sumdiscount()
{
    
}