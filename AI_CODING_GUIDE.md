# AI_CODING_GUIDE.md

## 1. 문서 목적

이 문서는 `khsin0829/firstclass` 저장소의 기존 버거킹 로그인 UI 코드를 기준으로, 이후 새로운 화면이나 다른 브랜드의 로그인 UI를 만들 때 기존 HTML/CSS 구조와 작성 방식을 최대한 유지하기 위한 작업 기준이다.

AI가 기존 코드를 무시하고 처음부터 새로운 구조나 스타일을 만들어서는 안 된다.

기본 원칙은 다음과 같다.

> 기존 코드 확인 → 기존 구조와 스타일 분석 → 재사용 가능한 부분 판단 → 필요한 부분만 추가/수정 → 기존 코드와 충돌 여부 확인

---

## 2. 현재 기준 파일

### 주요 파일

- `burgerking/login.html`
  - 현재 버거킹 로그인 UI의 HTML과 페이지 전용 CSS가 함께 작성되어 있다.
- `css/default.css`
  - 공통 Reset 및 기본 브라우저 스타일 초기화가 작성되어 있다.
- `burgerking/img/`
  - 로그인 UI에서 사용하는 이미지/SVG 아이콘이 위치한다.
- `font/`
  - 프로젝트에서 사용하는 폰트 파일과 폰트 CSS가 위치한다.

### 파일 수정 원칙

새 화면을 만들 때 다음 파일을 무조건 수정하지 않는다.

1. 기존 `burgerking/login.html`은 새 화면의 참고 기준으로만 사용한다.
2. 공통으로 사용할 필요가 없는 페이지 전용 CSS를 `css/default.css`에 추가하지 않는다.
3. 기존 이미지나 아이콘을 사용할 수 있다면 새 파일을 중복해서 만들지 않는다.
4. 실제 필요한 파일만 추가하거나 수정한다.
5. 파일 경로는 반드시 현재 저장소의 실제 폴더 구조를 먼저 확인한다.

---

## 3. 기존 버거킹 로그인 HTML 구조

현재 `burgerking/login.html`은 다음과 같은 구조를 사용한다.

```text
#wrap
├─ header
│  ├─ h1
│  └─ 이전 버튼
│
└─ main
   ├─ h2.title
   ├─ form
   │  └─ fieldset
   │     ├─ 이메일 입력
   │     ├─ 비밀번호 입력
   │     ├─ 로그인 옵션
   │     └─ 로그인 버튼
   │
   ├─ .login_link
   │  ├─ 아이디 찾기
   │  ├─ 비밀번호 재설정
   │  └─ 회원가입
   │
   └─ .sns_login
      ├─ 안내 문구
      └─ .sns_list
```

새로운 로그인 관련 화면을 만들 때 이 구조를 먼저 참고한다.

### 주요 HTML 요소

- `#wrap`
  - 페이지 전체를 감싸는 영역
- `header`
  - 화면 상단 영역
- `h1`
  - 현재 페이지의 대표 제목
- `main`
  - 페이지의 핵심 콘텐츠
- `form`
  - 사용자 입력을 받는 영역
- `fieldset`
  - 폼 안에서 관련 입력 내용을 그룹화
- `legend`
  - 폼 그룹의 의미를 설명하며 필요한 경우 `.sr-only`로 시각적으로 숨긴다.
- `label`
  - 입력 요소와 연결되는 설명
- `input`
  - 이메일, 비밀번호, 체크박스 등의 입력
- `button`
  - 로그인, 비밀번호 보기 등 사용자의 동작
- `a`
  - 다른 화면으로 이동하는 링크
- `.sr-only`
  - 화면에는 보이지 않지만 스크린리더가 읽을 수 있는 텍스트

HTML은 화면에서 보이는 모양보다 콘텐츠의 의미와 역할을 먼저 생각한다.

---

## 4. 기존 CSS 작성 방식

현재 `login.html`의 페이지 전용 CSS는 `<style>` 안에 작성되어 있다.

새로운 화면을 만들 때 기존 프로젝트의 이 방식을 우선 유지한다.

### CSS 변수

현재 로그인 화면에서 사용하는 주요 변수는 다음과 같다.

```css
:root {
    --font: "Sandoll GothicNeoRound", sans-serif;
    --font-pre: "Pretendard Variable", sans-serif;
    --font-BKR: "BKR", sans-serif;
    --primary: #512314;
    --focus: #d62302;
    --baseborder: #D5CDC2;
    --inputBg: #FFFCF9;
    --button: #E9DDCD;
    --errorColor: #c54734;
    --placeholder: #ebe6e2;
    --text: #766053;
    --bg: #F4EBDC;
}
```

