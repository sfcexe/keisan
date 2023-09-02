// log保持
let chatLog = [];

// sendするよ!
function sendMessage() {
    // 入力取得
    let userInput = document.getElementById("user-input").value;

    // ログに追加(ユーザーからの入力を)
    chatLog.push({ user: true, message: userInput });

    // ログ更新
    renderChatLog();

    
    generateBotResponse(userInput);

    // 入力フィールドクリア
    document.getElementById("user-input").value = "";
}

// 描画
function renderChatLog() {
    let chatLogElement = document.getElementById("chat-log");
    chatLogElement.innerHTML = "";

    for (let i = 0; i < chatLog.length; i++) {
        let messageElement = document.createElement("div");
        messageElement.classList.add(chatLog[i].user ? "user-message" : "bot-message");
        messageElement.innerText = chatLog[i].message;
        chatLogElement.appendChild(messageElement);
    }
}

// Enter着火
document.getElementById("user-input").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// 応答せよ...的な関数
function generateBotResponse(userInput) {
    let botResponse;

    

    if (userInput.includes("こんにちは") || userInput.includes("こんばんは")) {
        botResponse = "こんにちは！お元気ですか？";
    } else if (userInput.includes("お元気ですか")) {
        botResponse = "はい、元気です！お尋ねいただきありがとうございます。";
    } else if (userInput.includes("ありがとう") || userInput.includes("感謝")) {
        botResponse = "どういたしまして！お手伝いできてうれしいです。";
    } else if (userInput.includes("名前は？") || userInput.includes("名前は")) {
        botResponse = "私はチャットボットです。";
    } else if (userInput.includes("天気")) {
        botResponse = "天気ですね。申し訳ありませんが、私は天気情報を提供することができません。";
    } else if (userInput.includes("好きな色は何ですか")) {
        botResponse = "青です。";
    } else if (userInput.includes("何歳ですか")) {
        botResponse = "私は人工知能ですので、年齢という概念はありません。";
    } else {
        botResponse = "申し訳ありません、よく理解できませんでした。";
    }

    
    chatLog.push({ user: false, message: botResponse });

    // 更新
    renderChatLog();

}

function searchImages() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value;

    // API設定
    const baseUrl = 'https://pixabay.com/api/';
    const apiKey = '37432611-69a1b7d72bf9bd373d4dec749'; 

    // APIリクエストURL構築
    const url = `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(query)}`;

    // APIにリクエスト送信
    fetch(url)
        .then(response => response.json())
        .then(data => displayImages(data.hits))
        .catch(error => console.log(error));
}

function displayImages(images) {
    const imageResults = document.getElementById('imageResults');

    // くりあ～
    imageResults.innerHTML = '';

    // 表示！
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imageResults.appendChild(imgElement);
    });
}



