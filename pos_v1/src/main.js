//TODO: Please write code in this file.
function printInventory(inputs) {


    var purchase= new  Array();//构建一个新的数组用来存储pos机扫描到的商品条码
    var up= 1;

    for (var j in inputs)
    {
       if(inputs[j].length==10)
       {
           if(purchase.length!=0)
           {    var flag=0;
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
           }
           else
           {
               purchase.push(new Object());
               purchase[0].barcode=inputs[j];
               purchase[0].count=1;

           }
       }
        else
       {
           var goodscannotcount=new Array()
           goodscannotcount=inputs[j].split("-")

           if(purchase.length!=0)
           {
               var flag=0;
               for(var k=0;k<up;k++)
               {
                   if( goodscannotcount[0]==purchase[k].barcode)
                   {
                       purchase[k].count+=goodscannotcount[1];
                       flag=1
                   }
               }
               if(flag==0)
               {   purchase.push(new Object());
                   purchase[up].barcode=goodscannotcount[0];
                   purchase[up].count=goodscannotcount[1];
                   up+=1;
               }

           }
           else
           {
               purchase.push(new Object());
               purchase[0].barcode=goodscannotcount[0];
               purchase[0].count=goodscannotcount[1];
           }
       }

    }

    //程序执行到这里的时候，purchase数组已经存储了所有购买商品的条码号和数量
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

    var discountbarcode=[   'ITEM000000',
                            'ITEM000001',
                            'ITEM000005']
    var discountofthispurchase=new Array()

    var up2 =0
    for(var i in purchase)
    {   var flag=0
        for (var j in discountbarcode)
        {
            if (purchase[i].barcode==discountbarcode[j] && purchase[i].count >=3)
            {
                discountofthispurchase.push(new Object())
                discountofthispurchase[up2].name=purchase[i].name
                discountofthispurchase[up2].unit=purchase[i].unit
                discountofthispurchase[up2].count=parseInt(purchase[i].count/3)
                discountofthispurchase[up2].sumofdiscount=discountofthispurchase[up2].count*purchase[i].price

                string+='名称：'+purchase[i].name+'，数量：'+purchase[i].count+purchase[i].unit+'，单价：'+purchase[i].price.toFixed(2)
                    +'(元)，小计：'+(purchase[i].price*purchase[i].count-discountofthispurchase[up2].sumofdiscount).toFixed(2)+'(元)\n'
                sum+=purchase[i].price*purchase[i].count-discountofthispurchase[up2].sumofdiscount
                up2+=1
                flag=1
            }


        }

        if (flag==0)
        {
            string+='名称：'+purchase[i].name+'，数量：'+purchase[i].count+purchase[i].unit+'，单价：'+purchase[i].price.toFixed(2)
                +'(元)，小计：'+(purchase[i].price*purchase[i].count).toFixed(2)+'(元)\n'

            sum+=purchase[i].price*purchase[i].count
        }

    }

  //从买二送一的折扣商品集合中找出此次购买的折扣商品，并将折扣存入单独的折扣数组中
    string+='----------------------\n'
    string+='挥泪赠送商品：\n'

    for(var i in discountofthispurchase)
    {
        string+='名称：'+discountofthispurchase[i].name+'，数量：'+discountofthispurchase[i].count+discountofthispurchase[i].unit+'\n'


    }
    string+='----------------------\n'
    string+='总计：'+sum.toFixed(2)+'(元)\n'
    var jiesheng=0
    for (var i in discountofthispurchase)
    {
        jiesheng += discountofthispurchase[i].sumofdiscount
    }
    console.log(jiesheng)
    string+='节省：'+jiesheng.toFixed(2)+'(元)\n'
    string+='**********************'
    console.log(string)



}