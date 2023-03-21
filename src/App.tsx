import { Header } from './components/Header'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
// import { CoffeCardContext } from './pages/Home/components/CoffeList'
import { createContext, useState } from 'react'
import expressoTradicional from './assets/expresso-tradicional.png'

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

function App() {
  const [cardList, setCardList] = useState<cardType[]>([
    {
      title: 'Expresso Tradicional',
      desc: 'O tradicional café feito com água quente e grãos moídos',
      tag1: 'TRADICIONAL',
      imgSrc: expressoTradicional,
      amount: 0,
    },
    {
      title: 'Expresso Tradicional',
      desc: 'O tradicional café feito com água quente e grãos moídos',
      tag1: 'TRADICIONAL',
      imgSrc: expressoTradicional,
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
    <BrowserRouter>
      <CoffeCardContext.Provider
        value={{ cardList, addItem, removeItem, totalAmount }}
      >
        <Header />
        <Router />
      </CoffeCardContext.Provider>
    </BrowserRouter>
  )-
}

export default App
