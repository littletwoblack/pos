function getpurchase (inputs)
{  this.purchase =new Array()
    _.map(inputs,makebarcodeandcount)
    getallinformation(purchase)
    setdiscountflag(purchase)
    return purchase
}

        function makebarcodeandcount(barcode)
        {
            this.barcode=barcode
            _.bind=(cancount,purchase)
            _.bind=(cannotcount,purchase)

            barcode.length>10 ? cannotcount(barcode):cancount(barcode)
        }
             function cannotcount(barcode)
             {
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
             function cancount(barcode)
             {
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

function getallinformation(purchase)
{   var allItems = loadAllItems()

    _.map(purchase,function(item)
    {
        var b= _.indexOf(_.pluck(allItems,'barcode'),item.barcode);

        item.name = allItems[b].name;
        item.unit = allItems[b].unit;
        item.price = allItems[b].price;

    }
         )


}

function setdiscountflag(purchase)
{
    var discountbarcode =loadPromotions()[0].barcodes
    _.map(purchase,function(item)
        {
            var b= _.indexOf(discountbarcode,item.barcode);

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
