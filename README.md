<h1 align="center">Frontend Challenge 🚀</h1>

<p align="center">
 <a href="#project">Projeto</a> •
 <a href="#tech">Tecnologias</a> • 
 <a href="#clone">Clone</a> • 
</p>

<h2 id="project">O desafio</h2>


Esse projeto foi desenvolvido para cumprir o desafio do processo seletivo de [Estágio Frontend da Aftersale](https://github.com/Send4BR/challenges/blob/main/front-end-estagio.md#desafio-de-est%C3%A1gio-front-end). O desafio consistia em:

"<i>Faça uma página web que contém um prédio com 12 janelas. Quando o usuário clicar em uma janela, a luz deve acender ou apagar. A página deve conter, também, um botão de controle global. Quando o usuário clicar neste botão de controle global, a luz de todas as janelas devem acender ou apagar.</i> Além disso, quando um usuário entrar na página, a página deve acessar as coordenadas geográficas do navegador e usar as coordenadas para consultar a Sunset Sunrise API para ajustar a cena conforme o caso. Se é noite no seu local, todas as janelas devem começar com a luz acesa, caso contrário, devem começar com a luz apagada." 

<h3 align="center"><a href="https://frontend-challenge.fernanda-kipper.vercel.app/">💻 Visite o projeto finalizado aqui</a></h3>

<p align="center">
  <img src="day.png" width="500px">
  <img src="night.png" width="500px">
</p>

<p align="center">
  🎉✔ Fui escolhida!!
</p>

<h2 id="tech" >Tecnologias</h2>

- React JS
- Axios
- JavaScript
- HTML e CSS

<h4> Por que React JS? </h4>

Optei utilizar a biblioteca React para resolver o desafio por causa da praticidade em lidar com mudanças de estados, com o Hook UseState, além disso, muitos componentes - as 12 janelas - precisam acessar o valor do botão global, e isso pode ser feito de modo ótimo utilizando a Context Api do React.

<h2 id="clone" >Clone</h2>
Para rodar localmente você deve clonar esse repositório, baixar as dependências com seu package manager e iniciar utilizando o comando start e acessá-lo via localhost

``` 
git clone https://github.com/Fernanda-Kipper/Frontend-Challenge.git project_name
cd project_name
npm install
npm start
# Acesse seu localhost porta 3000
http://localhost:3000/
```

No local de npm você pode utilizar o package manager de sua preferência
