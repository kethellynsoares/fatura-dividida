// ===== CONFIGURE AQUI a sua lista de espera =====
// Preencha UM dos dois. Se os dois estiverem preenchidos, o formulário tem prioridade.
const CONFIG = {
  // Seu WhatsApp com DDI + DDD, só números. Ex.: '5581999999999'
  whatsapp: '',
  // Ou o link de um formulário (Google Forms, Tally…). Ex.: 'https://forms.gle/xxxx'
  formulario: '',
  // Mensagem que já vem escrita no WhatsApp
  mensagem: 'Oi! Quero entrar na lista de espera do Fatura Dividida.'
};

// Liga todos os botões com a classe "js-waitlist"
document.addEventListener('DOMContentLoaded', () => {
  let url = '';
  if (CONFIG.formulario) url = CONFIG.formulario;
  else if (CONFIG.whatsapp) url = 'https://wa.me/' + CONFIG.whatsapp.replace(/\D/g, '') + '?text=' + encodeURIComponent(CONFIG.mensagem);
  document.querySelectorAll('.js-waitlist').forEach(a => {
    if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
    else a.addEventListener('click', e => { e.preventDefault(); alert('Lista de espera ainda não configurada: preencha o WhatsApp ou o formulário no arquivo config.js.'); });
  });
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
});
