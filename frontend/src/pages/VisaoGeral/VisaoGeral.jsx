import $ from './VisaoGeral.module.scss'

// Dependências:
import { Link, useLoaderData } from 'react-router-dom';

// Componentes:
import Card from 'components/Card/Card'
import Text from 'components/Text/Text';
import HeadedCard from 'src/components/HeadedCard/HeadedCard';

const ReservasTitle = () => {
  return (
    <Text type='Title2' color='white' fontFamily='black'>
      Reservas
    </Text>
  );
}

export default function VisaoGeral() {
  const { acomodacoes } = useLoaderData()

  return (
    <div className={$.page_grid}>
      <Card orientation='horizontal' style={{ 
        width: '30rem',
        height: '12.5rem'
      }}>
        <section>
          <Text type='Title1' fontFamily='black'>
            Acomodações
          </Text>
          <Text>
            Aqui consta a quantidade de acomodações disponíveis 
            para hospedagem atualmente.
          </Text>
          <hgroup className={$.inline_text}>
            <Text type='GiantText' fontFamily='black'>
              {acomodacoes.livre}
            </Text>
            <Text type='Subtitle'>
              de {acomodacoes.total}
            </Text>
          </hgroup>
        </section>
        <section className={$.block_group}>
          <div className={$.block_s1} />
          <div className={$.block_s2} />
        </section>
      </Card>
      <Card orientation='horizontal' style={{ 
        width: '30rem',
        height: '12.5rem'
      }}>
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
      <HeadedCard 
        cardStyle={{ width: '20rem', height: 'fit-content' }}
        title={<ReservasTitle />}>
        <ul className={$.reserves}>
          <li className={$.reserves_by_type}>
            <Text type='Title2'>Totais:</Text>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Text type='Title1'>100</Text>
              <div className={$.block_mini_blue} />
            </div>
          </li>
          <hr className={$.hr} />

          <li className={$.reserves_by_type}>
            <Text type='Title2'>Confirmadas:</Text>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Text type='Title1'>100</Text>
              <div className={$.block_mini_green} />
            </div>
          </li>
          <hr className={$.hr} />

          <li className={$.reserves_by_type}>
            <Text type='Title2'>Pendentes:</Text>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Text type='Title1'>100</Text>
              <div className={$.block_mini_yellow} />
            </div>
          </li>
          <hr className={$.hr} />

          <li className={$.reserves_by_type}>
            <Text type='Title2'>Canceladas:</Text>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Text type='Title1'>100</Text>
              <div className={$.block_mini_red} />
            </div>
          </li>
        </ul>
      </HeadedCard>
    </div>
  )
}