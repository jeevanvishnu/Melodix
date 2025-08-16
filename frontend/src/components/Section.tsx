import Cards from "./Cards"

const Section = () => {
  return (
    
    <div className="w-full h-screen bg-gray-900">
        <div className="ml-3 overflow-x-auto  snap">
      <div className="flex gap-4 py-4">
        <Cards />
        <Cards />
        <Cards />
      
      </div>
    </div>
      </div>
  )
}

export default Section