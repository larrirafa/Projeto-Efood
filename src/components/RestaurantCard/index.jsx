import { Link } from 'react-router-dom';
import * as S from './styles';

const RestaurantCard = ({ restaurante }) => (
  <S.Card>
    <S.ImageWrapper>
      <S.Image src={restaurante.capa} alt={restaurante.titulo} />
      <S.Tag>{restaurante.tipo}</S.Tag>
      <S.Rating>{restaurante.avaliacao} ⭐</S.Rating>
    </S.ImageWrapper>
    <S.Content>
      <S.Title>{restaurante.titulo}</S.Title>
      <S.Description>{restaurante.descricao}</S.Description>
      <Link to={`/restaurante/${restaurante.id}`}>
        <S.Button>Saiba mais</S.Button>
      </Link>
    </S.Content>
  </S.Card>
);

export default RestaurantCard;
