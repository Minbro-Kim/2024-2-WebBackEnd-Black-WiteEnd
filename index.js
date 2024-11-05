document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const menu = document.getElementById("menu");
  let isMenuOpen = false;

  // 메뉴 버튼 클릭 시 메뉴 표시/숨김
  menuButton.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;
      menu.style.display = isMenuOpen ? "flex" : "none";

      // 메뉴 위치를 버튼 아래로 설정
      if (isMenuOpen) {
          const buttonRect = menuButton.getBoundingClientRect();
          menu.style.top = `${buttonRect.bottom + window.scrollY}px`;
          menu.style.left = `${buttonRect.left + window.scrollX}px`;
          menu.style.position = "absolute";
      }
  });

  // 로그인 상태 확인
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // 로그인 상태에 따라 메뉴 내용 변경
  menuButton.addEventListener("click", () => {
      menu.innerHTML = isLoggedIn
          ? `<button id="logoutButton">로그아웃</button><button id="myPageButton">마이페이지</button>`
          : `<button onclick="window.location.href='login.html'">로그인</button>
             <button onclick="window.location.href='signup.html'">회원가입</button>
             <button id="myPageButton">마이페이지</button>`;

      // 로그아웃 버튼 클릭 시 처리
      const logoutButton = document.getElementById("logoutButton");
      if (logoutButton) {
          logoutButton.addEventListener("click", () => {
              localStorage.removeItem("isLoggedIn");
              alert("로그아웃되었습니다.");
              window.location.reload();
          });
      }

      // 마이페이지 버튼 클릭 시 처리
      const myPageButton = document.getElementById("myPageButton");
      if (myPageButton) {
          myPageButton.addEventListener("click", () => {
              window.location.href = "mypage.html";
          });
      }
  });
});

// 로그인 상태 확인
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

// 메뉴 버튼 클릭 시 메뉴 표시/숨김
menuButton.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    menu.style.display = isMenuOpen ? "flex" : "none";

    // 로그인 상태에 따라 메뉴 내용 변경
    if (isLoggedIn) {
        menu.innerHTML = `
            <button id="logoutButton">로그아웃</button>
            <button id="myPageButton">마이페이지</button>
            
        `;
    } else {
        menu.innerHTML = `
            <button onclick="window.location.href='login.html'">로그인</button>
            <button onclick="window.location.href='signup.html'">회원가입</button>
            <button id="myPageButton">마이페이지</button>
        `;
    }

    // 로그아웃 버튼 클릭 시 처리
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("isLoggedIn"); // 로그인 상태 해제
            alert("로그아웃되었습니다.");
            window.location.reload(); // 페이지 새로고침
        });
    }

    // 마이페이지 버튼 클릭 시 처리
    const myPageButton = document.getElementById("myPageButton");
    if (myPageButton) {
        myPageButton.addEventListener("click", () => {
            window.location.href = "mypage.html"; // 마이페이지로 이동
        });
    }
});

// 검색 입력란 요소 선택
const searchInput = document.querySelector(".search-input");

// 검색 이벤트 추가
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase(); // 검색어를 소문자로 변환
    filterRestaurants(query);
});

// 식당 목록 필터링 함수
function filterRestaurants(query) {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        const restaurantName = card.querySelector("h3").textContent.toLowerCase();
        if (restaurantName.includes(query)) {
            card.style.display = "flex"; // 검색어에 맞는 카드 표시
        } else {
            card.style.display = "none"; // 검색어에 맞지 않는 카드 숨김
        }
    });
}

// 각 탭의 초기 데이터
const tabData = {
  충무로: [
      { name: "비아톨레 파스타바", description: "스파게티, 파스타 전문", rating: 4.5, reviews: 100 },
      { name: "평양냉면", description: "냉면 전문", rating: 4.7, reviews: 120 },
      { name: "서울수제버거", description: "수제버거 전문", rating: 4.4, reviews: 150 },
      { name: "비아톨레 파스타바", description: "스파게티, 파스타 전문", rating: 4.5, reviews: 110 },
      { name: "평양냉면", description: "냉면 전문", rating: 4.7, reviews: 0 },
      { name: "서울수제버거", description: "수제버거 전문", rating: 4.4, reviews: 10 },
  ],
  동입: [
      { name: "동입 비스트로", description: "프랑스 요리", rating: 4.6, reviews: 120 },
      { name: "동입 냉면", description: "냉면 전문", rating: 4.3, reviews: 20 },
      { name: "동입 치킨", description: "치킨 전문", rating: 4.8, reviews: 30 },
      { name: "동입 비스트로", description: "프랑스 요리", rating: 4.6, reviews: 40 },
      { name: "동입 냉면", description: "냉면 전문", rating: 4.3, reviews: 100 },
      { name: "동입 치킨", description: "치킨 전문", rating: 4.8, reviews: 120 },
  ]
  
};

