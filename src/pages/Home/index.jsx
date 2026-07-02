import { restaurants } from '../../data/restaurants';
import RestaurantCard from '../../components/RestaurantCard';
import * as S from './styles';

const Home = () => (
  <>
    <S.Hero>
      <S.HeroTitle>
        Viva experiências gastronômicas no conforto da sua casa
      </S.HeroTitle>
    </S.Hero>
    <S.Grid>
      {restaurants.map((restaurante) => (
        <RestaurantCard key={restaurante.id} restaurante={restaurante} />
      ))}
    </S.Grid>
  </>
);

export default Home;
