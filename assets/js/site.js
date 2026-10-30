const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menu.toggleAttribute('data-open', !isOpen);
  });
}

// Keep sponsor email addresses out of the generated HTML as plain text.
document.querySelectorAll('[data-sponsor-email]').forEach((link) => {
  link.href = `mailto:${atob(link.dataset.sponsorEmail)}`;
});
