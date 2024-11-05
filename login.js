document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const username = document.getElementById("username").value.trim();
          const password = document.getElementById("password").value.trim();

          if (localStorage.getItem(username) === password) {
              alert("로그인 성공!");
              localStorage.setItem("isLoggedIn", "true"); // 로그인 상태 저장
              window.location.href = "index.html"; // 로그인 후 index.html로 이동
          } else {
              alert("아이디 또는 비밀번호가 잘못되었습니다.");
          }
      });
  }
});