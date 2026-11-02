# Fotona Website Renewal — Design System

> 이 문서는 `fotona/index.html`과 `fotona/css/main.css`를 기준으로, 완료된 메인페이지의 시각 규칙을 서브페이지에서도 일관되게 재사용하기 위한 문서입니다.
>
> **기준 파일**
> - `fotona/index.html`
> - `fotona/css/main.css`
> - `css/default.css` (전역 리셋 및 기본 접근성 규칙)
> - `font/css/pretendardvariable.css` (Pretendard Variable 폰트 선언)
>
> **작성 원칙:** CSS에 실제 선언된 값은 그대로 기록했습니다. 미디어쿼리별 값이 다르면 범위를 구분했습니다. CSS 변수로 정의되지 않은 값은 변수인 것처럼 표현하지 않았습니다. 아래의 '권장'은 현재 코드에 이미 적용된 규칙이 아니라, 서브페이지를 제작할 때 일관성을 유지하기 위한 제안입니다.

---

## 1. Project Overview

### 사이트 목적
Fotona 의료용 레이저 장비와 관련 시술 솔루션을 소개하고, 사용자가 제품 정보를 살펴본 뒤 관련 시술·제품을 탐색하거나 병원을 찾고 데모를 신청하도록 돕는 브랜드 웹사이트입니다.

### 메인페이지의 정보 흐름
1. **Hero** — 영상과 핵심 브랜드 메시지로 첫인상을 전달
2. **Laser Solutions** — 대표 레이저 제품 3종 소개
3. **Treatments** — 시술 유형을 선택하고 관련 제품을 연결
4. **Clinic Finder** — 지역·장비·병원명 조건으로 병원 검색
5. **Demo Request** — 제품을 선택하고 데모 신청 정보 입력
6. **Footer** — 브랜드 로고와 회사 정보, 관련 링크 제공

