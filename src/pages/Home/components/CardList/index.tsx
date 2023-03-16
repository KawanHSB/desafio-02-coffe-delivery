import Card from '../Card'
import styles from './styles.module.scss'

export default function CardList() {
  return (
    <div className={styles.coffeSection}>
      <div className={styles.coffeListWraper}>
        <div className={styles.coffeList}>
          <Card title={'k'} desc={'a'} tag1={'a'} tag2={'fafa'} tag3={'1'} />
        </div>
      </div>
    </div>
  )
}
