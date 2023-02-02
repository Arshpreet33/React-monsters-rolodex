import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster, index) => {
      const { name, email, id } = monster;
      return <Card key={id ?? index} name={name} email={email} id={id} />;
    })}
  </div>
);

export default CardList;
