function openCustomModal() {
    const modal = document.getElementById('custom-modal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeCustomModal() {
    const modal = document.getElementById('custom-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function showContent(contentId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) { 
        selectedContent.classList.add('active');
    }

    document.querySelectorAll('.sidebar ul li a').forEach(link => {
        link.classList.remove('active');
    });
    const navLink = document.getElementById(`nav-${contentId}`);
    if (navLink) { 
        navLink.classList.add('active');
    }

    let title = '';
    if (contentId === 'dashboard') {
        title = '<i class="fas fa-tachometer-alt"></i> Dashboard Utama';
    } else if (contentId === 'krs') {
        title = '<i class="fas fa-file-signature"></i> Pengisian KRS';
    } else if (contentId === 'jadwal') {
        title = '<i class="fas fa-calendar-alt"></i> Jadwal Kuliah';
    }
    document.getElementById('main-title').innerHTML = title;
}

function confirmKRS() {
    const krsStatusElement = document.getElementById('krs-status');
    const krsOutputDiv = document.getElementById('krs-output');
    
    const now = new Date();
    const dateTimeString = now.toLocaleDateString('id-ID', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });

    if (krsStatusElement) {
        krsStatusElement.textContent = 'KONFIRMASI BERHASIL';
        krsStatusElement.style.color = '#fff';
        krsStatusElement.style.backgroundColor = '#2e8b57';
        krsStatusElement.classList.remove('status-pending'); 
    }
    
    if (krsOutputDiv) {
        krsOutputDiv.innerHTML = `
            <i class="fas fa-clock"></i> Konfirmasi sukses!
            Data KRS dicatat pada: <strong>${dateTimeString}</strong>.
        `;
        krsOutputDiv.style.borderColor = '#2e8b57';
        krsOutputDiv.style.backgroundColor = '#39424c'; 
        krsOutputDiv.style.color = '#73ff9c'; 
    }

    openCustomModal();
}

document.addEventListener('DOMContentLoaded', () => {
    showContent('dashboard'); 
});