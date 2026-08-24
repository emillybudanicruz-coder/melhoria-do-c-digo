// Procura os botões do HTML usando o "id" deles
const botao1 = document.getElementById('btn-classico');
const botao2 = document.getElementById('btn-elegante');
const botao3 = document.getElementById('btn-futurista');

// Diz o que acontece quando clica no primeiro botão
botao1.addEventListener('click', function() {
    alert('Você clicou no Botão Clássico! 🟢');
});

// Diz o que acontece quando clica no segundo botão
botao2.addEventListener('click', function() {
    alert('Você clicou no Botão Elegante! ✨');
});

// Diz o que acontece quando clica no terceiro botão
botao3.addEventListener('click', function() {
    alert('Você clicou no Botão Futurista! 🚀');
});
