const TRIGRAMS = [
  {
    name: "乾",
    order: 1,
    symbol: "☰",
    lines: [1, 1, 1],
    element: "金",
    direction: "西北",
    color: "白、黄",
    taste: "辛、辣",
    core: ["天", "圆", "君父", "刚健", "权威", "金玉", "寒冰", "马"],
    art: "sky",
    artColor: "#b88a2d",
    artSoft: "#f0e3c2",
    classic: {
      天时: ["天", "冰", "雹", "霰"],
      地理: ["西北方", "京都", "大郡", "形胜之地", "高亢之所"],
      人物: ["君", "父", "大人", "老人", "长者", "官宦", "名人", "公门人"],
      人事: ["刚健武勇", "果决", "多动少静"],
      身体: ["首", "骨", "肺"],
      动物: ["马", "天鹅", "狮", "象"],
      静物: ["金玉", "宝珠", "圆物", "水果", "刚物", "冠", "镜"],
      屋舍: ["公廨", "楼台", "高堂", "大厦", "驿舍", "西北向之居"],
      疾病: ["头面之疾", "肺疾", "筋骨疾", "上焦疾"],
      数目: ["一", "四", "九"]
    },
    modern: {
      象意: ["积极", "向上", "刚健有力", "权威", "圆形", "男性长辈", "珍贵", "寒冷", "坚硬易碎", "在上"],
      人物: ["领导者", "有权者", "富有者", "官员", "君王", "父亲", "家长", "军警", "执法者", "经理", "名人", "专家"],
      性格: ["刚健武勇", "果决", "重义气", "威严", "豁达", "自尊", "正直", "勤勉", "骄傲", "霸道"],
      人体: ["头", "胸部", "大肠", "肺", "右足", "右下腹", "男性生殖器"],
      疾病: ["头面之疾", "筋骨疾", "肺疾", "骨病", "寒症", "硬性疾病", "老病", "急性病", "结肠病"],
      天象: ["太阳", "晴", "冰", "雹", "寒", "凉"],
      动物: ["龙", "马", "天鹅", "狮", "象"],
      物象: ["金", "玉", "珠宝", "钟表", "镜子", "眼镜", "古董", "首饰", "高级车辆", "火车", "飞机", "水果", "圆形物体"],
      场所: ["皇宫", "京城", "都市", "博物馆", "寺院", "政府机构", "大会堂", "广场", "车站", "学校楼"],
      方位颜色: ["有利西北、西、东北、西南", "忌南方", "喜黄白", "忌红"]
    }
  },
  {
    name: "坤",
    order: 8,
    symbol: "☷",
    lines: [0, 0, 0],
    element: "土",
    direction: "西南",
    color: "黄、黑",
    taste: "甘",
    core: ["地", "母", "众", "柔顺", "承载", "方形", "田土", "牛"],
    art: "earth",
    artColor: "#7a693c",
    artSoft: "#e7dfcb",
    classic: {
      天时: ["云阴", "雾气"],
      地理: ["田野", "乡里", "平地", "西南方"],
      人物: ["老母", "后母", "农夫", "乡人", "众人", "大腹人"],
      人事: ["吝啬", "柔顺", "懦弱", "众多"],
      身体: ["腹", "脾", "胃", "肉"],
      动物: ["牛", "百兽", "牝马"],
      静物: ["方物", "柔物", "布帛", "丝绵", "五谷", "舆釜", "瓦器"],
      屋舍: ["西南向", "村居", "田舍", "矮屋", "土阶", "仓库"],
      疾病: ["腹疾", "脾胃之疾", "饮食停伤", "谷食不化"],
      数目: ["八", "五", "十"]
    },
    modern: {
      象意: ["消极", "阴柔", "方形", "软弱无力", "众多", "厚德", "承载", "辛劳", "静止", "裂开"],
      人物: ["皇妃", "臣子", "大众", "祖母", "老母", "后母", "妻子", "女主人", "农夫", "房地产者", "泥瓦工"],
      性格: ["温厚柔顺", "恭敬谦让", "俭约", "守信诚实", "吝啬", "懦弱", "迟钝", "固执"],
      人体: ["腹部", "胃", "消化器", "肉", "右肩"],
      疾病: ["腹部病", "肠胃病", "消化道病", "饮食停滞", "湿重浮肿", "皮肤病", "湿疹", "慢性病", "癌症"],
      天象: ["云", "阴天", "雾气", "露", "潮湿气候", "低气压"],
      动物: ["牛", "母马", "百禽", "雌性百兽", "地下虫类", "夜行动物"],
      物象: ["国邦", "田", "土", "方形物", "柔软之物", "布帛丝棉", "衣服被褥", "纸张", "箱包袋子", "陶器", "五谷杂粮"],
      场所: ["城廓", "乡村田野", "平原", "郊外", "牧场", "庄稼地", "老家故乡", "广场空地", "农舍", "粮库", "农贸市场"],
      方位颜色: ["有利西南、东北、南方", "不利东、西、西北", "喜红黄", "忌绿"]
    }
  },
  {
    name: "震",
    order: 4,
    symbol: "☳",
    lines: [0, 0, 1],
    element: "木",
    direction: "东",
    color: "青、绿、碧",
    taste: "甘、酸",
    core: ["雷", "动", "长男", "龙", "竹木", "出发", "惊动", "声音"],
    art: "thunder",
    artColor: "#2f7a48",
    artSoft: "#dcebdc",
    classic: {
      天时: ["雷"],
      地理: ["东方", "树木", "闹市", "大途", "竹林", "草木茂盛之所"],
      人物: ["长男"],
      人事: ["起动", "怒", "虚惊", "鼓动噪", "多动少静"],
      身体: ["足", "肝", "发", "声音"],
      动物: ["龙", "蛇"],
      静物: ["木竹", "萑苇", "乐器", "花草繁鲜之物"],
      屋舍: ["东向之居", "山林之处", "楼阁"],
      疾病: ["足疾", "肝经之疾", "惊怖不安"],
      数目: ["四", "八", "三"]
    },
    modern: {
      象意: ["上升", "进步", "出发", "兴起", "新生", "勇敢", "仁慈", "影响广", "好动", "惊恐", "虚惊", "高声"],
      人物: ["长男", "大男", "乘务员", "指挥员", "行政人员"],
      性格: ["动而少静", "勤奋", "有才干", "仁慈直爽", "性急易怒", "自尊心强"],
      人体: ["足", "腿部", "肝脏", "神经", "筋", "左肋", "右肩臂", "头发"],
      疾病: ["足疾", "肝经之疾", "肝炎", "精神病", "狂躁病", "多动症", "神经衰弱", "惊吓病", "声带咽喉病"],
      天象: ["雷", "雷雨", "雷鸣", "地震", "火山喷发"],
      动物: ["龙", "蛇", "鹰", "善鸣之马", "善鸣之鸟", "蜂", "百虫"],
      物象: ["树木", "竹子", "鲜花", "蔬菜", "嫩芽", "青绿色物", "茶货", "鞭炮", "乐器音响", "广播电话", "车类", "火箭", "武器"],
      场所: ["山林野地", "林区", "东向屋舍", "菜市场", "演奏会场", "广播电台", "歌舞厅", "闹市", "机场", "战场", "军警部门"],
      方位颜色: ["有利东、北、东南", "忌西、西北", "喜青碧绿黑", "忌白"]
    }
  },
  {
    name: "巽",
    order: 5,
    symbol: "☴",
    lines: [1, 1, 0],
    element: "木",
    direction: "东南",
    color: "青、绿、碧、白",
    taste: "酸",
    core: ["风", "入", "长女", "木", "绳直", "进退", "交易", "渗透"],
    art: "wind",
    artColor: "#2d7c73",
    artSoft: "#d8ece7",
    classic: {
      天时: ["风"],
      地理: ["东南方之地", "草木茂秀之所", "花果菜园"],
      人物: ["长女", "秀士", "寡妇", "山林仙道之人"],
      人事: ["柔和", "不定", "鼓舞", "利市三倍", "进退不果"],
      身体: ["肱", "股", "气", "风疾"],
      动物: ["鸡", "百禽", "山林中之禽", "虫"],
      静物: ["木香", "绳", "直物", "长物", "竹木", "工巧之器"],
      屋舍: ["东南向之居", "寺观楼台", "山林之居"],
      疾病: ["股肱之疾", "风疾", "肠疾", "中风", "寒邪", "气疾"],
      数目: ["五", "三", "八"]
    },
    modern: {
      象意: ["基础不稳", "直爽", "涣散", "清洁", "整齐", "传达", "营业生意", "交流", "书信", "教令", "奔波", "忧疑"],
      人物: ["长女", "处女", "寡妇", "僧尼", "气功师", "商人", "教师", "医生", "技术人员", "手艺人", "作家", "设计师"],
      性格: ["柔和", "细心", "责任心强", "反复无定", "心志不定", "仁慈直爽", "多欲", "极爱清洁", "疑惑隐伏"],
      人体: ["头发", "神经", "气管", "胆经", "肱股", "呼吸器官", "食道", "肠道", "左肩", "淋巴系统", "血管"],
      疾病: ["胆疾", "中风", "肠疾胀气", "伤风", "感冒", "风湿", "传染", "坐骨神经痛", "支气管炎", "哮喘", "淋巴疾病"],
      天象: ["刮风", "各种大风", "高空长条云"],
      动物: ["鸡鸭鹅", "羽禽", "山林禽虫", "蚯蚓", "蛇", "蝴蝶", "蜻蜓", "带鱼", "鳗鱼", "虎", "猫", "斑马"],
      物象: ["木材", "木制品", "纤维品", "丝线", "绳子", "扇", "邮件", "旗杆", "长条桌柜", "笔", "管形物", "帆船", "飞机", "香料", "草药"],
      场所: ["竹林草原", "直而宽的道路", "过道", "长廊", "寺观", "线路", "管道", "邮局", "商店", "码头", "港口", "机场", "设计院"],
      方位颜色: ["与震卦相同", "有利东、北、东南", "喜青碧绿黑"]
    }
  },
  {
    name: "坎",
    order: 6,
    symbol: "☵",
    lines: [0, 1, 0],
    element: "水",
    direction: "北",
    color: "黑",
    taste: "咸、酸",
    core: ["水", "险", "中男", "沟渎", "月", "盗", "耳", "肾"],
    art: "water",
    artColor: "#356a98",
    artSoft: "#dce9f1",
    classic: {
      天时: ["月", "雨", "雪", "霜", "露"],
      地理: ["北方", "江湖", "溪涧", "泉井", "卑湿之地", "沟渎", "池沼"],
      人物: ["中男", "江湖之人", "舟人", "盗贼"],
      人事: ["险陷卑下", "外柔内刚", "漂泊不成", "随波逐流"],
      身体: ["耳", "血", "肾"],
      静物: ["带核之物", "弓轮", "矫揉之物", "酒器", "水具"],
      屋舍: ["向北之居", "近水", "水阁", "江楼"],
      疾病: ["耳痛", "心疾", "感寒", "肾疾", "胃冷", "水泻", "血病"],
      数目: ["一", "六"]
    },
    modern: {
      象意: ["聪明", "智慧", "善谋", "坚持不懈", "以柔胜刚", "曲折坎坷", "漂泊多变", "暗昧", "哭泣", "欺诈", "险难", "法律"],
      人物: ["中男", "江湖之人", "船员", "思想家", "发明家", "数学家", "心理学家", "保安", "劳务者", "冒险者", "酒鬼", "诈骗者"],
      性格: ["外柔内刚", "善谋多智", "多欲", "喜算计", "多心计", "城府深", "做事有主见", "随波逐流"],
      人体: ["肾脏", "膀胱", "泌尿系统", "性器官", "血液", "血液循环", "耳", "背", "腰", "脊骨"],
      疾病: ["肾病", "膀胱病", "泌尿系统疾病", "血液病", "出血症", "免疫系统疾病", "性病", "中毒", "耳痛", "腰背疾病", "水肿"],
      天象: ["雨", "雪", "霜", "露", "寒冷", "阴湿", "满月", "积雨云", "半夜", "水灾"],
      动物: ["猪", "鱼", "水中物", "水鸟", "鼠", "四足动物", "脊椎动物", "驾辕之马"],
      物象: ["带核果实", "油酒醋", "饮料", "液体", "染料", "药品毒物", "酒具", "车轮", "法律经典", "刑具", "冷藏设备", "潜艇", "计算机", "黑色物"],
      场所: ["大川", "江湖海河", "溪涧泉水", "水道", "酒吧", "澡池", "鱼市", "水厂", "冷库", "地下室", "暗室", "牢狱"],
      方位颜色: ["有利北、西、西北", "不利西南、东北", "喜黑白", "忌黄"]
    }
  },
  {
    name: "离",
    order: 3,
    symbol: "☲",
    lines: [1, 0, 1],
    element: "火",
    direction: "南",
    color: "赤、紫、红",
    taste: "苦",
    core: ["火", "日", "电", "中女", "文明", "甲胄", "目", "心"],
    art: "fire",
    artColor: "#c84b35",
    artSoft: "#f4ddd3",
    classic: {
      天时: ["日", "电", "虹", "霓", "霞"],
      地理: ["南方", "干亢之地", "窑灶", "炉冶之所", "刚燥之地"],
      人物: ["中女", "文人", "大腹", "目疾人", "甲胄之士"],
      人事: ["文画之所", "聪明才学", "相见虚心", "书事"],
      身体: ["目", "心", "上焦"],
      动物: ["雉", "龟", "鳖", "蟹", "螺", "蚌"],
      静物: ["火", "书", "文", "甲胄", "干戈", "干燥之物", "赤色之物"],
      屋舍: ["南舍之居", "阳明之宅", "明窗", "虚室"],
      疾病: ["目疾", "心疾", "上焦热病", "伏暑", "时疫"],
      数目: ["三", "二", "七"]
    },
    modern: {
      象意: ["明", "进升", "依附", "华丽", "鲜艳", "文明", "礼仪", "明察", "发现", "扩张", "外强中干", "焦躁", "显示"],
      人物: ["中女", "文人", "大腹人", "目疾人", "戴头盔者", "兵"],
      性格: ["重礼", "好美", "有依赖性", "聪明好学", "虚心", "知书达理", "性急", "易冲动"],
      人体: ["眼目", "心脏", "视力", "红血球", "血液", "乳房", "上焦", "头面", "喉", "小肠"],
      疾病: ["眼病", "视力疾病", "心脏病", "烧烫伤", "放射性疾病", "乳腺疾病", "发烧", "炎症", "血液病", "妇科病"],
      天象: ["晴天", "热天", "酷暑", "烈日", "干旱", "彩虹", "云霞", "闪电"],
      动物: ["雉", "孔雀", "凤凰", "金鱼", "热带鱼", "变色龙", "虾", "蟹", "贝类", "龟", "鳖", "萤火虫"],
      物象: ["文学艺术", "字画", "文件", "文章", "书报杂志", "地图课本", "印章", "证件", "电话", "火柴", "打火机", "发动机", "玻璃门窗"],
      场所: ["朝阳地", "名胜地", "教堂", "殿堂", "学校", "博物馆", "展览馆", "影剧院", "证券交易所", "图书馆", "电厂", "厨房", "军营", "法院"],
      方位颜色: ["有利东、南、东南", "忌北", "喜红绿", "忌黑"]
    }
  },
  {
    name: "艮",
    order: 7,
    symbol: "☶",
    lines: [1, 0, 0],
    element: "土",
    direction: "东北",
    color: "黄",
    taste: "甘",
    core: ["山", "止", "少男", "门阙", "小石", "果蓏", "手", "背"],
    art: "mountain",
    artColor: "#6a6f55",
    artSoft: "#e0e5d6",
    classic: {
      天时: ["云", "雾", "山岚"],
      地理: ["山径路", "近山城", "丘陵", "坟墓", "东北方"],
      人物: ["少男", "闲人", "山中人"],
      人事: ["阻隔", "守静", "进退不决", "反背", "止住", "不见"],
      身体: ["手指", "骨", "鼻", "背"],
      动物: ["虎", "狗", "鼠", "百兽", "黔喙之物"],
      静物: ["土石", "瓜果", "黄物", "土中之物"],
      屋舍: ["东北方之居", "山居近石", "近路之宅"],
      疾病: ["手指之疾", "脾胃之疾"],
      数目: ["五", "七", "十"]
    },
    modern: {
      象意: ["禁止", "阻滞", "静止", "慎守", "界限", "安居", "沉着", "冷静", "隐藏", "固执", "转折", "等待"],
      人物: ["小儿子", "门卫", "领头的"],
      性格: ["憨厚", "安静", "笃实", "保守", "固执", "诚实", "守信用", "迟滞", "审慎"],
      人体: ["鼻", "背", "手背", "指关节", "骨", "脾", "趾", "皮", "手", "脚背", "膝关节", "肘关节", "左足", "颧骨"],
      疾病: ["脾胃病", "鼻炎", "手脚背之疾", "麻木病", "关节病", "手指疾", "肿瘤", "结石", "消化系统病"],
      天象: ["有云无雨", "多云间阴", "山风雾气", "气候转折点"],
      动物: ["有牙有角动物", "狗", "鼠", "狼", "熊", "喜鹊", "鸷鸽", "爬虫类", "昆虫", "家畜", "有尾动物"],
      物象: ["岩石", "石块", "门板", "凳子", "床", "柜子", "桌子", "碑", "硬木", "硬果皮", "柜台", "鞋", "钱袋", "金库", "坟墓", "阶梯"],
      场所: ["山", "土包", "假山", "丘陵", "坟墓", "堤坝", "交叉点", "最高点", "山路", "矿山", "房屋", "贮藏室", "仓库", "银行", "岗位", "监狱"],
      方位颜色: ["有利东北、西南、南方", "忌东、东南", "喜红黄", "忌绿"]
    }
  },
  {
    name: "兑",
    order: 2,
    symbol: "☱",
    lines: [0, 1, 1],
    element: "金",
    direction: "西",
    color: "白",
    taste: "辛、辣",
    core: ["泽", "悦", "少女", "口舌", "毁折", "羊", "金刀", "新月"],
    art: "lake",
    artColor: "#6a5a8e",
    artSoft: "#e5e0ef",
    classic: {
      天时: ["雨泽", "新月", "星"],
      地理: ["泽", "水际", "缺池", "废井", "山崩破裂之地", "刚卤之地"],
      人物: ["少女", "妾", "歌妓", "伶人", "译人", "巫师"],
      人事: ["喜悦", "口舌", "谗毁", "谤说", "饮食"],
      身体: ["舌", "口喉", "肺", "痰", "涎"],
      动物: ["羊", "泽中之物"],
      静物: ["金刀", "金类", "乐器", "废物", "缺器"],
      屋舍: ["西向之居", "近泽之居", "败墙壁宅", "户有损"],
      疾病: ["口舌", "咽喉之疾", "气逆喘疾", "饮食不飧"],
      数目: ["四", "二", "九"]
    },
    modern: {
      象意: ["说", "雄辩", "讲演", "言谈", "议论", "笑", "骂", "吵闹", "毁谤", "叫卖", "魅力", "爱欲", "破损", "音乐"],
      人物: ["少女", "朋友", "老师", "教授", "演讲者", "解说员", "翻译", "外科医生", "牙科医生", "秘书", "媒人", "演员", "音乐家", "服务员"],
      性格: ["喜悦", "吵架", "毁谤", "奉承", "温和", "善言", "活跃", "温厚", "重感情", "感召力强", "破坏性"],
      人体: ["口", "舌", "肺", "痰", "涎", "气管", "口角", "咽喉", "颊骨", "牙齿", "右肋", "肛门", "右肩臂"],
      疾病: ["口舌病", "喉病", "牙病", "咳嗽", "痰喘", "肺病", "食欲不振", "膀胱疾病", "外伤", "肛门疾病", "手术", "皮肤病"],
      天象: ["小雨", "潮湿天气", "低气压", "短期气象", "新月", "星星", "露水"],
      动物: ["羊", "豹", "猿猴", "兔子", "泽中之物"],
      物象: ["饮食用具", "食品", "盛水用具", "金属币", "刀剑", "剪刀", "玩具", "开口瓶罐", "破损物", "乐器", "石榴", "胡桃", "垃圾箱"],
      场所: ["沼泽地", "坑洼地", "凹地", "水井", "湖泊", "游乐园", "会议厅", "音乐厅", "饭馆", "门口", "路口", "废墟", "洞穴", "演出厅"],
      方位颜色: ["有利西、西北、东北、西南", "忌南方", "次忌北方", "喜白黄", "忌红"]
    }
  }
];

