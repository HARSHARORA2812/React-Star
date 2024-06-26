import react from 'react'

function Card({name , result}){
  return(
   <>

    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
        {result}
        
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
        reiciendis a vel error explicabo voluptatum nihil possimus veritatis eos
        culpa.
        {name}
      </p>
    </div>
    </>

  )
}

export default Card

