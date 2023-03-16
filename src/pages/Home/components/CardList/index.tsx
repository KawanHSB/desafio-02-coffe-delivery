import Card from '../Card'
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

export default function CardList() {
  return (
    <div className={styles.coffeSection}>
      <div className={styles.coffeListWraper}>
        <div className={styles.coffeList}>
          <Card
            title={'Expresso Tradicional'}
            desc={'O tradicional café feito com água quente e grãos moídos'}
            imgSrc={expressoTradicional}
          />
          <Card
            title={'Expresso Americano'}
            desc={'Expresso diluído, menos intenso que o tradicional'}
            imgSrc={expressoAmericano}
          />
          <Card
            title={'Expresso Cremoso'}
            desc={'Café expresso tradicional com espuma cremosa'}
            imgSrc={expressoCremoso}
          />
          <Card
            title={'Expresso Gelado'}
            desc={'Bebida preparada com café expresso e cubos de gelo'}
            tag2={'GELADO'}
            imgSrc={expressoGelado}
          />
          <Card
            title={'Café com Leite'}
            desc={'Meio a meio de expresso tradicional com leite vaporizado'}
            tag2={'COM LEITE'}
            imgSrc={cafeComLeite}
          />
          <Card
            title={'Latte'}
            desc={
              'Uma dose de café expresso com o dobro de leite e espuma cremosa'
            }
            tag2={'COM LEITE'}
            imgSrc={latte}
          />
          <Card
            title={'Capuccino'}
            desc={
              'Bebida com canela feita de doses iguais de café, leite e espuma'
            }
            tag2={'COM LEITE'}
            imgSrc={capuccino}
          />
          <Card
            title={'Macchiato'}
            desc={
              'Café expresso misturado com um pouco de leite quente e espuma'
            }
            tag2={'COM LEITE'}
            imgSrc={macchiato}
          />
          <Card
            title={'Mocaccino'}
            desc={'Café expresso com calda de chocolate, pouco leite e espuma'}
            tag2={'COM LEITE'}
            imgSrc={mocaccino}
          />
          <Card
            title={'Chocolate Quente'}
            desc={
              'Bebida feita com chocolate dissolvido no leite quente e café'
            }
            tag1={'ESPECIAL'}
            tag2={'COM LEITE'}
            imgSrc={chocolateQuente}
          />
          <Card
            title={'Cubano'}
            desc={
              'Drink gelado de café expresso com rum, creme de leite e hortelã'
            }
            tag1={'ESPECIAL'}
            tag2={'ALCOÓLICO'}
            tag3={'GELADO'}
            imgSrc={cubano}
          />
          <Card
            title={'Havaiano'}
            desc={'Bebida adocicada preparada com café e leite de coco'}
            tag1={'ESPECIAL'}
            imgSrc={havaiano}
          />
          <Card
            title={'Árabe'}
            desc={'Bebida preparada com grãos de café árabe e especiarias'}
            tag1={'ESPECIAL'}
            imgSrc={arabe}
          />
          <Card
            title={'Irlandês'}
            desc={'Bebida a base de café, uísque irlandês, açúcar e chantilly'}
            tag1={'ESPECIAL'}
            tag2={'ALCOÓLICO'}
            imgSrc={irlandes}
          />
        </div>
      </div>
    </div>
  )
}
