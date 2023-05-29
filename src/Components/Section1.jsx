import Styles from './Section1.module.css'
import filtro from '../images/filtro.png'
import relevancia from '../images/relevancia.png'

function Section1(){
    return(
        <div className={Styles.area_filtro}>
            <div className={Styles.filtro}>
                <p>FILTRO</p>
                <img src={filtro} alt='filtro' />
            </div>

            <div className={Styles.area_relevancia}>
                <p>ORDENAR</p>
                <img src={relevancia} alt='filtro de relevancia' />
            </div>
        </div>
    )
}

export default Section1
