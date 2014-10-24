
function printInventory(inputs) {
    var sum=0;
    var string;
    string='***<没钱赚商店>购物清单***\n' ;

    for(var i in inputs)
    {
        string+='名称：'+inputs[i].name+'，数量：'+inputs[i].count+inputs[i].unit+'，单价：'+inputs[i].price.toFixed(2)
            +'(元)，小计：'+(inputs[i].price*inputs[i].count).toFixed(2)+'(元)\n'

        sum+=inputs[i].price*inputs[i].count
    }
    string+='----------------------\n'
    string+='总计：'+sum.toFixed(2)+'(元)\n'
    string+='**********************'
    console.log(string)
}