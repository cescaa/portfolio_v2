export default function LandingList({ title, listData = [] }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="space-y-2">
        {listData.map((elem, i) => {
          return (
            <li key={i} className="text-2xl font-secondary xl:text-4xl">
              {elem}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
