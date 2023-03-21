import styles from './styles.module.scss'
import { FaShoppingCart } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import Logo from '../../assets/Logo.svg'
import { CoffeCardContext } from '../../App'
import { useContext } from 'react'

export function Header() {
  const { totalAmount } = useContext(CoffeCardContext)
  return (
    <div className={styles.headerWraper}>
      <header className={styles.header}>
        <img src={Logo} alt="" />
        <div className={styles.locateCart}>
          <span className={styles.locate}>
            <IoLocationSharp className={styles.locateIcon} />
            <p>Porto alegre</p>
          </span>
          <button className={styles.cart}>
            {totalAmount}
            <FaShoppingCart className={styles.cartIcon} />
          </button>
        </div>
      </header>
    </div>
  )
}
