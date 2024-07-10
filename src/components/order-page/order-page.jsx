import "./order-page.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import PizzasSizeOptions from "./pizzas-size-options"
import PizzasIngredients from "./pizzas-ingredients"
import { useState } from "react"


const initialValues = {
    name:"",
    size:"",
    malzemeler:[],
    special:""

}

export default function OrderPageContent() {
const [formData , setFormData] = useState(initialValues)

const [pizzaCount , setPizzaCount] = useState(0)

function clickCountIncrease() {

setPizzaCount(pizzaCount+1)
}

function clickCountDecrease() {
   
    if(pizzaCount >= 1) {
        setPizzaCount(pizzaCount-1)
    } else {
        return
    }
}

function submitHandler(event) {
    event.preventDefault();
}



return (
<>
<header className="order-page-header">
<h1>Teknolojik Yemekler</h1>
<nav>
<Link className="header-button" to="/" >Anasayfa-</Link>
<Link className="header-button" to="/order" >Seçenekler-</Link>
<Link className="header-button" to="/order" >Sipariş Oluştur</Link>
</nav>
</header>

<div className="order-page-content">
<div className="pizza-info-content">
    <p className="pizza-info-content-row1" >Position Absolute Acı Pizza</p>
    <div className="pizza-info-content-row2" >
     <p className="pizzas-price" >89.95₺</p>
     <p className="pizzas-point" >4.9★ </p>
     <p>(200)</p>
 </div>
    <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza domates , peynir ve genellikle çeşitli malzemelerle kaplanmış , daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak , düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir. </p>




</div>

<form onSubmit={submitHandler} >
<PizzasSizeOptions  formData={formData} setFormData={setFormData}  />
<PizzasIngredients formData={formData} setFormData={setFormData}  />

<label className="labelForNote" htmlFor="not-area">Sipariş Notu</label>
<textarea placeholder="Siparişine eklemek istediğin bir not var mı ?" className="areaForNote" name="" id="not-area"></textarea>

<div className="order-count-and-info-div" >

<div className="order-count-settings-div">
<button onClick={clickCountDecrease} className="count-decrease-btn"  >-</button>
<p>{pizzaCount}</p>
<button onClick={clickCountIncrease} className="count-increase-btn" >+</button>

</div>


<div className="total-info-and-submit-div">
<p style={{fontWeight:"bold"}}>Sipariş Toplamı:</p>
<p>Seçimler {formData["malzemeler"].length*5}</p>
<p style={{color:"#CE2829" , fontWeight:"bold"}}  >Toplam:{pizzaCount*89.95}</p>
{console.log(formData)}
<button style={{backgroundColor:"#FDC913"}} type="submit" >Sipariş ver</button>
</div>

</div>

</form>




</div>
</>
)


}