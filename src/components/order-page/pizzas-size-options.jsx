import { useState } from "react"

import "./pizzas-size-options.css"


export default function PizzasSizeOptions() {
    const [selectedSize , setSelectedSize] = useState("")



function clickSizeHandler(event) {
    setSelectedSize(event.target.value)
}

return (

<>


<p>{`Boyut Seçiminiz:    ${selectedSize}`}</p>

<label htmlFor="small" >Küçük</label>
<input onClick={clickSizeHandler}  className="size-input" id="small" type="radio" value="Küçük" name="size-change"/>

<label htmlFor="medium">Orta</label>
<input onClick={clickSizeHandler} className="size-input" id="medium"  type="radio" value="Orta" name="size-change"/>

<label htmlFor="large">Büyük</label>
<input onClick={clickSizeHandler} className="size-input" id="large"  type="radio" value="Büyük" name="size-change"/>



</>

)
S
}