새 화면이 같은 브랜드의 화면이라면 기존 변수와 값을 우선 재사용한다.

다른 브랜드의 화면이라면 구조와 작성 방식을 재사용하되, 브랜드에 맞는 색상/폰트/이미지를 별도로 검토한다.

---

## 5. 기존 레이아웃 방식

현재 로그인 UI에서는 다음 CSS 방식을 사용한다.

### Flex

정렬이 필요한 곳에서는 `display: flex`를 사용한다.

예:

```css
header {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Position

아이콘이나 버튼을 특정 위치에 배치할 때 `position`을 사용한다.

예:

```css
.input_box.rela {
    position: relative;
}

.pw_btn {
    position: absolute;
}
```

### 전체 화면

현재 페이지 전체 영역은 `#wrap`으로 관리한다.

```css
#wrap {
    width: 100%;
    max-width: 1024px;
    min-width: 360px;
    min-height: 100dvh;
    margin: 0 auto;
    background-color: var(--bg);
}
```

새 화면에서도 특별한 이유가 없다면 기존 `#wrap` 구조를 유지한다.

---

## 6. 크기와 단위

현재 로그인 화면에서는 다음과 같은 방식을 사용한다.

```css
html {
    font-size: 62.5%;
}
```

그 결과 `1rem`을 기준으로 크기를 작성한다.

예:

```css
body {
    font-size: 1.6rem;
}

h1 {
    font-size: 2.0rem;
}
```

새 화면에서도 기존 프로젝트의 `rem` 중심 작성 방식을 우선 유지한다.

새로운 단위를 사용할 때는 기존 구조와 충돌하지 않는지 확인한다.

---

## 7. 폼 UI 작성 방식

현재 로그인 UI는 `form`과 `fieldset`을 사용하여 입력 영역을 구성한다.

```html
<form action="">
    <fieldset>
        <legend class="sr-only">로그인화면</legend>
        ...
    </fieldset>
</form>
```

새로운 입력 화면을 만들 때도 입력의 목적에 따라 적절한 `label`, `input`, `button` 등을 사용한다.

### 비밀번호 입력

현재 비밀번호 입력은 다음과 같이 별도의 버튼을 함께 배치한다.

```html
<div class="input_box rela">
    <input type="password" ...>
    <button type="button" class="pw_btn">
        <span class="sr-only">비밀번호 보기</span>
    </button>
</div>
```

비밀번호 입력 UI를 새로 만들 때 기존 `.input_box.rela`와 `.pw_btn` 구조를 먼저 검토한다.

---

## 8. 체크박스 작성 방식

현재 로그인 옵션은 실제 checkbox input을 숨기고 `span`의 가상 요소로 디자인을 표현한다.

```html
<label>
    <input class="check sr-only" type="checkbox">
    <span>아이디 저장</span>
</label>
```

CSS에서는 체크 여부에 따라 이미지가 변경된다.

```css
.login_option .check + span::before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url(img/checkBox_disabled.svg) no-repeat center / contain;
}

.login_option .check:checked + span::before {
    background-image: url(img/checkBox_active.svg);
}
```

새 화면에서 같은 형태의 체크박스가 필요하다면 기존 방식을 먼저 재사용한다.

---

## 9. 아이콘과 이미지

현재 `burgerking/img/`에는 로그인 UI에 사용하는 SVG가 있다.

예:

- `back_icon.svg`
- `eye_icon.svg`
- `checkBox_active.svg`
- `checkBox_disabled.svg`
- `KakaoLoginIcon.svg`
- `NaverLoginIcon.svg`
- `AppleLoginIcon.svg`
- `SamsungLoginIcon.svg`

새 화면을 만들 때 먼저 기존 이미지 중 재사용할 수 있는 것이 있는지 확인한다.

같은 역할의 아이콘을 CSS나 새 이미지로 다시 만들지 않는다.

이미지가 새로 필요하다면 실제 파일 경로와 파일명을 확인한 뒤 추가한다.

---

## 10. 접근성 관련 작성 방식

공통 `css/default.css`에는 `.sr-only`가 이미 정의되어 있다.

