//TODO: Please write code in this file.
function printInventory(inputs) {
    var purchase= new  Array();//构建一个新的数组用来存储pos机扫描到的商品条码
    purchase.push(new Object());
    purchase[0].barcode=inputs[0];
    purchase[0].count=0;
    var up= 1;
    for (var j in inputs)
    {
        var flag=0;
        for(var k=0;k<up;k++)
        {
            if( inputs[j]==purchase[k].barcode)
            {
                purchase[k].count+=1;
                flag=1
            }
        }
        if(flag==0)
        {   purchase.push(new Object());
            purchase[up].barcode=inputs[j];
            purchase[up].count=1;
            up+=1;
        }

    }//程序执行到这里的时候，purchase数组已经存储了所有购买商品的条码号和数量

    var allItems=loadAllItems()
    for(var lookbar in purchase)
    {
        for (var i in allItems)
        {
            if(purchase[lookbar].barcode==allItems[i].barcode)
            {
              purchase[lookbar].name=allItems[i].name  ;
              purchase[lookbar].unit=allItems[i].unit;
              purchase[lookbar].price=allItems[i].price;
            }
        }
    }//去商品集合中通过条码号查找出所有完整的信息

    var sum=0;
    var string;
    string='***<没钱赚商店>购物清单***\n' ;

    for(var i in purchase)
    {
        string+='名称：'+purchase[i].name+'，数量：'+purchase[i].count+purchase[i].unit+'，单价：'+purchase[i].price.toFixed(2)
            +'(元)，小计：'+(purchase[i].price*purchase[i].count).toFixed(2)+'(元)\n'

        sum+=purchase[i].price*purchase[i].count
    }
    string+='----------------------\n'
    string+='总计：'+sum.toFixed(2)+'(元)\n'
    string+='**********************'
    console.log(string)





}