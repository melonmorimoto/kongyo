const messages = {
    "69256377": "＜古魚 太郎様＞。<br><h1>結果:<u>不合格</u></h1></br><br><h2>スコア</h2><p>筆記:40点・実技・40点・面接40点</p><br><p>今回は当協会の試験にご参加くださり、ありがとうございます。今後ともコンギョ教会をよろしくお願いいたします。</p>",
    "87654321": "＜古魚 弓子様＞。<br><h1>結果:<u>合格</u></h1></br><br><h2>スコア</h2><p>筆記:80点・実技・90点・面接90点</p><br><p>今回は当協会の試験にご参加くださり、ありがとうございます。今後ともコンギョ教会をよろしくお願いいたします。</p>",
    "00000001": "特別なメッセージです。<br>複数行にわたるメッセージを表示できます。<br>例えば、このように改行を続けられます。"
  };
  
  const inputField = document.getElementById('numberInput');
  const submitButton = document.getElementById('submitButton');
  const messageArea = document.getElementById('messageArea');
  
  submitButton.addEventListener('click', () => {
    const inputNumber = inputField.value;
    
    if (messages[inputNumber]) {
      messageArea.innerHTML = messages[inputNumber];
    } else {
      messageArea.innerHTML = "該当するメッセージが見つかりません。";
    }
  });
  