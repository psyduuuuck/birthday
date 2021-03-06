// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "祝你的梦境温柔缱绻",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "祝你的枕头蓬松柔软",  // 同上...
        "祝你抬起头来能看到星星",
        "祝你在旧衣服里找到零钱",
        "祝你能抢到演唱会最好的票",
        "祝你喜欢的卷饼店从不收摊",
        "祝你每次洗澡都是刚好的水温",
        "祝你所有的期待都能变成实现",
        "祝你摇摇晃晃的冰淇淋球从不掉落",
        "祝你永远吃到冰西瓜中心的一口甜",
        "祝你总能从冰箱里找到最后一支雪糕",
        "祝你遇到的每只狗狗都向你摇晃尾巴",
        "祝好运始终与你相伴",
        "如若这一切太难",
        "那我愿你过得简单",
        "愿你永远对世界保持好奇",
        "愿你成为四岁时想要成为的样子",
        "我会一直在你身边",
        "生日快乐",
        "muuuuuuuuua",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "祝你的梦境温柔缱绻": "./imgs/mengjing.jpg",
                "祝你的枕头蓬松柔软": "./imgs/zhentou.jpg",
                "祝你抬起头来能看到星星": "./imgs/xingxing.jpg",
                "祝你在旧衣服里找到零钱": "./imgs/lingqian.jpg",
                "祝你能抢到演唱会最好的票": "./imgs/yanchanghui.jpg",
                "祝你喜欢的卷饼店从不收摊": "./imgs/juanbingdian.jpg",
                "祝你每次洗澡都是刚好的水温": "./imgs/xizao.jpg",
                "祝你所有的期待都能变成实现": "./imgs/qidai.jpg",
                "祝你摇摇晃晃的冰淇淋球从不掉落": "./imgs/bingqilin.jpg",
                "祝你永远吃到冰西瓜中心的一口甜": "./imgs/xigua.jpg",
                "祝你总能从冰箱里找到最后一支雪糕": "./imgs/xuegao.jpg",
                "祝你遇到的每只狗狗都向你摇晃尾巴": "./imgs/gougou.jpg",
                "那我愿你过得简单": "./imgs/jiandan.jpg",
                "愿你永远对世界保持好奇": "./imgs/haoqi.jpg",
                "愿你成为四岁时想要成为的样子": "./imgs/sisui.jpg",
                "我会一直在你身边": "./imgs/shenbian.jpg",
         "生日快乐": "./imgs/shengrikuaile.jpg",
         "muuuuuuuuua": "./imgs/mua.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "大头来唱首歌",
        bannar_coming: "大头快去挂横幅",
        balloons_flying: "气球呢气球呢",
        cake_fadein: "蛋糕！",
        light_candle: "蜡烛！",
        wish_message: "生日快乐！",
        story: "这里有您的一条留言",
    }
};
