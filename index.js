function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}

function loadContent(page) {
  fetch(page)
    .then(res => {
      if (!res.ok) throw new Error("Page not found");
      return res.text();
    })
    .then(html => {
      document.getElementById("main-content").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("main-content").innerHTML =
        "<p style='color:red'>Failed to load content</p>";
      console.error(err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadContent("./pages/home.html");

  const scholar = document.getElementById("scholar-profile");
  if (scholar) {
    scholar.addEventListener("click", () => {
      window.open(
        "https://scholar.google.com/citations?hl=en&user=jH0nfBEAAAAJ",
        "_blank"
      );
    });
  }
});