### 디자인 방향
- 의료 기술 브랜드에 어울리는 정돈되고 전문적인 인상
- 넓은 여백과 큰 영문 제목으로 제품 및 기술 콘텐츠를 강조
- 흰색·밝은 회색 기반에 Fotona 레드(#EF1C26)를 행동 유도와 선택 상태에 사용
- 제품 이미지를 충분히 크게 노출하고 카드형 UI로 정보를 구분
- 설명을 길게 나열하기보다 제품 선택, 필터, 지도, 신청 등 실제 행동으로 연결

**해석:** 메인페이지는 브랜드 인지와 제품 탐색, 병원 검색, 데모 전환을 한 흐름 안에 배치한 구조입니다. 서브페이지도 장식적인 화면보다 사용자가 제품·시술 정보를 이해하고 다음 행동을 선택하기 쉬운 구조를 우선합니다.

---

## 2. Brand Identity

### 브랜드 표현
- **핵심 인상:** 전문성, 정밀함, 기술력, 신뢰감
- **시각적 중심:** Fotona 레드, 흰색·회색의 중립 배경, 장비 이미지
- **타이포그래피:** Pretendard Variable을 사용해 한글과 영문을 통일된 인상으로 표현
- **이미지:** 실제 제품 사진과 시술 관련 이미지를 주요 정보 전달 수단으로 사용
- **브랜드 로고:** 헤더는 `img/logoBlack.png`, 푸터는 `img/logoWhite.png` 사용

### 컬러가 전달하는 역할
- 레드는 선택된 항목, 주요 버튼, 강조 링크 등 행동이 필요한 곳에 집중합니다.
- 검정과 짙은 회색은 제목 및 주요 텍스트에 사용해 정보의 가독성을 확보합니다.
- 흰색과 밝은 회색은 콘텐츠 영역을 분리하면서 차분한 배경을 만듭니다.

### 이미지 사용 원칙
- 제품 소개에서는 제품 자체가 잘 보이는 이미지를 우선합니다.
- 카드 안의 이미지는 일정한 비율로 잘라 카드 간 높이와 리듬을 맞춥니다.
- 의미가 있는 이미지에는 실제 내용을 설명하는 `alt` 텍스트를 작성합니다. 장식용 이미지는 빈 `alt=""`를 사용할 수 있습니다.
- 새로운 서브페이지에서도 임의의 일러스트 스타일을 추가하기보다 메인페이지의 실제 제품·시술 이미지 중심 구성을 따릅니다.

---

## 3. Design Principles

### 3.1 정보 우선순위
페이지 제목과 섹션 제목을 먼저 읽고, 그 아래에서 이미지·설명·CTA를 확인할 수 있게 구성합니다. 영문 섹션 라벨(`.section-eyebrow`)은 콘텐츠의 순서와 주제를 보조합니다.

### 3.2 제품 중심의 콘텐츠
제품을 소개하는 영역은 이미지 → 제품명 → 짧은 설명 → 상세 정보 링크 순서로 구성합니다. 제품명과 설명은 서로 다른 글자 크기와 색상으로 구분합니다.

### 3.3 반복 컴포넌트 재사용
제품 카드, 시술 카드, 관련 제품 카드, 입력 필드, 주요 버튼은 기존 클래스의 형태와 상태 표현을 참고합니다. 같은 목적의 UI를 페이지마다 별도 스타일로 새로 만들지 않습니다.

### 3.4 강조색 절제
레드는 모든 제목이나 장식에 사용하는 색이 아닙니다. 주요 CTA, 선택 상태, 강조 링크 등 사용자의 주의를 모아야 하는 곳에 사용합니다.

### 3.5 일관된 모서리와 경계
카드와 입력 요소는 대체로 6px 라운드와 얇은 회색 테두리를 사용합니다. 큰 패널이나 미리보기 영역은 별도의 더 큰 라운드를 사용하므로 컴포넌트 크기에 맞춰 기존 사례를 따릅니다.

### 3.6 반응형에서도 정보 순서 유지
화면이 좁아져도 제품명, 설명, CTA의 순서를 유지합니다. 단순히 요소를 축소하는 데 그치지 않고, 지도와 검색 패널처럼 두 열로 구성된 콘텐츠는 모바일에서 세로로 쌓습니다.

---

## 4. Color System

아래 값은 `fotona/css/main.css`의 `:root`에 실제 정의된 값입니다.

### 4.1 Primitive Colors

| 변수명 | HEX | 용도 및 성격 |
|---|---|---|
| `--red-500` | `#EF1C26` | Fotona 기본 강조 레드 |
| `--red-700` | `#C9151E` | 주요 액션의 hover |
| `--red-100` | `#FCEBEC` | 연한 레드 배경, 선택·hover 배경 |
| `--gray-800` | `#414141` | 주요 텍스트 |
| `--gray-600` | `#818384` | 보조 텍스트 |
| `--gray-50` | `#F6F7F8` | 페이지 배경 |
| `--gray-200` | `#E4E6E8` | 기본 테두리 |
| `--white-100` | `#FFFFFF` | 카드 및 기본 표면, 반전 텍스트 |
| `--black-100` | `#000000` | 검정 배경 |

### 4.2 Semantic Colors

| 변수명 | 연결 값 | 사용 규칙 |
|---|---|---|
| `--background-page` | `var(--gray-50)` | 기본 페이지 및 섹션 배경 |
| `--background-subtle` | `var(--red-100)` | 연한 강조 배경 |
| `--background-black` | `var(--black-100)` | 푸터 등 검정 배경 |
| `--surface-default` | `var(--white-100)` | 카드·입력 영역 등 기본 표면 |
| `--surface-brand-subtle` | `var(--red-100)` | 브랜드 연한 배경 |
| `--text-primary` | `var(--gray-800)` | 제목·본문의 주요 텍스트 |
| `--text-secondary` | `var(--gray-600)` | 설명·보조 정보 |
| `--text-inverse` | `var(--white-100)` | 어두운 배경 위 텍스트 |
| `--border-default` | `var(--gray-200)` | 기본 카드·입력 테두리 |
| `--border-strong` | `var(--gray-800)` | hover·focus 등 경계 강조 |
| `--action-primary` | `var(--red-500)` | 주요 CTA 및 선택 강조 |
| `--action-primary-hover` | `var(--red-700)` | 주요 CTA hover |
| `--action-secondary` | `var(--gray-800)` | 보조 액션용 의미 색상 |
| `--action-disabled` | `var(--gray-600)` | 비활성 액션용 의미 색상 |
| `--action-default` | `var(--red-500)` | 기본 액션 |
| `--action-subtle` | `var(--red-100)` | 약한 액션 강조 |

### 4.3 적용 규칙
- 새로운 페이지의 기본 배경은 `--background-page`, 카드 배경은 `--surface-default`를 우선 사용합니다.
- 일반 제목과 본문은 `--text-primary`, 보조 설명은 `--text-secondary`를 사용합니다.
- 주요 CTA는 `--action-primary`, hover는 `--action-primary-hover`로 연결합니다.
- 카드 기본 테두리는 `--border-default`, 선택·hover 시 강조가 필요한 경우 `--border-strong` 또는 해당 컴포넌트에서 이미 사용하는 레드 강조 방식을 따릅니다.
- CSS에 변수로 등록되지 않은 색상(예: 지도 마커, 일부 폼 테두리, 이미지 플레이스홀더)은 개별 규칙에 직접 선언되어 있습니다. 이 값들을 공통 토큰이라고 부르거나 새 페이지 전체에 무조건 확장하지 않습니다.
- 새 컬러 토큰을 임의로 추가하지 않습니다. 꼭 필요한 경우 메인페이지의 시각 체계와 충돌하는지 먼저 검토합니다.

---

## 5. Typography

### 5.1 Font
- 기본 글꼴: `"Pretendard Variable", Pretendard, sans-serif`
- 폰트 파일 선언: `font/css/pretendardvariable.css`
- `@font-face`에서 `font-weight: 45 920` 가변 범위를 선언하고 `font-display: swap`을 사용합니다.
- 본문 기본 글꼴은 `body`에 지정되어 있습니다. Hero 제목에도 같은 폰트 계열을 명시합니다.

### 5.2 주요 타이포그래피

| 요소 | 데스크톱 기준 | 태블릿·모바일 규칙 |
|---|---|---|
| Hero 제목 `.hero-title` | 80px / 700 / line-height 1 | 1024px 이하: `clamp(42px, 7vw, 64px)` |
| Hero 설명 `.hero-description` | 22px / 400 / 1.5 | 1024px 이하: `clamp(16px, 2.4vw, 22px)` / 1.5 |
| 섹션 라벨 `.section-eyebrow` | 24px / 500 / 1 | 1024px 이하 20px, 700px 이하 16px |
| 섹션 제목 `.section-title` | 50px / 500 / 1, letter-spacing -0.03em | 1024px 이하 clamp(34px, 4.5vw, 46px), 700px 이하 clamp(28px, 7vw, 38px) / 1.1 |
| 제품명 `.product-name` | 30px / 500 / 1 | 1024px 이하 24px, 700px 이하 clamp(13px, 3vw, 24px) |
| 제품 설명 `.product-description` | 20px / 400 / 1.4 | 1024px 이하 16px, 700px 이하 clamp(10px, 1.8vw, 16px) |
| 제품 상세 링크 `.product-detail-link` | 18px / 400 / 1 | 1024px 이하 15px, 700px 이하 clamp(10px, 1.6vw, 15px) |

위 표는 주요 대표 요소를 정리한 것입니다. 관련 제품, 병원 검색, 데모 신청, 푸터에는 각 컴포넌트에 맞는 별도 크기가 선언되어 있으므로 실제 CSS를 우선 확인합니다.

### 5.3 행간·굵기 원칙
- 큰 영문 Hero 제목은 짧고 강한 인상을 위해 line-height 1을 사용합니다.
- 일반 설명문은 1.4~1.5 수준의 행간을 사용해 읽기 편하게 합니다.
- 제품명과 섹션 제목은 주로 500, Hero 제목은 700을 사용합니다.
- 보조 설명은 400, 섹션 라벨은 500을 사용합니다.
- 위 수치는 대표 컴포넌트의 실제 선언을 기준으로 한 것이며 모든 텍스트에 일괄 적용하는 규칙은 아닙니다.

### 5.4 전역 텍스트 규칙
`css/default.css`에서 제목과 문단에 `overflow-wrap: break-word`, `word-break: keep-all`을 적용해 한글 단어가 불필요하게 끊기는 것을 줄입니다.

---

## 6. Layout & Spacing

### 6.1 컨테이너

| 영역 | 실제 CSS 규칙 | 설명 |
|---|---|---|
| 제품 섹션 내부 `.laser-solutions-inner` | width 100%, max-width 1440px, margin auto | 넓은 화면에서 콘텐츠 폭 제한 |
| 병원 찾기 내부 `.clinic-finder-inner` | width 100%, max-width 1440px, margin auto | 제품 섹션과 유사한 콘텐츠 폭 |
| 시술 헤딩·관련 제품 | width 90%, max-width 1440px | 좌우 여백을 확보하고 콘텐츠 정렬 |
| 데모 영역 내부 `.demo-request-inner` | width 100%, max-width 1720px | 넓은 화면에서 폼·미리보기 배치 |
| 푸터 내부 `.footer-inner` | width 100%, max-width 1720px | 3열 정보 정렬 |

### 6.2 섹션 간격
- `.laser-solutions`, `.clinic-finder`: 기본 `padding: 7.5% 5%`
- `.treatments-section`: 기본 `padding: 7.5% 0`
- `.demo-request`: 기본 `padding: 110px 20px`
- `.site-footer`: 기본 `padding: 60px 20px`
- 1024px, 900px, 700px, 650px 등 컴포넌트별 미디어쿼리에서 별도로 간격을 조정합니다.

### 6.3 Grid와 Flex 사용
- 제품 카드: `grid-template-columns: repeat(3, minmax(0, 1fr))`로 3열 배치
- 관련 제품: 기본 3열 Grid, 모바일에서도 3열 유지
- 데모 제품 선택: 3열 Grid
- 데모 콘텐츠: 데스크톱에서 Flex로 미리보기와 폼을 가로 배치, 모바일에서 세로 배치
- 병원 검색 패널: 데스크톱에서 지도와 검색 영역을 1.25fr : 1fr 비율의 Grid로 배치, 모바일에서 1열로 전환
- 푸터: 기본 3열 Grid, 모바일에서도 3열의 축소된 배치를 사용

### 6.4 카드와 이미지
- 제품·시술 카드의 이미지 비율은 기본적으로 `aspect-ratio: 1.5 / 1`을 사용합니다.
- 제품 이미지 링크에는 좌우 6px 정도의 안쪽 여백(`margin: 6px 6px 0`)이 있습니다.
- 모바일 일부 카드 이미지는 `aspect-ratio: 1.2 / 1`로 변경됩니다.
- 이미지는 주로 `object-fit: cover`로 영역을 채웁니다. 데모 미리보기 기본 로고는 `object-fit: contain`을 사용하고 제품 선택 시 cover로 바뀝니다.

### 6.5 간격과 정렬 원칙
- 제품 카드 내부는 이미지와 텍스트 콘텐츠를 분리합니다.
- 카드 콘텐츠는 Flex column으로 구성하고 상세 링크에 `margin-top: auto`를 사용해 카드 높이가 달라도 링크의 아래쪽 정렬을 유지합니다.
- 제목과 설명 사이에는 컴포넌트별 margin 또는 gap을 사용합니다. 새 페이지에서 모든 간격을 하나의 숫자로 통일하지 말고 유사 컴포넌트의 실제 규칙을 따릅니다.

---

## 7. Components

### 7.1 Header / GNB
**구조**
- `.site-header`: 전체 헤더, 흰색 배경, `z-index: 10`
- `.header-inner`: 로고와 GNB를 가로 정렬하는 Flex 컨테이너
- `.site-logo`: 로고 이미지
- `.main-nav` → `.nav-list` → `.nav-item`: 주요 메뉴
- `.has-submenu` → `.submenu`: 하위 메뉴

**사용 규칙**
- 기본 높이는 72px, 1024px 이하와 600px 이하에서는 64px입니다.
- 데스크톱 좌우 패딩은 6.8%, 태블릿은 24px, 모바일은 12px입니다.
- 로고 이미지는 기본 100px 너비이며 모바일에서는 clamp로 조정합니다.
- 메뉴 텍스트는 기본 18px / 500, 1024px 이하 14px, 모바일에서는 clamp를 사용합니다.
- 메뉴 hover 또는 focus-within 시 글자색은 `--action-primary`, 배경은 `--red-100`입니다.
- 서브메뉴는 기본 숨김이며 부모 메뉴 hover/focus-within에서 표시됩니다.
- 서브메뉴는 흰색에 가까운 반투명 배경, 아래쪽 라운드, 부드러운 그림자를 사용합니다.

### 7.2 Section Heading
- `.section-eyebrow`: 섹션 번호와 영문 카테고리 표시
- `.section-title`: 섹션의 핵심 메시지
- 섹션 라벨은 보조 텍스트 컬러, 섹션 제목은 주요 텍스트 컬러를 사용합니다.
- 두 요소는 라벨 → 제목 순서로 배치합니다.

### 7.3 Product Card
**구성:** `.product-card` → `.product-image-link` → `.product-card-content` → `.product-name` + `.product-description` + `.product-detail-link`

- 기본 배경은 흰색, 테두리는 `--border-default`, radius는 6px입니다.
- 이미지 영역은 카드 안쪽에 6px 여백을 둡니다.
- 제품명은 30px / 500, 설명은 20px / 400, 상세 링크는 18px / 400입니다.
- 이미지 hover 시 0.35s ease로 scale(1.04) 확대됩니다.
- 카드 hover/focus-within/active 시 테두리가 `--border-strong`로 바뀝니다.

### 7.4 Treatment Card
**구성:** 버튼 `.treatment-card` 안에 이미지, `.treatment-card-title`, `.treatment-card-description`이 배치됩니다.

- 카드 전체가 버튼이므로 선택 동작을 수행합니다.
- 기본은 흰색 표면, 회색 테두리, 6px 라운드입니다.
- hover/focus-visible에서는 경계를 강조합니다.
- 선택 상태 `.is-selected`는 레드 테두리와 안쪽 강조선, 위로 3px 이동 효과를 사용합니다.
- 선택 상태는 `aria-pressed` 속성에도 반영합니다.
- Swiper를 사용하며 화면 너비별 노출 개수와 간격은 JS의 breakpoints 설정을 따릅니다.

### 7.5 Related Product Card
- `.related-product-grid` 안에 `.related-product-card`를 배치합니다.
- 이미지 → 제품명 → 설명 → 제품 자세히 보기 순서입니다.
- 기본 테두리와 radius는 제품 카드와 유사합니다.
- 선택된 시술에 해당하는 제품만 표시하며, 표시 제어는 `hidden` 속성으로 처리합니다.
- hover/focus-within에서 테두리 색을 강조합니다.

### 7.6 Clinic Finder
**구성:** `.clinic-finder-panel` 안에 지도 `.clinic-map-placeholder`와 검색 영역 `.clinic-search`를 배치합니다.

- 지역과 장비 선택은 select, 병원명은 search input을 사용합니다.
- 필터와 검색 버튼은 검색 폼 안에 배치합니다.
- 검색 결과는 `.clinic-result` 목록으로 표시하고, 각 항목은 버튼으로 선택합니다.
- 선택된 병원은 `.is-selected` 배경으로 구분하고 지도 중심 이동 및 정보창 표시와 연결됩니다.
- 페이지네이션 버튼의 현재 페이지는 `.is-current` 및 `aria-current`로 구분합니다.

### 7.7 Form Controls
- 병원 검색·데모 신청 입력은 흰색 또는 밝은 회색 표면, 얇은 회색 테두리, 6px 라운드를 기본으로 합니다.
- 높이는 주로 40px이며 모바일에서 일부 38px로 조정됩니다.
- 입력 텍스트는 `--text-primary`, placeholder는 `--text-secondary`를 사용합니다.
- 데모 입력 focus-visible은 레드 테두리와 연한 레드 outline을 사용합니다.
- 폼 필드에는 실제 label을 연결합니다. 시각적으로 숨기는 경우 `.visually-hidden` 유틸리티를 사용합니다.

### 7.8 Primary Button
- 데모 신청 및 병원 검색 버튼은 `--action-primary` 배경과 `--text-inverse` 텍스트를 사용합니다.
- radius는 6px, 최소 높이는 40px입니다.
- hover/focus-visible에서는 `--action-primary-hover`로 배경색이 변경됩니다.
- 새 페이지에서 주요 CTA는 이 버튼 스타일을 기준으로 맞춥니다.

### 7.9 Footer
**구조**
- `.site-footer`: 검정 배경
- `.footer-inner`: 최대 1720px, 3열 Grid
- `.footer-brand`: 흰색 로고와 저작권 문구
- `.footer-information`: 개인정보 처리방침과 회사 정보
- `.footer-family`: Family Site 링크

**사용 규칙**
- 푸터는 `--background-black` 배경, 밝은 텍스트와 보조 회색 텍스트로 구성합니다.
- 로고는 `img/logoWhite.png`를 사용합니다.
- Family Site는 테두리형 링크이며 hover/focus-visible에서 테두리가 밝아집니다.
- 모바일에서는 3열 구성을 유지하면서 로고·텍스트·링크 크기를 clamp로 줄입니다.

---

## 8. Interaction

### 8.1 Hover / Focus / Active 상태
| 대상 | 기본 상태 | 상호작용 상태 |
|---|---|---|
| GNB 메뉴 | 주요 텍스트 컬러 | hover/focus-within에서 레드 텍스트 + 연한 레드 배경 |
| GNB 서브메뉴 링크 | 주요 텍스트 컬러 | hover/focus-visible에서 레드 텍스트 + 연한 레드 배경 |
| 제품 카드 | 회색 테두리 | hover/focus-within/active에서 짙은 테두리 |
| 제품 이미지 | 기본 크기 | hover에서 scale(1.04), 0.35s ease |
| 제품 상세 링크 | 보조 텍스트 컬러 | hover/focus-visible에서 레드 |
| 시술 카드 | 회색 테두리 | hover/focus-visible에서 짙은 테두리, 선택 시 레드 테두리·안쪽 선·위로 3px 이동 |
| 병원 결과 | 흰색 배경 | hover/focus-visible/선택 시 연한 레드 배경 |
| 페이지네이션 | 흰색 배경·회색 테두리 | hover/focus-visible/현재 페이지에서 레드 배경과 흰색 글자 |
| 폼 입력 | 흰색 또는 연한 배경 | 데모 입력 focus-visible에서 레드 테두리와 연한 레드 외곽선 |
| 주요 버튼 | Fotona 레드 | hover/focus-visible에서 짙은 레드 |
| 데모 제품 선택 | 회색 테두리 | 선택 시 짙은 테두리, 제품명 레드 |
| 푸터 Family Site | 어두운 배경·회색 테두리 | hover/focus-visible에서 밝은 테두리 |

### 8.2 Transition
- 일반 메뉴·링크·버튼: 주로 `0.2s ease`
- 제품 이미지 확대: `0.35s ease`
- 시술 카드: 테두리·transform에 `.2s ease`
- 데모 미리보기 이미지: opacity `.25s ease`
- 새 컴포넌트에 임의로 과한 애니메이션을 추가하지 말고, 위와 같은 짧고 절제된 전환을 사용합니다.

### 8.3 JavaScript 동작
- 시술 카드를 선택하면 `is-selected`와 `aria-pressed`를 갱신하고 관련 제품 목록을 필터링합니다.
- 선택된 시술 카드를 다시 누르면 선택을 해제하고 기본 관련 제품 상태로 되돌립니다.
- 병원 검색은 지역·장비·키워드를 조합해 결과를 필터링합니다.
- 병원 결과를 선택하면 지도 중심과 정보창을 갱신합니다.
- 데모 제품 선택은 미리보기 이미지를 변경하고 선택 상태를 표시합니다.
- 현재 메인페이지의 데모 신청 폼은 실제 전송이 아니라 입력 완료 안내 메시지를 표시하는 시안 동작입니다. 서브페이지에서 실제 신청 기능이 구현되어 있다고 가정하지 않습니다.

### 8.4 접근성
- 키보드 사용자를 위해 `:focus-visible` 상태를 제공하는 기존 컴포넌트 패턴을 유지합니다.
- 버튼 기반 선택 UI에는 `aria-pressed`, 결과 목록에는 `aria-live`, 현재 페이지에는 `aria-current`를 적절히 사용합니다.
- `css/default.css`는 전역 `:focus` outline을 제거하고 `:focus-visible`에서 outline을 다시 제공합니다. 따라서 새로운 인터랙션 요소에 포커스 표시를 누락하지 않아야 합니다.
- `prefers-reduced-motion: reduce` 설정에서는 전역 transition과 animation 시간을 최소화합니다.

---

## 9. Responsive Rules

메인 CSS는 하나의 단일 브레이크포인트 체계가 아니라 컴포넌트별로 1024px, 1100px, 900px, 760px, 700px, 650px, 600px, 1600px 등을 사용합니다. 아래는 실제 선언을 기능별로 정리한 것입니다.

### 9.1 Header
- 기본: 72px 높이, 좌우 padding 6.8%, 메뉴 글자 18px
- 1024px 이하: 높이 64px, 좌우 padding 24px, 메뉴 글자 14px
- 600px 이하: 높이 64px, 좌우 padding 12px, 로고와 GNB를 한 줄에 배치하고 메뉴 글자 크기를 clamp로 축소

### 9.2 Hero
- 기본 높이: `44.8vw`, 최소 360px, 최대 860px
- 1024px 이하: 제목과 설명 글자 크기를 clamp로 조정하고 좌우 여백을 24px로 변경
- 영상은 컨테이너를 채우며 `object-fit: cover`를 사용

### 9.3 Product / Treatment
- 제품 섹션: 1024px 이하 padding 64px 4%, 700px 이하 padding 48px 20px
- 제품 Grid는 3열을 유지하고 카드 내부 글자·간격을 축소
- 시술 Swiper: JS 설정 기준 기본 1.6개, 600px 이상 2.5개, 760px 이상 4개, 1024px 이상 6개 노출
- 관련 제품: 1024px 이하 간격 축소, 700px 이하 3열 유지하며 글자와 카드 패딩 축소

### 9.4 Clinic Finder
- 기본: 지도와 검색 패널 2열, 지도 최소 높이 520px
- 900px 이하: 2열을 유지하면서 간격과 지도 최소 높이를 축소
- 650px 이하: 1열로 전환, 지도 최소 높이 220px

### 9.5 Demo Request
- 기본: 미리보기와 폼을 가로 배치
- 1100px 이하: 미리보기 너비를 비율로 조정하고 요소 간격 축소
- 700px 이하: 세로 배치, 미리보기 너비 최대 300px, 입력 폼은 전체 너비 사용

### 9.6 Footer
- 기본: 3열 Grid
- 700px 이하: 3열을 유지하면서 로고·저작권·회사 정보·Family Site의 글자와 간격을 축소

### 9.7 서브페이지 적용 원칙
- 기존 페이지에서 사용한 브레이크포인트를 먼저 재사용합니다.
- 동일 컴포넌트가 다른 페이지에서 다른 폭으로 동작하지 않도록 공통 CSS를 우선 활용합니다.
- 모바일에서 데스크톱의 작은 복사본처럼 보이게 만드는 것보다 콘텐츠 순서와 주요 CTA의 접근성을 유지합니다.
- 위 규칙에 없는 새로운 레이아웃이 필요하면 메인페이지와 가장 유사한 컴포넌트의 반응형 동작을 기준으로 설계합니다.

---

## 10. Do & Don't

### DO
- `:root`에 정의된 Primitive·Semantic 컬러 변수를 우선 사용합니다.
- Pretendard Variable을 기본 글꼴로 사용합니다.
- 제목 → 설명 → 이미지/콘텐츠 → CTA의 정보 위계를 유지합니다.
- 제품 카드와 관련 제품 카드의 이미지 비율·테두리·라운드·텍스트 배치를 맞춥니다.
- CTA는 Fotona 레드로 명확히 표현하고 hover/focus 상태를 함께 구현합니다.
- 카드 선택 상태는 색상만으로 표현하지 않고 테두리·상태 클래스·ARIA 속성을 함께 관리합니다.
- 모바일에서 지도·검색 패널, 데모 미리보기·폼처럼 넓은 화면의 2열 콘텐츠를 자연스럽게 재배치합니다.
- 기존 로고 파일과 제품 이미지를 우선 사용합니다.
- 공통 요소는 기존 클래스와 규칙을 재사용해 중복 CSS를 줄입니다.
- 실제 동작하지 않는 링크나 폼은 동작 범위를 명확히 확인한 뒤 구현합니다.

### DON'T
- 메인페이지에 없는 임의의 브랜드 컬러나 새로운 컬러 토큰을 추가하지 않습니다.
- 근거 없이 폰트 크기·컨테이너 너비·간격 값을 새로 정해 공통 규칙처럼 사용하지 않습니다.
- 모든 텍스트를 레드로 표현하지 않습니다.
- 모든 카드에 서로 다른 라운드·그림자·테두리를 임의로 적용하지 않습니다.
- 제품 이미지의 비율과 크롭 방식을 페이지마다 제각각 바꾸지 않습니다.
- hover만 제공하고 키보드 focus-visible 상태를 생략하지 않습니다.
- 모바일에서 글자와 버튼을 읽기 어려울 정도로 축소하지 않습니다.
- 메인페이지의 콘텐츠 순서나 디자인을 변경하지 않습니다.
- 기존 메인페이지의 링크가 실제 외부 브랜드 사이트로 연결된다고 가정하지 않습니다. 현재 HTML에는 섹션 내부 해시 링크(`#products`, `#demo` 등)와 `#` 링크가 사용되어 있습니다.
- 데모 폼의 현재 안내 메시지를 실제 서버 전송 기능으로 오해하지 않습니다.

---

## Implementation Notes

1. 현재 `fotona/index.html`은 `../css/default.css`, `../font/css/pretendardvariable.css`, `css/main.css`를 연결합니다. 서브페이지를 `fotona` 폴더 안에 추가한다면 CSS·폰트 경로가 동일하게 유효한지 확인해야 합니다.
2. `main.css`에는 변수로 관리되는 색상과 직접 HEX로 선언된 색상이 함께 있습니다. 새 페이지에서는 공통 변수 사용을 우선하되 기존 직접 선언값을 임의로 변수명으로 바꿔 기록하지 않습니다.
3. 일부 CSS 규칙은 컴포넌트별 미디어쿼리에서 반복 선언됩니다. 서브페이지에서 값을 가져올 때는 해당 컴포넌트의 마지막으로 적용되는 미디어쿼리까지 확인합니다.
4. 이 문서는 디자인 규칙을 설명하는 문서이며, 실제 화면의 모든 픽셀을 고정하는 명세서는 아닙니다. 새로운 콘텐츠의 길이와 이미지 비율에 따라 세부 레이아웃은 조정하되 브랜드 컬러·타이포그래피·카드 스타일·인터랙션 원칙은 유지합니다.
