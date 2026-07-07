import { Link } from 'react-router-dom';
import { StarIcon } from '../Icons';
import * as S from './styles';

const RestaurantCard = ({ restaurante }) => (
  <S.Card>
    <S.ImageWrapper>
      <S.Image src={restaurante.capa} alt={restaurante.titulo} />
      <S.Tags>
        {restaurante.destaque && <S.Tag>Destaque da semana</S.Tag>}
        <S.Tag>{restaurante.tipo}</S.Tag>
      </S.Tags>
      <S.Rating>
        {restaurante.avaliacao} <StarIcon size={13} color="#FFB443" />
      </S.Rating>
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
