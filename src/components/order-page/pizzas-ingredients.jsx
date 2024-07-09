
import { useState } from "react"
import "./pizza-ingredients.css"

export default function PizzasIngredients(props) {
  const {formData , setFormData} = props
  const [selectedIngredients , setSelecetedIngredients] = useState(0)
  
  function clickIngredientsHandler(event){
   const checkbox= event.target

   if(checkbox.checked) {
       if(selectedIngredients < 10) {
        setSelecetedIngredients(selectedIngredients+1)
        const upgrade= [...formData["malzemeler"] , event.target.value]
        setFormData({...formData , upgrade})
       } else {
        checkbox.checked= false;
        alert("En fazla 10 adet seçim yapabilirsiniz")
       }

   } else {
    setSelecetedIngredients(selectedIngredients-1)
    setFormData({...formData , ["malzemeler"]:formData["malzemeler"].filter((item)=> !event.target.value) })
   }
   

}

return(
      <>
       <p className="extra-ingredients">Ek Malzemeler</p>
       <p>En fazla 10 malzeme seçebilsiniz. Adet fiyatı 5₺</p>
      <div className="pizza-ingredients-div">
      

      <div className="div1">
       <label className="ingredients-label" htmlFor="Pepperoni">Pepperoni</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="Pepperoni" value="Pepperoni" />


      <label className="ingredients-label" htmlFor="Sosis">Sosis</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="Sosis" value="Sosis" />

      <label className="ingredients-label" htmlFor="KanadaJambonu">Kanada Jambonu</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="KanadaJambonu" value="Kanada Jambonu" />

      <label className="ingredients-label" htmlFor="TavukIzgara">Tavuk Izgara</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="TavukIzgara" value="Tavuk Izgara"/>

      <label className="ingredients-label" htmlFor="Soğan">Soğan</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="Soğan"  value="Soğan"/>
      </div>

      <div className="div2">
      <label className="ingredients-label" htmlFor="Domates">Domates</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="Domates" value="Domates"/>

      <label className="ingredients-label" htmlFor="Mısır">Mısır</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="Mısır"  value="Mısır"/>

      <label className="ingredients-label" htmlFor="Sucuk">Sucuk</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="Sucuk" value="Sucuk"/>

      <label className="ingredients-label" htmlFor="Jalepeno">Jalepeno</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="Jalepeno" value="Jalepeno"/>

      <label className="ingredients-label" htmlFor="Sarımsak">Sarımsak</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="Sarımsak" value="Sarımsak"/>
      </div>

      <div className="div3">
      <label className="ingredients-label" htmlFor="Biber">Biber</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="Biber" value="Biber"/>

      <label className="ingredients-label" htmlFor="Mantar">Mantar</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="Mantar" value="Mantar"/>


      <label className="ingredients-label" htmlFor="Ananas">Ananas</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="Ananas" value="Ananas"/>

      <label  className="ingredients-label" htmlFor="Kabak">Kabak</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id="Kabak" value="Kabak"/>
      </div>
      </div>


     
     
     
      </>
)





}