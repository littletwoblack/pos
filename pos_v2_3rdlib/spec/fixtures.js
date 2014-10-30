function loadAllItems() {
    return [
        new Item('ITEM000000', '可口可乐', '瓶', 3.00),
        new Item('ITEM000001', '雪碧', '瓶', 3.00),
        new Item('ITEM000002', '苹果', '斤', 5.50),
        new Item('ITEM000003', '荔枝', '斤', 15.00),
        new Item('ITEM000004', '电池', '个', 2.00),
        new Item('ITEM000005', '方便面', '袋', 4.50)
    ];
}

function loadPromotions() {
    return [
        new Promotion('BUY_TWO_GET_ONE_FREE', [
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
        ])
    ]
}
function getdate() {
    var dateDigitToString = function (num) {
        return num < 10 ? '0' + num : num;
    }
    var timeNow = new Date();
    var year = dateDigitToString(timeNow.getFullYear());
    var month = dateDigitToString(timeNow.getMonth() + 1);
    var day = dateDigitToString(timeNow.getDate());
    var hour = dateDigitToString(timeNow.getHours());
    var minute = dateDigitToString(timeNow.getMinutes());
    var second = dateDigitToString(timeNow.getSeconds());
    return year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second;



}