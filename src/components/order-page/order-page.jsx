import "./order-page.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import PizzasSizeOptions from "./pizzas-size-options"
import PizzasIngredients from "./pizzas-ingredients"



export default function OrderPageContent() {

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
<PizzasSizeOptions/>
<PizzasIngredients/>



</div>
</>
)


}