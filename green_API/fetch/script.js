//스크립트를 적용할 요소를 상수에 저장
const postContainer = document.querySelector("#posts-container"),
  loading = document.querySelector(".loader"),
  filter = document.querySelector("#filter");

let limit = 5;
let page = 1;

//-----------------------------------------------------

getPosts();
//api에서 게시글을 fetch로 취득하기
async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}` // 서버주소 / posts~부분은 파라미터
  ); // ?_limit 데이터를 갖고올 수
  const data = await res.json();
  // console.log(data);
  return data;
  // console.log(res);
}

//--------------------------------------------------------

showPosts();
//Dom에 보여주는 함수
async function showPosts() {
  // console.log("열려라", getPosts());
  const posts = await getPosts();
  // console.log(posts);
  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
    <div class="number">${post.id}</div>
    <div class="post-info">
    <h2 class="post-title">${post.title}</h2>
    <p class="post-body">${post.body}</p>
    </div>
    `;
    postContainer.appendChild(postEl);
    console.log(postEl);
  });
}

//-----------------------------------------------------------

//loader 함수
function showLoading() {
  loading.classList.add("show");
  setTimeout(() => {
    loading.classList.remove("show");

    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

//-----------------------------------------------------------

//검색키워드 필터링 함수
function filterPosts(e) {
  const term = e.target.value.toUpperCase();
  posts = document.querySelectorAll(".post");
  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const body = post.querySelector(".post-body").innerText.toUpperCase();
    //fliter
    //indexOf 같은 문자열 index 번호, 없으면 -1
    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = "flex";
    } else {
      post.style.display = "none";
    }
  });
}

//----------------------------------------------------------

//window-scroll  바닥에 닿았을때 5개 추가되는거

window.addEventListener("scroll", () => {
  const obj = document.documentElement;
  // const a = {
  //   scrollTop: obj.scrollTop,
  //   scrollHeight: obj.scrollHeight,
  //   clientHeight: obj.clientHeight,
  // };
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  console.log(document.documentElement.scrollTop);
  console.log(document.documentElement.scrollHeight);
  console.log(document.documentElement.clientHeight);

  console.log("디스트럭쳐링" + scrollTop, scrollHeight, clientHeight);
  // console.log(obj);
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

//----------------------------------------------------------

//filter 값을 넣으면 받아오기
filter.addEventListener("input", filterPosts);
