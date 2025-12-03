<h1 align="center" style="font-size:38px; font-family:Trebuchet MS; color:#4BA3C3;">
🐾 fantAUstico
</h1>

<p align="center" style="font-size:18px; max-width:700px; margin:auto; font-family:Verdana;">
Projeto dedicado a dar visibilidade aos animais que vivem em situação de rua.  
A plataforma funciona como um website para **denúncias, resgate, adoção e campanhas de ajuda**.
</p>

---

<h2 style="color:#3C7A89; font-family:Trebuchet MS;">1. 🚀 Como usar</h2>

<p style="font-family:Verdana;">
Tecnologias principais:
</p>

- <span style="font-family:Courier New;">React + Vite + TypeScript</span>  
- <span style="font-family:Courier New;">Tailwind CSS</span> (utilities customizadas em <code>src/index.css</code>)  
- Firebase (Firestore + Storage)  
- Supabase (opcional)  
- Formik + Yup  
- FontAwesome  

### ▶️ **Rodando o projeto**

bash
npm install
npm run dev      # ambiente local
npm run build    # build de produção
npm run preview  # servir build
npm run lint     # checar lint

<h2 style="color:#3C7A89; font-family:Trebuchet MS;">2. 📂 Estrutura do projeto</h2>
src/views/home/Home.tsx            — Introdução, hero e CTAs
src/views/pets/Adoption.tsx        — Listagem de pets para adoção
src/views/donations/Campaigns.tsx  — Listagem de campanhas
src/views/reports/Reports.tsx      — Casos e denúncias
src/views/pets/RegisterPet.tsx     — Formulário de novo caso/adoção
src/views/donations/NewCampaign.tsx— Formulário de novas campanhas
src/api/firestore.ts               — Integração Firebase
src/api/supabase.ts                — Upload alternativo
src/index.css                      — Paleta, glass, botões e animações

<h2 style="color:#3C7A89; font-family:Trebuchet MS;">3. 🎨 Tecnologias & Estilo Visual</h2>
Tema amigável e acolhedor com verde, azul e amarelo
Cores suaves e neutras
Glassmorphism leve, cantos arredondados
Animações: card-hover, fade-in-up
Grid responsivo (1 coluna no mobile, 2–3 em telas maiores)
Header com CTAs
Acessibilidade: foco visível, contraste, alt em todas as imagens

<h2 style="color:#3C7A89; font-family:Trebuchet MS;">4. 🤝 Contribuição</h2>
# Fazer fork ou clonar
git checkout -b feature/minha-feature
npm run lint && npm run build
# Enviar Pull Request

<h2 style="color:#3C7A89; font-family:Trebuchet MS;">5. 📞 Contato</h2> <p style="font-family:Verdana;"> 
Para dúvidas, sugestões ou suporte, entre em contato via **WhatsApp**, **Instagram** ou **E-mail**. Também é possível abrir uma **issue** no repositório. </p>

<h2 style="color:#3C7A89; font-family:Trebuchet MS;">6. 👥 Créditos / Integrantes</h2>
Felipe Gonçalves Silva
Juan Pablo Damasceno Sabino
Júlia Aparecida Souza Oliveira
Laura Silva Marques
Mateus Sampaio Luz Silva
Rafael Nascimento Antunes Monteiro