const state = {
  selected: TRIGRAMS[0].name,
  mode: "overview",
  card: null,
  cardFlipped: false,
  quiz: null,
  progress: JSON.parse(localStorage.getItem("wanwuProgress") || "{}")
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char];
  });
}

function trigramByName(name) {
  return TRIGRAMS.find((item) => item.name === name) || TRIGRAMS[0];
}

function trigramLines(lines, className = "") {
  return `<div class="trigram-lines ${className}">${lines
    .map((line) => `<i class="line ${line ? "" : "broken"}"></i>`)
    .join("")}</div>`;
}

function trigramSeal(trigram) {
  return `
    <div class="trigram-seal" aria-label="${trigram.name}${trigram.symbol}">
      <span class="seal-name">${trigram.name}</span>
      ${trigramLines(trigram.lines, "seal-lines")}
      <span class="seal-symbol">${trigram.symbol}</span>
    </div>
  `;
}

function readCustomItems() {
  try {
    const parsed = JSON.parse(localStorage.getItem("wanwuCustomItems") || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCustomItems(items) {
  localStorage.setItem("wanwuCustomItems", JSON.stringify(items));
  queueCloudSave();
}

function customItemsFor(trigramName) {
  return readCustomItems().filter((item) => item.trigram === trigramName);
}

function sourceLabel(source) {
  if (source === "modern") return "现代易象";
  if (source === "custom") return "我的类象";
  return "传统类象";
}

function flattenItems() {
  const items = [];
  TRIGRAMS.forEach((trigram) => {
    ["classic", "modern"].forEach((source) => {
      Object.entries(trigram[source]).forEach(([category, values]) => {
        values.forEach((value) => {
          items.push({ trigram: trigram.name, source, category, value });
        });
      });
    });
  });
  return [...items, ...readCustomItems()];
}

const ALL_ITEMS = flattenItems();

function rebuildAllItems() {
  ALL_ITEMS.splice(0, ALL_ITEMS.length, ...flattenItems());
}

function saveProgress() {
  localStorage.setItem("wanwuProgress", JSON.stringify(state.progress));
  queueCloudSave();
  renderProgress();
}

function renderProgress() {
  const total = Object.keys(state.progress).length;
  const known = Object.values(state.progress).filter((grade) => grade === "known" || grade === "familiar" || grade === "retired").length;
  $("#cardCount").textContent = total;
  $("#masteryText").textContent = `熟悉率 ${total ? Math.round((known / total) * 100) : 0}%`;
}

function renderNav() {
  $("#trigramNav").innerHTML = TRIGRAMS.map((item) => {
    const active = item.name === state.selected ? "active" : "";
    return `<button class="nav-card ${active}" data-trigram="${item.name}">
      <span class="mini-symbol">${trigramLines(item.lines)}</span>
      <span><strong>${item.name}${item.symbol}</strong><small>${item.element} · ${item.direction}</small></span>
      <small>${item.order}</small>
    </button>`;
  }).join("");
}

function renderOverview() {
  const item = trigramByName(state.selected);
  $("#overviewView").innerHTML = `
    <div class="hero-panel">
      <div class="visual-panel">
        <div class="visual-art">${trigramSeal(item)}</div>
        <div class="visual-caption">
          <div>
            <h2>${item.name}${item.symbol}</h2>
            <p>五行 ${item.element} · 方位 ${item.direction} · 颜色 ${item.color}</p>
          </div>
          <div class="big-symbol">${trigramLines(item.lines)}</div>
        </div>
      </div>
      <div class="detail-panel">
        <div class="meta-grid">
          <div class="meta-item"><span>五行</span><strong>${item.element}</strong></div>
          <div class="meta-item"><span>方位</span><strong>${item.direction}</strong></div>
          <div class="meta-item"><span>颜色</span><strong>${item.color}</strong></div>
          <div class="meta-item"><span>五味</span><strong>${item.taste}</strong></div>
        </div>
        <h3 class="section-title">核心象意</h3>
        <div class="tag-cloud">${item.core.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    </div>
    <div class="category-grid">
      ${renderCategoryCards(item)}
    </div>
    <p class="source-note">数据依据第 8 章“万物类象汇总（重点）”OCR 提取后整理；完整 OCR 原文见同目录外层的 wanwu-leixiang-ocr.txt。</p>
  `;
}

function renderCategoryCards(item) {
  const modern = Object.entries(item.modern).map(([name, values]) => `
    <article class="category-card">
      <h3>${name}</h3>
      <p>${values.join("、")}</p>
    </article>`);
  const classic = Object.entries(item.classic).map(([name, values]) => `
    <article class="category-card">
      <h3>传统 · ${name}</h3>
      <p>${values.join("、")}</p>
    </article>`);
  return [...modern, ...classic].join("");
}

function pickCard() {
  const weighted = ALL_ITEMS.filter((item) => !isFamiliarGrade(state.progress[cardKey(item)]) && state.progress[cardKey(item)] !== "retired");
  const deck = weighted.length ? weighted : ALL_ITEMS;
  state.card = deck[Math.floor(Math.random() * deck.length)];
  state.cardFlipped = false;
}

function cardKey(card) {
  return `${card.trigram}|${card.source}|${card.category}|${card.value}`;
}

function renderCards() {
  if (!state.card) pickCard();
  const card = state.card;
  const trigram = trigramByName(card.trigram);
  $("#cardsView").innerHTML = `
    <div class="tool-panel">
      <div class="flashcard">
        <div>
          <div class="prompt">${state.cardFlipped ? "答案" : "回忆对应卦象"}</div>
          <div class="main">${state.cardFlipped ? `${trigram.name}${trigram.symbol}` : escapeHtml(card.value)}</div>
          ${
            state.cardFlipped
              ? `<div class="answer">${card.category} · ${sourceLabel(card.source)}<br>${trigram.element} · ${trigram.direction}</div>`
              : `<div class="answer">提示：这是“${card.category}”类象</div>`
          }
        </div>
      </div>
      <div class="card-controls">
        <button class="primary-button" id="flipCard">${state.cardFlipped ? "收起答案" : "显示答案"}</button>
        <button class="grade-button" data-grade="again">陌生</button>
        <button class="grade-button" data-grade="hard">模糊</button>
        <button class="grade-button" data-grade="familiar">熟悉</button>
        <button class="grade-button" id="retireCard">不再复习</button>
      </div>
    </div>
  `;
}

function newQuiz() {
  const question = ALL_ITEMS[Math.floor(Math.random() * ALL_ITEMS.length)];
  const options = [question.trigram];
  while (options.length < 4) {
    const candidate = TRIGRAMS[Math.floor(Math.random() * TRIGRAMS.length)].name;
    if (!options.includes(candidate)) options.push(candidate);
  }
  state.quiz = {
    question,
    options: options.sort(() => Math.random() - 0.5),
    answered: null
  };
}

function renderQuiz() {
  if (!state.quiz) newQuiz();
  const { question, options, answered } = state.quiz;
  $("#quizView").innerHTML = `
    <div class="tool-panel">
      <div class="quiz-question">
        <span>${question.category}类象对应哪一卦？</span>
        <strong>${escapeHtml(question.value)}</strong>
      </div>
      <div class="quiz-options">
        ${options
          .map((name) => {
            const tri = trigramByName(name);
            let cls = "";
            if (answered) cls = name === question.trigram ? "correct" : name === answered ? "wrong" : "";
            return `<button class="answer-button ${cls}" data-answer="${name}">${tri.name}${tri.symbol} · ${tri.element} · ${tri.direction}</button>`;
          })
          .join("")}
      </div>
      <div class="card-controls">
        <button class="primary-button" id="nextQuiz">下一题</button>
      </div>
    </div>
  `;
}

const SEARCH_EXPANSIONS = {
  大地: ["地", "土地", "田野", "平地", "坤"],
  土地: ["地", "田野", "平地", "坤"],
  天空: ["天", "晴", "太阳", "乾"],
  苍天: ["天", "乾"],
  父亲: ["父", "父亲", "家长", "乾"],
  母亲: ["母", "老母", "祖母", "坤"],
  高山: ["山", "丘陵", "山路", "艮"],
  河流: ["水", "江湖", "河", "坎"],
  湖泊: ["泽", "湖泊", "水井", "兑"],
  雷声: ["雷", "雷鸣", "声音", "震"],
  火焰: ["火", "烈日", "烧", "离"],
  风声: ["风", "刮风", "巽"]
};

function normalizeSearchTerm(value) {
  return String(value || "").trim().replace(/\s+/g, "");
}

function expandedSearchTerms(query) {
  const q = normalizeSearchTerm(query);
  if (!q) return [];
  const terms = new Set([q]);
  if (q.length >= 2) {
    Object.entries(SEARCH_EXPANSIONS).forEach(([key, values]) => {
      if (key.includes(q) || q.includes(key)) {
        values.forEach((value) => terms.add(value));
      }
    });
    if (SEARCH_EXPANSIONS[q]) SEARCH_EXPANSIONS[q].forEach((value) => terms.add(value));
  }
  return [...terms].filter(Boolean).sort((a, b) => b.length - a.length);
}

function fuzzyScore(value, terms) {
  const target = normalizeSearchTerm(value);
  if (!target) return null;
  let best = null;
  terms.forEach((term, index) => {
    let score = null;
    if (target === term) score = index === 0 ? 0 : 2;
    else if (target.includes(term)) score = index === 0 ? 1 : 3;
    else if (term.length >= 2 && target.length >= 2 && term.includes(target)) score = 4;
    else if (term.length >= 2 && [...term].every((char) => target.includes(char))) score = 5;
    if (score !== null && (best === null || score < best)) best = score;
  });
  return best;
}

function relatedTrigramsForSearch(query) {
  const terms = expandedSearchTerms(query);
  if (!terms.length) return [];
  return TRIGRAMS.map((trigram) => {
    const fields = [trigram.name, trigram.symbol, trigram.element, trigram.direction, trigram.color, trigram.taste, ...trigram.core];
    const scores = fields.map((field) => fuzzyScore(field, terms)).filter((score) => score !== null);
    return scores.length ? { trigram, score: Math.min(...scores) } : null;
  })
    .filter(Boolean)
    .sort((a, b) => a.score - b.score || TRIGRAMS.indexOf(a.trigram) - TRIGRAMS.indexOf(b.trigram));
}

function searchItems(query) {
  const q = query.trim();
  if (!q) return ALL_ITEMS.slice(0, 80);
  const terms = expandedSearchTerms(q);
  return ALL_ITEMS.map((item) => {
    let score = fuzzyScore(item.value, terms);
    const categoryScore = q.length >= 2 ? fuzzyScore(item.category, [q]) : null;
    if (categoryScore !== null) score = score === null ? categoryScore + 6 : Math.min(score, categoryScore + 6);
    return score === null ? null : { ...item, score };
  })
    .filter(Boolean)
    .sort((a, b) => a.score - b.score || a.trigram.localeCompare(b.trigram, "zh-Hans") || a.category.localeCompare(b.category, "zh-Hans"));
}

function renderSearch() {
  const query = $("#searchInput").value;
  const results = searchItems(query);
  const related = relatedTrigramsForSearch(query);
  $("#searchView").innerHTML = `
    <div class="search-results">
      ${related.length ? `<div class="related-trigrams">
        ${related.map(({ trigram }) => `<button class="related-trigram" data-result-trigram="${trigram.name}">
          <strong>${trigram.name}${trigram.symbol}</strong>
          <span>${trigram.element} · ${trigram.direction}</span>
        </button>`).join("")}
      </div>` : ""}
      ${results
        .slice(0, 160)
        .map((result) => {
          const tri = trigramByName(result.trigram);
          return `<div class="result-row">
            <strong>${tri.name}${tri.symbol}</strong>
            <span>${result.category}</span>
            <div>${result.value}<br><span>${sourceLabel(result.source)} · ${tri.element} · ${tri.direction}</span></div>
          </div>`;
        })
        .join("")}
      <p class="source-note">共 ${results.length} 条；最多显示前 160 条。</p>
    </div>
  `;
}

function switchMode(mode) {
  state.mode = mode;
  $$(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.mode === mode));
  $$(".view").forEach((view) => view.classList.remove("active"));
  $(`#${mode}View`).classList.add("active");
  renderCurrentView();
}

function renderCurrentView() {
  renderNav();
  renderProgress();
  if (state.mode === "overview") renderOverview();
  if (state.mode === "cards") renderCards();
  if (state.mode === "quiz") renderQuiz();
  if (state.mode === "search") renderSearch();
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-trigram]");
  if (nav) {
    state.selected = nav.dataset.trigram;
    switchMode("overview");
  }

  const tab = event.target.closest("[data-mode]");
  if (tab) switchMode(tab.dataset.mode);

  if (event.target.id === "flipCard") {
    state.cardFlipped = !state.cardFlipped;
    renderCards();
  }

  if (event.target.id === "retireCard" && state.card) {
    state.progress[cardKey(state.card)] = "retired";
    saveProgress();
    state.card = null;
    renderCards();
  }

  const grade = event.target.closest("[data-grade]");
  if (grade && state.card) {
    state.progress[cardKey(state.card)] = grade.dataset.grade;
    saveProgress();
    pickCard();
    renderCards();
  }

  const answer = event.target.closest("[data-answer]");
  if (answer && state.quiz && !state.quiz.answered) {
    state.quiz.answered = answer.dataset.answer;
    renderQuiz();
  }

  if (event.target.id === "nextQuiz") {
    newQuiz();
    renderQuiz();
  }

  if (event.target.id === "resetProgress") {
    state.progress = {};
    saveProgress();
    renderCurrentView();
  }
});

