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



}