// script.js
const words = [
    // 既存のwords配列
    { word: "律令国家", meaning: "奈良・平安時代の日本の政治体制" },
    { word: "都道府県", meaning: "日本の地方行政区画" },
    { word: "都道府県庁所在地", meaning: "各都道府県の行政中心地" },
    { word: "熱帯", meaning: "赤道付近の高温多湿な地域" },
    { word: "乾燥帯", meaning: "降水量が少なく、乾燥した地域" },
    { word: "温帯", meaning: "四季がある、適度な気候" },
    { word: "亜寒帯", meaning: "寒冷な地域で、冷涼な気候（冷帯じゃない方)" },
    { word: "寒帯", meaning: "極地に近い、非常に寒冷な地域" },
    { word: "雨温図", meaning: "降水量と気温の変化を示した図" },
    { word: "スコール", meaning: "熱帯地域での短時間の強い雨" },
    { word: "熱帯林", meaning: "熱帯地域に広がる森林" },
    { word: "熱帯雨林気候", meaning: "常に高温多湿で、降水量が多い気候" },
    { word: "サバナ気候", meaning: "乾季と雨季があり、草原が広がる気候" },
    { word: "砂漠", meaning: "降水量が極端に少ない広大な地域" },
    { word: "オアシス", meaning: "砂漠の中の水源" },
    { word: "かんがい", meaning: "農業用水を引くこと" },
    { word: "遊牧", meaning: "移動しながら牧畜を行う生活" },
    { word: "砂漠気候", meaning: "年間降水量が非常に少ない気候" },
    { word: "ステップ気候", meaning: "乾燥気候と湿潤気候の中間に位置する気候" },
    { word: "地中海性気候", meaning: "夏は乾燥し、冬は湿潤な気候" },
    { word: "温暖湿潤気候", meaning: "大陸の東岸に分布する一年中雨の多い気候" },
    { word: "西岸海洋性気候", meaning: "海からの影響を受け、温暖で湿潤な気候" },
    { word: "永久凍土", meaning: "地面が永続的に凍結している土壌" },
    { word: "ダーチャ", meaning: "ロシアの郊外にある別荘" },
    { word: "ツンドラ気候", meaning: "寒冷で植物が少ない気候" },
    { word: "氷雪気候", meaning: "極寒の地域で、氷と雪が多い気候" },
    { word: "放牧", meaning: "家畜を野外で飼育すること" },
    { word: "チューニョ", meaning: "南米で作られる凍結乾燥したじゃがいも" },
    { word: "高山気候", meaning: "山岳地域に見られる寒冷な気候" },
    { word: "住居", meaning: "人々が住むための場所" },
    { word: "主食", meaning: "主に食べられる基本的な食物" },
    { word: "衣服", meaning: "体を覆うもの" },
    { word: "キリスト教", meaning: "イエス・キリストを信仰する宗教" },
    { word: "イスラム教", meaning: "ムハンマドを預言者とする宗教" },
    { word: "仏教", meaning: "釈迦の教えに基づく宗教" },
    { word: "ヒンデュー教", meaning: "インドの多神教的な宗教" },
    { word: "カースト", meaning: "インド社会の階級制度" },
    { word: "随", meaning: "小野妹子が派遣された中国の王朝の一つ" },
    { word: "唐", meaning: "随の後の中国の王朝" },
    { word: "長安", meaning: "唐の都、現在の西安" },
    { word: "律令", meaning: "奈良・平安時代の法律" },
    { word: "蘇我氏", meaning: "大和政権で最も勢いがあった豪族" },
    { word: "聖徳太子", meaning: "十七条の憲法などを設立した政治家、文化人" },
    { word: "冠位十二階", meaning: "聖徳太子が制定した階級制度" },
    { word: "十七条の憲法", meaning: "聖徳太子が定めた日本の法令" },
    { word: "遣隋使", meaning: "隋に派遣された使節団" },
    { word: "小野妹子", meaning: "遣隋使の一人" },
    { word: "遣唐使", meaning: "唐に派遣された使節団" },
    { word: "飛鳥時代", meaning: "大陸の制度や技術、文化を積極的に導入し、わが国が独自の文明化を推し進めた時代" },
    { word: "法隆寺", meaning: "聖徳太子が建てた日本最古の木造建築" },
    { word: "飛鳥文化", meaning: "仏教とともに、寺院造営のための建築、土木、庭園、彫刻、絵画、工芸、芸能など多様な技術・文化" },
    { word: "中大兄皇子", meaning: "天智天皇の別名、律令制度を整備" },
    { word: "天智天皇", meaning: "日本の天皇、律令制度を整備(中大兄皇子の別名)" },
    { word: "中臣鎌足", meaning: "大化の改新の指導者" },
    { word: "公地公民", meaning: "土地と民を国家のものとする制度" },
    { word: "大化の改新", meaning: "中臣鎌足が指導した改革" },
    { word: "白村江の戦い", meaning: "日本と唐の間の戦い" },
    { word: "壬申の乱", meaning: "天智天皇の後継ぎを巡って展開された戦乱" },
    { word: "大海人皇子", meaning: "天武天皇の別名" },
    { word: "天武天皇", meaning: "律令制度を推進した天皇" },
    { word: "大宝律令", meaning: "律令制度の完成" }
];

let currentQuestion = {};

// ランダムに質問を取得
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentQuestion = words[randomIndex];
    document.getElementById("question").innerText = currentQuestion.meaning;
}

// ユーザーの答えをチェック
document.getElementById("submit").addEventListener("click", () => {
    const userAnswer = document.getElementById("answer").value.trim();  // 入力をトリム
    if (userAnswer === currentQuestion.word) {
        document.getElementById("incorrectSound").pause();  // 不正解音を停止
        document.getElementById("correctSound").currentTime = 0;  // 正解音の再生位置をリセット
        document.getElementById("correctSound").play();  // 正解音を再生
        document.getElementById("feedback").innerText = "正解！";
    } else {
        document.getElementById("correctSound").pause();  // 正解音を停止
        document.getElementById("incorrectSound").currentTime = 0;  // 不正解音の再生位置をリセット
        document.getElementById("incorrectSound").play();  // 不正解音を再生
        document.getElementById("feedback").innerText = `不正解。正しい答えは「${currentQuestion.word}」です。`;
    }
    document.getElementById("answer").value = "";  // 入力フィールドをクリア
    getRandomQuestion();  // 次の質問を表示
});

// 初期の質問を表示
getRandomQuestion();