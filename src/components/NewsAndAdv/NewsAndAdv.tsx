import styles from './newsAndAdv.module.css'
import Tab from '../Tab/Tab'
import NewsItem from '../NewsItem/NewsItem'
import CurrencyItem from '../CurrencyItem/CurrencyItem'
import Adv from '../Adv/Adv'

interface ITab {
  title: string
  id: number
}

interface News {
  id: number;
  icon: string;
  content: string;
}

interface Rates {
  id: number;
  currency: string;
  rate: number;
  changes: string;
}

const NewsAndAdv = () => {
  const tabsList: ITab[] = [
    {id: 0, title: "Сейчас в СМИ"},
    {id: 1, title: "в Германии"},
    {id: 2, title: "Рекомендуем"}
  ];

  const newsList: News[] = [
    {id: 0, content: "Путин упростил получение автомобильных номеров", icon: 'https://cdn.freelance.ru/img/portfolio/pics/00/3F/4D/4148723.jpg?mt=ad1d66ff'},
    {id: 1, content: "Токаев отменил международный форум «Астана» из-за ситуации с паводками", icon: 'https://cdn.freelance.ru/img/portfolio/pics/00/3F/4D/4148723.jpg?mt=ad1d66ff'},
    {id: 2, content: "«Турпомощь» прокомментировала гибель десятков россиян в Анталье", icon: 'https://avatars.mds.yandex.net/i?id=534a84b561383b722ce2b2236679042ba37326b7-12420613-images-thumbs&n=13'},
    {id: 3, content: "Суд закрыл дело Демпартии США против России", icon: 'https://cdn.freelance.ru/img/portfolio/pics/00/3F/4D/4148723.jpg?mt=ad1d66ff'},
    {id: 4, content: "Министр юстиции: авария на фуникулёре в Анталье могла произойти из-за коррозии", icon: 'https://avatars.mds.yandex.net/i?id=534a84b561383b722ce2b2236679042ba37326b7-12420613-images-thumbs&n=13'}
  ];

  const ratesList: Rates[] = [
    {id: 0, currency: "USD MOEX", rate: 93.34, changes: '+0.09'},
    {id: 1, currency: "EUR MOEX", rate: 102.23, changes: '+0.14'},
    {id: 2, currency: "НЕФТЬ", rate: 64.90, changes: '+1.63%'},
  ];

  return (
    <div className={styles['newsAndAdv']}>
      <div className={styles['news']}>
        <div className={styles['newsHeader']}>
          {tabsList.map(el => <Tab key={el.id} title={el.title} />)}
          <div className={styles['date']}>14 апреля, воскресенье 12:04</div>
        </div>
        <div className={styles['newsList']}>
          {newsList.map(el => <NewsItem key={el.id} content={el.content} icon={el.icon} />)}
        </div>
        <div className={styles['currencyRate']}>
          {ratesList.map(el => <CurrencyItem key={el.id} currency={el.currency} rate={el.rate} changes={el.changes} />)}
        </div>
      </div>
      <div className={styles['adv']}>
        <Adv />
      </div>
    </div>
  )
}

export default NewsAndAdv
