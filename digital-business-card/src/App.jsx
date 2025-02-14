import BusinessCard from "./components/BusinessCard";
function App() {
  return (
    <main className="app">
      <div className="d-flex justify-content-center align-items-center gap-5">
        <BusinessCard />
        <BusinessCard />
      </div>
    </main>
  )
}

export default App;