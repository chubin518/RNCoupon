import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';

export default class TopBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            topList: [
                {
                    "SPID": 559311906795,
                    "SPMC": "iphone7背夹充电宝电池苹果6plus专用8手机壳移动电源便携冲p",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=559311906795",
                    "SPZT": "https://img.alicdn.com/imgextra/i2/1725869537/TB2ScDecF9gSKJjSspbXXbeNXXa_!!1725869537.jpg_400x400",
                    "SPYXL": 24900,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 36480,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=c4ca4238a0b923820dcc509a6f75849b&pid=mm_124544751_33334167_118612702&itemId=559311906795",
                    "FP": "79.9",
                    "CP": "10.00",
                    "SPJG": "89.90",
                    "Type": 0
                },
                {
                    "SPID": 561155661733,
                    "SPMC": "苹果6手机壳硅胶防摔软套iphone7plus纯色简约大气6s手机壳8p薄x",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=561155661733",
                    "SPZT": "https://img.alicdn.com/imgextra/i4/2098982131/TB2U45WavQs8KJjSZFEXXc9RpXa_!!2098982131.jpg_400x400",
                    "SPYXL": 940,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=d9c7fa8806774a05bcee71b3c4dec4a0&pid=mm_124544751_33334167_118612702&itemId=561155661733",
                    "FP": "9.9",
                    "CP": "20.00",
                    "SPJG": "29.90",
                    "Type": 0
                },
                {
                    "SPID": 540662565918,
                    "SPMC": "阿仙奴iphone6手机壳挂绳苹果6plus六6s硅胶套防摔全包新日韩女款",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=540662565918",
                    "SPZT": "https://img.alicdn.com/imgextra/i4/1585047200/TB2mjnTabD8F1Jjy0FpXXcduVXa_!!1585047200.jpg_400x400",
                    "SPYXL": 25577,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=2cd60ce9892a4da08e3e69f9a4c24a33&pid=mm_124544751_33334167_118612702&itemId=540662565918",
                    "FP": "5.8",
                    "CP": "5.00",
                    "SPJG": "10.80",
                    "Type": 0
                },
                {
                    "SPID": 561456449070,
                    "SPMC": "vivox20小熊全包保护套手机壳",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=561456449070",
                    "SPZT": "https://img.alicdn.com/imgextra/i3/3441344877/TB22eyPdnnI8KJjy0FfXXcdoVXa_!!3441344877.jpg_400x400",
                    "SPYXL": 93,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=f9e0dce652014892afe47074d063feea&pid=mm_124544751_33334167_118612702&itemId=561456449070",
                    "FP": "13",
                    "CP": "15.00",
                    "SPJG": "28.00",
                    "Type": 0
                },
                {
                    "SPID": 526369567248,
                    "SPMC": "红米NOTE4X手机壳红米4手机套红米4X保护套小米NOTE4硅胶薄防摔4A",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=526369567248",
                    "SPZT": "https://img.alicdn.com/imgextra/i1/2258463339/TB2oyk7trlmpuFjSZFlXXbdQXXa_!!2258463339.jpg_400x400",
                    "SPYXL": 18842,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=6ddb2b3e6f304b11bf0f42ab24937c48&pid=mm_124544751_33334167_118612702&itemId=526369567248",
                    "FP": "2.9",
                    "CP": "3.00",
                    "SPJG": "5.90",
                    "Type": 0
                },
                {
                    "SPID": 561540287498,
                    "SPMC": "情侣创意潮牌supreme苹果X手机壳",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=561540287498",
                    "SPZT": "http://img.alicdn.com/imgextra/i2/2993763411/TB2eNBoelHH8KJjy0FbXXcqlpXa_!!2993763411.jpg_400x400",
                    "SPYXL": 280,
                    "DPMC": "",
                    "PTLX": "0",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=0d68b46f2f944cfdabf5ebdb82daabf1&pid=mm_124544751_33334167_118612702&itemId=561540287498",
                    "FP": "20",
                    "CP": "5.00",
                    "SPJG": "25.00",
                    "Type": 0
                },
                {
                    "SPID": 559151339242,
                    "SPMC": "Pony苹果6s手机壳软6plus硅胶套iPhone6磨砂6P全包防摔红色挂绳女款六",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=559151339242",
                    "SPZT": "https://img.alicdn.com/imgextra/i1/3375381361/TB2xjLuXVTM8KJjSZFlXXaO8FXa_!!3375381361.jpg_400x400",
                    "SPYXL": 13517,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=29e878ac914f4b3f8a125c8799c48b12&pid=mm_124544751_33334167_118612702&itemId=559151339242",
                    "FP": "14.8",
                    "CP": "5.00",
                    "SPJG": "19.80",
                    "Type": 0
                },
                {
                    "SPID": 560661626664,
                    "SPMC": "苹果6s手机壳iPhone6硅胶6splus个性创意防摔6plus全包浮雕软胶",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=560661626664",
                    "SPZT": "https://img.alicdn.com/imgextra/i4/2306153926/TB2gatOmfNNTKJjSspcXXb4KVXa_!!2306153926.jpg_400x400",
                    "SPYXL": 23596,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=5070e87c8e084d26aab35a210a742b34&pid=mm_124544751_33334167_118612702&itemId=560661626664",
                    "FP": "5.1",
                    "CP": "20.00",
                    "SPJG": "25.10",
                    "Type": 0
                },
                {
                    "SPID": 560252155922,
                    "SPMC": "oppor11磨砂全包防摔手机壳软硅胶套",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=560252155922",
                    "SPZT": "http://img.alicdn.com/imgextra/i4/3375381361/TB19yZkifBNTKJjSszcXXbO2VXa_!!0-item_pic.jpg_400x400",
                    "SPYXL": 71,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=b4ebbb4cfa464a3fb373d395ed04adfb&pid=mm_124544751_33334167_118612702&itemId=560252155922",
                    "FP": "14.8",
                    "CP": "5.00",
                    "SPJG": "19.80",
                    "Type": 0
                },
                {
                    "SPID": 537228598974,
                    "SPMC": "GUSGU iphone7手机壳苹果7plus透明硅胶8超薄防摔8plus保护套七八",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=537228598974",
                    "SPZT": "https://img.alicdn.com/imgextra/i2/2024058652/TB2lwVJXNAb61BjSZFAXXcQfVXa_!!2024058652.jpg_400x400",
                    "SPYXL": 43138,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=099ac093e730473ea3b312c25d24cae6&pid=mm_124544751_33334167_118612702&itemId=537228598974",
                    "FP": "4.9",
                    "CP": "5.00",
                    "SPJG": "9.90",
                    "Type": 0
                },
                {
                    "SPID": 558451506834,
                    "SPMC": "苹果6/6p/7/7p硅胶软套超薄磨砂手机壳",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=558451506834",
                    "SPZT": "https://img.alicdn.com/imgextra/i3/695620281/TB2QzBpXo1HTKJjSZFmXXXeYFXa_!!695620281.jpg_400x400",
                    "SPYXL": 31610,
                    "DPMC": "",
                    "PTLX": "0",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=8ced103b4c684f72815f521f31b7497d&pid=mm_124544751_33334167_118612702&itemId=558451506834",
                    "FP": "24.8",
                    "CP": "5.00",
                    "SPJG": "29.80",
                    "Type": 0
                },
                {
                    "SPID": 553488613165,
                    "SPMC": "苹果6plus手机壳硅胶男6s全包防摔iPhone6潮牌6p套六新款个性创意",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=553488613165",
                    "SPZT": "https://img.alicdn.com/imgextra/i3/2050573898/TB2dMKgxOlnpuFjSZFgXXbi7FXa_!!2050573898.jpg_400x400",
                    "SPYXL": 12577,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=cd6324fb513548dea236135f2ccb8f86&pid=mm_124544751_33334167_118612702&itemId=553488613165",
                    "FP": "23",
                    "CP": "5.00",
                    "SPJG": "28.00",
                    "Type": 0
                },
                {
                    "SPID": 559981386609,
                    "SPMC": "iPhoneX手机壳苹果X新款10液态硅胶软全包防摔磨砂官方原装保护套",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=559981386609",
                    "SPZT": "https://img.alicdn.com/imgextra/i3/1969845592/TB2nYnpXNk98KJjSZFoXXXS6pXa_!!1969845592.jpg_400x400",
                    "SPYXL": 8660,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=23ac6b51a3f5487ca535db4d93934abd&pid=mm_124544751_33334167_118612702&itemId=559981386609",
                    "FP": "78",
                    "CP": "10.00",
                    "SPJG": "88.00",
                    "Type": 0
                },
                {
                    "SPID": 561640542165,
                    "SPMC": "iPhoneX手机壳苹果x男女款全包硬壳防摔个性创意潮款磨砂保护套10",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=561640542165",
                    "SPZT": "https://img.alicdn.com/imgextra/i3/2002597377/TB2KmmXdRHH8KJjy0FbXXcqlpXa_!!2002597377.jpg_400x400",
                    "SPYXL": 3985,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=61376e3c42f94b359ad29b6c3253a98a&pid=mm_124544751_33334167_118612702&itemId=561640542165",
                    "FP": "2.8",
                    "CP": "5.00",
                    "SPJG": "7.80",
                    "Type": 0
                },
                {
                    "SPID": 545634290397,
                    "SPMC": "苹果6手机壳硅胶软个性情侣款猫咪狗iphone7plus黑潮女6s手机壳8",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=545634290397",
                    "SPZT": "https://img.alicdn.com/imgextra/i4/2098982131/TB2KUWHX2jM8KJjSZFyXXXdzVXa_!!2098982131.jpg_400x400",
                    "SPYXL": 3340,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=d811377bc5d64e0e9f4fdc4818bfffde&pid=mm_124544751_33334167_118612702&itemId=545634290397",
                    "FP": "19.9",
                    "CP": "10.00",
                    "SPJG": "29.90",
                    "Type": 0
                },
                {
                    "SPID": 556426389057,
                    "SPMC": "oppoa57手机壳 oppoa57手机套a57m手机壳个性创意防摔套男女款潮",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=556426389057",
                    "SPZT": "https://img.alicdn.com/imgextra/i2/3340217160/TB28VJKX5qfF1Jjy0FcXXcLdFXa_!!3340217160.jpg_400x400",
                    "SPYXL": 56,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=f6457f6e60234827a47c55aee5215863&pid=mm_124544751_33334167_118612702&itemId=556426389057",
                    "FP": "9.8",
                    "CP": "5.00",
                    "SPJG": "14.80",
                    "Type": 0
                },
                {
                    "SPID": 545479255083,
                    "SPMC": "苹果6手机壳硅胶软套星空情侣潮男黑色iphone7plus女款6s手机壳8",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=545479255083",
                    "SPZT": "https://img.alicdn.com/imgextra/i1/2098982131/TB1OEZ0SFXXXXcRXXXXXXXXXXXX_!!0-item_pic.jpg_400x400",
                    "SPYXL": 2640,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=d811377bc5d64e0e9f4fdc4818bfffde&pid=mm_124544751_33334167_118612702&itemId=545479255083",
                    "FP": "19.9",
                    "CP": "10.00",
                    "SPJG": "29.90",
                    "Type": 0
                },
                {
                    "SPID": 555261436046,
                    "SPMC": "oppor9s手机壳r11保护套r9plus硅胶软R9splus防摔全包女款m男r11s",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=555261436046",
                    "SPZT": "https://img.alicdn.com/imgextra/i4/899284185/TB2FzW.adHO8KJjSZFLXXaTqVXa_!!899284185.jpg_400x400",
                    "SPYXL": 45133,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=2bc4e16e32b24950aee516fc35f8ac05&pid=mm_124544751_33334167_118612702&itemId=555261436046",
                    "FP": "10.8",
                    "CP": "5.00",
                    "SPJG": "15.80",
                    "Type": 0
                },
                {
                    "SPID": 558282509359,
                    "SPMC": "oppo笑脸苹果8/7/6手机壳",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=558282509359",
                    "SPZT": "http://img.alicdn.com/imgextra/i1/209249621/TB2shp7d.FWMKJjSZFvXXaenFXa_!!209249621.jpg_400x400",
                    "SPYXL": 3341,
                    "DPMC": "",
                    "PTLX": "0",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=b954e1f5f7414ef19960ba59cf3e90d8&pid=mm_124544751_33334167_118612702&itemId=558282509359",
                    "FP": "14.99",
                    "CP": "10.00",
                    "SPJG": "24.99",
                    "Type": 0
                },
                {
                    "SPID": 559123731440,
                    "SPMC": "动漫卡通可爱柯基犬狗狗iphone7手机壳苹果6plus/5se情侣浮雕软套",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=559123731440",
                    "SPZT": "https://img.alicdn.com/bao/uploaded/i2/3297574679/TB1bjv.cv2H8KJjy0FcXXaDlFXa_!!0-item_pic.jpg_400x400",
                    "SPYXL": 123,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=91a07228332a45a28b8b7a10b6e7fe28&pid=mm_124544751_33334167_118612702&itemId=559123731440",
                    "FP": "8",
                    "CP": "10.00",
                    "SPJG": "18.00",
                    "Type": 0
                },
                {
                    "SPID": 549595420811,
                    "SPMC": "小米6手机壳小米5保护套5s软胶5X硅胶防摔软5C全包潮男磨砂六Plus",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=549595420811",
                    "SPZT": "http://img.alicdn.com/imgextra/i4/1721189023/TB2EtWgodhvOuFjSZFBXXcZgFXa_!!1721189023.jpg_400x400",
                    "SPYXL": 6139,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=364dd0e7fba343d78675c74dc7699986&pid=mm_124544751_33334167_118612702&itemId=549595420811",
                    "FP": "18",
                    "CP": "5.00",
                    "SPJG": "23.00",
                    "Type": 0
                },
                {
                    "SPID": 536620459088,
                    "SPMC": "小米5X手机壳小米6保护套小米NOTE3手机壳小米5S硅胶防摔5C男女款",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=536620459088",
                    "SPZT": "https://img.alicdn.com/imgextra/i2/2258463339/TB2aizgXzLlJKJjSsppXXXqgFXa_!!2258463339.jpg_400x400",
                    "SPYXL": 6059,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=2d0c7663d52045e8860ed4d7a14b1a06&pid=mm_124544751_33334167_118612702&itemId=536620459088",
                    "FP": "2.9",
                    "CP": "3.00",
                    "SPJG": "5.90",
                    "Type": 0
                },
                {
                    "SPID": 557646129446,
                    "SPMC": "VIVOX9手机壳vivox9s套x7plus防摔软硅胶x6磨砂潮防摔全包x20男女",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=557646129446",
                    "SPZT": "https://img.alicdn.com/imgextra/i3/2162732176/TB2VB2YXRUSMeJjSszbXXberFXa_!!2162732176.jpg_400x400",
                    "SPYXL": 8923,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=c31f58a23228403a8be141b1877a830b&pid=mm_124544751_33334167_118612702&itemId=557646129446",
                    "FP": "14.8",
                    "CP": "5.00",
                    "SPJG": "19.80",
                    "Type": 0
                },
                {
                    "SPID": 558598677642,
                    "SPMC": "ICON苹果X手机壳iPhoneX手机壳新款10硅胶套防摔全包带指环男女十",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=558598677642",
                    "SPZT": "https://img.alicdn.com/imgextra/i4/1985763176/TB2636teBTH8KJjy0FiXXcRsXXa_!!1985763176.png",
                    "SPYXL": 6185,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=d824581db38e42b69bbf7bd16b24450a&pid=mm_124544751_33334167_118612702&itemId=558598677642",
                    "FP": "29",
                    "CP": "20.00",
                    "SPJG": "49.00",
                    "Type": 0
                },
                {
                    "SPID": 555289100063,
                    "SPMC": "红米NOTE5A手机壳红米5a手机套硅胶小米5SPLUS保护防摔小米5纤薄",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=555289100063",
                    "SPZT": "https://img.alicdn.com/imgextra/i2/2258463339/TB1zsKqd0qUQKJjSZFIXXcOkFXa_!!0-item_pic.jpg_400x400",
                    "SPYXL": 7154,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=6085d56766be4204a89bb3a35f29f50c&pid=mm_124544751_33334167_118612702&itemId=555289100063",
                    "FP": "2.9",
                    "CP": "3.00",
                    "SPJG": "5.90",
                    "Type": 0
                },
                {
                    "SPID": 560361735746,
                    "SPMC": "iPhone6手机壳6sPlus套超薄磨砂硅胶苹果6新款全包潮男红女款小熊",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=560361735746",
                    "SPZT": "https://img.alicdn.com/imgextra/i4/3362918083/TB2wCSSkamgSKJjSsphXXcy1VXa_!!3362918083.jpg_400x400",
                    "SPYXL": 507,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=f1cc0d68083742f5b0f39fa0d77011c9&pid=mm_124544751_33334167_118612702&itemId=560361735746",
                    "FP": "12.9",
                    "CP": "5.00",
                    "SPJG": "17.90",
                    "Type": 0
                },
                {
                    "SPID": 539685497198,
                    "SPMC": "iphone7手机壳磨砂软苹果8透明硅胶套7 plus超薄防摔外壳带防尘塞",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=539685497198",
                    "SPZT": "http://img.alicdn.com/imgextra/i1/2180505287/TB2BpoOXS.X61Bjy1XbXXcCiXXa_!!2180505287.jpg_400x400",
                    "SPYXL": 9664,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=6bd62beddbfc4ef28756ab6d4edbf53b&pid=mm_124544751_33334167_118612702&itemId=539685497198",
                    "FP": "6.9",
                    "CP": "3.00",
                    "SPJG": "9.90",
                    "Type": 0
                },
                {
                    "SPID": 555954069742,
                    "SPMC": "苹果7Plus手机壳iPhone8硅胶全包ip7防摔i8套女ipone八P潮男8puls",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=555954069742",
                    "SPZT": "http://img.alicdn.com/imgextra/i3/1965233254/TB2bkjda7.OyuJjSszeXXXY.VXa_!!1965233254.jpg_400x400",
                    "SPYXL": 2979,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=86b0b734b28f45d29f8b4111ee94834c&pid=mm_124544751_33334167_118612702&itemId=555954069742",
                    "FP": "19",
                    "CP": "10.00",
                    "SPJG": "29.00",
                    "Type": 0
                },
                {
                    "SPID": 555172734621,
                    "SPMC": "苹果6S手机壳日韩简约7P小清新软壳iPhone8手机壳6S Plus果7壳",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=555172734621",
                    "SPZT": "http://img.alicdn.com/imgextra/i1/1757651093/TB2bQUMwwxlpuFjSszbXXcSVpXa_!!1757651093.jpg_400x400",
                    "SPYXL": 440,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=e69c03e6a7304dc19ea9ac0ec532ab95&pid=mm_124544751_33334167_118612702&itemId=555172734621",
                    "FP": "6.9",
                    "CP": "10.00",
                    "SPJG": "16.90",
                    "Type": 0
                },
                {
                    "SPID": 555966997725,
                    "SPMC": "苹果iphone6plus手机壳i6硅胶6s软p新款ip保护套puls全包sP软胶男",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=555966997725",
                    "SPZT": "https://img.alicdn.com/imgextra/i2/1770958314/TB2aBz_pRcHL1JjSZJiXXcKcpXa_!!1770958314.jpg_400x400",
                    "SPYXL": 1289,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=86b0b734b28f45d29f8b4111ee94834c&pid=mm_124544751_33334167_118612702&itemId=555966997725",
                    "FP": "19",
                    "CP": "10.00",
                    "SPJG": "29.00",
                    "Type": 0
                },
                {
                    "SPID": 559218770766,
                    "SPMC": "iphone7plus手机壳创意潮男防摔苹果i7p黑红保护套全包微磨砂硬壳",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=559218770766",
                    "SPZT": "https://img.alicdn.com/imgextra/i4/2005506561/TB2lyaOc3LD8KJjSszeXXaGRpXa_!!2005506561.jpg_400x400",
                    "SPYXL": 970,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=d5c74a1664494e8aab7e3b5ce6ae9a36&pid=mm_124544751_33334167_118612702&itemId=559218770766",
                    "FP": "9.9",
                    "CP": "10.00",
                    "SPJG": "19.90",
                    "Type": 0
                },
                {
                    "SPID": 561100542980,
                    "SPMC": "爱国者/Aigo可爱卡通熊壳苹果x手机壳女款iphonex全包软套挂绳创意蕾丝浮雕潮",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=561100542980",
                    "SPZT": "https://img.alicdn.com/imgextra/i1/3441344877/TB287vsc4HI8KJjy1zbXXaxdpXa_!!3441344877.jpg_400x400",
                    "SPYXL": 44,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=f9e0dce652014892afe47074d063feea&pid=mm_124544751_33334167_118612702&itemId=561100542980",
                    "FP": "13",
                    "CP": "15.00",
                    "SPJG": "28.00",
                    "Type": 0
                },
                {
                    "SPID": 559317156941,
                    "SPMC": "苹果8手机壳iPhone8Plus套7p硅胶新款全包软壳iPone7男款七防摔女",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=559317156941",
                    "SPZT": "https://img.alicdn.com/imgextra/i1/1974403082/TB28tU2X2L85uJjSZFyXXa93XXa_!!1974403082.jpg_400x400",
                    "SPYXL": 5348,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=a0bc6cec08d240af96395524b3cbd9e3&pid=mm_124544751_33334167_118612702&itemId=559317156941",
                    "FP": "19",
                    "CP": "10.00",
                    "SPJG": "29.00",
                    "Type": 0
                },
                {
                    "SPID": 548061166153,
                    "SPMC": "苹果6splus手机壳带指环扣支架透明超薄",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=548061166153",
                    "SPZT": "http://gd2.alicdn.com/bao/uploaded/i2/2086921179/TB2spGauxRDOuFjSZFzXXcIipXa_!!2086921179.jpg_400x400",
                    "SPYXL": 1268,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=fb791e35988c4813b9048044ee716036&pid=mm_124544751_33334167_118612702&itemId=548061166153",
                    "FP": "29",
                    "CP": "20.00",
                    "SPJG": "49.00",
                    "Type": 0
                },
                {
                    "SPID": 559212658973,
                    "SPMC": "Pony苹果6手机壳防摔iphone6s保护套plus全包i6p硅胶软硬微磨砂壳潮男",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=559212658973",
                    "SPZT": "https://img.alicdn.com/imgextra/i4/3377800297/TB21uBiaNuaVKJjSZFjXXcjmpXa_!!3377800297.jpg_400x400",
                    "SPYXL": 7067,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=b43d5c9c218f4f7aa3cd6d630ace3984&pid=mm_124544751_33334167_118612702&itemId=559212658973",
                    "FP": "9.9",
                    "CP": "10.00",
                    "SPJG": "19.90",
                    "Type": 0
                },
                {
                    "SPID": 557220919788,
                    "SPMC": "苹果iPhone6s/7/Plus 私人来图定制照片定做手机壳新品创意个性化",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=557220919788",
                    "SPZT": "https://img.alicdn.com/imgextra/i2/1581887434/TB2tfQ7ax8X3KJjSZPiXXcedFXa_!!1581887434.jpg_400x400",
                    "SPYXL": 402,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=7f8178e88f6645b69b0c68ba3d528b1f&pid=mm_124544751_33334167_118612702&itemId=557220919788",
                    "FP": "16",
                    "CP": "10.00",
                    "SPJG": "26.00",
                    "Type": 0
                },
                {
                    "SPID": 559752436806,
                    "SPMC": "oppor9s手机壳女款可爱防摔",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=559752436806",
                    "SPZT": "https://img.alicdn.com/bao/uploaded/i4/3339847830/TB25IUNddrJ8KJjSspaXXXuKpXa_!!3339847830.jpg_400x400",
                    "SPYXL": 3808,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=f81a42a1c7234aa2862b9e697c509911&pid=mm_124544751_33334167_118612702&itemId=559752436806",
                    "FP": "12.9",
                    "CP": "10.00",
                    "SPJG": "22.90",
                    "Type": 0
                },
                {
                    "SPID": 558484692885,
                    "SPMC": "华为mate9背夹电池便携超薄无下巴专用手机壳充电宝mate带指纹9",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=558484692885",
                    "SPZT": "https://img.alicdn.com/imgextra/i4/2069824458/TB2ZA5PXPihSKJjy0FeXXbJtpXa_!!2069824458.jpg_400x400",
                    "SPYXL": 2842,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=cfc3a7d7b0e949b0a53052965517a164&pid=mm_124544751_33334167_118612702&itemId=558484692885",
                    "FP": "78",
                    "CP": "30.00",
                    "SPJG": "108.00",
                    "Type": 0
                },
                {
                    "SPID": 552711709447,
                    "SPMC": "苹果7plus手机壳男女款7p套i8全包防摔iphone8女潮牌硅胶指环支架",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=552711709447",
                    "SPZT": "https://img.alicdn.com/imgextra/i1/2855961364/TB2Ckzmcx6I8KJjSszfXXaZVXXa_!!2855961364.png",
                    "SPYXL": 7694,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=cd6324fb513548dea236135f2ccb8f86&pid=mm_124544751_33334167_118612702&itemId=552711709447",
                    "FP": "23",
                    "CP": "5.00",
                    "SPJG": "28.00",
                    "Type": 0
                },
                {
                    "SPID": 557608977965,
                    "SPMC": "oppor9s手机壳r9plus保护套薄男女款新小黄鸡oppor11硅胶软全包潮",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=557608977965",
                    "SPZT": "https://img.alicdn.com/bao/uploaded/i1/3362918083/TB1icOnXKKAUKJjSZFzXXXdQFXa_!!0-item_pic.jpg_400x400",
                    "SPYXL": 193,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=64830621073f4b0aa37deff45afab1da&pid=mm_124544751_33334167_118612702&itemId=557608977965",
                    "FP": "15.1",
                    "CP": "10.00",
                    "SPJG": "25.10",
                    "Type": 0
                },
                {
                    "SPID": 548624991904,
                    "SPMC": "华为mate9手机壳带指环扣支架mate8硅胶保护套",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=548624991904",
                    "SPZT": "https://img.alicdn.com/imgextra/i2/2086921179/TB2iTdsi43IL1JjSZPfXXcrUVXa_!!2086921179.jpg_400x400",
                    "SPYXL": 4340,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=fb791e35988c4813b9048044ee716036&pid=mm_124544751_33334167_118612702&itemId=548624991904",
                    "FP": "29",
                    "CP": "20.00",
                    "SPJG": "49.00",
                    "Type": 0
                },
                {
                    "SPID": 561544919742,
                    "SPMC": "爱国者/Aigo卡通小熊oppor9s手机壳r9plus全包保护套R11plus浮雕挂绳女款新潮",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=561544919742",
                    "SPZT": "https://img.alicdn.com/imgextra/i3/3441344877/TB2BTnLdf2H8KJjy1zkXXXr7pXa_!!3441344877.jpg_400x400",
                    "SPYXL": 191,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=b1a3d5c355d548ea8783aa504dca728c&pid=mm_124544751_33334167_118612702&itemId=561544919742",
                    "FP": "18",
                    "CP": "10.00",
                    "SPJG": "28.00",
                    "Type": 0
                },
                {
                    "SPID": 558086853341,
                    "SPMC": "苹果6手机壳硅胶包边情侣搞怪黑色简约iphone7plus保护套潮男款8p",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=558086853341",
                    "SPZT": "https://img.alicdn.com/imgextra/i2/2098982131/TB2638DbRUSMeJjSszcXXbnwVXa_!!2098982131.jpg_400x400",
                    "SPYXL": 70,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=9b0ac22f5a4449269ed9561c809e8a03&pid=mm_124544751_33334167_118612702&itemId=558086853341",
                    "FP": "14.9",
                    "CP": "15.00",
                    "SPJG": "29.90",
                    "Type": 0
                },
                {
                    "SPID": 560048892816,
                    "SPMC": "华为mate10手机壳 mate10pro保护套男防摔磨砂全包硅胶超薄 哥令",
                    "TBKLJ": "http://h5.m.taobao.com/awp/core/detail.htm?id=560048892816",
                    "SPZT": "https://img.alicdn.com/imgextra/i2/1721189023/TB2yJqHnbsTMeJjSszdXXcEupXa_!!1721189023.jpg_400x400",
                    "SPYXL": 1596,
                    "DPMC": "",
                    "PTLX": "1",
                    "YHQSYL": 0,
                    "SPYHQTGLJ": "https://uland.taobao.com/coupon/edetail?activityId=687d2896faaf42b48fb97c455c93405b&pid=mm_124544751_33334167_118612702&itemId=560048892816",
                    "FP": "18",
                    "CP": "5.00",
                    "SPJG": "23.00",
                    "Type": 0
                }
            ]
        }
    }
    keyExtra(item) {
        return item.SPID;
    }
    renderItem(data) {
        var item = data.item;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.productItem}>
                <Image style={styles.image}
                    source={{ uri: item.SPZT }} />
                <Text style={styles.name}
                    numberOfLines={1}>
                    {item.SPMC}
                </Text>
                <View style={styles.price}>
                    <Text style={styles.txt}>
                        券后
                        </Text>
                    <Text style={styles.cprice}>
                        {item.FP}
                    </Text>
                    <Text style={styles.rprice}>
                        {item.SPJG}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
    renderSeparator() {
        return (<View style={styles.separator}>
        </View>);
    }
    render() {
        return (
            <View
                style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headLogo}>

                    </View>
                    <Text style={styles.title}>
                        Top榜单
                    </Text>
                </View>
                <FlatList
                    style={styles.body}
                    horizontal={true}
                    data={this.state.topList}
                    renderItem={this.renderItem.bind(this)}
                    refreshing={true}
                    keyExtractor={this.keyExtra}
                    extraData={this.state}
                    showsHorizontalScrollIndicator={false}
                >
                </FlatList>
            </View>);
    }
}

var styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: '#FFFFFF',
    },
    separator: {
        width: 5
    },
    header: {
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        flexDirection: 'row'
    },
    headLogo: {
        width: 5,
        height: 18,
        marginRight: 10,
        backgroundColor: '#FF0000'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    body: {
        flex: 1,
        marginRight: 5
    },
    productItem: {
        width: 120,
        height: 180,
        marginLeft: 5
    },
    image: {
        height: 120,
        width: '100%',
        resizeMode: 'stretch',
    },
    name: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 5,
        fontSize: 13
    },
    price: {
        height: 20,
        flexDirection: 'row',
    },
    txt: {
        width: 30
    },
    cprice: {
        color: '#FF0000',
        paddingLeft: 5,
    },
    rprice: {
        paddingLeft: 5,
        textDecorationLine: 'line-through',
        flex: 1,
        fontSize: 13
    }
});