import Styles from './Menu.module.css'

function Menu(){
    return(
            <div className={Styles.menu}>
               
                <p>ÓLEOS ESSENCIAIS</p>
                <p>ÓLEOS VEGETAIS</p>
                <p>SINERGIAS</p>
                <p>COSMÉTICOS NATURAIS</p>
                <p>HIGIENE PESSOAL</p>
                <p>AROMATIZADORES</p>
                <p>SUPLEMENTOS</p>
                <p>ACESSÓRIOS</p>
                <p>OFERTAS</p>
                <p>CONSULTOR(A)</p>  
            </div>

    )
}

export default Menu