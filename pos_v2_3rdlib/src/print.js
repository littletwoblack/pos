/**
 * Created by zh on 14-10-30.
 */
function print(purchase)
{
    var string='';
    string+='***<没钱赚商店>购物清单***\n'
        +'打印时间：'+getdatestring()
        +'\n'+'----------------------\n'
        +printpaylist(purchase,string)
        +'----------------------\n'
        +'挥泪赠送商品：\n'
        +printdiscountlist()
        +'----------------------\n'
//        +'总计：'+sumofall().toFixed(2)+'(元)\n'
//        +'节省：'+sumdiscount().toFixed(2)+'(元)\n'
        +'**********************';
    return string;
}
function printpaylist(purchase,string)
{
    _.map(purchase,function(item)
    {
        if(item.discountflag==1&&item.count>=3)
        {
            string += '名称：' + item.name + '，数量：' + item.count + item.unit + '，单价：' + item.price.toFixed(2)
                + '(元)，小计：' + (item.price *(item.count-parseInt(item.count / 3))).toFixed(2) + '(元)\n'

        }
        else
        {
          string += '名称：' + item.name + '，数量：' + item.count + item.unit + '，单价：' + item.price.toFixed(2)
                + '(元)，小计：' + (item.price *item.count).toFixed(2) + '(元)\n'


        }

    })
  return string
}

function printdiscountlist(purchase)
{

}
function sumofall(purchase)
{

}
function sumdiscount(purchase)
{

}