import type { NextPage } from 'next'
import Lista from '../components/Lista'
import Item from '../components/Item'

const Home: NextPage = () => {
  return (
    <div>
      <Lista>
        <Item>
          Emanuelle
        </Item>
        <Item>
          Erica
        </Item>
        <Item>
          Matheus
        </Item>
      </Lista>
    </div>
  )
}

export default Home
