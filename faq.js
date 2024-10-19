// faq.js
window.onload = function() {
    const faqContainer = document.getElementById('faq-container');
    const faqs = JSON.parse(localStorage.getItem('faqs')) || [];

    // FAQを表示する
    faqs.forEach(faq => {
        const faqItem = document.createElement('div');

        // 質問部分の要素を作成
        const questionElement = document.createElement('p');
        questionElement.classList.add('faq-question');
        questionElement.textContent = `Q: ${faq.question}`;

        // 答え部分の要素を作成
        const answerElement = document.createElement('p');
        answerElement.classList.add('faq-answer');
        answerElement.textContent = `A: ${faq.answer}`;

        // 質問がクリックされたときに答えを表示/非表示する
        questionElement.addEventListener('click', function() {
            const isVisible = answerElement.style.display === 'block';
            answerElement.style.display = isVisible ? 'none' : 'block';
        });

        // FAQアイテムをコンテナに追加
        faqItem.appendChild(questionElement);
        faqItem.appendChild(answerElement);
        faqContainer.appendChild(faqItem);
    });
};

document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <header>
            <div class="logo">
                <img src="logo.png" alt="コンギョ教会のロゴ" class="logo-img">
                <span>コンギョ教会〜金と共に歩む〜</span>
            </div>
            <nav>
                <ul class="menu">
                    <li><a href="index.html">ホーム</a></li>
                    <li><a href="about.html">教会について</a>
                        <ul class="submenu">
                            <li><a href="history.html">私たちの歴史</a></li>
                            <li><a href="vision.html">ビジョン</a></li>
                            <li><a href="kakomon.html">入会テスト過去問</a></li>
                            <li><a href="kontube.html">KKTV NEWS</a></li>
                            <li><a href="faq.html">FAQ（質問）</a></li>
                            <li><a href="gouhi.html">合否確認</A><li>    
                        </ul>
                    </li>
                    <li><a href="schedule.html">スケジュール</a></li>
                    <li><a href="contact.html">お問い合わせ</a></li>                
                    <li><a href="blog.html">ブログ</a></li>
                        <ul class='submenu'>
                            <li><a href="kaicho.html">会長室より</a><li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});

