//TODO: Please write code in this file.
function printInventory(inputs) {
    this.inputs=inputs
    var purchase= getpurchase(inputs)


    var sum = 0;
    var string;
    string = '***<没钱赚商店>购物清单***\n打印时间：';

    string += getdate() + '\n----------------------\n';


    var discountbarcode =loadPromotions()[0].barcodes
    var discountofthispurchase = new Array()

    var up2 = 0
    for (var i in purchase) {
        var flag = 0
        for (var j in discountbarcode) {
            if (purchase[i].barcode == discountbarcode[j] && purchase[i].count >= 3) {
                discountofthispurchase.push(new Object())
                discountofthispurchase[up2].name = purchase[i].name
                discountofthispurchase[up2].unit = purchase[i].unit
                discountofthispurchase[up2].count = parseInt(purchase[i].count / 3)
                discountofthispurchase[up2].sumofdiscount = discountofthispurchase[up2].count * purchase[i].price

                string += '名称：' + purchase[i].name + '，数量：' + purchase[i].count + purchase[i].unit + '，单价：' + purchase[i].price.toFixed(2)
                    + '(元)，小计：' + (purchase[i].price * purchase[i].count - discountofthispurchase[up2].sumofdiscount).toFixed(2) + '(元)\n'
                sum += purchase[i].price * purchase[i].count - discountofthispurchase[up2].sumofdiscount
                up2 += 1
                flag = 1
            }


        }

        if (flag == 0) {
            string += '名称：' + purchase[i].name + '，数量：' + purchase[i].count + purchase[i].unit + '，单价：' + purchase[i].price.toFixed(2)
                + '(元)，小计：' + (purchase[i].price * purchase[i].count).toFixed(2) + '(元)\n'

            sum += purchase[i].price * purchase[i].count
        }

    }

    //从买二送一的折扣商品集合中找出此次购买的折扣商品，并将折扣存入单独的折扣数组中
    string += '----------------------\n'
    string += '挥泪赠送商品：\n'

    for (var i in discountofthispurchase) {
        string += '名称：' + discountofthispurchase[i].name + '，数量：' + discountofthispurchase[i].count + discountofthispurchase[i].unit + '\n'


    }
    string += '----------------------\n'
    string += '总计：' + sum.toFixed(2) + '(元)\n'
    var jiesheng = 0
    for (var i in discountofthispurchase) {
        jiesheng += discountofthispurchase[i].sumofdiscount
    }
    console.log(jiesheng)
    string += '节省：' + jiesheng.toFixed(2) + '(元)\n'
    string += '**********************'
    console.log(string)
}
