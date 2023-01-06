<script setup>
import NavTwo from '../components/NavTwo.vue'
import NavBottomTree from '../components/NavBottomTree.vue'
</script>


<template>
  <div>
    <NavTwo />
    <div class='anima'>
      <div class='profile'>
        <img src='/img/myFotoTwo.jpg' alt=''>
        <div>
          <h1>Leandro Cesar</h1>
          <h4><i class="fa-sharp fa-solid fa-laptop"></i> Programador</h4>
        </div>
      </div>

      <div class='main-one'>
        <a href="https://github.com/professorleandrocesar">
          <i class="fa-brands fa-github"></i> GitHub (@professorleandrocesar)
        </a>
        <a>
          <i class="fa-brands fa-linux"></i> Entusiasta e usuário linux
        </a>
        <a href="https://getfedora.org/pt_BR/">
          <i class="fa-brands fa-fedora"></i> Fedora User
        </a>
        <a href="http://vanilla-js.com/">
          <i class="fa-brands fa-js"></i> Front-End Developer - JavaScript 
        </a>
        <a href="https://vuejs.org/">
          <i class="fa-brands fa-vuejs"></i> Usa o Vue.Js (JavaScript Framework)
        </a>
        <a href="https://nodejs.org/pt-br/">
          <i class="fa-brands fa-node-js"></i> Aprendendo o Node.js 
        </a>


      </div>

      <div class='divider'></div>

      <div class='main-two'>
        <code>
            <b>⁠"A questão não é saber os códigos<br>ou linhas de comando, é saber<br> o que fazer com eles."</b>
            <br>
            - Sérgio Arena - 
          </code>
          <a></a>
      </div>

      <div class='divider'></div>
      <div class='main-tree'>
        <div>
          <h5><i class="fa-solid fa-bars-progress"></i> Projetos</h5>
        </div>
      </div>


      <div class='main-five'>
        


          <RouterLink to='/professor' class='main-five-card'>

            <div>
              <img src='/img/myFotoTwo.jpg' alt='' class='mini-profile'>
            </div>
            <div>
              <h4>Professor<br>Leandro Cesar</h4>
              <h5>@professorleandrocesar</h5>
            <p>| Personal trainer | Consultoria | Avaliação Física | Krav-maga |</p>
            </div>
           </RouterLink>
          <a href="https://deepacupuntura.com" class='main-five-card'>

            <div>
              <img src='/img/deep.jpg' alt='' class='mini-profile'>
            </div>
            <div>
              <h4>Deep Acupuntura</h4>
              <h5>@deepacupuntura</h5>
              <p>Clínica particular de Medicina Chinesa</p>
            </div>
          </a>
          <!--
          <a href="https://espirita.xyz" class='main-five-card'>

            <div>
              <img src='/img/espiritaxyz.jpg' alt='' class='mini-profile'>
            </div>
            <div>
              <h4>Espirita.xyz</h4>
              <h5>@espirita.xyz</h5>
              <p>Espiritismo para todos</p>
            </div>
          </a>
          <a href="https://triboalmaforte.com" class='main-five-card'>

            <div>
              <img src='/img/tribo.jpg' alt='' class='mini-profile'>
            </div>
            <div>
              <h4>Tribo Alma forte</h4>
              <h5>@triboalmaforte</h5>
              <p>A carne só é forte porque a alma é forte!</p>
            </div>
          </a>
          -->
          <!--
      <div class='main-six'>
          <div class='main-six-card'>
              <h5><b>Vantagens:</b></h5>
              <p>
                <ul>
                  <li>
                    <b>Treino na medida e com resultado + rápido:</b> o conhecimento de um treinador pessoal permitirá 
                    potencializar o treino, através de estímulos e metodologias de trabalho diferentes.
                  </li>
                  <li>
                    <b>Permite corrigir erros:</b> serão corrigidos os erros de execução de cada técnica, preocupando-se
                    com a correta posição postural, afim de evitar má posturas e lesões.
                  </li>
                  <li>
                    <b>+ seguro:</b> tendo em conta os objetivos e a condição física do cliente, a intesidade e o volume 
                    são ajustados com bases no conhecimento do treinador.
                  </li>
                  <li>
                    <b>+ motivador:</b> o personal trainer ajudará a evitar a rotina e monotonia dos treinos, isso claro,
                    se o aluno tiver obediência na hora do planejamento da sessão de treino e rotina de ir à academia.
                  </li>
                  <li>
                    <b>Facilmente quantificável:</b> as reavaliações periódicas da composição corporal e capacidades físicas 
                    permitem analisar a evolução em todos os parâmetros e reajustar o treino de acordo com os objetivos traçados.
                  </li>
                </ul>
              </p>  
              <h5><b>Benefícios:</b></h5>
              <p>
                    <b><i class="fa-solid fa-clipboard-check"></i> Avaliação inicial gratuita:</b> mensuração de medidas antropométricas, para ver a composição corporal; realização 
                    de teste para ver o condicionamento.
                    <br>
                    <b><i class="fa-solid fa-mobile"></i> Acesso a aplicativo:</b> nos dias em que for treinar sozinho, terá sua planilha de treinamento para não ficar perdido;
                    e continuar a evoluir sem escapar do planejamento.
                    <br>
                    <b><i class="fa-solid fa-chart-pie"></i> Reavaliações de 2 em 2 meses:</b> Analise dos resultados dos testes e medidas para readaptação dos treinos para
                    chegar ao objetivo pre-determinado pelo cliente.
                    <br>
                    <b><i class="fa-solid fa-tags"></i> Direito à descontos:</b> direito a descontos em terapias e parcerias, exclusivas para clientes;
                
              </p>  
            </div>
            
          </div>
          <a class='button-call'
          href='https://api.whatsapp.com/send?phone=5521971305858%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20no%20seu%20serviço%20de%20Personal,%20me%20chamo%20'>
          <i class="fa-brands fa-whatsapp"></i> Marcar Horário
        </a>
        -->
          
        </div>
        
        <div class='divider'></div>
        <br><br>
        <br><br>
    </div>
    <NavBottomTree />
  </div>
