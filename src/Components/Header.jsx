import Styles from './Header.module.css'
import logo from '../images/logosite.png'
import lupa from '../images/lupa.png'
import porcentagem from '../images/percentage-circle.png'
import conta from '../images/conta.png'
import carrinho from '../images/carrinho-de-compras.png'

function Header(){
    return(

        <header className={Styles.header}>
            <div className={Styles.logo}>
                <img src={logo} alt="logo do site" />
            </div>

            <div className={Styles.menu_direito}>
                <div className={Styles.pesquisa}>
                    <img src={lupa} alt="lupa da barra de pesquisa" />
                    <p>O que você procura?</p>
                </div>

                <div className={Styles.promocao}>
                    <img src={porcentagem} alt="percentual" />
                    <p> -5% NA PRIMEIRA COMPRA</p>
                </div>

                <div className={Styles.icons}>
                    <img src={conta} alt="usuario" />
                </div>

                <div className={Styles.icons}>
                    <img src={carrinho} alt="carrinho de compras" />
                </div>

            </div>
        </header>

    )
}

export default Header