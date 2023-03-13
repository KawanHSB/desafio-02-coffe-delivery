import styles from './styles.module.scss'
import { FaShoppingCart } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
      <div className={styles.locateCart}>
        <span className={styles.locate}>
          <IoLocationSharp className={styles.locateIcon} />
          <p>porto alegre</p>
        </span>
        <span className={styles.cart}>
          <FaShoppingCart className={styles.cartIcon} />
        </span>
      </div>
    </header>
  )
}
