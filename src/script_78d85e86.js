const themes = [
    // 基本・雑貨
    "練り消し", "穴の開いた靴下", "コンビニのレシート", "期限切れのポイントカード",
    "ぬるくなった自動販売機のお茶", "醤油の小皿に浮かぶ虹", "割り箸の割れ残り",
    "ビニール袋のほどけない結び目", "使い切れないリップクリーム", "裏返しのまま干されたシャツ",
    "湿気ったポテトチップス", "使い終わったシャンプーの最後のひと押し", "冷蔵庫の奥で眠る謎の調味料",
    "片方だけ失くしたワイヤレスイヤホン", "折れたシャーペンの芯", "意味を失ったキーホルダー",
    // 概念・デジタル
    "ムリンス", "裏・月曜日", "既読スルーの沈黙", "404エラーの先に住む羊",
    "タイムスタンプのずれ", "昨日の夜、一瞬だけ忘れたこと", "予測変換の裏切り",
    "Wi-Fiの電波の死に際", "フォルダの中の「新しいフォルダ(99)」", "削除されたはずの履歴",
    "検索窓に残った自分への問い", "低速制限された自由", "保存されなかった下書きの亡霊",
    "ログインパスワードを忘れた過去の自分", "電波の届かない地下室の静寂",
    // 架空・シュール
    "重力のない雨", "色を持たない虹", "名前を付け忘れた感情", "四角い球体",
    "一度も演奏されなかった音色", "誰かが置き忘れた「あ」の書き順", "逆回転する砂時計の音",
    "重さを失った言葉", "夜を吸い込む掃除機", "誰もいない映画館の笑い声",
    "透明な壁にぶつかる思考", "終わりなき連休の三日目", "記憶の底に沈んだ未読通知",
    "誰の持ち物でもない足音", "嘘だけを食べる鳥", "鏡の中にだけ存在する街の地図",
    // 身体・解剖学
    "喉に生えた「二度目の声」の蕾", "眼球の裏で飼っている金魚", "膝小僧が夜中に呟く「予言」",
    "爪の裏側にある異次元への入り口", "透明な心臓の鼓動音", "記憶の味がする唾液",
    "指先から溢れ出す「昔の会話」", "背中に貼り付いた「他人の視線」",
    "耳の奥で鳴り続ける「知らない国の国歌」", "影が少しずつ剥がれ落ちる現象",
    "体温を持たない「もう一人の自分」の指", "夢の中でだけ機能する第三の目",
    // 都市・環境
    "誰も見ていない時の信号機", "階段の13段目と14段目の間", "真夜中のエスカレーターの独り言",
    "ガードレールの寂しそうな断面", "マンホールの下に隠された「予備の空」",
    "誰もいない公園のブランコの揺れ方", "自動ドアが反応した「透明な客」",
    "高架下で反響する「未来の自分の声」", "ビルとビルの間に挟まった昨日の夕焼け",
    "忘れ去られた商店街のシャッターの模様", "真夜中の噴水が描く円グラフ"
];

const questions = [
    // 社会・制度
    "を崇拝する宗教の聖典", "が通貨になった世界の物価", "を義務教育の道徳に取り入れる方法",
    "を国歌にした国の結末", "の輸出入を禁止した法律の理由", "を「新しい祝日」にした時の過ごし方",
    "を大統領に選出した国の公用語", "を納税の代わりに納める制度", "の所有権を巡る国際裁判の争点",
    // 展示・解釈
    "を「忘れ去られた神」として展示する際の説明文", "を1000年後の考古学者が誤解した内容",
    "だけを収集する博物館の館長の悩み", "を展示するために必要な最低限の嘘の量",
    "を「美の基準」として採用したミスコン", "を「現代アート」として定義した際の値段",
    "を額縁に入れて飾るための正しい作法", "の「影」だけを展示する特別展のタイトル",
    // 感情・関係
    "の正しい絶望のさせ方", "から「愛」を抽出して瓶詰めする方法", "にとっての地獄とは",
    "と自分との間に流れる共通の絶望", "を「幸福の象徴」と定義した場合の変化",
    "に初めて名前をつけた瞬間の後悔", "を愛しすぎてしまった人の末路",
    "と結婚するための法的な手続き", "を「親友」と呼ぶために必要な儀式",
    // 変化・異常
    "に意志があったら最初に吐く「嘘」", "の裏側に住んでいる住人の名前",
    "を「新しい色」として認識するための訓練", "が「かつて人類が持っていた器官」だった頃の機能",
    "の代わりに「さよなら」の代わりに使う挨拶", "を100倍に薄めて飲んだ時の副作用",
    "が突然巨大化して街を覆った時の対策", "を「魂の形」と仮定した時の不都合",
    "が唯一の「真実」であるとされる世界", "を一生食べ続けなければならない刑罰",
    "が鏡に映らなくなった理由の考察", "を時速300キロで投げた時の軌道予測"
];

let currentTheme = "";
let currentQuestion = "";
let archiveCount = 0;

function drawTheme() {
    const display = document.getElementById('theme-display');
    currentTheme = themes[Math.floor(Math.random() * themes.length)];
    display.innerText = currentTheme;
    display.classList.add('theme-active');
    checkCombination();
}

function drawQuestion() {
    const display = document.getElementById('question-display');
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    display.innerText = currentQuestion;
    display.classList.add('question-active');
    checkCombination();
}

function checkCombination() {
    if (currentTheme && currentQuestion) {
        const container = document.getElementById('result-container');
        const combined = document.getElementById('combined-text');
        container.classList.remove('hidden');
        combined.innerText = `「${currentTheme}」${currentQuestion}`;
        document.getElementById('caption-input').value = "";
    }
}

function saveArchive() {
    const caption = document.getElementById('caption-input').value;
    const combinedText = document.getElementById('combined-text').innerText;

    if (!combinedText) return;

    const archiveList = document.getElementById('archive-list');
    if (archiveList.querySelector('p.italic')) {
        archiveList.innerHTML = "";
    }

    const item = document.createElement('div');
    item.className = "log-item p-4 shadow-sm fade-in";

    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    item.innerHTML = `
                <div class="text-xs text-gray-400 mb-1">${timeStr} 記録</div>
                <div class="serif font-bold text-lg mb-2">${combinedText}</div>
                <div class="text-sm text-gray-600 leading-relaxed">${caption ? caption : '<span class="italic text-gray-300">（無言の思索）</span>'}</div>
            `;

    archiveList.prepend(item);
    archiveCount++;
    document.getElementById('counter').innerText = `Count: ${archiveCount}`;
}
