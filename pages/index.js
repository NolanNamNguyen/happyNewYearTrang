import Head from 'next/head'
import styles from '../styles/Home.module.css'
import RaiseSalary from '../components/RaiseSalary'

export default function Home() {
  const ohHi = 'Trang do you think you gonna have a really good new year?'
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RaiseSalary helloMsg={ohHi} isRender={true} ></RaiseSalary>
    </div>
  )
}
