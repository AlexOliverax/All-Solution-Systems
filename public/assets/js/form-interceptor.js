document.addEventListener('DOMContentLoaded', () => {
    const CONTACT_INFO = {
        whatsapp: {
            number: '+55 11 96862-8280',
            baseUrl: 'https://wa.me/5511968628280'
        }
    };

    function getWhatsAppUrl(customMsg) {
        return `${CONTACT_INFO.whatsapp.baseUrl}?text=${encodeURIComponent(customMsg)}`;
    }

    const quickForms = document.querySelectorAll('.js-quick-contact-form');

    quickForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            // Impede o envio padrao (fallback do action do HTML)
            e.preventDefault();

            // Puxar valores
            const formData = new FormData(form);
            const name = formData.get('userName')?.toString().trim();
            const location = formData.get('userLocation')?.toString().trim();
            const need = formData.get('userNeed')?.toString().trim();
            const preference = formData.get('userPreference')?.toString().trim();

            // Montar mensagem customizada
            let message = `Oi! Vim do site da All Solution Systems. Meu nicho é *${need || '[não informado]'}* e atendo em *${location || '[não informado]'}*. Quero um diagnóstico para automatizar meu agendamento no WhatsApp.`;

            if (name) {
                message = `Oi, sou *${name}*! Vim do site da All Solution Systems. Meu nicho é *${need || '[não informado]'}* e atendo em *${location || '[não informado]'}*. Quero um diagnóstico para automatizar meu agendamento no WhatsApp.`;
            }

            if (preference) {
                message += ` Prefiro atendimento no período: *${preference}*.`;
            }

            // Codificar e disparar request
            const dynamicUrl = getWhatsAppUrl(message);

            // Abrir em nova aba
            window.open(dynamicUrl, '_blank');
        });
    });
});
