let a = [
    { session: "一", school: "中山大學", year: 79 },
    { session: "二", school: "輔仁大學", year: 80 },
    { session: "三", school: "交通大學", year: 81 },
    { session: "四", school: "銘傳大學", year: 82 },
    { session: "五", school: "淡江大學", year: 83 },
    { session: "六", school: "中央大學", year: 84 },
    { session: "七", school: "中原大學", year: 85 },
    { session: "八", school: "政治大學", year: 86 },
    { session: "九", school: "元智大學", year: 87 },
    { session: "十", school: "中央警察大學", year: 88 },
    { session: "十一", school: "中山大學", year: 89 },
    { session: "十二", school: "台灣大學", year: 90 },
    { session: "十三", school: "淡江大學", year: 91 },
    { session: "十四", school: "中正大學", year: 92 },
    { session: "十五", school: "中原大學", year: 93 },
    { session: "十六", school: "輔仁大學", year: 94 },
    { session: "十七", school: "義守大學", year: 95 },
    { session: "十八", school: "銘傳大學", year: 96 },
    { session: "十九", school: "暨南國際大學", year: 97},
    { session: "二十", school: "世新大學", year: 98 },
    { session: "二十一", school: "成功大學", year: 99 },
    { session: "二十二", school: "朝陽科技大學", year:100},
    { session: "二十三", school: "高雄大學", year: 101 },
    { session: "二十四", school: "真理大學", year: 102 },
    { session: "二十五", school: "中興大學", year: 103 },
    { session: "二十六", school: "大同大學", year: 104 },
    { session: "二十七", school: "靜宜大學", year: 105 },
    { session: "二十八", school: "政治大學", year: 106 },
    { session: "二十九", school: "東海大學", year: 107 },
    { session: "三十", school: "輔仁大學", year: 108 },
    { session: "三十一", school: "嘉義大學", year: 109 },
    { session: "三十二", school: "國立台北科技大學", year: 110 },
    { session: "三十三", school: "實踐大學", year: 111 },
    { session: "三十四", school: "國立中山大學", year: 112 },
];

let table1 = document.getElementById('myTable1');
for (let item of a) {
        let row = table1.insertRow();
        for (let key in item) {
                let cell = row.insertCell();
                cell.textContent = item[key];
                cell.style.color = "white"; // Set text color to white
        }
}
