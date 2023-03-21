import styles from './styles.module.scss'
import { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {
  CoffeCardContext,
  cardType,
} from '../../../../contexts/CoffeCardContext'

export default function CodffeList() {
  const { cardList, addItem, removeItem } = useContext(CoffeCardContext)

  function handleAddItem(cardToUpdate: cardType) {
    addItem(cardToUpdate)
  }

  function handleRemoveItem(cardToUpdate: cardType) {
    removeItem(cardToUpdate)
  }

  return (
    <div className={styles.coffeSection}>
      <div className={styles.coffeListWraper}>
        <div className={styles.coffeList}>
          {cardList.map((card) => {
            return (
              <div key={card.title} className={styles.coffeCard}>
                <img src={card.imgSrc} alt="foto do expresso tradicional" />
                <div className={styles.tagWraper}>
                  <span className={styles.tag}>
                    <p>{card.tag1}</p>
                  </span>
                  {card.tag2 ? (
                    <span className={styles.tag}>
                      <p>{card.tag2}</p>
                    </span>
                  ) : null}
                  {card.tag3 ? (
                    <span className={styles.tag}>
                      <p>{card.tag3}</p>
                    </span>
                  ) : null}
                </div>
                <h3>{card.title}</h3>
                <p className={styles.label}>{card.desc}</p>
                <div className={styles.buyWraper}>
                  <span className={styles.value}>
                    <p>R$</p>
                    <h3>9,90</h3>
                  </span>
                  <span className={styles.itens}>
                    <button onClick={() => handleRemoveItem(card)}>-</button>
                    <p>{card.amount}</p>
                    <button onClick={() => handleAddItem(card)}>+</button>
                  </span>
                  <button className={styles.cartIconContainer}>
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
