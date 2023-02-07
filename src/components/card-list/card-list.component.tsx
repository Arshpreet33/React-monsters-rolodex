import Card from '../card/card.component';
import './card-list.styles.css';
import { Monster } from '../../App';

type CardListProps = {
	monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
	<div className='card-list'>
		{monsters.map((monster, index) => {
			const { name, email, id } = monster;
			return <Card key={id ?? index} monster={monster} />;
		})}
	</div>
);

export default CardList;
