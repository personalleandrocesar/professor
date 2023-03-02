<script setup>
import NavTwo from '../components/NavTwo.vue'
import NavBottomTree from '../components/NavBottomTree.vue'
</script>


<template>
  <div>
    <NavTwo />
    <div class='anima'>
      <div class='main-tree'>
        <div>
          <h5><i class="fa-solid fa-ranking-star"></i> Serviços</h5>
        </div>
      </div>


      <div class='main-five'>
        


          <div class='main-five-card'>

            <div>
              <img src='/img/myFotoTwo.jpg' alt='' class='mini-profile'>
              <p><i class="fa-solid fa-people-arrows-left-right"></i> Serviço presencial</p>
            </div>
            <div>
              <h4>Krav-maga</h4>
              <h5>R$ 70,00 hora/aula</h5>
              <p>Treinamento individual ou em grupo de defesa pessoal, criado por Imi Lichtenfeld; Escola Bukan de Krav-maga;  </p>
            </div>
      </div>
      
      <div class='main-two'>
        <code>
            <b>"Faça o que consegue,<br> mas faça certo!"</b>
            <br>
            - Imi Lichtenfeld -<br>(Criador do Krav-maga)
          </code>
        <a
        href='https://api.whatsapp.com/send?phone=5521971305858%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20no%20seu%20serviço%20de%20Krav-maga,%20me%20chamo%20'>
        <i class="fa-brands fa-whatsapp"></i> Marcar Horário
      </a>
    </div>
    <div class='divider'></div>
    <br>
      <div class='main-six'>
          <div class='main-six-card'>
              <h5><b>Vantagens:</b></h5>
              <p>
                <ul>
                  <li>
                    <b>Foco nas técnicas:</b> Treinamento focado nos ensimantos de técnicas, para aprender o mais rápido possível o básico
                    para aprender a se defender;
                  </li>
                  <li>
                    <b>Permite corrigir erros:</b> serão corrigidos os erros de execução de cada técnica;
                  </li>
                </ul>
              </p>  
              <h5><b>Benefícios:</b></h5>
              <p>
    
                <b><i class="fa-solid fa-tags"></i> Direito à descontos:</b> direito a descontos em terapias e parcerias, exclusivas para clientes;
                
              </p>  
            </div>
            
          </div>
        <a class='button-call'
          href='https://api.whatsapp.com/send?phone=5521971305858%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20no%20seu%20serviço%20de%20Personal,%20me%20chamo%20'>
          <i class="fa-brands fa-whatsapp"></i> Marcar Horário
        </a>
          
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
    title: 'Krav-maga | Leandro Cesar',
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

.main-one a i {
  padding-right: 4px;
  margin: 0 0 0 3px;
}

.main-one a:nth-child(1) i {
  padding-right: 0px;
  margin: 0 0 0 2px;
} 

.main-one a:nth-child(3) i{
  padding-right: 4px;
  margin: 0 0 0 2px;
}

.main-one a {
  margin: 0 0 0 10px;
  color: #555;
}

.main-two {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 15px 40px 18px 10px;
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
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #333;
  background-color: #fff;
  box-shadow: 0px 10px 5px #fff;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: collumn;
}

.main-five img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.main-five i {
  font-size: 1em;
  color: #333;
}


.main-five h4 {
  margin: 10px 0 0 10px;
  color: #002937;
}

.main-five h5:nth-child(1) {
  margin: 0px auto 5px auto;
  color: #333;
}

.main-five h5 {
  margin: 0px 10px 0px 10px;
  color: green;
}

.main-five div {
  border-radius: 3% 3% 3% 3%;
}

.main-five-card {
  margin: 0px 10px 20px 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  border: solid 1px #dddddd;
}
.main-five p {
  padding: 0px;
  margin: 10px 0 10px 10px;
  font-size: .8em;
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
  margin: 10px 10px 0 10px;
  padding: 0 15px 0 0;
}

.mini-profile {
  height: 25px;
  border-radius: 50%;
  margin: 10px 0 0 0px;
  padding: 0 15px 0 0;
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