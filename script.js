// AGUARDA O CARREGAMENTO DA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    
    // SELEÇÃO DE ELEMENTOS DO MODAL (Presentes na página de convite)
    const modal = document.getElementById('modalConvite');
    const btnValidar = document.getElementById('btnValidar');
    const btnFechar = document.getElementById('btnFechar');
    const btnConfirmarCodigo = document.getElementById('btnConfirmarCodigo');
    const inputCodigo = document.getElementById('inputCodigo');

    // Verifica se os elementos existem na página atual antes de aplicar os eventos
    if (btnValidar && modal) {
        
        // Abrir o Modal
        btnValidar.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
            inputCodigo.focus();
        });

        // Fechar o Modal no botão 'X'
        if (btnFechar) {
            btnFechar.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        // Fechar se o usuário clicar na área escura (fora do card do modal)
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Evento de confirmação do código
        if (btnConfirmarCodigo) {
            btnConfirmarCodigo.addEventListener('click', () => {
                const codigoLimpo = inputCodigo.value.trim();
                
                if (codigoLimpo === '') {
                    alert('Por favor, insira um código de convite válido.');
                } else {
                    alert('Presença confirmada com sucesso!\n\nGuarde seu convite físico. Esperamos você no sábado, dia 30 de maio de 2026, das 8h às 13h, na sede do Federal Sistema de Ensino.');
                    modal.style.display = 'none';
                    inputCodigo.value = ''; // Limpa o campo
                }
            });
        }
    }
});
