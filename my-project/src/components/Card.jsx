function Card({ id, image, title, category, onSelect }) {
  return (
    <div
      className="
        bg-white
        rounded-xl
        overflow-hidden
        shadow-md
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-2
      "
    >

      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold text-gray-800">
          {title}
        </h2>

        <p className="text-sm text-blue-600 font-semibold mt-2">
          {category}
        </p>

        <button
          onClick={() => onSelect(id)}
          className="
            mt-4
            bg-blue-600
            text-white
            px-4
            py-2
            rounded-lg
            transition
            hover:bg-blue-700
          "
        >
          Select Workout
        </button>

      </div>

    </div>
  )
}

export default Card