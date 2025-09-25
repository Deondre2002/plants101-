export default function PlantList({ plants, addPlant }) {
  return (
    <div className="plant-List">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <button onClick={() => addPlant(plant)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
