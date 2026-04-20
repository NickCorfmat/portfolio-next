export function scrollToSection(
  e: React.MouseEvent,
  item: { label: string; href: string },
  pathname: string,
) {
  e.preventDefault();

  if (pathname !== "/") {
    window.location.href = item.href;
    return;
  }

  const id = item.href === "/" ? "home" : item.href.replace("/#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
