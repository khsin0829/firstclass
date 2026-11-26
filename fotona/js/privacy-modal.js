(() => {
    const links = document.querySelectorAll(".footer-privacy");
    if (!links.length) return;

    const modal = document.createElement("div");
    modal.className = "privacy-modal";
    modal.id = "privacy-policy-modal";
    modal.hidden = true;
    modal.innerHTML = `
        <div class="privacy-modal-backdrop" data-privacy-close></div>
        <div class="privacy-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="privacy-modal-title" tabindex="-1">
            <button class="privacy-modal-close" type="button" aria-label="개인정보 처리방침 닫기" data-privacy-close>×</button>
            <div class="privacy-modal-content">
                <div class="privacy-modal-intro">
                    <p>본 웹사이트는 개인정보 보호와 처리방침의 구성을 안내하기 위한 포트폴리오용 시안입니다. 아래 내용은 실제 운영 정책이 아닌 예시이며, 실제 서비스의 처리 방식과 운영 주체에 맞게 별도로 작성되어야 합니다.</p>
                </div>
                <h2 id="privacy-modal-title">개인정보 처리방침</h2>
                <section><h3>제 1장. 개인정보 수집 동의절차</h3><p>회사는 웹사이트 이용자가 개인정보보호방침 또는 이용약관의 내용에 대해 동의 여부를 선택할 수 있도록 절차를 마련합니다. 본 포트폴리오 시안에서는 실제 동의 및 개인정보 수집 기능이 작동하지 않습니다.</p></section>
                <section><h3>제 2장. 개인정보의 수집 및 이용 목적</h3><p>실제 서비스에서는 데모 신청, 문의 접수 및 답변 등 이용자가 요청한 서비스 제공을 위해 개인정보를 처리할 수 있습니다. 본 시안은 화면 확인용이며 입력 정보는 서버로 전송되거나 저장되지 않습니다.</p></section>
                <section><h3>제 3장. 수집하는 개인정보 항목</h3><p>실제 서비스 운영 시 신청 및 문의에 필요한 항목을 명확히 안내해야 합니다. 본 시안의 입력 양식은 예시이며 실제 개인정보를 입력하지 마세요.</p></section>
                <section><h3>제 4장. 개인정보 보유 및 이용 기간</h3><p>실제 서비스에서는 처리 목적과 관련 법령에 따라 보유 기간을 정하고, 목적 달성 또는 기간 경과 시 안전하게 파기해야 합니다. 본 시안은 개인정보를 저장하지 않습니다.</p></section>
                <section><h3>제 5장. 개인정보의 제3자 제공</h3><p>본 포트폴리오 시안은 이용자의 개인정보를 제3자에게 제공하지 않습니다.</p></section>
                <section><h3>포트폴리오 안내</h3><p>본 사이트는 비상업적 포트폴리오 시안이며 실제 공식 웹사이트가 아닙니다. 이 문구는 학습용 예시이며 실제 서비스 공개 전 운영 주체와 처리 방식에 맞게 검토 및 수정해야 합니다.</p></section>
            </div>
        </div>`;
    document.body.appendChild(modal);

    const dialog = modal.querySelector(".privacy-modal-dialog");
    let previousFocus = null;
    const close = () => {
        modal.hidden = true;
        document.body.classList.remove("privacy-modal-open");
        if (previousFocus) previousFocus.focus();
    };
    links.forEach(link => {
        link.href = "#privacy-policy-modal";
        link.setAttribute("aria-haspopup", "dialog");
        link.addEventListener("click", event => {
            event.preventDefault();
            previousFocus = link;
            modal.hidden = false;
            document.body.classList.add("privacy-modal-open");
            dialog.focus();
        });
    });
    modal.querySelectorAll("[data-privacy-close]").forEach(button => button.addEventListener("click", close));
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !modal.hidden) close();
    });
})();