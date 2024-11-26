import $ from './VisaoGeral.module.sass'

// Componentes:
import Card from 'components/Card/Card'
import Text from 'components/Text/Text';

const VisaoGeral = () => {
  return (<>
    <Card orientation='horizontal' style={{ width: '25rem' }}>
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
        <div className={$.block_s1}></div>
        <div className={$.block_s2}></div>
      </section>
    </Card>
  </>)
}

export default VisaoGeral;