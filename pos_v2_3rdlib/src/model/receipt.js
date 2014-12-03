/**
 * Created by zh on 14-10-30.
 */
function receipt(inputs){
  var purchase=make_a_purchase(inputs)
  this.pay_list=print_pay_list(purchase)
  this.discount_list=print_discount_list(purchase)
  this.sum_all=sum_of_all(purchase)
  this.sum_discount=sum_discount(purchase)
  this.print=function(){
      var string='';
      string+='***<没钱赚商店>购物清单***\n'
          +'打印时间：'+getdatestring()
          +'\n'+'----------------------\n'
          +this.pay_list
          +'----------------------\n'
          +'挥泪赠送商品：\n'
          +this.discount_list
          +'----------------------\n'
          +'总计：'+this.sum_all+'(元)\n'
          +'节省：'+this.sum_discount+'(元)\n'
          +'**********************';
      console.log(string)
  }
}


function print_pay_list(purchase){
    var string=''
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

function print_discount_list(purchase){
    var string=''
    _.map(purchase,function(item)
    {
        if(item.discountflag==1&&item.count>=3)
        {
            string += '名称：' + item.name + '，数量：' + parseInt(item.count / 3) + item.unit + '\n'

        }

    })
return string
}

function sum_of_all(purchase){  var sum=0
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

    });
    return sum.toFixed(2)
}

function sum_discount(purchase){
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

     function make_a_purchase (inputs){
    this.inputs=inputs

    purchase =new Array()
    _.map(inputs,make_barcode_and_count)
    get_all_information(purchase)
    set_discount_flag(purchase)
    return purchase

}

function make_barcode_and_count(barcode){
    this.barcode=barcode
    _.bind=(can_count,purchase)
    _.bind=(cannot_count,purchase)

    barcode.length>10 ? cannot_count(barcode):can_count(barcode)
}

function cannot_count(barcode){
    var a=barcode.split("-");
    var b= _.indexOf(_.pluck(purchase,'barcode'),a[0])

    if (b==-1)
    {
        purchase.push({barcode:a[0],count:parseInt(a[1])})
    }
    else
    {
        purchase[b].count+=parseInt(a[1])
    }

}

function can_count(barcode){
    var b= _.indexOf(_.pluck(purchase,'barcode'),barcode);


    if (b==-1)
    {
        purchase.push({barcode:barcode,count:1})
    }
    else
    {
        purchase[b].count+=1
    }
}

function get_all_information(purchase){
    this.purchase=purchase
    var allItems = loadAllItems()

    _.map(purchase,function(item)
        {
            var b= _.indexOf(_.pluck(allItems,'barcode'),item.barcode);

            item.name = allItems[b].name;
            item.unit = allItems[b].unit;
            item.price = allItems[b].price;

        }
    )


}

function set_discount_flag(purchase){
    var discount_barcode =loadPromotions()[0].barcodes
    _.map(purchase,function(item)
        {
            var b= _.indexOf(discount_barcode,item.barcode);

            if (b==-1)
            {
                item.discountflag=0
            }
            else
            {
                item.discountflag=1
            }

        }
    )
}