```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

화면에서 보이지 않아야 하지만 의미가 필요한 텍스트에는 기존 `.sr-only`를 재사용한다.

예:

```html
<button type="button">
    <span class="sr-only">비밀번호 보기</span>
</button>
```

접근성을 이유로 기존 구조를 불필요하게 복잡하게 만들지 않는다.

---

## 11. 새 화면을 만들 때의 원칙

새 화면을 만들기 전에 반드시 다음 순서로 확인한다.

### 1단계. 기존 파일 확인

- 관련 HTML 파일이 있는가?
- 공통 CSS에 이미 사용할 수 있는 스타일이 있는가?
- 기존 이미지/SVG가 있는가?
- 폰트 파일과 경로는 무엇인가?

### 2단계. 기존 구조 분석

현재 버거킹 로그인 UI에서 어떤 구조를 재사용할 수 있는지 확인한다.

예:

- `#wrap`
- `header`
- `main`
- `form`
- `fieldset`
- `input_box`
- `.pw_btn`
- `.sr-only`

### 3단계. 새 화면과 비교

Figma 또는 디자인 시안에서 다음을 확인한다.

- 화면 크기
- 콘텐츠 순서
- 제목
- 입력 항목
- 버튼
- 안내 문구
- 오류 문구
- 아이콘
- 색상
- 여백
- 폰트 크기

### 4단계. 필요한 부분만 추가

기존 구조와 스타일로 해결할 수 있다면 새 CSS를 만들지 않는다.

차이가 있는 부분만 추가한다.

### 5단계. 기존 코드와 충돌 확인

새 CSS가 기존 클래스나 공통 CSS에 영향을 주지 않는지 확인한다.

---

## 12. 다른 브랜드 로그인 UI를 만들 때

다른 브랜드의 로그인 UI를 만들 경우에도 HTML/CSS 작성 방식은 현재 버거킹 프로젝트를 기준으로 한다.

다만 다음 요소는 브랜드에 따라 달라질 수 있다.

- 브랜드명
- 페이지 제목
- 색상
- 폰트
- 로고
- 아이콘
- 입력 문구
- 버튼 문구
- SNS 로그인 종류
- 배경색
- 콘텐츠 구성

즉,

> 구조와 코딩 방식은 재사용하고, 브랜드 디자인과 콘텐츠는 새 디자인에 맞게 변경한다.

단순히 버거킹의 색상과 텍스트를 복사해서 다른 브랜드에 적용하지 않는다.

---

## 13. CSS 작성 시 주의사항

### 기존 클래스 우선 확인

새 클래스를 만들기 전에 기존 클래스가 같은 역할을 할 수 있는지 확인한다.

예를 들어 비밀번호 입력 영역이라면 먼저:

```text
.input_box
.input_box.rela
.pw_btn
```

를 검토한다.

### 중복 CSS 최소화

다음과 같이 같은 스타일을 여러 번 작성하지 않는다.

```css
.page1 input {
    width: 100%;
}

.page2 input {
    width: 100%;
}
```

공통으로 사용할 수 있는 스타일인지 먼저 판단한다.

단, 서로 다른 화면의 디자인이 달라 공통화하면 오히려 유지보수가 어려워지는 경우에는 페이지별 CSS를 사용한다.

---

## 14. 파일 경로 확인

현재 저장소에서는 폰트 관련 폴더명이 `font`인지 `fonts`인지 반드시 실제 저장소에서 확인한 뒤 작성한다.

기존 `login.html`에는 다음과 같은 경로가 작성되어 있다.

```html
../fonts/css/BKBulMatPro.css
../fonts/css/SDGothicNeoRound.css
../fonts/css/pretendardvariable.css
```

하지만 파일 경로는 코드에 적힌 값만 믿지 말고 실제 저장소의 폴더 구조를 확인한다.

새 파일을 만들 때는 실제 존재하는 경로를 기준으로 작성한다.

이미지 경로 역시 같은 원칙을 적용한다.

---

## 15. JavaScript 사용 원칙

현재 버거킹 로그인 UI의 핵심 구조는 HTML/CSS로 작성되어 있다.

새 화면을 만들 때 JavaScript를 무조건 추가하지 않는다.

다음과 같이 실제 동작이 필요한 경우에만 JavaScript를 검토한다.

- 비밀번호 보기/숨기기
- 입력값에 따른 상태 변경
- 버튼 활성화
- 오류 상태 변경
- 화면 전환

단순히 디자인을 표현하기 위해 JavaScript를 사용하지 않는다.

---