$("#searchInput").addEventListener("input", () => {
  if (state.mode !== "search") switchMode("search");
  renderSearch();
});

renderCurrentView();

const learningState = {
  screen: "home",
  selected: null,
  card: null,
  cardFlipped: false,
  deckTrigram: "all",
  progress: state.progress,
  review: readReviewState(),
  studyGoal: readStudyGoal(),
  customMessage: "",
  goalMessage: ""
};

const appView = () => document.querySelector("#appView");

const REVIEW_INTERVALS = [4, 7, 15, 30, 60, 90];
const PLANNED_REVIEW_INTERVALS = [1, 2, 4, 7, 15, 30];
const syncState = {
  client: null,
  user: null,
  status: "本机缓存",
  message: "",
  configured: false,
  savingTimer: null,
  applyingCloudData: false
};

function syncConfig() {
  return window.WANXIANG_SYNC_CONFIG || {};
}

function syncTableName() {
  return syncConfig().tableName || "wanxiang_user_state";
}

function hasSyncConfig() {
  const config = syncConfig();
  return Boolean(config.supabaseUrl && config.supabaseAnonKey);
}

function serializeUserData() {
  return {
    version: 1,
    progress: learningState.progress,
    review: learningState.review,
    studyGoal: learningState.studyGoal,
    customItems: readCustomItems(),
    updatedAt: new Date().toISOString()
  };
}

