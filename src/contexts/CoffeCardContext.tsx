import { createContext, useState, ReactNode } from 'react'
import expressoTradicional from '../assets/expresso-tradicional.png'
import expressoAmericano from '../assets/expresso-americano.png'
import expressoCremoso from '../assets/expresso-cremoso.png'
import expressoGelado from '../assets/expresso-gelado.png'
import cafeComLeite from '../assets/cafe-com-leite.png'
import latte from '../assets/latte.png'
import capuccino from '../assets/capuccino.png'
import macchiato from '../assets/macchiato.png'
import mocaccino from '../assets/mocaccino.png'
import chocolateQuente from '../assets/chocolate-quente.png'
import cubano from '../assets/cubano.png'
import havaiano from '../assets/havaiano.png'
import arabe from '../assets/arabe.png'
import irlandes from '../assets/irlandes.png'

export interface cardType {
  title: string
  desc: string
  tag1?: string
  tag2?: string
  tag3?: string
  imgSrc: string
  amount: number
}

interface CoffeCardContextType {
  cardList: cardType[]
  removeItem: (cardToUpdate: cardType) => void
  addItem: (cardToUpdate: cardType) => void
  totalAmount: number
}

export const CoffeCardContext = createContext({} as CoffeCardContextType)

interface CoffeCardContextProviderProps {
  children: ReactNode
}

export function CoffeCardContextProvider({
  children,
}: CoffeCardContextProviderProps) {
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

  function addItem(cardToUpdate: cardType) {
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

  function removeItem(cardToUpdate: cardType) {
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
    <CoffeCardContext.Provider
      value={{ cardList, addItem, removeItem, totalAmount }}
    >
      {children}
    </CoffeCardContext.Provider>
  )
}
