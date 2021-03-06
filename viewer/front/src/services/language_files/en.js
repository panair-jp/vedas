const get = () => {
    const word_dictionary = {
        "sorry_message": "Something wrong happened! (⸝⸝⸝ᵒ̴̶̷̥́ ⌑ ᵒ̴̶̷̣̥̀⸝⸝⸝) I'll be fix it. So try a few days later! ( ⸝⸝•ᴗ•⸝⸝ )੭⁾⁾",
        "table_message": "Currently not available on tablet devices. We recommend using a desktop PC or notebook PC. The mobile version has limited functionality.",
        "error_message1": "Required input.",
        "error_message2": "Invalid email address.",
        "analyze_condtion_mobile_caution": "* We recommend using a desktop PC or notebook PC. The mobile version has limited functionality.",
        "analyze_condtion_text1": "1. Please select a time period.",
        "analyze_condtion_text2": "2. Please select a power provider.",
        "analyze_condtion_text3": "3. Select the type of power generation you want to check.",
        "analyze_condtion_text4": "Display period",
        "analyze_condtion_text5": "* Please select the day you want to check.",
        "sample_news2": "(sample) January data has been updated.",
        "sample_news1": "(sample) Happy New Year. Vedas has been released.",
        "news8_2": "Corresponding to the data that can be obtained at the moment.",
        "news7_2": "The data in all power jurisdictions has been updated until 07/2020.",
        "news6_2": "The data in all power jurisdictions has been updated until 06/2020.",
        "news5_2": "The data in all power jurisdictions has been updated until 05/2020.",
        "news4_2": "The data in all power jurisdictions has been updated until 04/2020.",
        "news3_2": "The data in all power jurisdictions has been updated until 01/2020.",
        "news2_2": "The data in all power jurisdictions has been updated until 12/2019.",
        "news2_1": "The data has been updated.",
        "news1_2": "We will update the data from time to time. Have fun!",
        "news1_1": "Happy New Year. Vedas has been released.",
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
        "how_to_use_text1": "The first release is to visualize the power supply structure throughout Japan.",
        "how_to_use_text2": "It's very simple and you can start using it right away.",
        "how_to_use_text3": "First, let's select the aggregation unit from year / month / day / hour.",
        "how_to_use_text4": "For example, if you select the month, you can see the power data summed up on a monthly basis.",
        "how_to_use_text5": "Next, let's choose a power transmission and distribution company.",
        "how_to_use_text6": "If you live in the Tokyo Electric Power area, you may want to check Tokyo Electric Power.",
        "how_to_use_text7": "You can see what the electricity used in everyday life is made from",
        "how_to_use_text8": "It is OK to select \"all\" for the time being.",
        "how_to_use_text9": "Finally, let's choose the type of data.",
        "how_to_use_text10": "Let's check out the places you care about.",
        "how_to_use_text11": "At this point, the chart will be displayed.",
        "how_to_use_text12": "Let's change the period freely and play.",
        "how_to_use_text13": "For example, you can see",
        "how_to_use_text14": "Solar output throughout Japan is on the rise.",
        "how_to_use_text15": "From 2016 to the present, you can see that the sunlight is gradually increasing in all regions.",
        "how_to_use_text16": "Hokkaido, Tokyo and Okinawa have different peak power trends.",
        "how_to_use_text17": "Comparing the power consumption in Hokkaido, Tokyo and Okinawa, the peak demand periods differ as follows.",
        "how_to_use_text18": "There are other things to notice.",
        "how_to_use_text19": "In Kyushu Electric Power's jurisdiction, there are days when sunlight makes up most of the total daytime demand.",
        "how_to_use_text20": "Japan covers most of its total demand on thermal power.",
        "how_to_use_text21": "In Japan's green electricity (hydro, geothermal, biomass, solar, wind), hydro and solar are strong.",
        "how_to_use_text22": "Try to find \"!\" about electric.",
        "about_text1": "It looks like something interesting can be done.",
        "about_text2": "I started with one engineer thinking like that.",
        "about_text3": "Nicknamed Vedas.",
        "about_text4": "This product visualizes Japan's electricity data.",
        "about_text5": "At first, I thought about reading the initials of Supply And Demand Viewer from the back and making it Vdas,",
        "about_text6": "Since it was already used in products in the world, I put Energy E into Vedas.",
        "about_text7": "Veda itself is India's oldest literature, allegedly compiled in ancient India.",
        "about_text8": "The word Veda means knowledge.",
        "about_text9": "With the meaning of the plural there, add s and it is Vedas.",
        "jurisdiction": "Jurisdiction",
        "watchout": "Things to watch out for",
        "watchout_info1": "In no event either party shall be liable for any life, physical injury or property loss or damages incurred by the user of this application.",
        "watchout_info2": "The data used for this application are the actual supply and demand results ",
        "watchout_info3": "announced by General Electricity Transmission and Distribution Utilities ",
        "watchout_info4": "based on the “系統情報の公表の考え方” of the Agency for Natural Resources and Energy, Ministry of Economy, Trade and Industry. ",
        "watchout_info5": "Please check the website of each General Electricity Transmission and Distribution Utility for data considerations.",
        "no_data": "There is no data for the target period.",
        "term": "Term",
        "unit_y": "Year　",
        "unit_ym": "Month",
        "unit_ymd": "Date　",
        "unit_1h": "1 Hour",
        "green": "green power",
        "demand": "demand",
        "nuclear": "nuclear",
        "thermal": "thermal",
        "hydro": "hydro",
        "geothermal": "geothermal",
        "biomass": "biomass",
        "solar": "solar",
        "solar_output_control": "solar adjustment",
        "wind": "wind",
        "wind_output_control": "wind adjustment",
        "pumping": "pumping",
        "interconnection": "interconnection",
        "title": "Vedas：Japan Energy Charts",
        "all": "All",
        "hepco": "Hokkaido",
        "tohokuepco": "Tohoku",
        "rikuden": "Hokuriku",
        "tepco": "Tokyo",
        "chuden": "Chubu",
        "kepco": "Kansai",
        "energia": "Chugoku",
        "yonden": "Shikoku",
        "kyuden": "Kyushu",
        "okiden": "Okinawa",
        "japan": "Japan(Sum)"
    };

    return word_dictionary;
}

export default { get }