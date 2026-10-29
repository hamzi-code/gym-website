import { useState } from "react"
import Card from "./components/Card"

function App() {
  const [selectedId, setSelectedId] = useState(null)

  const cards = [
    {
      id: 1,
     image: "/chest2.jpg",
      title: "Chest Workout",
      category: "Chest",
    },
    {
      id: 2,
      image: "/biceps2.jpg",
      title: "Biceps Workout",
      category: "Arms",
    },
    {
      id: 3,
      image: "/legs2.jpg",
      title: "Leg Workout",
      category: "Legs",
    },
    {
      id: 4,
      image: "/shoulders2.jpg",
      title: "Shoulder Workout",
      category: "Shoulders",
    },
   {
  id: 5,
  image: "/back2.jpg",
  title: "Back Workout",
  category: "Back",
},
    {
      id: 6,
      image: "/cardio2.jpg",
      title: "Cardio Training",
      category: "Cardio",
    },
    {
      id: 7,
      image: "fullbody2.jpg",
      title: "Full Body Workout",
      category: "Full Body",
    },
    {
      id: 8,
      image: "abs2.jpg",
      title: "Abs Workout",
      category: "Abs",
    },
  ]

  const handleSelect = (id) => {
    setSelectedId(id)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <h1 className="text-4xl font-bold text-center mb-10">
        Gym Workouts
      </h1>

      {selectedId && (
        <p className="text-center mb-6 font-semibold">
          You selected workout {selectedId}
        </p>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            category={card.category}
            onSelect={handleSelect}
          />
        ))}

      </div>
    </div>
  )
}

export default App