function applyUserData(data) {
  if (!data || typeof data !== "object") return;
  syncState.applyingCloudData = true;
  const progress = data.progress && typeof data.progress === "object" ? data.progress : {};
  const review = data.review && typeof data.review === "object" ? data.review : {};
  const studyGoal = data.studyGoal && typeof data.studyGoal === "object" ? data.studyGoal : readStudyGoal();
  const customItems = Array.isArray(data.customItems) ? data.customItems : [];
  localStorage.setItem("wanwuProgress", JSON.stringify(progress));
  localStorage.setItem("wanwuReviewState", JSON.stringify(review));
  localStorage.setItem("wanwuStudyGoal", JSON.stringify(studyGoal));
  localStorage.setItem("wanwuCustomItems", JSON.stringify(customItems));
  state.progress = progress;
  learningState.progress = progress;
  learningState.review = review;
  learningState.studyGoal = studyGoal;
  rebuildAllItems();
  syncState.applyingCloudData = false;
}

async function saveCloudState() {
  if (syncState.applyingCloudData || !syncState.client || !syncState.user) return;
  syncState.status = "同步中";
  renderLearningApp();
  const payload = {
    user_id: syncState.user.id,
    data: serializeUserData(),
    updated_at: new Date().toISOString()
  };
  const { error } = await syncState.client
    .from(syncTableName())
    .upsert(payload, { onConflict: "user_id" });
  if (error) {
    syncState.status = "同步失败";
    syncState.message = error.message;
  } else {
    syncState.status = "已同步";
    syncState.message = "";
  }
  renderLearningApp();
}

