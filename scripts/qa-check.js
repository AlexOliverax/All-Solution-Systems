const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '../dist');
const requiredRoutes = [
    'index.html',
    'servicos/index.html',
    'produtos/index.html',
    'casos-de-uso/index.html',
    'agendamento/index.html',
    'b20/index.html',
    'sobre/index.html',
    'contato/index.html',
    'privacidade/index.html'
];

console.log('--- Iniciando Auditoria de Build (QA) ---');

let hasError = false;

requiredRoutes.forEach(route => {
    const fullPath = path.join(distPath, route);
    if (!fs.existsSync(fullPath)) {
        console.error(`❌ ERRO CRÍTICO: Rota obrigatória não encontrada no build gerado -> ${route}`);
        hasError = true;
    } else {
        // Validação mínima de tamanho (se HTML gerou vazio)
        const stats = fs.statSync(fullPath);
        if (stats.size < 100) {
            console.warn(`⚠️ AVISO: A rota ${route} foi gerada, mas o tamanho do arquivo parece muito pequeno (${stats.size} bytes).`);
        } else {
            console.log(`✅ OK: Rota ${route} gerada com sucesso.`);
        }
    }
});

if (hasError) {
    console.error('\n❌ BUILD REJEITADO: Algumas rotas estáticas falharam. O rsync (deploy) não será executado.');
    process.exit(1);
} else {
    console.log('\n🚀 BUILD APROVADO: Todas as rotas base do Briefing estão prontas para o servidor estático (Caddy).');
    process.exit(0);
}
