import styles from './services.module.css'
import ServiceItem from '../ServiceItem/ServiceItem'

interface ServiceItems {
  id: number;
  title: string;
}

const items: ServiceItems[] = [
  {id: 0, title: 'Видео'},
  {id: 1, title: 'Картинки'},
  {id: 2, title: 'Новости'},
  {id: 3, title: 'Карты'},
  {id: 4, title: 'Маркет'},
  {id: 5, title: 'Переводчик'},
  {id: 6, title: 'Эфир'},
  {id: 7, title: 'ещё'},
];

const Services = () => {
  return (
    <div className={styles['services']}>
      {items.map(el => <ServiceItem key={el.id} title={el.title} />)}
    </div>
  )
}

export default Services
