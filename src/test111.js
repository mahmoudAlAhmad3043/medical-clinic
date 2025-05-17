const { Interface } = require("readline")



let  formatedList = [
    {
        type: 0,
        name: 'vip',
        itemList:[]
    },{
        type:1,
        name: 'svip',
        itemList:[]
    }
]

let res = {
    "data": {
        "svip": [
            {
                "bouns": {
                    "time_sec": 0
                },
                "config": {
                    "end_at": ""
                },
                "package": {
                    "days": 30,
                    "id": 19,
                    "name": "é«˜çº§30å¤©"
                },
                "payments": [
                    {
                        "disc_price": 6000,
                        "id": 2,
                        "name": "æ”¯ä»˜å®",
                        "orig_price": 923,
                        "points": 600,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 6000,
                        "id": 32,
                        "name": "æ”¯ä»˜å®02",
                        "orig_price": 6000,
                        "points": 600,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 6000,
                        "id": 52,
                        "name": "å¾®ä¿¡æ”¯ä»˜02",
                        "orig_price": 6000,
                        "points": 600,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 6000,
                        "id": 54,
                        "name": "å¾®ä¿¡æ”¯ä»˜08",
                        "orig_price": 6000,
                        "points": 600,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 6000,
                        "id": 34,
                        "name": "æ”¯ä»˜å®08",
                        "orig_price": 6000,
                        "points": 600,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 6000,
                        "id": 30,
                        "name": "æ”¯ä»˜å®04",
                        "orig_price": 6000,
                        "points": 600,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 6000,
                        "id": 50,
                        "name": "å¾®ä¿¡æ”¯ä»˜04",
                        "orig_price": 6000,
                        "points": 600,
                        "sybol": "ï¿¥"
                    }
                ]
            },
            {
                "bouns": {
                    "time_sec": 0
                },
                "config": {
                    "end_at": ""
                },
                "package": {
                    "days": 90,
                    "id": 20,
                    "name": "é«˜çº§90å¤©-é€10å¤©"
                },
                "payments": [
                    {
                        "disc_price": 15800,
                        "id": 2,
                        "name": "æ”¯ä»˜å®",
                        "orig_price": 2433,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 15800,
                        "id": 32,
                        "name": "æ”¯ä»˜å®02",
                        "orig_price": 15800,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 15800,
                        "id": 52,
                        "name": "å¾®ä¿¡æ”¯ä»˜02",
                        "orig_price": 15800,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 15800,
                        "id": 54,
                        "name": "å¾®ä¿¡æ”¯ä»˜08",
                        "orig_price": 15800,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 15800,
                        "id": 34,
                        "name": "æ”¯ä»˜å®08",
                        "orig_price": 15800,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 15800,
                        "id": 30,
                        "name": "æ”¯ä»˜å®04",
                        "orig_price": 15800,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 15800,
                        "id": 50,
                        "name": "å¾®ä¿¡æ”¯ä»˜04",
                        "orig_price": 15800,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    }
                ]
            },
            {
                "bouns": {
                    "time_sec": 0
                },
                "config": {
                    "end_at": ""
                },
                "package": {
                    "days": 180,
                    "id": 21,
                    "name": "é«˜çº§180å¤©-é€30å¤©"
                },
                "payments": [
                    {
                        "disc_price": 29800,
                        "id": 2,
                        "name": "æ”¯ä»˜å®",
                        "orig_price": 4588,
                        "points": 2980,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 29800,
                        "id": 32,
                        "name": "æ”¯ä»˜å®02",
                        "orig_price": 29800,
                        "points": 2980,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 29800,
                        "id": 52,
                        "name": "å¾®ä¿¡æ”¯ä»˜02",
                        "orig_price": 29800,
                        "points": 2980,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 29800,
                        "id": 54,
                        "name": "å¾®ä¿¡æ”¯ä»˜08",
                        "orig_price": 29800,
                        "points": 2980,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 29800,
                        "id": 34,
                        "name": "æ”¯ä»˜å®08",
                        "orig_price": 29800,
                        "points": 2980,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 29800,
                        "id": 30,
                        "name": "æ”¯ä»˜å®04",
                        "orig_price": 29800,
                        "points": 2980,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 29800,
                        "id": 50,
                        "name": "å¾®ä¿¡æ”¯ä»˜04",
                        "orig_price": 29800,
                        "points": 2980,
                        "sybol": "ï¿¥"
                    }
                ]
            },
            {
                "bouns": {
                    "time_sec": 0
                },
                "config": {
                    "end_at": ""
                },
                "package": {
                    "days": 365,
                    "id": 22,
                    "name": "é«˜çº§365å¤©-é€60å¤©"
                },
                "payments": [
                    {
                        "disc_price": 52800,
                        "id": 2,
                        "name": "æ”¯ä»˜å®",
                        "orig_price": 8125,
                        "points": 5280,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 52800,
                        "id": 32,
                        "name": "æ”¯ä»˜å®02",
                        "orig_price": 52800,
                        "points": 5280,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 52800,
                        "id": 52,
                        "name": "å¾®ä¿¡æ”¯ä»˜02",
                        "orig_price": 52800,
                        "points": 5280,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 52800,
                        "id": 54,
                        "name": "å¾®ä¿¡æ”¯ä»˜08",
                        "orig_price": 52800,
                        "points": 5280,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 52800,
                        "id": 34,
                        "name": "æ”¯ä»˜å®08",
                        "orig_price": 52800,
                        "points": 5280,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 52800,
                        "id": 30,
                        "name": "æ”¯ä»˜å®04",
                        "orig_price": 52800,
                        "points": 5280,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 52800,
                        "id": 50,
                        "name": "å¾®ä¿¡æ”¯ä»˜04",
                        "orig_price": 52800,
                        "points": 5280,
                        "sybol": "ï¿¥"
                    }
                ]
            }
        ],
        "vip": [
            {
                "bouns": {
                    "time_sec": 0
                },
                "config": {
                    "end_at": ""
                },
                "package": {
                    "days": 30,
                    "id": 15,
                    "name": "æ™®é€š30å¤©"
                },
                "payments": [
                    {
                        "disc_price": 3000,
                        "id": 2,
                        "name": "æ”¯ä»˜å®",
                        "orig_price": 461,
                        "points": 300,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 3000,
                        "id": 32,
                        "name": "æ”¯ä»˜å®02",
                        "orig_price": 3000,
                        "points": 300,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 3000,
                        "id": 52,
                        "name": "å¾®ä¿¡æ”¯ä»˜02",
                        "orig_price": 3000,
                        "points": 300,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 3000,
                        "id": 54,
                        "name": "å¾®ä¿¡æ”¯ä»˜08",
                        "orig_price": 3000,
                        "points": 300,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 3000,
                        "id": 34,
                        "name": "æ”¯ä»˜å®08",
                        "orig_price": 3000,
                        "points": 300,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 3000,
                        "id": 30,
                        "name": "æ”¯ä»˜å®04",
                        "orig_price": 3000,
                        "points": 300,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 3000,
                        "id": 50,
                        "name": "å¾®ä¿¡æ”¯ä»˜04",
                        "orig_price": 3000,
                        "points": 300,
                        "sybol": "ï¿¥"
                    }
                ]
            },
            {
                "bouns": {
                    "time_sec": 0
                },
                "config": {
                    "end_at": ""
                },
                "package": {
                    "days": 90,
                    "id": 16,
                    "name": "æ™®é€š90å¤©-é€10å¤©"
                },
                "payments": [
                    {
                        "disc_price": 7800,
                        "id": 2,
                        "name": "æ”¯ä»˜å®",
                        "orig_price": 1200,
                        "points": 780,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 7800,
                        "id": 32,
                        "name": "æ”¯ä»˜å®02",
                        "orig_price": 7800,
                        "points": 780,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 7800,
                        "id": 52,
                        "name": "å¾®ä¿¡æ”¯ä»˜02",
                        "orig_price": 7800,
                        "points": 780,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 7800,
                        "id": 54,
                        "name": "å¾®ä¿¡æ”¯ä»˜08",
                        "orig_price": 7800,
                        "points": 780,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 7800,
                        "id": 34,
                        "name": "æ”¯ä»˜å®08",
                        "orig_price": 7800,
                        "points": 780,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 7800,
                        "id": 30,
                        "name": "æ”¯ä»˜å®04",
                        "orig_price": 7800,
                        "points": 780,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 7800,
                        "id": 50,
                        "name": "å¾®ä¿¡æ”¯ä»˜04",
                        "orig_price": 7800,
                        "points": 780,
                        "sybol": "ï¿¥"
                    }
                ]
            },
            {
                "bouns": {
                    "time_sec": 0
                },
                "config": {
                    "end_at": ""
                },
                "package": {
                    "days": 180,
                    "id": 17,
                    "name": "æ™®é€š180å¤©-é€30å¤©"
                },
                "payments": [
                    {
                        "disc_price": 15800,
                        "id": 2,
                        "name": "æ”¯ä»˜å®",
                        "orig_price": 2433,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 15800,
                        "id": 32,
                        "name": "æ”¯ä»˜å®02",
                        "orig_price": 15800,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 15800,
                        "id": 52,
                        "name": "å¾®ä¿¡æ”¯ä»˜02",
                        "orig_price": 15800,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 15800,
                        "id": 54,
                        "name": "å¾®ä¿¡æ”¯ä»˜08",
                        "orig_price": 15800,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 15800,
                        "id": 34,
                        "name": "æ”¯ä»˜å®08",
                        "orig_price": 15800,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 15800,
                        "id": 30,
                        "name": "æ”¯ä»˜å®04",
                        "orig_price": 15800,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 15800,
                        "id": 50,
                        "name": "å¾®ä¿¡æ”¯ä»˜04",
                        "orig_price": 15800,
                        "points": 1580,
                        "sybol": "ï¿¥"
                    }
                ]
            },
            {
                "bouns": {
                    "time_sec": 0
                },
                "config": {
                    "end_at": ""
                },
                "package": {
                    "days": 365,
                    "id": 18,
                    "name": "æ™®é€š365å¤©-é€60å¤©"
                },
                "payments": [
                    {
                        "disc_price": 28800,
                        "id": 2,
                        "name": "æ”¯ä»˜å®",
                        "orig_price": 4433,
                        "points": 2880,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 28800,
                        "id": 32,
                        "name": "æ”¯ä»˜å®02",
                        "orig_price": 28800,
                        "points": 2880,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 28800,
                        "id": 52,
                        "name": "å¾®ä¿¡æ”¯ä»˜02",
                        "orig_price": 28800,
                        "points": 2880,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 28800,
                        "id": 54,
                        "name": "å¾®ä¿¡æ”¯ä»˜08",
                        "orig_price": 28800,
                        "points": 2880,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 28800,
                        "id": 34,
                        "name": "æ”¯ä»˜å®08",
                        "orig_price": 28800,
                        "points": 2880,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 28800,
                        "id": 30,
                        "name": "æ”¯ä»˜å®04",
                        "orig_price": 28800,
                        "points": 2880,
                        "sybol": "ï¿¥"
                    },
                    {
                        "disc_price": 28800,
                        "id": 50,
                        "name": "å¾®ä¿¡æ”¯ä»˜04",
                        "orig_price": 28800,
                        "points": 2880,
                        "sybol": "ï¿¥"
                    }
                ]
            }
        ]
    },
    "ret": "0"
}
let data = res.data

