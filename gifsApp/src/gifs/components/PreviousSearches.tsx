
interface Props {
   title: string;
   subtitle: string;
}
export const PreviousSearches = () => {
  return (
      <div className="previous-searches">
            <h2>Busquedas anteriores:</h2>
            <ul className="previous-searches-list">
                <li>Perros</li>
                <li>Gatos</li>
                <li>Memes</li>
            </ul>
        </div>
  )
}
