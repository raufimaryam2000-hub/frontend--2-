export default function Pokemon({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>Typer: {data.types.map((t) => t.type.name).join(", ")}</p>
      <p>Vikt: {data.weight}</p>
      <p>Längd: {data.height}</p>
    </div>
  );
} 