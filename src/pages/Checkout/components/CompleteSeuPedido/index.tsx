import styles from './styles.module.scss'
import { MapPinLine } from '@phosphor-icons/react'
export function CompleteSeuPedido() {
  return (
    <div className={styles.componentWraper}>
      <h3>Complete Seu Pedido</h3>
      <div className={styles.endereco}>
        <span>
          <span className={styles.title}>
            <MapPinLine className={styles.locateIcon} />
            <span>
              <h5>Endereço de Entrega</h5>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </span>
          </span>
          <form className={styles.formAdress}></form>
        </span>
      </div>
      <div className={styles.pagamento}></div>
    </div>
  )
}

// <div className={styles.endereco}>
// <span className={styles.title}>
//   <span>
//     <span>
//       <MapPinLine className={styles.locateIcon} />
//       <h5>Endereço de Entrega</h5>
//       <p>Informe o endereço onde deseja receber seu pedido</p>
//     </span>
//     <form className={styles.formAdress}></form>
//   </span>
// </span>
// </div>
