import { CafesSelecionados } from './components/CafesSelecionados'
import { CompleteSeuPedido } from './components/CompleteSeuPedido'
import styles from './style.module.scss'

export function Checkout() {
  return (
    <div className={styles.wraper}>
      <CompleteSeuPedido />
      <CafesSelecionados />
    </div>
  )
}
