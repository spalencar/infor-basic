// Upgrade para o modal de estatísticas detalhadas
// Substitui a função showDetailedStats com uma versão maior e mais bonita

window.showDetailedStats = function () {
  try {
    console.log("?? Gerando estatísticas detalhadas...");
    
    const stats = {
      total: allUsers.length,
      pessoal: allUsers.filter(u => u.userType === 'pessoal').length,
      institucional: allUsers.filter(u => u.userType === 'institucional').length,
      admin: allUsers.filter(u => u.userType === 'admin').length,
      active: allUsers.filter(u => u.status === 'active').length,
      pending: allUsers.filter(u => u.status === 'pending').length,
      blocked: allUsers.filter(u => u.status === 'blocked').length
    };
    
    const statsHTML = `
      <div style="background: rgba(0,0,0,0.95); padding: 40px; border-radius: 20px; max-width: 800px; margin: 20px auto; border: 2px solid rgba(254, 202, 87, 0.3); box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
        <h3 style="color: #feca57; margin-bottom: 30px; font-size: 1.8em; text-align: center;">?? Estatísticas Detalhadas</h3>
        
        <!-- Resumo Geral -->
        <div style="background: rgba(255, 255, 255, 0.05); padding: 25px; border-radius: 15px; margin-bottom: 30px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.1);">
          <h4 style="color: #feca57; margin-bottom: 15px; font-size: 1.2em;">?? RESUMO GERAL</h4>
          <p style="font-size: 2.5em; color: #51cf66; margin: 10px 0; font-weight: bold; text-shadow: 0 0 10px rgba(81, 207, 102, 0.5);">${stats.total}</p>
          <p style="color: #e2e8f0; font-size: 1.1em;">Total de Usuários Cadastrados</p>
        </div>
        
        <!-- Estatísticas Detalhadas -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
          <div style="background: rgba(81, 207, 102, 0.1); padding: 25px; border-radius: 15px; border: 1px solid rgba(81, 207, 102, 0.3);">
            <h4 style="color: #51cf66; margin-bottom: 20px; font-size: 1.3em;">?? Por Tipo de Usuário</h4>
            <div style="display: flex; flex-direction: column; gap: 15px;">
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                <span style="color: #e2e8f0; font-size: 1.1em;">?? Pessoal</span>
                <span style="color: #51cf66; font-weight: bold; font-size: 1.4em;">${stats.pessoal}</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                <span style="color: #e2e8f0; font-size: 1.1em;">?? Institucional</span>
                <span style="color: #feca57; font-weight: bold; font-size: 1.4em;">${stats.institucional}</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0;">
                <span style="color: #e2e8f0; font-size: 1.1em;">?? Admin</span>
                <span style="color: #ff6b6b; font-weight: bold; font-size: 1.4em;">${stats.admin}</span>
              </div>
            </div>
          </div>
          
          <div style="background: rgba(254, 202, 87, 0.1); padding: 25px; border-radius: 15px; border: 1px solid rgba(254, 202, 87, 0.3);">
            <h4 style="color: #feca57; margin-bottom: 20px; font-size: 1.3em;">?? Por Status</h4>
            <div style="display: flex; flex-direction: column; gap: 15px;">
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                <span style="color: #e2e8f0; font-size: 1.1em;">?? Ativos</span>
                <span style="color: #51cf66; font-weight: bold; font-size: 1.4em;">${stats.active}</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                <span style="color: #e2e8f0; font-size: 1.1em;">?? Pendentes</span>
                <span style="color: #feca57; font-weight: bold; font-size: 1.4em;">${stats.pending}</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0;">
                <span style="color: #e2e8f0; font-size: 1.1em;">Bloqueados</span>
                <span style="color: #ff6b6b; font-weight: bold; font-size: 1.4em;">${stats.blocked}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Informações Adicionais -->
        <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 15px; border: 1px solid rgba(255, 255, 255, 0.1);">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
              <p style="color: #e2e8f0; margin: 5px 0;">?? <strong>Data de Geração:</strong></p>
              <p style="color: #51cf66; font-size: 1.1em;">${new Date().toLocaleString('pt-BR')}</p>
            </div>
            <div>
              <p style="color: #e2e8f0; margin: 5px 0;">?? <strong>Última Atualização:</strong></p>
              <p style="color: #feca57; font-size: 1.1em;">${new Date().toLocaleTimeString('pt-BR')}</p>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <button onclick="this.parentElement.parentElement.remove()" style="padding: 12px 30px; background: linear-gradient(45deg, #ff6b6b, #feca57); color: black; border: none; border-radius: 10px; cursor: pointer; font-weight: bold; font-size: 16px; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
            Fechar Estatísticas
          </button>
        </div>
      </div>
    `;
    
    // Criar modal temporário
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
      z-index: 3000;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    modal.innerHTML = statsHTML;
    
    document.body.appendChild(modal);
    console.log("?? Estatísticas detalhadas exibidas (versão ampliada)");
    showMessage("Estatísticas detalhadas geradas!", "success");
    
  } catch (error) {
    console.error("?? Erro ao mostrar estatísticas:", error);
    showMessage("Erro ao gerar estatísticas", "error");
  }
};

console.log("?? Modal de estatísticas atualizado com design ampliado!");
