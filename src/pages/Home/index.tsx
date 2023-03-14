import styles from './styles.module.scss'
import coffeImage from '../../assets/coffe-delivery-home.png'
import { FaShoppingCart } from 'react-icons/fa'
import { RiTimerFill } from 'react-icons/ri'

export default function Home() {
  return (
    <div className={styles.coffeHome}>
      <section>
        <h3>Encontre o café perfeito para qualquer hora do dia</h3>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <span>
          <FaShoppingCart />
          <p>Compra simples e segura</p>
        </span>
        <span>
          <RiTimerFill />
          <p>Entrega rápida e rastreada</p>
        </span>
        <span>
          <p>Embalagem mantém o café intacto</p>
        </span>
        <span>
          <p>O café chega fresquinho até você</p>
        </span>
      </section>
      <img src={coffeImage} alt="" />
    </div>
  )
}
