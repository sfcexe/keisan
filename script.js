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



function searchImages() {
    const searchInputs = document.getElementById('searchInputs').value;
    const apiKey = '37432611-69a1b7d72bf9bd373d4dec749'; // ご自身のPixabay APIキーに置き換えてください
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchInputs)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayImages(data.hits))
        .catch(error => console.log(error));
}




function displayImages(images) {
    const imageResults = document.getElementById('imageResults');
    imageResults.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imageResults.appendChild(imgElement);
    });
}



