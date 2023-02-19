const toggleSidebarEl = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
const sidebarUl = document.getElementById("sidebar-ul");

const toggleSidebarMobile = (
    sidebar,
    sidebarUl,
    sidebarBackdrop,
    toggleSidebarMobileHamburger,
    toggleSidebarMobileClose
) => {
    sidebar.classList.toggle("hidden");
    sidebarUl.classList.toggle("collapsed");
    sidebarBackdrop.classList.toggle("hidden");
    toggleSidebarMobileHamburger.classList.toggle("hidden");
    toggleSidebarMobileClose.classList.toggle("hidden");
};

const toggleSidebarMobileEl = document.getElementById("toggleSidebarMobile");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const toggleSidebarMobileHamburger = document.getElementById(
    "toggleSidebarMobileHamburger"
);
const toggleSidebarMobileClose = document.getElementById(
    "toggleSidebarMobileClose"
);

toggleSidebarMobileEl.addEventListener("click", () => {
    toggleSidebarMobile(
        sidebar,
        sidebarUl,
        sidebarBackdrop,
        toggleSidebarMobileHamburger,
        toggleSidebarMobileClose
    );
});

sidebarBackdrop.addEventListener("click", () => {
    toggleSidebarMobile(
        sidebar,
        sidebarUl,
        sidebarBackdrop,
        toggleSidebarMobileHamburger,
        toggleSidebarMobileClose
    );
});
