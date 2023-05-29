import Styles from './Footer.module.css'

function Footer(){
    return(

        <footer className={Styles.footer}>
            <div>
                <div className={Styles.titulo}>
                    <p>Redes Sociais</p>
                </div>

                <div className={Styles.redessociais}>
                    <div className={Styles.instagram}></div>
                    <div className={Styles.facebook}></div>
                    <div className={Styles.youtube}></div>
                    <div className={Styles.twitter}></div>
                </div>
            </div>

            <div>
                <p>FORMAS DE PAGAMENTO</p>
            </div>
            
            <div className={Styles.redessociais}>
                <div className={Styles.pix}></div>
                <div className={Styles.visa}></div>
                <div className={Styles.mastercard}></div>
                <div className={Styles.elo}></div>
                <div className={Styles.american}></div>
            </div>

        </footer>

        )
}

export default Footer 