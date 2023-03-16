import Card from '../Card'
import styles from './styles.module.scss'
import expressoTradicional from '../../../../assets/expresso-tradicional.png'

export default function CardList() {
  return (
    <div className={styles.coffeSection}>
      <div className={styles.coffeListWraper}>
        <div className={styles.coffeList}>
          <Card
            title={'k'}
            desc={'a'}
            tag1={'a'}
            tag2={'fafa'}
            tag3={'1'}
            imgSrc={expressoTradicional}
          />
        </div>
      </div>
    </div>
  )
}
