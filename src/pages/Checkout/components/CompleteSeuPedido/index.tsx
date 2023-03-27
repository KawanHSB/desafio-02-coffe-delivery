import styles from './styles.module.scss'
import { MapPinLine, CurrencyDollar } from '@phosphor-icons/react'
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
          <form className={styles.formAdress}>
            <input className={styles.cep} placeholder="cep" />
            <input className={styles.rua} placeholder="rua" />
            <input className={styles.numero} placeholder="numero" />
            <input className={styles.complemento} placeholder="complemento" />
            <input className={styles.cidade} placeholder="cidade" />
            <input className={styles.uf} placeholder="uf" />
            <input className={styles.ufSigla} placeholder="ufSigla" />
          </form>
        </span>
      </div>
      <div className={styles.pagamento}>
        <span className={styles.title}>
          <span>
            <CurrencyDollar className={styles.currencyICon} />
          </span>
          <span>
            <h5>Pagamento</h5>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </span>
        </span>
      </div>
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
