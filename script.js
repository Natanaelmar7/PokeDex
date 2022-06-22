async function pokemon(n,c, url) {

     const container = document.getElementById('container')
     
 for(i = n; i < c; i++) {
       
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const dataJson = await data.json() 
   
      const text = dataJson.name 

      let pokemons = `
       <div id = ${i}>
         <img src = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png >
          <p>${text}</p>
       </div>
      `

      container.innerHTML += pokemons // separate the pokemons in boxes
        
      console.log(dataJson)

 }

 }

pokemon() 



