function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('#homeSection, #principlesSection, #timelineSection, #levesSection');
    sections.forEach(section => section.classList.remove('active'));
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
    document.getElementById('navMenu').classList.remove('active');
}

function toggleLanguage(button) {
    const textDiv = button.parentElement;
    const isShown = textDiv.getAttribute('data-lang-shown') === 'true';
    textDiv.setAttribute('data-lang-shown', !isShown);
}

showSection('homeSection');