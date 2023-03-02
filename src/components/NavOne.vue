<template>
    
    <div class='nav-one'>
        <div>
          <a href="https://app.leandrocesar.com" target="_blank"><i class="fa-solid fa-right-to-bracket"></i></a>
        </div>
    </div>

</template>
<style scoped>
.nav-one{
  height: 35px;
  position: sticky;
  top: -2px;
  background: #fff;
  z-index: 10;
  border-radius: 0% 0% 10% 10%;
  box-shadow: 0px .5px 5px #eee;
  z-index: 10;
}

.nav-one div{
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

.nav-one a{
  text-decoration: none;
  cursor: pointer;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one i {
  color: #aaa;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.nav-one i:hover {
  color: #fadb41;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}
</style>