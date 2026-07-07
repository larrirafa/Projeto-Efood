import * as S from './styles';

const DishCard = ({ prato, onAbrirModal }) => (
  <S.Card>
    <S.Image src={prato.foto} alt={prato.nome} />
    <S.Content>
      <S.Title>{prato.nome}</S.Title>
      <S.Description>{prato.descricao}</S.Description>
      <S.Button onClick={() => onAbrirModal(prato)}>Mais detalhes</S.Button>
    </S.Content>
  </S.Card>
);

export default DishCard;
