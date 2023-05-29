import Styles from './Areavegana.module.css'
import vegano from '../images/vegano-green-icon.svg'
import pata from '../images/pata-green-icon.svg'
import gotas from '../images/gotas-green-icon.svg'


function Vegano(){
    return(
        <section className={Styles.vgn}>

            <div className={Styles.todos}>
                <div className={Styles.vegan}>
                    <div>
                        <img src={vegano} alt="vegano" />
                    </div>
                    <div className={Styles.titulo}>
                        <h3>Vegano</h3>
                        <p>Sem componentes de origem animal</p>
                    </div>
                </div>
            </div>

            <div className={Styles.todos}>
                <div className={Styles.patinha}>
                    <div>
                        <img src={pata} alt="pata" />
                    </div>
                    <div className={Styles.titulo}>
                        <h3>Cruelty-Free</h3>
                        <p>Não testado em animais</p>
                    </div>
                </div>
            </div>


            <div className={Styles.todos}>
                <div className={Styles.gota}>
                    <div>
                        <img src={gotas} alt="vegano" />
                    </div>
                    <div className={Styles.titulo}>
                        <h3>100% Puro</h3>
                        <p>Óleos puros e naturais</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Vegano