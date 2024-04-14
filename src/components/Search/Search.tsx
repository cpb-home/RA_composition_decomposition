import styles from './search.module.css'

const Search = () => {
  return (
    <>
      <div className={styles['search']}>
        <div className={styles['logo']}>
          <img src='https://cons-teh.ru/upload/iblock/4f6/x5xor9it6faocy5g4pu0k62nygnlesfy.png' alt='Логотип' />
        </div>
        <div className={styles['inputCont']}>
          <input name='search' type='search' />
          <button type='button'>Найти</button>
        </div>
      </div>
      <div className={styles['slogan']}>
        Найдётся всё. Например, <span >фаза луны сегодня</span>
      </div>
    </>
  )
}

export default Search
