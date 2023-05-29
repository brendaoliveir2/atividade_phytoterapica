import Styles from './Signup.module.css'

function SignUp(){
    return(
       <section className={Styles.fundo}>
        <div className={Styles.signup}>
            <p><span>INSCREVA-SE</span><br />E RECEBA NOVIDADES E PROMOÇÕES.</p>
        </div>
       
        <div className={Styles.email}>
            <input type='email' placeholder='seu email' />
        </div>
       
       
        <div className={Styles.assinatura}>
            <p>ASSINAR NEWSLETTER</p>
        </div>

       </section>

    )
}

export default SignUp