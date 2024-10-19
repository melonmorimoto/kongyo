document.querySelectorAll('.menu li').forEach(menuItem => {
    menuItem.addEventListener('mouseover', () => {
        let submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'block';
        }
    });
    menuItem.addEventListener('mouseout', () => {
        let submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'none';
        }
    });
});
let slideIndex = 0;
let autoSlideInterval;

const slides = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.dot');

// 初期スライドを表示
showSlides(slideIndex);

// 自動でスライドを進める
autoSlide();

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000); // 3秒ごとにスライド
}

// スライドを表示する関数
function showSlides(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    // 全てのスライドを非表示に
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // 現在のスライドだけを表示
    slides[slideIndex].style.display = 'block';

    // インジケータをリセット
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

// スライドを前後に移動
function plusSlides(n) {
    clearInterval(autoSlideInterval); // 自動スライドを停止
    slideIndex += n;
    showSlides(slideIndex);
    autoSlide(); // 再度自動スライドを開始
}

// 現在のスライドを表示
function currentSlide(n) {
    clearInterval(autoSlideInterval); // 自動スライドを停止
    slideIndex = n - 1;
    showSlides(slideIndex);
    autoSlide(); // 再度自動スライドを開始
}

// イベントリスナーを設定
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));
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

function viewBlog(index) {
    alert('ブログの詳細を表示します: ' + index);
    // ここにブログの詳細を表示するコードを追加できます
}

function editBlog(index) {
    alert('ブログを修正します: ' + index);
    // ここにブログを修正するコードを追加できます
}
