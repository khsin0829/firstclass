document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".treatment-card-toggle");

    toggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const expanded = toggle.getAttribute("aria-expanded") === "true";
            const panelId = toggle.getAttribute("aria-controls");
            const panel = document.getElementById(panelId);

            toggle.setAttribute("aria-expanded", String(!expanded));
            panel.hidden = expanded;
        });
    });
});
