document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
      signupForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const username = document.getElementById("signupUsername").value.trim();
          const password = document.getElementById("signupPassword").value.trim();

          // 사용자 아이디 및 비밀번호 유효성 검사
          if (username === "" || password === "") {
              alert("아이디와 비밀번호를 모두 입력해 주세요.");
              return;
          }

          // 중복된 아이디 확인 후 로컬 스토리지에 저장
          if (localStorage.getItem(username)) {
              alert("이미 존재하는 아이디입니다.");
          } else {
              localStorage.setItem(username, password);
              alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
              window.location.href = "login.html";
          }
      });
  }
});