import Card from '../Card'
import styles from './styles.module.scss'

export default function CardList() {
  return (
    <div className={styles.coffeSection}>
      <div className={styles.coffeListWraper}>
        <div className={styles.coffeList}>
          <Card />
        </div>
      </div>
    </div>
  )
}
