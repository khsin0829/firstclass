/* Product detail page interactions */
(() => {
    const sections = [...document.querySelectorAll("[data-product-section]")];
    const navLinks = [...document.querySelectorAll(".product-anchor-link")];

    if (!sections.length || !navLinks.length) return;

    function setActiveLink(sectionId) {
        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === "#" + sectionId;
            link.classList.toggle("is-active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    // 제품 섹션이 화면에 들어오면 상단 제품 바로가기의 현재 항목을 갱신합니다.
    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            const visibleSections = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visibleSections[0]) {
                setActiveLink(visibleSections[0].target.id);
            }
        }, {
            rootMargin: "-25% 0px -55% 0px",
            threshold: [0, 0.15, 0.35, 0.6]
        });

        sections.forEach((section) => sectionObserver.observe(section));
    }

    // 기존 제품 이미지 경로가 변경되거나 파일이 없을 때 이미지 박스를 안내 영역으로 전환합니다.
    document.querySelectorAll(".product-visual img").forEach((image) => {
        image.addEventListener("error", () => {
            image.closest(".product-visual")?.classList.add("is-empty");
        }, { once: true });
    });

    // 바로가기 클릭 시 선택 상태를 즉시 반영합니다.
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const targetId = link.getAttribute("href").slice(1);
            setActiveLink(targetId);
        });
    });
})();
