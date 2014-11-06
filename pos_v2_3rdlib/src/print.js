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
        +printdiscountlist(purchase,string)
        +'----------------------\n'
        +'总计：'+sumofall(purchase)+'(元)\n'
        +'节省：'+sumdiscount(purchase)+'(元)\n'
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


function printdiscountlist(purchase,string)
{
    _.map(purchase,function(item)
    {
        if(item.discountflag==1&&item.count>=3)
        {
            string += '名称：' + item.name + '，数量：' + parseInt(item.count / 3) + item.unit + '\n'

        }

    })
return string
}

function sumofall(purchase)
{  var sum=0
    _.map(purchase,function(item)
    {
        if(item.discountflag==1&&item.count>=3)
        {
            sum += (item.price *(item.count-parseInt(item.count / 3)))
        }
        else
        {
            sum+= (item.price *item.count)

        }

    })
    return sum.toFixed(2)
}

function sumdiscount(purchase)
{
    var sumdiscount=0
    _.map(purchase,function(item)
    {
        if(item.discountflag==1&&item.count>=3)
        {
            sumdiscount += (item.price *parseInt(item.count / 3))
        }


    })
    return sumdiscount.toFixed(2)
}