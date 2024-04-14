import styles from './usefulls.module.css'
import UsefullsItem from '../UsefullsItem/UsefullsItem';

interface UseFulsItemsRows {
  header?: string;
  content?: string;
  subcontent?: string;
  pic?: string;
}

interface UsefullItems {
  id: number;
  titles: string;
  info: UseFulsItemsRows[];
}

const items: UsefullItems[] = [
  {
    id: 0,
    titles: 'Погода',
    info: [{
      pic: 'https://www.clipartsfree.de/images/joomgallery/originals/wetter_28/temperatur_wetter_cliparts_20140814_1470744684.png', content: 'Утром +25, днём +35'
    }]
  },
  {
    id: 1,
    titles: 'Посещаемое',
    info: [
      {header: 'Недвижимость', content: '- о сталинках'},
      {header: 'Маркет', content: '- люстры и светильники'},
      {header: 'Авто.ру', content: '- привод 4х4 до 500 000'},
    ]
  },
  {
    id: 2,
    titles: 'Карта Германии',
    info: [{content: 'Расписания'}],
  },
  {
    id: 3,
    titles: 'Телепрограмма',
    info: [
      {content: '02:00 ТНТ.Best', subcontent: 'ТНТ International'},
      {content: '02:15 Джинглики', subcontent: 'Карусель INT'},
      {content: '02:25 Наедине со всеми', subcontent: 'Первый'},
    ],
  },
  {
    id: 4,
    titles: 'Эфир',
    info: [
      {content: 'Управление, как искусство', subcontent: 'Успех'},
      {content: 'Ночь. Мир в это время', subcontent: 'earthTV'},
      {content: 'Андрей Возн...', subcontent: 'Совершенно секретно'},
    ],
  }
];

const Usefulls = () => {
  return (
    <div className={styles['usefullsCont']}>
      {items.map(e => <UsefullsItem key={e.id} titles={e.titles} info={e.info} />)}
    </div>
  )
}

export default Usefulls
