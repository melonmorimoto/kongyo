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
                            <li><a href="faq.html">FAQ（質問）</a></li>    
                        </ul>
                    </li>
                    <li><a href="schedule.html">スケジュール</a></li>
                    <li><a href="contact.html">お問い合わせ</a></li>                
                    <li><a href="blog.html">ブログ</a></li>
                </ul>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});

window.onload = function() {
    fetch('blogs.json')
        .then(response => response.json())
        .then(blogs => {
            const blogContainer = document.querySelector('#blog-container');

            blogs.forEach((blog, index) => {
                const blogPost = document.createElement('div');
                blogPost.classList.add('blog-post');

                blogPost.innerHTML = `
                    <h3>タイトル: ${blog.title}</h3>
                    <p>投稿日: ${blog.date}</p>
                    <p>${blog.content.substring(0, 100)}...</p>
                    <a href="#" class="read-more" onclick="viewBlog(${index})">続きを読む</a>
                    <a href="#" class="edit-btn" onclick="editBlog(${index})">修正する</a>
                `;
                blogContainer.appendChild(blogPost);
            });
        });
};
