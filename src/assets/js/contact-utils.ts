// Contact Constants
export const CONTACT_INFO = {
    whatsapp: {
        number: '+55 11 96862-8280',
        baseUrl: 'https://wa.me/5511968628280',
        defaultMessage: 'Oi! Vim do site da All Solution Systems. Meu nicho é [nicho] e atendo em [bairro/cidade]. Quero um diagnóstico para automatizar meu agendamento no WhatsApp. Prefiro (manhã/tarde/noite).'
    },
    telegram: {
        url: 'https://t.me/Alexoliver191976'
    }
};

/**
 * Helper para montar a URL segura do WhatsApp
 * @param {string} customMsg 
 * @returns {string} url
 */
export function getWhatsAppUrl(customMsg = CONTACT_INFO.whatsapp.defaultMessage) {
    return `${CONTACT_INFO.whatsapp.baseUrl}?text=${encodeURIComponent(customMsg)}`;
}
