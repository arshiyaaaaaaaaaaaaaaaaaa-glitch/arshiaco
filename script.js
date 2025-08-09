// script.js
function openDrawer(panel) {
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  const content = document.getElementById('drawer-content');

  // محتوا براساس پنل انتخاب‌شده
  if (panel === 'profile') {
    content.innerHTML = `
      <h2>درباره شرکت ارشیا</h2>
      <p>شرکت صنعتی ارشیا با بیش از دو دهه تجربه در تولید قطعات صنعتی و اتصالات فولادی فعالیت می‌کند. تیم فنی ما متشکل از مهندسین مجرب است و خدمات طراحی، تولید و نصب را ارائه می‌دهد.</p>
      <p><strong>آدرس دفتر:</strong> تهران، شهرک صنعتی نمونه</p>
    `;
  } else if (panel === 'contact') {
    content.innerHTML = `
      <h2>تماس با ما</h2>
      <p><strong>تلفن:</strong> 021-66391500</p>
      <p><strong>موبایل:</strong> 0912-123-4567</p>
      <p><strong>ایمیل:</strong> info@arshia-industrial.test</p>
      <p><strong>ساعات کاری:</strong> شنبه تا چهارشنبه 8:00 الی 17:00</p>
    `;
  } else {
    content.innerHTML = `<p>اطلاعاتی موجود نیست.</p>`;
  }

  drawer.classList.add('open');
  overlay.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
}

function closeDrawer() {
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
}

// تنظیم listener روی دکمه‌ها بعد از لود صفحه
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.icon-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const panel = btn.getAttribute('data-panel');
      openDrawer(panel);
    });
  });
});
