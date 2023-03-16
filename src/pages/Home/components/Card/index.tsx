import styles from './styles.module.scss'
import { FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react'

type contentType = string

Card.defaultProps = {
  tag1: 'TRADICIONAL',
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
  const [amount, setAmount] = useState(0)

  function handleAdd() {
    setAmount(amount + 1)
  }

  function handleRemove() {
    if (amount !== 0) {
      setAmount(amount - 1)
    }
  }
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
          <button onClick={handleRemove}>-</button>
          <p>{amount}</p>
          <button onClick={handleAdd}>+</button>
        </span>
        <span className={styles.cartIconContainer}>
          <FaShoppingCart />
        </span>
      </div>
    </div>
  )
}
