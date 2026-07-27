export function scrollToProjects() {
  const el = document.getElementById("projects");
  if (!el) return;

  const headerOffset = 40;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: "smooth" });
}
