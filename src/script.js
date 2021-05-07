document.addEventListener('DOMContentLoaded', ()=>{
  new Vue({
    el: '#app',
    vuetify: new Vuetify({ theme: { dark: true }}),
    data: () => {
      return {
        title: "Lyrics Assistant"
      }
    },
  })
})
