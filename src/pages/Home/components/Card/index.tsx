import styles from './styles.module.scss'
import ExpressoTradicional from '../../../../assets/expresso-tradicional.png'
import { FaShoppingCart } from 'react-icons/fa'

export default function Card() {
  return (
    <div className={styles.coffeCard}>
      <img src={ExpressoTradicional} alt="foto do expresso tradicional" />
      <span className={styles.tag}>
        <p>TRADICIONAL</p>
      </span>
      <h3>EXPRESSO TRADICIONAL</h3>
      <p className={styles.label}>
        O tradicional café feito com água quente e grãos moídos
      </p>
      <div className={styles.buyWraper}>
        <span className={styles.value}>
          <p>R$</p>
          <h3>9,90</h3>
        </span>
        <span className={styles.itens}>
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </span>
        <span className={styles.cartIconContainer}>
          <FaShoppingCart />
        </span>
      </div>
    </div>
  )
}
