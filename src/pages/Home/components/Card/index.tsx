import styles from './styles.module.scss'
import { FaShoppingCart } from 'react-icons/fa'

type contentType = string

Card.defaultProps = {
  tag2: '',
  tag3: '',
}

export default function Card({
  title,
  desc,
  tag1,
  tag2,
  tag3,
  imgSrc,
}: {
  title: contentType
  desc: contentType
  tag1: contentType
  tag2: contentType
  tag3: contentType
  imgSrc: contentType
}) {
  return (
    <div className={styles.coffeCard}>
      <img src={imgSrc} alt="foto do expresso tradicional" />
      <div className={styles.tagWraper}>
        <span className={styles.tag}>
          <p>{tag1}</p>
        </span>
        {tag2.length ? (
          <span className={styles.tag}>
            <p>{tag2}</p>
          </span>
        ) : null}
        {tag3.length ? (
          <span className={styles.tag}>
            <p>{tag3}</p>
          </span>
        ) : null}
      </div>
      <h3>{title}</h3>
      <p className={styles.label}>{desc}</p>
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
