import styles from './newsAndAdv.module.css'
import Tab from '../Tab/Tab'
import NewsItem from '../NewsItem/NewsItem'

interface ITab {
  title: string
  id: number
}

interface News {
  id: number;
  icon: string;
  content: string;
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

  return (
    <div className={styles['newsAndAdv']}>
      <div className={styles['newsAndAdv__header']}>
        {tabsList.map(el => <Tab key={el.id} title={el.title} />)}
        <div className={styles['date']}></div>
      </div>
      <div className={styles['newsList']}>
        {newsList.map(el => <NewsItem key={el.id} content={el.content} icon={el.icon} />)}
      </div>
      <div className={styles['currencyRate']}>

      </div>
    </div>
  )
}

export default NewsAndAdv
