<script setup>
import Blog from '/src//views/blog/index.vue'
import NavTwo from '/src/components/NavTwo.vue'
import NavBottomTree from '/src/components/NavBottomTree.vue'
</script>

<script>
export default {
  data() {
    return {
      content: `
      <a href="https://professorleandrocesar.com/blog/lesoes/joelho-lca">Lesões de Joelho - Ligamento Cruzado Anterior (LCA)</a>
      `,
      aplicar: true,
      aplicarTwo: false,
      aplicarTree: false,
      aplicarFour: false,
      aplicarFive: false,
    }
  },
  methods: {
    home() {
      this.content = `
       <a href="https://professorleandrocesar.com/blog/lesoes/joelho-lca">Lesões de Joelho - Ligamento Cruzado Anterior (LCA)</a>`,
        this.aplicar = true,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false
    },
    acupuntura() {
      this.content = `
      
      `,
        this.aplicar = false,
        this.aplicarTwo = true,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false
    },
    lesoes() {
      this.content = `
       <a href="https://professorleandrocesar.com/blog/lesoes/joelho-lca">Lesões de Joelho - Ligamento Cruzado Anterior (LCA)</a>`,
        this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = true,
        this.aplicarFour = false,
        this.aplicarFive = false
    },
    biomecanica() {
      this.content = `
      
      `,
        this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = true,
        this.aplicarFive = false
    },
    treinamento() {
      this.content = `
      `,
        this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = true
    }
  }
} 
</script>
<template>
  <div>
    <NavTwo />
    
    <div class='anima'>
      <div class='main-tree'>
        
        <div>
          <h5><i class="fa-solid fa-blog"></i> Blog</h5>
        </div>
      </div>
      <div class='main-five'>
        <div class='main-five-card'>
          <RouterLink to='/blog' class='dateYear'>Início</RouterLink>
          <h4 class='dateYear'>|</h4>
          <RouterLink to='/blog/acupuntura' class='dateYear'> Acupuntura</RouterLink>
          <!--
          <h4 class='dateYear' >|</h4>
          <RouterLink to='/blog/lesoes' class='dateYear'> Lesões</RouterLink>        
        -->
        </div>
      </div>
      <div class='main-six'>
        <div class='main-tree'>
          <div>
            <br>
            <h5>Acupuntura</h5>
          </div>
        </div>
        <div class='main-six-card'>
          
          <Blog />
          <RouterView />

        </div>
      </div>
    </div>




    <br>
    <br>
    <br>
    <NavBottomTree />
  </div>
</template>

<style scoped>
body {
  background: #fff;
  font-family: 'Philosopher', sans-serif;
  color: #aaa;
  line-height: 1.6;
}

iframe {
  margin-left: 10px;
}

a {
  text-decoration: none;
  color: #aaa;
}

i {
  color: #aaa;
  font-size: .9em;
  margin: auto;
}

code {
  font-size: 0.6em;
  margin-left: 15px;
  padding-left: 10px;
  border-left: solid 5px #eee;
  color: #888;
}

.divider {
  height: 15px;
  background-color: #dddddd54;
}

.nav-one {
  height: 35px;
  position: sticky;
  top: -1px;
}

.nav-one div {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

.nav-one a {
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one i {
  color: #0000FF;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.profile {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px 0 5px 0;
  color: black;
}

.profile a {
  text-decoration: none;
  color: #aaa;
  font-size: .9em;
}

.profile img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.profile h1 {
  margin: 5px 0 0 -10px;
  font-size: 1.5em;
}

.profile h4 {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: #aaa;
}

.main-one {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 0 15px 0;
  color: black;
  box-shadow: 0px 4px 5px #ddd;
}

.main-one div {
  margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i,
.main-one a:nth-child(2) i {
  padding-right: 4px;
  margin: 0 0 0 3px;
}

.main-one a:nth-child(3) i {
  padding-right: 2px;
  margin: 0 0 0 2px;
}

.main-one a {
  margin: 0 0 0 10px;
  color: #555;
}

.main-two {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px 0 15px 0;
  color: black;
  box-shadow: 4px 4px 10px #bbb;
}

.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  overflow-x: auto;
}

.main-tree i {
  font-size: 1.2em;
  color: #555;
}

.main-tree h5 {
  margin-left: 10px;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  box-shadow: 0px 10px 10px#bbb;
  overflow-x: auto;
}

.main-four i {
  font-size: 1.2em;
  color: #555;
}

.main-four h5 {
  margin-left: 10px;
}

.main-four-card {
  height: 300px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four-card i:nth-child(9),
i:nth-child(11),
i:nth-child(15) {
  color: #aaa;
}

.main-four-card a {
  border: solid .1px #dddddd;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}

.main-four-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-four-card h4 {
  margin: 0 0 0 10px;
}

.main-four-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.main-five {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  overflow-x: auto;
}

.main-five i {
  font-size: 1.2em;
  color: #555;
}

.main-five h5 {
  margin-left: 10px;
}

.main-five h4 {
  margin-left: 10px;
}

.main-five-card {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 10px;
  box-shadow: 0px 1px 1px #eee;
  border-radius: 0% 0% 10% 10%;
}

.main-five-card a {
  margin: 0px 5px 12px 10px;
  border-radius: 3% 3% 3% 3%;
  color: #aaa;
}

.main-five-card a:hover {
  color: #fadb41;
}

.main-five-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-five-card h4 {
  margin: 0 5px 0 10px;
}

.main-five-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.main-six {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  overflow-x: auto;
}

.main-six i {
  font-size: 1.2em;
  color: #555;
}

.main-six-card h4 {
  margin-left: 30px;
}

.main-six-card .legend img {
  height: 30px;
}

.main-six h5 {
  margin-left: 10px;
}

.main-six h5 {
  margin: 10px;
}

.main-six-card {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-six-card a {
  border: solid .1px #dddddd;
  margin: 0px 5px 20px 10px;
  border-radius: 3% 3% 3% 3%;
}

.main-six-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-six-card h4 {
  margin: 0 5px 0 10px;
}

.main-six-card p {
  margin: 0 0 10px 10px;
  font-size: .8em;
}

.main-seven {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  box-shadow: 0px 10px 10px#bbb;
  overflow-x: auto;
}

.main-seven i {
  font-size: 1.2em;
  color: #555;
}

.main-seven h5 {
  margin-left: 10px;
}

.main-seven-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;

}

.main-seven-card a {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px auto 20px auto;
  width: 60%;
}

.main-seven-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-seven-card h4 {
  margin: 0 5px 0 10px;
}

.main-seven-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.mini-profile {
  height: 25px;
  border-radius: 50%;
  margin: 10px 0 0 10px;
  padding: 0 15px 0 0;
}

a.RouterLink-exact-active {
  color: #000;
  font-weight: bold;
}

.dateYear {
  color: #ccc;
}

.dateYearHover {
  color: #000;
}

.main-five a.router-link-exact-active {
  color: #000;
}

@media only screen and (max-width: 369px) {}
</style>