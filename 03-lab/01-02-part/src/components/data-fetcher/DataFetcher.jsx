import { useEffect, useState } from 'react'

const fetchData = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ message: 'Data fetched successfully!' })
    }, 2000)
  })
}

export const DataFetcher = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        setIsLoading(true)

        const res = await fetchData()

        setData(res)
        setIsLoading(false)
      } catch (err) {
        setError('Failed to fetch data')
        setIsLoading(false)
        console.error('Error in useEffect:', err)
      }
    }

    fetchDataAsync()
  }, [])

  return (
    <div>
      {data ? (
        <div>
          <h1>Data:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : null}
    </div>
  )
}
