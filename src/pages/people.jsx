import { useEffect, useState } from 'react'

function People() {
  const [people, setPeople] = useState()

  useEffect(() => {
    async function fetchData() {
      const response = await (await fetch(`${process.env.REACT_APP_API}people`)).json()
      setPeople(response.results)
    }

    if (!people) {
      fetchData()
    }
  })

  return (
    <div>
      <h1>People</h1>
      {people ? <ol>{people.map(person => <li>{person.name}</li>)}</ol> : <div>Loading...</div>}
    </div>
  )
}

export default People
