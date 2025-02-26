import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map(item => {
    return (
      <Card key={item.id}
        coverImg={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        price={item.price}
        title={item.title} />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="card--list">
        {cards}
      </section>

    </>
  )
}

export default App;