formatList(data['vip'],0)
formatList(data['svip',1])


console.log(formatedList[0])


function formatList(arr,id) {
    arr.forEach((element,index) => {
        let item = {
            bouns:getBouns(element.bouns.time_sec,'day'),
            offer_end:element.config.end_at,
            id: element.package.id,
            name: getClassPackage(element.package.days),
            payments:[],
            activePayment:{}
        }
        element.payments.forEach((payment,payId) => {
            item.payments.push({
                disc_price : payment.disc_price,
                id : payment.id,
                name : payment.name,
                orig_price : payment.orig_price,
                points : payment.points,
                diff_price : payment.orig_price - payment.disc_price,
                monthly_price : payment.disc_price / (element.package.days / 30 + getBouns(element.bouns.time_sec,'month')),
                symbol : payment.sybol
            });
        });
        formatedList[id].itemList.push(item)
    });
}

function getBouns(bouns_sec,convertedTo) {
    if(convertedTo === 'day') {
        return bouns_sec / 60 / 60 / 24 
    } else if(convertedTo === 'month') {
        return bouns_sec / 60 / 60 / 24 / 30
    }
}

function getClassPackage(days) {
    if(days === 30) {
        return 'Monthly'
    } else if(days === 90) {
        return 'Quarterly'
    } else if(days === 180) {
        return 'Biannual'
    } else if(days === 365) {
        return 'Annual'
    }
}