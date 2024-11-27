import $ from './VisaoGeral.module.sass'

// Componentes:
import Card from 'components/Card/Card'
import Text from 'components/Text/Text';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button/Button';

const VisaoGeral = () => {
  return (
    <div className={$.page_grid}>
      <Card orientation='horizontal' style={{ width: '30rem' }}>
        <section>
          <Text type='Title1' fontFamily='black'>
            Acomodações
          </Text>
          <Text>
            Aqui consta a quantidade de acomodações disponíveis 
            para hospedagem atualmente.
          </Text>
          <hgroup className={$.inline_text}>
            <Text type='GiantText' fontFamily='black'>06</Text>
            <Text type='Subtitle'>de 06</Text>
          </hgroup>
        </section>
        <section className={$.block_group}>
          <div className={$.block_s1} />
          <div className={$.block_s2} />
        </section>
      </Card>
      <Card orientation='horizontal' style={{ width: '30rem' }}>
        <section className={$.text_wrapper}>
          <div>
            <Text type='Title1' fontFamily='black'>
              Lista de hóspedes
            </Text>
            <Text>
              Aqui é possível visualizar uma lista dos hóspedes e 
              suas informações.
            </Text>
          </div>
          <Link className={$.button} to="/dashboard/hospedes">
            Visualizar
          </Link>
        </section>
        <section className={$.block_group}>
          <div className={$.block_s1} />
          <div className={$.block_s2} />
        </section>
      </Card>
      <Card orientation='vertical' style={{ width: '25rem' }}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Card>
    </div>
  )
}

export default VisaoGeral;