</template>
<script>
export default {
  head: {
    title: 'Programação | Leandro Cesar',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Professor Leandro Cesar Ramos da Costa | Personal Trainer | Niterói - RJ' },
      { hid: 'keywords', name: 'description', content: 'Personal trainer, Treinamentos, Musculação' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#fff' },
      { name: 'theme-color', content: '#fff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/img/favicon.svg' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/img/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/img/favicon-16x16.png' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
      { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#fff' }
    ],
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #555;
}

i {
  color: #888;
  font-size: .9em;
  margin: auto;
}

code {
  font-size: 0.8em;
  padding-left: 10px;
  border-left: solid 5px #888;
  color: #bbb;
  margin-left: 10px;
}

.divider {
  height: 15px;
  background-color: #fff;
}

.divider-ultimate {
  height: 30px;
  background-color: #fff;
}

.profile {
  background: #fff;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px 0 5px 0;
  margin-top: -10px;
}

.profile a {
  text-decoration: none;
  color: #fff;
  font-size: .9em;
}

.profile img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: -20px;
  padding: 0 25px 0 0;
}

.profile h1 {
  margin: 5px 0 0 10px;
  font-size: 1.5em;
  color: #000;
}

.profile h4:nth-child(2) {
  margin: 0 0 0 10px;
  font-size: .9em;
  font-weight: 100;
  color: #aaa;
}

.profile h4 {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: #555;
}

.main-one {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 0 15px 0;
  box-shadow: 0px 10px 5px #bbb;
  background: #fff;
}

.main-one div {
  margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i,
.main-one a:nth-child(2) i,
.main-one a:nth-child(3) i,
.main-one a:nth-child(4) i,
.main-one a:nth-child(5) i {
  padding-right: 4px;
  margin: 0 0 0 3px;
}

.main-one a {
  margin: 0 0 0 10px;
  color: #555;
}

.main-two {
  display: flex;
  justify-content: start-flex;
  flex-direction: row;
  padding: 15px 0 18px 10px;
  color: black;
  background: #fff;
  color: #fff;
}

.main-two a {
  margin: 20px 0 0 0px;
  color: #555;
  font-weight: 600;
}

.main-two a:hover {
  color: #fadb41;
}

.main-two i {
  color: #888;
  font-size: 1.1em;
  font-weight: 600;
}


.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0 0 0;
  color: #555;
  background: #fff;
  overflow-x: auto;
}

.main-tree i {
  font-size: 1.2em;
  color: #888;
}

.main-tree h5 {
  margin: 10px 0px 22px 10px;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -15px 0 0 0;
  padding: 0 0 15px 0;
  color: #333;
  background-color: #fff;
  box-shadow: 0px 10px 5px #fff;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: collumn;
}

.main-four img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.main-four i {
  font-size: 1em;
  color: #333;
}

.main-four h4 {
  margin: 10px 0 0 10px;
  color: #888;
}

.main-four h5:nth-child(1) {
  margin: 0px auto 5px auto;
  color: #333;
}

.main-four h5 {
  margin: 0px 10px 0px 10px;
  color: #888;
}

.main-four div {
  border-radius: 3% 3% 3% 3%;
}

.main-four-card {
  margin: 0px 10px 20px 10px;
  border: solid 1px #dddddd;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four p {
  padding: 0px;
  margin: 10px 0 10px 10px;
  font-size: .8em;
}

.main-four .mini-profile {
  height: 6em;
  border-radius: 50%;
  margin: 10px 10px 0 10px;
  padding: 0 15px 0 0;
}

.main-five {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0px 0 0 0;
  color: #333;
  flex-wrap: wrap;
  background-color: #fff;
  box-shadow: 0px 10px 5px #fff;
  overflow-x: auto;
}

.main-five img {
  height: 70px;
  border-radius: 50%;
}

.main-five i {
  font-size: 1em;
  color: #333;
}


.main-five h4 {
  margin: 10px 10px 0 10px;
  color: #002937;
  transition: all .4s linear;
  text-align:center;

}

.main-five h5:nth-child(1) {
  margin: 0px auto 5px auto;
  color: #333;
}

.main-five h5 {
  margin: 0px 10px 0px 10px;
  color: #555;
  font-size: .8em;
}

.main-five div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; 
}

.main-five-card {
  margin: 0px 10px 40px 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border: solid 1px #dddddd;
  border-radius: 3% 3% 3% 3%;
  align-items: center; 
  width:44%;
}

@media only screen and (max-width: 382px) {
 .main-five-card {
  width:100%;
} 
}


.main-five a{
  border: solid 1px #eeeeee;
  padding-bottom: 30px;
    margin: 0px 5px 20px 5px;
    border-radius: 3% 3% 3% 3%;
    transform: scale(0.97);
    transition: all .4s linear;
    transform: translateY(1em);
    box-shadow: 0 0 5px #ddd;
}
.main-five a:hover {
  background-color: #eeeeee70;
  transform: translateY(0.8em);
  box-shadow: 0 5px 5px #999;
}

.main-five a:hover:nth-child(1) {
  box-shadow: 0 5px 5px #fadb41;
}
.main-five a:hover:nth-child(2) {
  box-shadow: 0 5px 5px #e23a28;
}
.main-five a:hover:nth-child(1) h4 {
  text-shadow: 0 1px 1px #fadb41;
}
.main-five a:hover:nth-child(2) h4 {
  text-shadow: 0 1px 1px #e23a28;
}

.main-five a:hover:nth-child(3) {
  box-shadow: 0 5px 5px #53dd84;
}

.main-five a:hover:nth-child(3) h4 {
  text-shadow: 0 1px 1px #53dd84;
}

.main-five a:hover:nth-child(4) {
  box-shadow: 0 5px 5px #c07b4f;
}

.main-five a:hover:nth-child(4) h4 {
  text-shadow: 0 1px 1px #c07b4f;
}

.main-five p {
  padding: 0px;
  margin: 0px 10px 0px 10px;
  font-size: .8em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.main-six {
  margin: -10px 0 0 0;
  color: #333;
  background-color: #fff;
  box-shadow: 0px 10px 5px #fff;
  overflow-x: auto;
}

.main-six img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.main-six i {
  font-size: 1em;
  color: #333;
}

.main-six p:nth-child(2) {
  margin-left: -15px;
}
.main-six h4 {
  margin: 10px 0 0 10px;
  color: #002937;
}

.main-six h5:nth-child(1) {
  margin: 0px 10px 0px 10px;
  color: green;
}

.main-six h5 {
  margin: 0px 10px 0px 10px;
  color: green;
}

.main-six div {
  border-radius: 3% 3% 3% 3%;
}

.main-six-card {
  margin: 0px 10px 20px 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.button-call{
  padding: 5px 10px;
  width:125px;
  margin: auto;
  transition: all .4s linear;
  background: #fadb4190;
  border: 1px #ddd solid;
  border-radius: 8px;
  cursor:pointer;
}

.button-call:hover {
  background: #fadb4132;
}

.main-five .mini-profile {
  height: 6em;
  border-radius: 50%;
}

.mini-profile {
  height: 25px;
  border-radius: 50%;
  margin: 30px 0 0 0px;
}

.dateYear {
  color: #333;
  padding: 0 10px 0 10px;
}

.dateYearHover {
  color: #333;
  border-bottom: solid .2px #000;
  padding: 0 10px 0 10px;
}

@media only screen and (max-width: 369px) {}
</style>  