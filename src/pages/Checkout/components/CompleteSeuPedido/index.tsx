import styles from './styles.module.scss'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'
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
            <input className={styles.cep} placeholder="CEP" />
            <input className={styles.rua} placeholder="Rua" />
            <input className={styles.numero} placeholder="Numero" />
            <input className={styles.complemento} placeholder="Complemento" />
            <input className={styles.bairro} placeholder="Bairro" />
            <input className={styles.cidade} placeholder="Cidade" />
            <input className={styles.uf} placeholder="UF" />
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
        <div className={styles.paymentWraper}>
          <button>
            <CreditCard className={styles.icon} />
            <span>Cartão de crédito</span>
          </button>
          <button>
            <Bank className={styles.icon} />
            <span>cartão de débito</span>
          </button>
          <button>
            <Money className={styles.icon} />
            <span>Dinheiro</span>
          </button>
        </div>
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
