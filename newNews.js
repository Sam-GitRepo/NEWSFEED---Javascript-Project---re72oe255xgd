const newNewsDocs = document.getElementById("newNews");
const url =
    "https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news";
function fetchNews(url) {
    fetch(url).then((data) => {
        data.json().then((res) => {
            let innerHtml = "";
            res.forEach((element, index) => {
                const newsCard = ` <div class="news__card">
      <div class="news__card--header">
        <div>By: ${element[" author"]}</div>
        <div>category: ${element[" category"]}</div>
      </div>
      <div class="news__card--body">
        ${element["content"]}
        <a
          class="news__card--link"
          href="${element.url}"
          target="_blank"
          >Read More.</a
        >
      </div>
      <div class="like--icon--container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="like--btn like--btn--active"
        >
          <path
            d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
          />
        </svg>
      </div>
    </div>`;
                innerHtml += newsCard;
                console.log(innerHtml);
            });
            newNewsDocs.innerHTML = innerHtml;
        });
    });
}

fetchNews(url);
