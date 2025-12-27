// URL para redirecionamento
const NBA_LOUISE_URL = "https://tvappletv.blogspot.com/p/nba-louise.html";

// Função para redirecionar para página NBA Louise
function irParaNbaLouise() {
    window.open(NBA_LOUISE_URL, '_blank');
}

// Função para mostrar popup CBS
function abrirPopupCBS() {
    document.getElementById('cbsPopup').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Função para fechar popup
function fecharPopup() {
    document.getElementById('cbsPopup').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// User Menu Toggle
function toggleUserMenu() {
    const menu = document.getElementById('userMenu');
    if (menu) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
}

// Search Toggle
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
    }
}

// Google Calendar Integration
function addToGoogleCalendar(title, startTime, endTime, description) {
    const start = new Date(startTime).toISOString().replace(/-|:|\.\d+/g, '');
    const end = new Date(endTime).toISOString().replace(/-|:|\.\d+/g, '');
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(description)}&location=Apple TV+&sf=true&output=xml`;
    
    window.open(calendarUrl, '_blank');
}

// Set Reminder
function setReminder(eventId) {
    alert('Lembrete configurado! Você receberá uma notificação antes do evento.');
    // Aqui você pode implementar notificações nativas ou integração com APIs de calendário
}

// Watch Live
function watchLive(eventId) {
    alert(`Iniciando transmissão ao vivo do evento ${eventId}`);
    // Implemente o player de vídeo ao vivo aqui
}

// Category Filter
function filterCategory(category) {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Implemente a filtragem de conteúdo aqui
    alert(`Filtrando por: ${category}`);
}

// Fechar popup ao clicar fora
document.addEventListener('click', function(e) {
    // Fechar user menu ao clicar fora
    const userMenu = document.getElementById('userMenu');
    const userBtn = document.querySelector('.user-btn');
    if (userMenu && userBtn && !userBtn.contains(e.target) && !userMenu.contains(e.target)) {
        userMenu.style.display = 'none';
    }
    
    // Fechar popup CBS
    const popup = document.getElementById('cbsPopup');
    if (popup && popup.style.display === 'flex') {
        if (e.target === popup) {
            fecharPopup();
        }
    }
});

// Mais informações Louise
function maisInfoLouise() {
    alert("Louise apresenta um show exclusivo no intervalo do NBA All-Star Game, com produção cinematográfica premium da Apple TV+.");
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Forçar background do body
    document.body.style.backgroundColor = "#000000";
    
    // Corrigir botões - forçar cores
    const primaryButtons = document.querySelectorAll('.btn-primary');
    const secondaryButtons = document.querySelectorAll('.btn-secondary');
    const popupButton = document.querySelector('.popup-button');
    
    primaryButtons.forEach(btn => {
        btn.style.backgroundColor = "#0071e3";
        btn.style.color = "white";
    });
    
    secondaryButtons.forEach(btn => {
        btn.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        btn.style.color = "white";
    });
    
    if (popupButton) {
        popupButton.style.backgroundColor = "#0071e3";
        popupButton.style.color = "white";
    }
});