function queueCloudSave() {
  if (syncState.applyingCloudData || !syncState.client || !syncState.user) return;
  window.clearTimeout(syncState.savingTimer);
  syncState.savingTimer = window.setTimeout(() => {
    saveCloudState();
  }, 500);
}

async function loadCloudState() {
  if (!syncState.client || !syncState.user) return;
  syncState.status = "加载账号数据";
  renderLearningApp();
  const { data, error } = await syncState.client
    .from(syncTableName())
    .select("data")
    .eq("user_id", syncState.user.id)
    .maybeSingle();
  if (error) {
    syncState.status = "同步失败";
    syncState.message = error.message;
    renderLearningApp();
    return;
  }
  if (data?.data) {
    applyUserData(data.data);
    syncState.status = "已同步";
  } else {
    await saveCloudState();
  }
  renderLearningApp();
}

async function initCloudSync() {
  syncState.configured = hasSyncConfig();
  if (!syncState.configured) {
    syncState.status = "待配置账号同步";
    renderLearningApp();
    return;
  }
  if (!window.supabase?.createClient) {
    syncState.status = "同步组件未加载";
    syncState.message = "请确认部署环境可以访问 Supabase SDK。";
    renderLearningApp();
    return;
  }
  const config = syncConfig();
  syncState.client = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
  const { data } = await syncState.client.auth.getSession();
  syncState.user = data.session?.user || null;
  syncState.status = syncState.user ? "已登录" : "未登录";
  syncState.client.auth.onAuthStateChange((_event, session) => {
    syncState.user = session?.user || null;
    syncState.status = syncState.user ? "已登录" : "未登录";
    if (syncState.user) loadCloudState();
    renderLearningApp();
  });
  if (syncState.user) await loadCloudState();
  renderLearningApp();
}

function renderSyncPanel(compact = false) {
  const email = syncState.user?.email || "";
  const configured = syncState.configured;
  return `
    <section class="sync-panel ${compact ? "compact-sync" : ""}">
      <div>
        <span>账号同步</span>
        <strong>${email || syncState.status}</strong>
        ${syncState.message ? `<small>${escapeHtml(syncState.message)}</small>` : `<small>${configured ? "手机端登录同一账号后同步学习数据" : "填写 sync-config.js 后启用云端账号"}</small>`}
      </div>
      ${
        configured
          ? syncState.user
            ? `<button class="text-button" data-sync-action="logout">退出</button>`
            : `<form class="sync-form" data-sync-login>
                <input name="email" type="email" placeholder="邮箱登录" required />
                <button class="primary-button" type="submit">发送登录链接</button>
              </form>`
          : `<button class="text-button" data-route="plan">配置说明</button>`
      }
    </section>
  `;
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromKey(key) {
  const [year, month, day] = String(key).split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDaysKey(offset) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + offset);
  return localDateKey(date);
}

function daysBetween(startKey, endKey) {
  const start = dateFromKey(startKey);
  const end = dateFromKey(endKey);
  return Math.round((end - start) / 86400000);
}

