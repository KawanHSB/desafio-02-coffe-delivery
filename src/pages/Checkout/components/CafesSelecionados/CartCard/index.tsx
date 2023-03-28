import { Trash } from '@phosphor-icons/react'
import { useContext } from 'react'
import {
  cardType,
  CoffeCardContext,
} from '../../../../../contexts/CoffeCardContext'
import styles from './style.module.scss'

export default function CartCard() {
  const { cardList, addItem, removeItem } = useContext(CoffeCardContext)

  const selectedCoffes = cardList.filter((selectedAmount) => {
    return selectedAmount.amount !== 0
  })

  const cardCalc = selectedCoffes.map((amount) => {
    return amount.amount * 9.9
  })

  function handleAddItem(cardToUpdate: cardType) {
    addItem(cardToUpdate)
  }

  function handleRemoveItem(cardToUpdate: cardType) {
    removeItem(cardToUpdate)
  }

  console.log(cardCalc)
  return (
    <div className={styles.cartCard}>
      {selectedCoffes.map((card) => {
        return (
          <>
            <img src={card.imgSrc} />
            <span>
              <h5>{card.title}</h5>
              <p>R${cardCalc}</p>
            </span>
            <span>
              <span className={styles.itens}>
                <button onClick={() => handleRemoveItem(card)}>-</button>
                <p>{card.amount}</p>
                <button onClick={() => handleAddItem(card)}>+</button>
              </span>
              <button className={styles.remove}>
                <Trash className={styles.icon} /> Remover
              </button>
            </span>
          </>
        )
      })}
    </div>
  )
}
