//TODO: Please write code in this file.
function printInventory(inputs) {
    var inputs2=new Array();
    inputs2[0]=inputs[0];
    inputs2[0].count=0
    var inp2= 1;
    for (var j in inputs)
    {
        var flag=0;
        for(var k=0;k<inp2;k++)
        {
            if( inputs[j].barcode==inputs2[k].barcode)
            {
                inputs2[k].count+=1;
                flag=1
            }
        }
        if(flag==0)
        {
            inputs2[inp2]=inputs[j];
            inputs2[inp2].count=1;
            inp2+=1;
        }

    }
console.log(inputs2)

    var sum=0;
    var string;
    string='***<没钱赚商店>购物清单***\n' ;

    for(var i in inputs2)
    {
        string+='名称：'+inputs2[i].name+'，数量：'+inputs2[i].count+inputs2[i].unit+'，单价：'+inputs2[i].price.toFixed(2)
            +'(元)，小计：'+(inputs2[i].price*inputs2[i].count).toFixed(2)+'(元)\n'

        sum+=inputs2[i].price*inputs2[i].count
    }
    string+='----------------------\n'
    string+='总计：'+sum.toFixed(2)+'(元)\n'
    string+='**********************'
    console.log(string)
}