## 16. 오류 상태 UI

오류 메시지가 있는 화면을 구현할 때는 정상 상태와 오류 상태의 공통 구조를 먼저 찾는다.

예:

```text
입력 영역
└─ input
└─ 오류 메시지
```

정상 화면과 오류 화면을 각각 완전히 다른 HTML로 복사하지 않는다.

공통 구조를 유지하면서 상태만 달라지는지 먼저 확인한다.

---

## 17. 반응형 작성

현재 로그인 UI는 모바일 화면을 기준으로 작성되어 있으며 `#wrap`에 다음 값이 적용되어 있다.

```css
width: 100%;
max-width: 1024px;
min-width: 360px;
min-height: 100dvh;
```

새 화면도 특정 모바일 화면 크기에만 고정하지 않는다.

Figma가 390px 기준이라고 하더라도 390px에서만 동작하도록 고정된 구조를 만들지 않는다.

---

## 18. AI가 코드를 수정할 때의 순서

AI는 다음 순서를 지켜야 한다.

1. 저장소의 관련 파일을 읽는다.
2. 기존 HTML 구조를 분석한다.
3. 기존 CSS 구조와 클래스 이름을 확인한다.
4. 기존 이미지/폰트 경로를 확인한다.
5. 새 화면과 기존 화면의 공통점을 찾는다.
6. 재사용 가능한 코드부터 판단한다.
7. 새로 필요한 코드만 작성한다.
8. 기존 파일을 불필요하게 수정하지 않는다.
9. 수정한 부분과 이유를 설명한다.
10. 실제 파일 경로와 연결 상태를 확인한다.
11. 가능하면 브라우저에서 확인해야 할 테스트 항목을 알려준다.

AI는 기존 코드를 전부 삭제하고 새 코드로 교체하는 방식으로 작업하지 않는다.

---

## 19. 작업 전 사용자 확인

여러 파일을 수정하거나 새로운 화면을 추가해야 하는 경우 바로 코드를 수정하지 않는다.

먼저 다음을 사용자에게 알려준다.

```text
추가할 파일:
- ...

수정할 파일:
- ...

수정하지 않을 파일:
- ...

각 파일을 수정/추가하는 이유:
- ...
```

사용자가 확인한 후 실제 코드 작업을 진행한다.

---

## 20. GitHub 반영 전 확인

코드를 GitHub에 반영하기 전에 다음을 확인한다.

- HTML 구조가 기존 프로젝트 방식과 맞는가?
- CSS 클래스가 불필요하게 중복되지 않았는가?
- 이미지 경로가 실제 파일과 연결되는가?
- 폰트 경로가 실제 파일과 연결되는가?
- 기존 화면의 스타일을 불필요하게 변경하지 않았는가?
- 모바일 화면에서 레이아웃이 깨지지 않는가?
- 입력 요소와 버튼이 정상적으로 배치되는가?
- 접근성에 필요한 텍스트가 빠지지 않았는가?

사용자가 확인하기 전에는 임의로 GitHub에 커밋하지 않는다.

---

## 21. 핵심 원칙 요약

이 프로젝트에서 가장 중요한 원칙은 다음과 같다.

### 기존 코드를 먼저 이해한다.

새로운 코드를 작성하기 전에 현재 코드의 구조와 작성 이유를 확인한다.

### 재사용할 수 있는 것은 재사용한다.

같은 역할의 HTML 구조, CSS 클래스, 이미지, 폰트가 있다면 우선 기존 것을 사용한다.

### 필요한 것만 수정한다.

새 화면 하나를 만든다고 기존 공통 CSS나 다른 화면까지 불필요하게 수정하지 않는다.

### 디자인보다 구조를 먼저 본다.

Figma와 실제 HTML을 비교할 때 단순히 모양만 따라 만들지 않고 콘텐츠 구조와 의미를 먼저 판단한다.

### AI가 임의로 프로젝트 방식을 바꾸지 않는다.

새로운 라이브러리, 새로운 CSS 방법, 새로운 폴더 구조 등을 사용할 필요가 있다면 먼저 이유를 설명하고 사용자에게 확인한다.

### 최종 목표

AI가 대신 코드를 만들어주는 것이 아니라,

> 기존 코드 이해 → 필요한 부분 재사용 → 필요한 부분만 수정 → 결과 확인

의 과정을 통해 기존 프로젝트의 코드 작성 방식을 유지하면서 새로운 UI를 만들 수 있도록 한다.