function readReviewState() {
  try {
    const parsed = JSON.parse(localStorage.getItem("wanwuReviewState") || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveReviewState() {
  localStorage.setItem("wanwuReviewState", JSON.stringify(learningState.review));
  queueCloudSave();
}

function readStudyGoal() {
  try {
    const parsed = JSON.parse(localStorage.getItem("wanwuStudyGoal") || "{}");
    const targetDays = Math.min(365, Math.max(1, Number(parsed.targetDays) || 30));
    return { targetDays };
  } catch {
    return { targetDays: 30 };
  }
}

function saveStudyGoal(goal) {
  learningState.studyGoal = {
    targetDays: Math.min(365, Math.max(1, Number(goal.targetDays) || 30))
  };
  localStorage.setItem("wanwuStudyGoal", JSON.stringify(learningState.studyGoal));
  queueCloudSave();
}

function exactItemExists(rawValue) {
  const value = normalizeSearchTerm(rawValue);
  return value && ALL_ITEMS.some((item) => normalizeSearchTerm(item.value) === value);
}

function dueReviewCountForKey(dayKey) {
  return Object.values(learningState.review).filter((entry) => entry?.dueAt === dayKey && !entry.retired).length;
}

function progressEntries() {
  return Object.entries(learningState.progress);
}

function isFamiliarGrade(grade) {
  return grade === "familiar" || grade === "known";
}

function isCardRetired(item) {
  const key = cardKey(item);
  return learningState.progress[key] === "retired" || Boolean(learningState.review[key]?.retired);
}

function dueReviewCards() {
  const today = localDateKey();
  return deckItems().filter((item) => {
    const entry = learningState.review[cardKey(item)];
    return entry?.dueAt && entry.dueAt <= today && !entry.retired;
  });
}

function buildStudyPlan() {
  const activeItems = ALL_ITEMS.filter((item) => !isCardRetired(item));
  const total = activeItems.length;
  const studied = progressEntries().filter(([, grade]) => grade !== "retired").length;
  const retired = progressEntries().filter(([, grade]) => grade === "retired").length;
  const familiar = progressEntries().filter(([, grade]) => isFamiliarGrade(grade) || grade === "retired").length;
  const remaining = Math.max(0, total - studied);
  const targetDays = learningState.studyGoal.targetDays;
  const dailyNew = remaining ? Math.max(1, Math.ceil(remaining / targetDays)) : 0;
  const today = localDateKey();
  const dueToday = Object.values(learningState.review).filter((entry) => entry?.dueAt && entry.dueAt <= today && !entry.retired).length;
  const rows = Array.from({ length: 7 }, (_, index) => {
    const dayKey = addDaysKey(index);
    const plannedNew = Math.min(dailyNew, Math.max(0, remaining - dailyNew * index));
    const existingReview = index === 0 ? dueToday : dueReviewCountForKey(dayKey);
    const scheduledReview = PLANNED_REVIEW_INTERVALS.reduce((sum, interval) => {
      const learnedDayIndex = index - interval;
      if (learnedDayIndex < 0) return sum;
      return sum + Math.min(dailyNew, Math.max(0, remaining - dailyNew * learnedDayIndex));
    }, 0);
    return {
      dayKey,
      label: index === 0 ? "今日" : `第 ${index + 1} 天`,
      newCount: plannedNew,
      reviewCount: existingReview + scheduledReview
    };
  });
  return {
    total,
    studied,
    familiar,
    retired,
    remaining,
    targetDays,
    dailyNew,
    dueToday,
    todayTotal: dailyNew + dueToday,
    rows
  };
}

function scheduleCardReview(card, grade) {
  const key = cardKey(card);
  const previous = learningState.review[key] || {};
  let level = Number(previous.level);
  if (!Number.isInteger(level)) level = -1;
  const normalizedGrade = grade === "known" ? "familiar" : grade;
  if (normalizedGrade === "again") level = 0;
  if (normalizedGrade === "hard") level = Math.max(0, level);
  if (normalizedGrade === "familiar") level = Math.min(REVIEW_INTERVALS.length - 1, level + 1);
  const interval = normalizedGrade === "again" ? 1 : normalizedGrade === "hard" ? 2 : REVIEW_INTERVALS[Math.max(0, level)];
  learningState.review[key] = {
    trigram: card.trigram,
    source: card.source,
    category: card.category,
    value: card.value,
    grade: normalizedGrade,
    level,
    reviewedAt: localDateKey(),
    dueAt: addDaysKey(interval)
  };
  saveReviewState();
}

function retireCard(card) {
  const key = cardKey(card);
  learningState.progress[key] = "retired";
  state.progress = learningState.progress;
  saveProgress();
  learningState.review[key] = {
    trigram: card.trigram,
    source: card.source,
    category: card.category,
    value: card.value,
    grade: "retired",
    retired: true,
    reviewedAt: localDateKey(),
    dueAt: ""
  };
  saveReviewState();
}

function categoryCount(trigram) {
  return Object.keys(trigram.modern).length + Object.keys(trigram.classic).length + (customItemsFor(trigram.name).length ? 1 : 0);
}

function itemCountForTrigram(trigram) {
  const baseCount = ["modern", "classic"].reduce((sum, source) => {
    return sum + Object.values(trigram[source]).reduce((inner, values) => inner + values.length, 0);
  }, 0);
  return baseCount + customItemsFor(trigram.name).length;
}

function progressSummary() {
  const entries = progressEntries();
  const total = entries.length;
  const familiar = entries.filter(([, grade]) => isFamiliarGrade(grade) || grade === "retired").length;
  const retired = entries.filter(([, grade]) => grade === "retired").length;
  return {
    total,
    familiar,
    retired,
    mastery: total ? Math.round((familiar / total) * 100) : 0
  };
}

function renderLearningApp() {
  renderProgress();
  updateTopNav();
  if (learningState.screen === "home") renderLearningHome();
  if (learningState.screen === "learn") renderTrigramLearningIndex();
  if (learningState.screen === "detail") renderTrigramDetail();
  if (learningState.screen === "cards") renderMemoryCards();
  if (learningState.screen === "plan") renderStudyPlanPage();
  if (learningState.screen === "search") renderLearningSearch();
}

function topRouteForScreen() {
  if (learningState.screen === "detail") return "learn";
  if (learningState.screen === "search") return "";
  return learningState.screen;
}

function updateTopNav() {
  const activeRoute = topRouteForScreen();
  document.querySelectorAll("[data-top-route]").forEach((button) => {
    button.classList.toggle("active", button.dataset.topRoute === activeRoute);
  });
}

function renderLearningHome() {
  const summary = progressSummary();
  const plan = buildStudyPlan();
  const dueCount = dueReviewCards().length;
  appView().innerHTML = `
    <section class="learning-home">
      <section class="home-hero">
        <div class="home-copy">
          <p class="eyebrow">万物类象记忆</p>
          <h2>以卡片掌象，以分类入卦</h2>
        </div>
        <div class="today-panel">
          <span>今日</span>
          <strong>${plan.todayTotal}</strong>
          <small>新学 ${plan.dailyNew} · 复习 ${dueCount}</small>
          <button class="primary-button" data-route="cards">继续学习</button>
        </div>
      </section>
      <section class="entry-grid">
        <button class="entry-card entry-learn" data-route="learn">
          <span class="entry-mark">☰</span>
          <strong>八卦分类</strong>
          <small>核心象意 · 现代易象 · 传统类象</small>
        </button>
        <button class="entry-card entry-cards" data-route="cards">
          <span class="entry-mark">记</span>
          <strong>卡片复习</strong>
          <small>新学 · 复习 · 熟悉标记</small>
        </button>
        <button class="entry-card entry-plan" data-route="plan">
          <span class="entry-mark">习</span>
          <strong>学习计划</strong>
          <small>目标天数 · 每日任务 · 间隔复习</small>
        </button>
      </section>
      <div class="home-stats">
        <div><span>八卦</span><strong>${TRIGRAMS.length}</strong></div>
        <div><span>类象卡片</span><strong>${ALL_ITEMS.length}</strong></div>
        <div><span>已学习</span><strong>${summary.total}</strong></div>
        <div><span>熟悉率</span><strong>${summary.mastery}%</strong></div>
      </div>
      ${renderSyncPanel(true)}
    </section>
  `;
}

function renderStudyPlanPage() {
  const plan = buildStudyPlan();
  appView().innerHTML = `
    <section class="page-head">
      <button class="text-button" data-route="home">返回首页</button>
      <div>
        <p class="eyebrow">艾宾浩斯复习</p>
        <h2>学习计划</h2>
      </div>
    </section>
    ${renderStudyPlanPanel(plan)}
  `;
}

function renderStudyPlanPanel(plan) {
  return `
    <section class="plan-panel">
      <div class="plan-head">
        <div>
          <p class="eyebrow">学习目标</p>
          <h3>${plan.targetDays} 天完成 · 每日新学 ${plan.dailyNew} 条</h3>
        </div>
        <form class="plan-form" data-goal-form>
          <label>
            <span>目标天数</span>
            <input name="targetDays" type="number" min="1" max="365" value="${plan.targetDays}" />
          </label>
          <button class="primary-button" type="submit">保存</button>
        </form>
      </div>
      ${learningState.goalMessage ? `<p class="form-message">${escapeHtml(learningState.goalMessage)}</p>` : ""}
      <div class="plan-metrics">
        <div><span>剩余</span><strong>${plan.remaining}</strong></div>
        <div><span>今日新学</span><strong>${plan.dailyNew}</strong></div>
        <div><span>今日复习</span><strong>${plan.dueToday}</strong></div>
        <div><span>不再复习</span><strong>${plan.retired}</strong></div>
      </div>
      ${renderSyncPanel()}
      <p class="local-note">部署到手机使用时，先配置账号同步；未登录时仅作为本机缓存。</p>
      <div class="review-plan">
        ${plan.rows.map((row) => `<div>
          <span>${row.label}</span>
          <strong>${row.newCount + row.reviewCount}</strong>
          <small>新学 ${row.newCount} · 复习 ${row.reviewCount}</small>
        </div>`).join("")}
      </div>
    </section>
  `;
}

function renderTrigramLearningIndex() {
  appView().innerHTML = `
    <section class="page-head">
      <button class="text-button" data-route="home">返回首页</button>
      <div>
        <p class="eyebrow">八卦分类学习</p>
        <h2>选择卦象</h2>
      </div>
    </section>
    <section class="trigram-study-grid">
      ${TRIGRAMS.map((trigram) => `
        <button class="study-trigram-card" data-study-trigram="${trigram.name}">
          <span class="study-symbol">${trigramLines(trigram.lines)}</span>
          <span>
            <strong>${trigram.name}${trigram.symbol}</strong>
            <small>${trigram.element} · ${trigram.direction}</small>
          </span>
          <em>${itemCountForTrigram(trigram)} 条</em>
        </button>
      `).join("")}
    </section>
  `;
}

function renderTrigramDetail() {
  const trigram = trigramByName(learningState.selected || TRIGRAMS[0].name);
  const customItems = customItemsFor(trigram.name);
  appView().innerHTML = `
    <section class="page-head detail-head">
      <button class="text-button" data-route="learn">返回八卦</button>
      <div>
        <p class="eyebrow">分类学习 · ${categoryCount(trigram)} 组 · ${itemCountForTrigram(trigram)} 条</p>
        <h2>${trigram.name}${trigram.symbol}</h2>
      </div>
      <button class="primary-button" data-route="cards" data-deck="${trigram.name}">练这一卦</button>
    </section>

    <div class="hero-panel">
      <div class="visual-panel">
        <div class="visual-art">${trigramSeal(trigram)}</div>
        <div class="visual-caption">
          <div>
            <h2>${trigram.name}${trigram.symbol}</h2>
            <p>五行 ${trigram.element} · 方位 ${trigram.direction} · 颜色 ${trigram.color}</p>
          </div>
          <div class="big-symbol">${trigramLines(trigram.lines)}</div>
        </div>
      </div>
      <div class="detail-panel">
        <div class="meta-grid">
          <div class="meta-item"><span>五行</span><strong>${trigram.element}</strong></div>
          <div class="meta-item"><span>方位</span><strong>${trigram.direction}</strong></div>
          <div class="meta-item"><span>颜色</span><strong>${trigram.color}</strong></div>
          <div class="meta-item"><span>五味</span><strong>${trigram.taste}</strong></div>
        </div>
        <h3 class="section-title">核心象意</h3>
        <div class="tag-cloud">${trigram.core.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    </div>

    <section class="category-section">
      <h3>现代易象</h3>
      <div class="category-grid">${renderStudyCategories(trigram.modern, "现代")}</div>
    </section>
    <section class="category-section">
      <h3>传统类象</h3>
      <div class="category-grid">${renderStudyCategories(trigram.classic, "传统")}</div>
    </section>
    <section class="category-section custom-section">
      <h3>我的类象</h3>
      <form class="custom-form" data-custom-form="${trigram.name}">
        <label>
          <span>给${trigram.name}卦新增一个类象</span>
          <input name="customValue" type="text" placeholder="例如：高楼、旷野、祖父..." autocomplete="off" />
        </label>
        <button class="primary-button" type="submit">添加</button>
      </form>
      ${learningState.customMessage ? `<p class="form-message">${escapeHtml(learningState.customMessage)}</p>` : ""}
      ${
        customItems.length
          ? `<div class="category-grid"><article class="category-card"><h3>我的 · 类象</h3><div class="tag-cloud">${customItems
              .map((item) => `<span class="custom-chip"><button class="memory-chip" data-chip-card="${escapeHtml(item.value)}">${escapeHtml(item.value)}</button><button class="remove-chip" title="删除" aria-label="删除${escapeHtml(item.value)}" data-remove-custom="${item.id}">×</button></span>`)
              .join("")}</div></article></div>`
          : `<p class="empty-state compact">还没有自定义类象。添加后会进入搜索和卡片记忆。</p>`
      }
    </section>
  `;
}

function renderStudyCategories(groups, sourceLabel) {
  return Object.entries(groups).map(([name, values]) => `
    <article class="category-card">
      <h3>${sourceLabel} · ${name}</h3>
      <div class="tag-cloud">${values.map((value) => `<button class="memory-chip" data-chip-card="${escapeHtml(value)}">${escapeHtml(value)}</button>`).join("")}</div>
    </article>
  `).join("");
}

function deckItems() {
  const activeItems = ALL_ITEMS.filter((item) => !isCardRetired(item));
  if (learningState.deckTrigram === "all") return activeItems;
  return activeItems.filter((item) => item.trigram === learningState.deckTrigram);
}

function pickLearningCard(seedValue = null) {
  const deck = seedValue
    ? ALL_ITEMS.filter((item) => item.value === seedValue)
    : [];
  const baseDeck = deckItems();
  const dueDeck = seedValue ? [] : dueReviewCards();
  const newDeck = seedValue ? [] : baseDeck.filter((item) => !learningState.progress[cardKey(item)]);
  const learningDeck = seedValue ? [] : baseDeck.filter((item) => !isFamiliarGrade(learningState.progress[cardKey(item)]));
  const usableDeck = deck.length ? deck : dueDeck.length ? dueDeck : newDeck.length ? newDeck : learningDeck.length ? learningDeck : baseDeck;
  if (!usableDeck.length) {
    learningState.card = null;
    learningState.cardFlipped = false;
    return;
  }
  learningState.card = usableDeck[Math.floor(Math.random() * usableDeck.length)];
  learningState.cardFlipped = false;
}

function existingItemsForTrigram(trigramName) {
  return ALL_ITEMS.filter((item) => item.trigram === trigramName);
}

function addCustomItem(trigramName, rawValue) {
  const value = normalizeSearchTerm(rawValue);
  if (!value) {
    learningState.customMessage = "请先输入一个类象。";
    return false;
  }
  const duplicate = existingItemsForTrigram(trigramName).find((item) => normalizeSearchTerm(item.value) === value);
  if (duplicate) {
    learningState.customMessage = `“${value}”已存在于${trigramName}卦的「${duplicate.category}」中，未重复添加。`;
    return false;
  }
  const item = {
    id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    trigram: trigramName,
    source: "custom",
    category: "我的类象",
    value
  };
  const customItems = readCustomItems();
  customItems.push(item);
  saveCustomItems(customItems);
  ALL_ITEMS.push(item);
  learningState.customMessage = `已添加“${value}”。`;
  return true;
}

function removeCustomItem(id) {
  const customItems = readCustomItems();
  const item = customItems.find((entry) => entry.id === id);
  saveCustomItems(customItems.filter((entry) => entry.id !== id));
  const index = ALL_ITEMS.findIndex((entry) => entry.source === "custom" && entry.id === id);
  if (index >= 0) ALL_ITEMS.splice(index, 1);
  learningState.customMessage = item ? `已删除“${item.value}”。` : "";
}

function renderMemoryCards() {
  if (!learningState.card) pickLearningCard();
  const card = learningState.card;
  if (!card) {
    appView().innerHTML = `
      <section class="page-head">
        <button class="text-button" data-route="home">返回首页</button>
        <div>
          <p class="eyebrow">${learningState.deckTrigram === "all" ? "全部八卦" : `${learningState.deckTrigram}卦专项`}</p>
          <h2>卡片复习</h2>
        </div>
      </section>
      <section class="tool-panel">
        <p class="empty-state">当前范围没有待学习卡片</p>
        <div class="card-controls">
          <button class="primary-button" data-route="learn">返回八卦</button>
          <button class="grade-button" data-deck-filter="all">查看全部</button>
        </div>
      </section>
    `;
    return;
  }
  const trigram = trigramByName(card.trigram);
  const summary = progressSummary();
  const plan = buildStudyPlan();
  appView().innerHTML = `
    <section class="page-head">
      <button class="text-button" data-route="home">返回首页</button>
      <div>
        <p class="eyebrow">${learningState.deckTrigram === "all" ? "全部八卦" : `${learningState.deckTrigram}卦专项`}</p>
        <h2>卡片复习</h2>
      </div>
    </section>

    <section class="deck-filter" aria-label="卡片范围">
      <button class="${learningState.deckTrigram === "all" ? "active" : ""}" data-deck-filter="all">全部</button>
      ${TRIGRAMS.map((item) => `<button class="${learningState.deckTrigram === item.name ? "active" : ""}" data-deck-filter="${item.name}">${item.name}${item.symbol}</button>`).join("")}
    </section>

    <section class="memory-layout">
      <div class="tool-panel">
        <div class="flashcard memory-card ${learningState.cardFlipped ? "is-flipped" : ""}" data-memory-action="flip">
          <div>
            <div class="prompt">${learningState.cardFlipped ? "答案" : `${card.category} · ${sourceLabel(card.source)}`}</div>
            <div class="main">${learningState.cardFlipped ? `${trigram.name}${trigram.symbol}` : escapeHtml(card.value)}</div>
            ${
              learningState.cardFlipped
                ? `<div class="answer">
                    <strong>${trigram.element} · ${trigram.direction}</strong><br>
                    ${card.category} · ${sourceLabel(card.source)}
                  </div>`
                : ""
            }
          </div>
        </div>
        <div class="card-controls">
          <button class="primary-button" data-memory-action="flip">${learningState.cardFlipped ? "隐藏答案" : "显示答案"}</button>
          <button class="grade-button" data-memory-grade="again">陌生</button>
          <button class="grade-button" data-memory-grade="hard">模糊</button>
          <button class="grade-button" data-memory-grade="familiar">熟悉</button>
          <button class="grade-button ghost-grade" data-memory-action="retire">不再复习</button>
        </div>
      </div>

      <aside class="memory-side">
        <div class="progress-panel">
          <span>已学习</span>
          <strong>${summary.total}</strong>
          <small>熟悉率 ${summary.mastery}% · 不再复习 ${summary.retired}</small>
        </div>
        <div class="side-note">
          <strong>今日计划</strong>
          <p>新学 ${plan.dailyNew} · 复习 ${plan.dueToday} · 合计 ${plan.todayTotal}</p>
        </div>
        <div class="side-note">
          <strong>复习间隔</strong>
          <p>陌生 1 天 · 模糊 2 天 · 熟悉递进 4/7/15/30 天。</p>
        </div>
      </aside>
    </section>
  `;
}

function renderLearningSearch() {
  const query = document.querySelector("#searchInput").value.trim();
  const results = searchItems(query);
  const related = relatedTrigramsForSearch(query);
  const canAdd = query && !exactItemExists(query);
  const suggestedTrigram = related[0]?.trigram.name || learningState.selected || TRIGRAMS[0].name;
  appView().innerHTML = `
    <section class="page-head">
      <button class="text-button" data-route="home">返回首页</button>
      <div>
        <p class="eyebrow">查词</p>
        <h2>${query ? `搜索：${escapeHtml(query)}` : "搜索万物类象"}</h2>
      </div>
    </section>
    <section class="search-results">
      ${canAdd ? renderSearchAddPanel(query, suggestedTrigram) : ""}
      ${learningState.customMessage ? `<p class="form-message">${escapeHtml(learningState.customMessage)}</p>` : ""}
      ${related.length ? `<div class="related-block">
        <h3>相关卦</h3>
        <div class="related-trigrams">
          ${related.map(({ trigram }) => `<button class="related-trigram" data-result-trigram="${trigram.name}">
            <strong>${trigram.name}${trigram.symbol}</strong>
            <span>${trigram.element} · ${trigram.direction}</span>
          </button>`).join("")}
        </div>
      </div>` : ""}
      <div class="result-title">
        <h3>词条结果</h3>
        <span>${results.length} 条</span>
      </div>
      ${results.length ? results.slice(0, 160).map((result) => {
        const trigram = trigramByName(result.trigram);
        return `<button class="result-row result-button" data-result-trigram="${trigram.name}">
          <strong>${trigram.name}${trigram.symbol}</strong>
          <span>${result.category}</span>
          <div>${escapeHtml(result.value)}<br><span>${sourceLabel(result.source)} · ${trigram.element} · ${trigram.direction}</span></div>
        </button>`;
      }).join("") : `<p class="empty-state">未收录</p>`}
    </section>
  `;
}

function renderSearchAddPanel(query, suggestedTrigram) {
  return `
    <form class="search-add-form" data-search-add-form>
      <label>
        <span>新增类象</span>
        <input name="customValue" type="text" value="${escapeHtml(query)}" autocomplete="off" />
      </label>
      <label>
        <span>归属卦</span>
        <select name="trigramName">
          ${TRIGRAMS.map((trigram) => `<option value="${trigram.name}" ${trigram.name === suggestedTrigram ? "selected" : ""}>${trigram.name}${trigram.symbol}</option>`).join("")}
        </select>
      </label>
      <button class="primary-button" type="submit">增加</button>
    </form>
  `;
}

document.addEventListener("click", (event) => {
  const syncAction = event.target.closest("[data-sync-action]");
  if (syncAction?.dataset.syncAction === "logout") {
    if (syncState.client) syncState.client.auth.signOut();
    syncState.user = null;
    syncState.status = "未登录";
    renderLearningApp();
    return;
  }

  const route = event.target.closest("[data-route]");
  if (route) {
    learningState.screen = route.dataset.route;
    learningState.customMessage = "";
    if (route.dataset.deck) {
      learningState.deckTrigram = route.dataset.deck;
      learningState.card = null;
    }
    renderLearningApp();
    return;
  }

  const trigramButton = event.target.closest("[data-study-trigram]");
  if (trigramButton) {
    learningState.selected = trigramButton.dataset.studyTrigram;
    learningState.screen = "detail";
    learningState.customMessage = "";
    renderLearningApp();
    return;
  }

  const result = event.target.closest("[data-result-trigram]");
  if (result) {
    learningState.selected = result.dataset.resultTrigram;
    learningState.screen = "detail";
    learningState.customMessage = "";
    renderLearningApp();
    return;
  }

  const deckFilter = event.target.closest("[data-deck-filter]");
  if (deckFilter) {
    learningState.deckTrigram = deckFilter.dataset.deckFilter;
    learningState.card = null;
    renderLearningApp();
    return;
  }

  const action = event.target.closest("[data-memory-action]");
  if (action) {
    if (action.dataset.memoryAction === "flip") learningState.cardFlipped = !learningState.cardFlipped;
    if (action.dataset.memoryAction === "retire" && learningState.card) {
      retireCard(learningState.card);
      learningState.card = null;
      pickLearningCard();
    }
    renderLearningApp();
    return;
  }

  const grade = event.target.closest("[data-memory-grade]");
  if (grade && learningState.card) {
    const memoryGrade = grade.dataset.memoryGrade;
    learningState.progress[cardKey(learningState.card)] = memoryGrade;
    state.progress = learningState.progress;
    saveProgress();
    scheduleCardReview(learningState.card, memoryGrade);
    pickLearningCard();
    renderLearningApp();
    return;
  }

  const chip = event.target.closest("[data-chip-card]");
  if (chip) {
    learningState.deckTrigram = learningState.selected || "all";
    learningState.screen = "cards";
    pickLearningCard(chip.dataset.chipCard);
    renderLearningApp();
    return;
  }

  const removeButton = event.target.closest("[data-remove-custom]");
  if (removeButton) {
    removeCustomItem(removeButton.dataset.removeCustom);
    renderLearningApp();
  }
});

document.addEventListener("submit", (event) => {
  const syncLogin = event.target.closest("[data-sync-login]");
  if (syncLogin) {
    event.preventDefault();
    const email = new FormData(syncLogin).get("email");
    if (!syncState.client) return;
    syncState.status = "发送登录链接";
    renderLearningApp();
    syncState.client.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.href.split("#")[0]
      }
    }).then(({ error }) => {
      syncState.status = error ? "发送失败" : "请查收邮箱";
      syncState.message = error ? error.message : "点击邮件中的链接后会自动回到本页面。";
      renderLearningApp();
    });
    return;
  }

  const goalForm = event.target.closest("[data-goal-form]");
  if (goalForm) {
    event.preventDefault();
    const targetDays = new FormData(goalForm).get("targetDays");
    saveStudyGoal({ targetDays });
    learningState.goalMessage = "已保存。";
    renderLearningApp();
    return;
  }

  const searchAddForm = event.target.closest("[data-search-add-form]");
  if (searchAddForm) {
    event.preventDefault();
    const formData = new FormData(searchAddForm);
    addCustomItem(formData.get("trigramName"), formData.get("customValue"));
    renderLearningApp();
    return;
  }

  const form = event.target.closest("[data-custom-form]");
  if (!form) return;
  event.preventDefault();
  const trigramName = form.dataset.customForm;
  const value = new FormData(form).get("customValue");
  addCustomItem(trigramName, value);
  renderLearningApp();
});

document.querySelector("#searchInput").addEventListener("input", () => {
  learningState.screen = "search";
  learningState.customMessage = "";
  renderLearningApp();
});

document.querySelector("#resetProgress").addEventListener("click", () => {
  learningState.progress = {};
  state.progress = learningState.progress;
  learningState.review = {};
  localStorage.setItem("wanwuProgress", "{}");
  localStorage.setItem("wanwuReviewState", "{}");
  queueCloudSave();
  renderLearningApp();
});

renderLearningApp();
initCloudSync();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
