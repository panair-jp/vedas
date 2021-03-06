const get = () => {
    const word_dictionary = {
        "sorry_message": "发生错误！（⸝⸝⸝ᵒ̴̶̷̥́⌑ᵒ̴̶̷̣̥̀⸝⸝⸝）我会解决的。 因此，请几天后尝试！ （⸝⸝•ᴗ•⸝⸝）੭⁾⁾ ",
        "table_message": "Currently not available on tablet devices. We recommend using a desktop PC or notebook PC. The mobile version has limited functionality.",
        "error_message1": "必填项",
        "error_message2": "无效的电子邮件地址",
        "analyze_condtion_mobile_caution": "*我们建议使用台式机或笔记本电脑。 移动版本的功能有限",
        "analyze_condtion_text1": "1. 请选择一个时间段",
        "analyze_condtion_text2": "2. 请选择电源供应商",
        "analyze_condtion_text3": "3. 选择要检查的发电类型",
        "analyze_condtion_text4": "显示期间",
        "analyze_condtion_text5": "※ 请选择您要检查的日期",
        "sample_news2": "(sample) January data has been updated.",
        "sample_news1": "(sample) Happy New Year. Vedas has been released.",
        "news8_2": "它对应的是目前可以获得的数据。",
        "news7_2": "仅东京电力公司2020/08年的数据，除北陆电力公司外，其他电力服务区2020/07年的数据。 更新至。",
        "news6_2": "仅东京电力公司2020/07年的数据，除北陆电力公司外，其他电力服务区2020/06年的数据。 更新至。",
        "news5_2": "仅东京电力公司2020/06年的数据，除北陆电力公司外，其他电力服务区2020/05年的数据。 更新至。",
        "news4_2": "北陆电力的数据更新至2020/02年，电力服务区域内其他地区的数据更新至2020/04年",
        "news3_2": "所有电力辖区的数据已更新至2020年01月",
        "news2_2": "所有电力辖区的数据已更新至2019年12月",
        "news2_1": "数据已更新",
        "news1_2": "我们会不时更新数据，玩得开心！",
        "news1_1": "新年快乐，吠陀经已发布",
        "contact_place_folder1": "Panair Taro",
        "contact_place_folder2": "contact@vedas.jp",
        "contact_text1": "If you have any questions about Vedas, please fill in the required information and contact us.",
        "contact_text2": "Please note that your reply may take time or may not be possible depending on the content.",
        "contact_note": "※ Japanese is also available. ",
        "contact_item_name": "*Full name",
        "contact_item_mail": "*Mail address",
        "contact_item_input": "*Content of inquiry",
        "contact_text3": "Collection and use of personal information",
        "contact_text4": "Please confirm our ",
        "contact_text5": "privacy policy",
        "contact_text6": ".",
        "contact_text7": "If you agree with the above, click the \"Agree and Submit\" button.",
        "contact_submit": "Agree and Submit",
        "contact_complete": "Thank you for your inquiry.",
        "how_to_use_text1": "第一个版本是可视化整个日本的电源结构",
        "how_to_use_text2": "非常简单，您可以立即开始使用它",
        "how_to_use_text3": "首先，让我们从年/月/日/小时中选择聚合单位",
        "how_to_use_text4": "例如，如果选择月份，则可以看到每月汇总的电量数据",
        "how_to_use_text5": "接下来，让我们选择一家输配电公司",
        "how_to_use_text6": "如果您住在东京电力地区，则可能要检查东京电力",
        "how_to_use_text7": "您可以看到日常生活中使用的电力是由什么构成的",
        "how_to_use_text8": "暂时选择”全部“是可以的",
        "how_to_use_text9": "最后，让我们选择数据类型",
        "how_to_use_text10": "我们来看看您关心的地方",
        "how_to_use_text11": "这时将显示图表",
        "how_to_use_text12": "让我们自由地更改时间段并播放",
        "how_to_use_text13": "例如，您可以看到",
        "how_to_use_text14": "整个日本的太阳能产量正在上升",
        "how_to_use_text15": "从2016年到现在，您可以看到所有地区的日照逐渐增加",
        "how_to_use_text16": "北海道，东京和冲绳有不同的峰值功率趋势",
        "how_to_use_text17": "比较北海道，东京和冲绳的电力消耗，高峰需求时段如下",
        "how_to_use_text18": "还有其他注意事项",
        "how_to_use_text19": "在九州电力公司的辖区中，有几天阳光是白天总需求的大部分",
        "how_to_use_text20": "日本满足了其火电总需求的大部分",
        "how_to_use_text21": "在日本的绿色电力（水力，地热，生物质能，太阳能，风能），水力和太阳能方面都很强大",
        "how_to_use_text22": "尝试找到有关电力的 ！ ",
        "about_text1": "看起来可以做一些有趣的事情",
        "about_text2": "我从一位工程师这样思考开始",
        "about_text3": "昵称是Vedas",
        "about_text4": "该产品可视化日本的电力数据",
        "about_text5": "起初，我想过从背面读取 Supply And Demand Viewer 的首字母，使其成为 Vdas",
        "about_text6": "由于它已经在世界各地的产品中使用，因此我将Energy E投入到Vedas中",
        "about_text7": "Veda本身是印度最古老的文学，据称是在古代印度汇编的",
        "about_text8": "Veda这个词意味着知识",
        "about_text9": "具有复数的含义，将s加起来就是吠陀经",
        "jurisdiction": "的管辖权",
        "watchout": "Things to watch out for",
        "watchout_info1": "In no event either party shall be liable for any life, physical injury or property loss or damages incurred by the user of this application.",
        "watchout_info2": "The data used for this application are the actual supply and demand results ",
        "watchout_info3": "announced by General Electricity Transmission and Distribution Utilities ",
        "watchout_info4": "based on the “系統情報の公表の考え方” of the Agency for Natural Resources and Energy, Ministry of Economy, Trade and Industry. ",
        "watchout_info5": "Please check the website of each General Electricity Transmission and Distribution Utility for data considerations.",
        "no_data": "没有数据",
        "term": "术语",
        "unit_y": "年份",
        "unit_ym": "月份",
        "unit_ymd": "日期",
        "unit_1h": "1小时",
        "green": "绿色力量",
        "demand": "需求",
        "nuclear": "核电站",
        "thermal": "火力",
        "hydro": "水电",
        "geothermal": "地热",
        "biomass": "生物质",
        "solar": "太阳",
        "solar_output_control": "太阳控制",
        "wind": "风",
        "wind_output_control": "风控制",
        "pumping": "抽水",
        "interconnection": "互连线",
        "title": "Vedas：日本能源图表",
        "all": "所有",
        "hepco": "北海道电力",
        "tohokuepco": "东北电力",
        "rikuden": "北陆电力",
        "tepco": "东京电力",
        "chuden": "中部电力",
        "kepco": "关西电力",
        "energia": "中国电力",
        "yonden": "四国电力",
        "kyuden": "九州电力",
        "okiden": "冲绳电力",
        "japan": "日本合计"
    };

    return word_dictionary;
}

export default { get }