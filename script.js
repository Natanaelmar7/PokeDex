async function pokemon(n,c, url) {

     const container = document.getElementById('container')
     
 for(i = n; i < c; i++) {
       
       const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
       const dataJson = await data.json() 
   
      const text = dataJson.name 

      let peixinho = `
      <div id = ${i}>
        <img src = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png >
        <p>Type</p>
         <p>${text}</p>
       </div>
      `

     container.innerHTML += peixinho // separate the pokemons in boxes
        
      console.log(dataJson)

 }

 }




