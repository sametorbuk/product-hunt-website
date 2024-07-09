import { Link } from "react-router-dom/cjs/react-router-dom.min";


export default function MainPageContent() {

return (
<>
<div className='main-page-content' >
      <p className='main-page-row1'>Teknolojik Yemekler</p>
     <p className='main-page-row2' >KOD ACIKTIRIR</p> 
     <p className='main-page-row3' >PİZZA DOYURUR</p>
      <Link to="/order" ><button className='hungry-button' >ACIKTIM</button></Link>  
      </div>
</>
)
}