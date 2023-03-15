import styles from './styles.module.scss'
import ExpressoTradicional from '../../../../assets/expresso-tradicional.png'

export default function Card() {
  return (
    <div className={styles.coffeCard}>
      <img src={ExpressoTradicional} alt="foto do expresso tradicional" />
      <span>
        <p>TRADICIONAL</p>
      </span>
      <h3>EXPRESSO TRADICIONAL</h3>
      <p className={styles.label}>
        O tradicional café feito com água quente e grãos moídos
      </p>
      <div className={styles.buyWraper}></div>
    </div>
  )
}
