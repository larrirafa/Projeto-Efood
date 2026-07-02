import * as S from './styles';

const Modal = ({ prato, onFechar, onAdicionar }) => {
  if (!prato) return null;

  const formatarPreco = (valor) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);

  return (
    <S.Overlay onClick={onFechar}>
      <S.ModalBox onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onFechar}>x</S.CloseButton>
        <S.Image src={prato.foto} alt={prato.nome} />
        <S.Info>
          <S.Title>{prato.nome}</S.Title>
          <S.Description>{prato.descricao}</S.Description>
          <S.Portion>{prato.porcao}</S.Portion>
          <S.Button onClick={() => onAdicionar(prato)}>
            Adicionar ao carrinho - {formatarPreco(prato.preco)}
          </S.Button>
        </S.Info>
      </S.ModalBox>
    </S.Overlay>
  );
};

export default Modal;
