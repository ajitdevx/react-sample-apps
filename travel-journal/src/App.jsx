import Header from "./components/Header"
import Entry from "./components/Entry"
import data from './data.js'

export default function App() {
  const entries = data.map(item => (
    <Entry key={item.id} item={item} />
  ))

  return (
    <>
      <Header />
      {entries}
    </>
  )
}