// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const themeSwitch = document.getElementById('themeSwitch');
    const langSwitch = document.getElementById('langSwitch');

    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme', themeSwitch.checked);
    });

    langSwitch.addEventListener('change', () => {
        const isEnglish = langSwitch.checked;
        document.getElementById('skills-heading').textContent = isEnglish ? 'Skills' : 'Umiejętności';
        document.getElementById('projects-heading').textContent = isEnglish ? 'Projects' : 'Projekty';
        document.getElementById('contact-heading').textContent = isEnglish ? 'Contact' : 'Kontakt';
        document.getElementById('name').textContent = isEnglish ? 'Mateusz Damek' : 'Mateusz Damek';
        document.getElementById('title').textContent = isEnglish ? 'Programista CSS/HTML/JS' : 'Programmer CSS/HTML/JS';
        document.getElementById('project1').textContent = isEnglish ? 'Project 1' : 'Projekt 1';
        document.getElementById('project2').textContent = isEnglish ? 'Project 2' : 'Projekt 2';
        document.getElementById('project3').textContent = isEnglish ? 'Project 3' : 'Projekt 3';
        document.getElementById('phone').textContent = isEnglish ? 'Phone: 513 553 786' : 'Telefon: 513 553 786';
        document.getElementById('email').textContent = isEnglish ? 'Email: mateuszdamek8@gmail.com' : 'Email: mateuszdamek8@gmail.com';
    });
});
