# Instruções para Integração do Botão "Voltar ao Painel"

Para que o sistema de gerenciamento de aulas funcione corretamente, é necessário que o botão "Voltar ao Painel" em cada página de aula tenha o seguinte código:

## HTML do Botão

```html
<button onclick="window.parent.resetPainel()">
  🏠 Painel Principal
</button>
```

## Alternativa: Link

Se preferir usar um link:

```html
<a href="javascript:window.parent.resetPainel()">
  Voltar ao Painel
</a>
```

## O que essa função faz

A função `window.parent.resetPainel()` faz o seguinte:
1. Volta o iframe para a tela inicial (about:blank)
2. Mostra a mensagem de boas-vindas
3. Recarrega o status de todas as aulas do Firestore
4. Mantém os status visuais (Ativo/Pendente) atualizados

## Exemplo Completo

Se sua página de aula tem a estrutura assim:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Aula 1</title>
</head>
<body>
  <h1>Aula 1: O Computador e Seus Amigos</h1>
  <p>Conteúdo da aula...</p>
  
  <button onclick="window.parent.resetPainel()">
    Voltar ao Painel
  </button>
</body>
</html>
```

## Importante

⚠️ **A função `window.parent.resetPainel()` funciona apenas quando a página da aula está carregada dentro de um iframe no index.html**

Se as aulas forem abertas em abas separadas ou em uma nova janela, use em vez disso:
```javascript
window.location.href = 'index.html';
```
