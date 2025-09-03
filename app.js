const btnMenu = document.getElementById('btnMenu');
const drawer = document.getElementById('drawer');
const scrim  = document.getElementById('scrim');

btnMenu.addEventListener('click', () => {
  drawer.classList.add('open');
  scrim.classList.add('show');
});

scrim.addEventListener('click', () => {
  drawer.classList.remove('open');
  scrim.classList.remove('show');
});

// ambil semua link nav
const navItems = document.querySelectorAll('.bn-item');

navItems.forEach(item => {
  item.addEventListener('click', function() {
    // hapus active dari semua item
    navItems.forEach(i => i.classList.remove('active'));
    // kasih active ke item yang diklik
    this.classList.add('active');
  });
});

  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.bottom-nav .bn-item');
    const currentPath = window.location.pathname.split('/').pop(); // ambil nama file (contoh: 'bug.html')

    navLinks.forEach(link => {
      // hapus semua active dulu
      link.classList.remove('active');

      // cek apakah href sama dengan file yang sedang dibuka
      const href = link.getAttribute('href');
      if (href && href.includes(currentPath)) {
        link.classList.add('active');
      }
    });
  });
  
  function showUnavailable() {
  document.getElementById("unavailableModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("unavailableModal").style.display = "none";
}

document.getElementById('send-btn').addEventListener('click', () => {
  const link = document.getElementById('tiktok-link').value.trim();
  const messageEl = document.getElementById('bot-message');

  if(!link) {
    messageEl.textContent = "Tolong masukkan link video TikTok!";
    messageEl.className = "message error";
    return;
  }

  const botCommand = `.tt ${link}`;
  messageEl.textContent = `Bot menerima perintah: ${botCommand}\nSilakan cek pesan setelah ini untuk download video.`;
  messageEl.className = "message success";

  console.log("Perintah yang dikirim ke bot:", botCommand);

  // Di sini bisa ditambahkan fetch/AJAX ke backend bot untuk download video
});