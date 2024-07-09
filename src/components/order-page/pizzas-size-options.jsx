import { useState } from "react"

import "./pizzas-size-options.css"


export default function PizzasSizeOptions(props) {
    const {formData , setFormData} = props
     const [selectedSize , setSelectedSize] = useState("")

function clickSizeHandler(event) {
    const size = event.target.value
    setSelectedSize(size)
    setFormData({...formData , ["size"]:size})
   
}

return (

<> 


<p>{`Boyut Seçiminiz:  ${selectedSize}`}</p>

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