// 각 탭의 추가 데이터
const additionalData = {
  충무로: [
      { name: "충무로 파스타", description: "이탈리아 요리 전문", rating: 4.6, reviews: 120 },
      { name: "충무로 초밥", description: "일식 전문", rating: 4.3, reviews: 120 },
      { name: "충무로 스테이크", description: "스테이크 전문", rating: 4.8, reviews: 120 },
      { name: "충무로 파스타", description: "이탈리아 요리 전문", rating: 4.6, reviews: 120 },
      { name: "충무로 초밥", description: "일식 전문", rating: 4.3, reviews: 120 },
      { name: "충무로 스테이크", description: "스테이크 전문", rating: 4.8, reviews: 120 },
  ],
  동입: [
      { name: "동입 피자", description: "이탈리아 피자", rating: 4.5, reviews: 120 },
      { name: "동입 스시", description: "일식 전문", rating: 4.7, reviews: 120 },
      { name: "동입 햄버거", description: "미국식 햄버거", rating: 4.6, reviews: 120 },
      { name: "동입 피자", description: "이탈리아 피자", rating: 4.5, reviews: 120 },
      { name: "동입 스시", description: "일식 전문", rating: 4.7, reviews: 120 },
      { name: "동입 햄버거", description: "미국식 햄버거", rating: 4.6, reviews: 120 },
  ]
};

  let currentFilter = "review"; // 기본 필터를 리뷰순으로 설정

  // 필터 버튼 추가
  const reviewFilter = document.getElementById("reviewFilter");
  const ratingFilter = document.getElementById("ratingFilter");
  
  // 리뷰순 버튼 클릭 시
  reviewFilter.addEventListener("click", () => {
      currentFilter = "review";
      loadInitialRestaurants(currentTab); // 리뷰순 정렬 후 데이터 다시 로드
  });
  
  // 별점순 버튼 클릭 시
  ratingFilter.addEventListener("click", () => {
      currentFilter = "rating";
      loadInitialRestaurants(currentTab); // 별점순 정렬 후 데이터 다시 로드
  });

// 충무로탭, 동입탭 식당 데이터
  document.addEventListener("DOMContentLoaded", () => {
    const recommendationList = document.getElementById("recommendation-list");
    const locationToggle = document.getElementById("location-toggle");
    let currentTab = "충무로";
    let restaurantIndex = 0;
    let isLoading = false;
    let allRestaurantsLoaded = false;

    const reviewFilter = document.getElementById("reviewFilter");
    const ratingFilter = document.getElementById("ratingFilter");

    reviewFilter.addEventListener("click", () => {
        currentFilter = "review";
        loadInitialRestaurants(currentTab); // 리뷰순 정렬 후 데이터 다시 로드
    });

    ratingFilter.addEventListener("click", () => {
        currentFilter = "rating";
        loadInitialRestaurants(currentTab); // 별점순 정렬 후 데이터 다시 로드
    });

    // 초기 데이터 로드
    loadInitialRestaurants(currentTab);

    // 무한 스크롤 이벤트
    window.addEventListener("scroll", () => {
        if (!allRestaurantsLoaded && !isLoading && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            loadMoreRestaurants(currentTab);
        }
    });

    // 탭 전환 버튼 이벤트
    locationToggle.addEventListener("click", () => {
        currentTab = currentTab === "충무로" ? "동입" : "충무로";
        locationToggle.textContent = `${currentTab}`;

        // 페이드 아웃 애니메이션 적용 후 데이터 로드
        recommendationList.classList.add("fade-out");
        
        setTimeout(() => {
            resetRecommendations();
            loadInitialRestaurants(currentTab);
            recommendationList.classList.remove("fade-out");
            recommendationList.classList.add("fade-in");

            // 페이드 인 후 클래스 제거 (다음 전환을 위해)
            setTimeout(() => recommendationList.classList.remove("fade-in"), 500);
        }, 500); // 0.5초 후 데이터 로드        
    });


function loadInitialRestaurants(tab) {
  restaurantIndex = 0;
  allRestaurantsLoaded = false;
  isLoading = false;
  const recommendationList = document.getElementById("recommendation-list");
  recommendationList.innerHTML = ""; // 기존 내용 초기화

  // 현재 탭의 데이터를 복사하고 필터 기준에 따라 정렬
  let sortedData = [...tabData[tab]];
  if (currentFilter === "review") {
      sortedData.sort((a, b) => (b.reviews || 0) - (a.reviews || 0)); // 리뷰순 정렬
  } else if (currentFilter === "rating") {
      sortedData.sort((a, b) => b.rating - a.rating); // 별점순 정렬
  }

  // 정렬된 데이터 렌더링
  sortedData.forEach(addRestaurantCard);
}

// 추가 데이터 로드 함수
function loadMoreRestaurants(tab) {
    if (allRestaurantsLoaded || isLoading) return;

    isLoading = true;
    const moreRestaurants = additionalData[tab].slice(restaurantIndex, restaurantIndex + 3);

    if (moreRestaurants.length > 0) {
        moreRestaurants.forEach(addRestaurantCard);
        restaurantIndex += 3;
    } else {
        allRestaurantsLoaded = true;
    }
    isLoading = false;
}

// 식당 카드를 DOM에 추가하는 함수
function addRestaurantCard(restaurant) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="images/hamburger.jpg" alt="icon" class="card-icon" />
        <div class="card-content">
            <h3>${restaurant.name}</h3>
            <p>${restaurant.description}</p>
            <div class="rating">
                <span>⭐ ${restaurant.rating}</span>
                <span>리뷰 ${restaurant.reviews}개</span>
            </div>
        </div>
    `;
    document.getElementById("recommendation-list").appendChild(card);
}

// 추천 목록 초기화 함수 (탭 전환 시 호출)
function resetRecommendations() {
    document.getElementById("recommendation-list").innerHTML = "";
    restaurantIndex = 0;
    allRestaurantsLoaded = false;
}
});







