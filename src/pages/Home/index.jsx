import { restaurants } from '../../data/restaurants';
import RestaurantCard from '../../components/RestaurantCard';
import * as S from './styles';

const Home = () => (
  <>
    <S.Grid>
      {restaurants.map((restaurante) => (
        <RestaurantCard key={restaurante.id} restaurante={restaurante} />
      ))}
    </S.Grid>
  </>
);

export default Home;
