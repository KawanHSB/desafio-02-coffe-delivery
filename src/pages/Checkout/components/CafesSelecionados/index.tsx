import CartCard from './CartCard'
import styles from './style.module.scss'
export function CafesSelecionados() {
  return (
    <div className={styles.componentWraper}>
      <h3>Cafés Selecionados</h3>
      <div className={styles.coffesCart}>
        <CartCard />
      </div>
    </div>
  )
}
