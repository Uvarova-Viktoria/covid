import Head from 'next/head'
import styles from '../styles/Home.module.sass'
import Layout from '../components/Layout/Layout'
import GlobalTable from '../components/GlobalTable/GlobalTable'
import { useEffect, useState } from 'react'
import Map from '../components/Map/Map'
import covidService from '../services/covid.service'

export default function Home({worldData, countries}) {

  const [country, setCountry] = useState(null)
  const [data, setData] = useState(worldData);

  useEffect(() => {
    setData(worldData)
  }, [worldData])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.container}>
          <div className={styles.leftPart}>
            <GlobalTable 
            worldData={data} 
            setCountry={setCountry} 
            country={country}
            countries={countries}/>
          </div>
          <Map />
        </div>
      </Layout>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

Home.getInitialProps = async ctx => {
  const response = await covidService.getSummary();
  const data = await response.data;

  return ({
    worldData: data.Global,
    countries: data.Countries
  })
}



