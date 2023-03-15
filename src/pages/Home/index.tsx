import styles from './styles.module.scss'
import coffeImage from '../../assets/coffe-delivery-home.png'
import { FaShoppingCart } from 'react-icons/fa'
import { RiTimerFill } from 'react-icons/ri'
import Package from '../../assets/package-white.svg'
import Coffe from '../../assets/coffe-white.svg'

export default function Home() {
  return (
    <div className={styles.coffeHome}>
      <section>
        <h3>Encontre o café perfeito para qualquer hora do dia</h3>
        <p className={styles.subtitle}>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <section className={styles.itens}>
          <div>
            <span className={styles.iten}>
              <span className={styles.cartIcon}>
                <FaShoppingCart color="white" />
              </span>
              <p>Compra simples e segura</p>
            </span>
            <span className={styles.iten}>
              <span className={styles.timerIcon}>
                <RiTimerFill />
              </span>
              <p>Entrega rápida e rastreada</p>
            </span>
          </div>
          <div>
            <span className={styles.iten}>
              <span className={styles.packageIcon}>
                <img src={Package} alt="Package-icon" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </span>
            <span className={styles.iten}>
              <span className={styles.coffeIcon}>
                <img src={Coffe} alt="Coffe-icon" />
              </span>
              <p>O café chega fresquinho até você</p>
            </span>
          </div>
        </section>
      </section>
      <img src={coffeImage} alt="" className={styles.coffeHomeImage} />
    </div>
  )
}
