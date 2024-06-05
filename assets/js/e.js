let e = [
{
        "屆次": "一",
        "時間": "1994",
        "地點": "上海",
        "主辦單位": "復旦大學",
        "大會主席": "鄭紹濂、薛華成教授"
    },
    {
        "屆次": "二",
        "時間": "1996",
        "地點": "臺灣中壢市",
        "主辦單位": "中央大學",
        "大會主席": "宋鎧教授"
    },
    {
        "屆次": "三",
        "時間": "1997",
        "地點": "黑龍江哈爾濱",
        "主辦單位": "哈爾濱工業大學",
        "大會主席": "黃梯雲、李一軍教授"
    },
    {
        "屆次": "四",
        "時間": "1998",
        "地點": "香港",
        "主辦單位": "香港嶺南大學",
        "大會主席": "盧明德教授"
    },
    {
        "屆次": "五",
        "時間": "1999",
        "地點": "湖南長沙",
        "主辦單位": "中南大學",
        "大會主席": "陳曉紅教授"
    },
    {
        "屆次": "六",
        "時間": "2000",
        "地點": "臺灣台北市",
        "主辦單位": "政治大學",
        "大會主席": "周宣光教授"
    },
    {
        "屆次": "七",
        "時間": "2001",
        "地點": "新疆烏魯木齊",
        "主辦單位": "中南大學",
        "大會主席": "陳曉紅教授"
    },
    {
        "屆次": "八",
        "時間": "2002",
        "地點": "澳門",
        "主辦單位": "澳門科技大學",
        "大會主席": "周禮杲、薛華成教授"
    },
    {
        "屆次": "九",
        "時間": "2003",
        "地點": "安徽合肥",
        "主辦單位": "合肥工業大學",
        "大會主席": "楊善林教授"
    },
    {
        "屆次": "十",
        "時間": "2004",
        "地點": "臺灣高雄市",
        "主辦單位": "中山大學",
        "大會主席": "侯君溥、賴香菊教授"
    },
    {
        "屆次": "十一",
        "時間": "2005",
        "地點": "湖北武漢",
        "主辦單位": "華中科技大學",
        "大會主席": "張金隆教授"
    },
    {
        "屆次": "十二",
        "時間": "2006",
        "地點": "香港",
        "主辦單位": "香港中文大學",
        "大會主席": "張惠民教授"
    },
    {
        "屆次": "十三",
        "時間": "2007",
        "地點": "北京",
        "主辦單位": "北京交通大學",
        "大會主席": "劉延平、張真繼教授"
    },
    {
        "屆次": "十四",
        "時間": "2008",
        "地點": "臺灣中壢市",
        "主辦單位": "中央大學",
        "大會主席": "周惠文 教授"
    },
    {
        "屆次": "十五",
        "時間": "2009",
        "地點": "上海",
        "主辦單位": "同濟大學",
        "大會主席": "霍佳震 教授兼院長"
    },
    {
        "屆次": "十六",
        "時間": "2010",
        "地點": "香港",
        "主辦單位": "香港城市大學",
        "大會主席": "Benjamin Yen"
    },
    {
        "屆次": "十七",
        "時間": "2011",
        "地點": "南京",
        "主辦單位": "南京大學",
        "大會主席": "朱慶華 教授"
    },
    {
        "屆次": "十八",
        "時間": "2012",
        "地點": "臺灣台北市",
        "主辦單位": "實踐大學",
        "大會主席": "李瑞元教授"
    },
    {
        "屆次": "十九",
        "時間": "2013",
        "地點": "四川成都",
        "主辦單位": "成都電子科技大學",
        "大會主席": "紹培基教授"
    },
    {
        "屆次": "二十",
        "時間": "2014",
        "地點": "湖北武漢",
        "主辦單位": "武漢大學",
        "大會主席": "陸偉教授"
    },
    {
        "屆次": "二十一",
        "時間": "2015",
        "地點": "澳門",
        "主辦單位": "澳門科技大學",
        "大會主席": "龐川教授"
    },
    {
        "屆次": "二十二",
        "時間": "2016",
        "地點": "臺灣台北市",
        "主辦單位": "臺北科技大學",
        "大會主席": "翁頌舜 教授兼院長"
    },
    {
        "屆次": "二十三",
        "時間": "2017",
        "地點": "陝西西安",
        "主辦單位": "西安思源學院",
        "大會主席": "段興民 教授兼院長"
    },
    {
        "屆次": "二十四",
        "時間": "2018",
        "地點": "香港",
        "主辦單位": "香港大學",
        "大會主席": "Benjamin Yen"
    },
    {
        "屆次": "二十五",
        "時間": "2019",
        "地點": "哈爾濱",
        "主辦單位": "中國哈爾濱工業大學",
        "大會主席": "李一軍、葉強教授"
    },
    {
        "屆次": "二十六",
        "時間": "2021",
        "地點": "遠距",
        "主辦單位": "河海大學",
        "大會主席": ""
    }
];

let table5 = document.getElementById('myTable5');
for (let item of e) {
        let row = table5.insertRow();
        for (let key in item) {
                let cell = row.insertCell();
                cell.textContent = item[key];
                cell.style.color = "white"; // Set text color to white
        }
}
