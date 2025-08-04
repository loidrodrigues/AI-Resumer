# 📝 Resumidor de Texto com IA

Um projeto simples em **React + Puter.js**, criado para testar os recursos de IA do Puter.js.  
O app permite que o usuário insira qualquer texto e receba um **resumo gerado automaticamente pela IA**, tudo rodando **direto no navegador**, sem backend nem API key. 🚀

---

## 🚀 Tecnologias usadas
- ⚛️ [React](https://react.dev/)
- 🤖 [Puter.js](https://docs.puter.com/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)

---

## ✨ Funcionalidades
✅ Inserir texto livre  
✅ Resumir com apenas um clique  
✅ Interface simples e responsiva  
✅ Tudo funcionando 100% no front-end  

---

## 📸 Demonstração
*(Adicione aqui prints ou GIFs do projeto em funcionamento)*

---

## 📂 Como rodar o projeto

### 1️⃣ Clone este repositório
```bash
git clone https://github.com/seu-usuario/resumidor-ia.git
cd resumidor-ia
```

### 2️⃣ Instale as dependências
```bash
npm install
```

### 3️⃣ Rode o projeto
```bash
npm run dev
```

> Depois, abra o navegador em: **http://localhost:5173/** (ou a URL que o Vite mostrar no terminal).

---

## ⚙️ Como funciona
O projeto utiliza o **Puter.js**, que fornece IA, armazenamento e autenticação **direto no front-end**, sem precisar configurar backend ou API keys.

Basta adicionar no `public/index.html`:

```html
<script src="https://js.puter.com/v2/"></script>
```

E chamar a IA com:

```js
const result = await window.puter.ai.chat("Resuma o texto: ...");
console.log(result.message);
```

---

## 📜 Licença
Este projeto está sob a licença MIT.  
Sinta-se à vontade para usar, modificar e compartilhar! 🤝

---

### 💡 Gostou do projeto?
⭐ Dê uma estrela no repositório e compartilhe com a comunidade!
