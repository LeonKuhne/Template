document.addEventListener('DOMContentLoaded', ()=>{
  let board = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => {
      return {
        title: "Lyrics Assistant"
      }
    }
  })
})
