import { FC } from 'react'
import Button from '../Button/Button';

const Sidebar: FC = () => {
  return (
    <div>
      <h2>Сортировка</h2>
      <Button>по городу</Button>
      <Button>по компании</Button>
    </div>
  )
}

export default Sidebar;