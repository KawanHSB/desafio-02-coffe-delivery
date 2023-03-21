import styles from './styles.module.scss'
import expressoTradicional from '../../../../assets/expresso-tradicional.png'
import expressoAmericano from '../../../../assets/expresso-americano.png'
import expressoCremoso from '../../../../assets/expresso-cremoso.png'
import expressoGelado from '../../../../assets/expresso-gelado.png'
import cafeComLeite from '../../../../assets/cafe-com-leite.png'
import latte from '../../../../assets/latte.png'
import capuccino from '../../../../assets/capuccino.png'
import macchiato from '../../../../assets/macchiato.png'
import mocaccino from '../../../../assets/mocaccino.png'
import chocolateQuente from '../../../../assets/chocolate-quente.png'
import cubano from '../../../../assets/cubano.png'
import havaiano from '../../../../assets/havaiano.png'
import arabe from '../../../../assets/arabe.png'
import irlandes from '../../../../assets/irlandes.png'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

export interface cardType {
  title: string
  desc: string
  tag1?: string
  tag2?: string
  tag3?: string
  imgSrc: string
  amount: number
}

export default function CodffeList() {
  const [cardList, setCardList] = useState<cardType[]>([
    {
      title: 'Expresso Tradicional',
      desc: 'O tradicional café feito com água quente e grãos moídos',
      tag1: 'TRADICIONAL',
      imgSrc: expressoTradicional,
      amount: 0,
    },
    {
      title: 'Expresso Americano',
      desc: 'Expresso diluído, menos intenso que o tradicional',
      tag1: 'TRADICIONAL',
      imgSrc: expressoAmericano,
      amount: 0,
    },
    {
      title: 'Expresso Cremoso',
      desc: 'Café expresso tradicional com espuma cremosa',
      tag1: 'TRADICIONAL',
      imgSrc: expressoCremoso,
      amount: 0,
    },
    {
      title: 'Expresso Gelado',
      desc: 'Bebida preparada com café expresso e cubos de gelo',
      tag1: 'TRADICIONAL',
      tag2: 'GELADO',
      imgSrc: expressoGelado,
      amount: 0,
    },

    {
      title: 'Café com Leite',
      desc: 'Meio a meio de expresso tradicional com leite vaporizado',
      tag1: 'TRADICIONAL',
      tag2: 'COM LEITE',
      imgSrc: cafeComLeite,
      amount: 0,
    },
    {
      title: 'Latte',
      desc: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      tag1: 'TRADICIONAL',
      tag2: 'COM LEITE',
      imgSrc: latte,
      amount: 0,
    },
    {
      title: 'Capuccino',
      desc: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      tag1: 'TRADICIONAL',
      tag2: 'COM LEITE',
      imgSrc: capuccino,
      amount: 0,
    },
    {
      title: 'Macchiato',
      desc: 'Café expresso misturado com um pouco de leite quente e espuma',
      tag1: 'TRADICIONAL',
      tag2: 'COM LEITE',
      imgSrc: macchiato,
      amount: 0,
    },
    {
      title: 'Mocaccino',
      desc: 'Café expresso com calda de chocolate, pouco leite e espuma',
      tag1: 'TRADICIONAL',
      tag2: 'COM LEITE',
      imgSrc: mocaccino,
      amount: 0,
    },
    {
      title: 'Chocolate Quente',
      desc: 'Bebida feita com chocolate dissolvido no leite quente e café',
      tag1: 'ESPECIAL',
      tag2: 'COM LEITE',
      imgSrc: chocolateQuente,
      amount: 0,
    },

    {
      title: 'Cubano',
      desc: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      tag1: 'ESPECIAL',
      tag2: 'ALCOÓLICO',
      tag3: 'GELADO',
      imgSrc: cubano,
      amount: 0,
    },
    {
      title: 'Havaiano',
      desc: 'Bebida adocicada preparada com café e leite de coco',
      tag1: 'ESPECIAL',
      imgSrc: havaiano,
      amount: 0,
    },
    {
      title: 'Árabe',
      desc: 'Bebida preparada com grãos de café árabe e especiarias',
      tag1: 'ESPECIAL',
      imgSrc: arabe,
      amount: 0,
    },
    {
      title: 'Irlandês',
      desc: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      tag1: 'ESPECIAL',
      tag2: 'ALCOÓLICO',
      imgSrc: irlandes,
      amount: 0,
    },
  ])

  const totalAmount = cardList.reduce((acc, card) => acc + card.amount, 0)

  function handleAddItem(cardToUpdate: cardType) {
    setCardList((prevCardList) => {
      const updateCardList = prevCardList.map((card) => {
        if (card === cardToUpdate) {
          return { ...card, amount: card.amount + 1 }
        }
        return card
      })
      return updateCardList
    })
  }

  function handleRemoveItem(cardToUpdate: cardType) {
    setCardList((prevCardList) => {
      const updateCardList = prevCardList.map((card) => {
        if (card === cardToUpdate) {
          if (cardToUpdate.amount !== 0) {
            return { ...card, amount: card.amount - 1 }
          }
        }
        return card
      })
      return updateCardList
    })
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
