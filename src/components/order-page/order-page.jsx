import "./order-page.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
export default function OrderPageContent() {

return (
<>
<header className="order-page-content-header">
<h1>Teknolojik Yemekler</h1>
<nav>
<Link className="header-button" to="/" >Anasayfa-</Link>
<Link className="header-button" to="/order" >Seçenekler</Link>
<Link className="header-button" to="/order" >Sipariş Oluştur</Link>
</nav>
</header>

</>
)


}