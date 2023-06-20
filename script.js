const categories = ["business", "sports", "science", "hatke", "world", "politics"];
const app = document.getElementById("root");

const likedNews = [];

// if user liked a news then push that news to local storage 
// when user click on saved news page then render the liked news

function fetchNews(url) {
  fetch(url).then((data) => {
    data.json().then((res) => {
      const newsHtml = ``;
      res.forEach((element, index) => {
        console.log(element);
      });
    })
  })
}

const newsCard = ` <div class="news__card">
      <div class="news__card--header">
        <div>By: Hritik Raj</div>
        <div>category: business</div>
      </div>
      <div class="news__card--body">
        BBC admits it underreported ₹40 crore of income in its tax returns in
        India: Reports.
        <a
          class="news__card--link"
          href="https://inshorts.com/en/news/bbc-admits-it-underreported-%E2%82%B940-crore-of-income-in-its-tax-returns-in-india-reports-1686035451564"
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


