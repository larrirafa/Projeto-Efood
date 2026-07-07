import { useCart } from '../../contexts/CartContext';
import { TrashIcon } from '../Icons';
import * as S from './styles';

const formatarPreco = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

const CartDrawer = () => {
  const {
    itens,
    removerItem,
    total,
    aberto,
    etapa,
    pedidoId,
    fecharGaveta,
    irParaEtapa,
    finalizarPedido,
    concluirPedido,
  } = useCart();

  if (!aberto) return null;

  const handleEntregaSubmit = (e) => {
    e.preventDefault();
    irParaEtapa('pagamento');
  };

  const handlePagamentoSubmit = (e) => {
    e.preventDefault();
    finalizarPedido();
  };

  return (
    <S.Overlay onClick={fecharGaveta}>
      <S.Drawer onClick={(e) => e.stopPropagation()}>
        {etapa === 'carrinho' && (
          <>
            {itens.length === 0 ? (
              <S.EmptyMessage>
                O carrinho está vazio. Adicione pelo menos um prato para
                continuar.
              </S.EmptyMessage>
            ) : (
              <>
                <S.ItemsList>
                  {itens.map((item) => (
                    <S.Item key={item.itemCartId}>
                      <S.ItemImage src={item.foto} alt={item.nome} />
                      <S.ItemInfo>
                        <S.ItemName>{item.nome}</S.ItemName>
                        <S.ItemPrice>{formatarPreco(item.preco)}</S.ItemPrice>
                      </S.ItemInfo>
                      <S.RemoveButton
                        onClick={() => removerItem(item.itemCartId)}
                        type="button"
                        aria-label="Remover item"
                      >
                        <TrashIcon size={15} />
                      </S.RemoveButton>
                    </S.Item>
                  ))}
                </S.ItemsList>
                <S.TotalRow>
                  <span>Valor total</span>
                  <span>{formatarPreco(total)}</span>
                </S.TotalRow>
                <S.Button
                  type="button"
                  onClick={() => irParaEtapa('entrega')}
                >
                  Continuar com a entrega
                </S.Button>
              </>
            )}
          </>
        )}

        {etapa === 'entrega' && (
          <S.Form onSubmit={handleEntregaSubmit}>
            <S.Title>Entrega</S.Title>
            <S.Label>
              Quem irá receber
              <S.Input required name="receiver" />
            </S.Label>
            <S.Label>
              Endereço
              <S.Input required name="address" />
            </S.Label>
            <S.Label>
              Cidade
              <S.Input required name="city" />
            </S.Label>
            <S.Row>
              <S.Label>
                CEP
                <S.Input required name="zipCode" />
              </S.Label>
              <S.Label>
                Número
                <S.Input required name="number" />
              </S.Label>
            </S.Row>
            <S.Label>
              Complemento (opcional)
              <S.Input name="complement" />
            </S.Label>
            <S.Button type="submit">Continuar com o pagamento</S.Button>
            <S.LinkButton
              type="button"
              onClick={() => irParaEtapa('carrinho')}
            >
              Voltar para o carrinho
            </S.LinkButton>
          </S.Form>
        )}

        {etapa === 'pagamento' && (
          <S.Form onSubmit={handlePagamentoSubmit}>
            <S.Title>Pagamento - Valor a pagar {formatarPreco(total)}</S.Title>
            <S.Label>
              Nome no cartão
              <S.Input required name="cardName" />
            </S.Label>
            <S.Row>
              <S.Label style={{ flex: 2 }}>
                Número do cartão
                <S.Input required name="cardNumber" />
              </S.Label>
              <S.Label style={{ flex: 1 }}>
                CVV
                <S.Input required name="cardCode" />
              </S.Label>
            </S.Row>
            <S.Row>
              <S.Label>
                Mês de vencimento
                <S.Input required name="expiresMonth" />
              </S.Label>
              <S.Label>
                Ano de vencimento
                <S.Input required name="expiresYear" />
              </S.Label>
            </S.Row>
            <S.Button type="submit">Finalizar pagamento</S.Button>
            <S.LinkButton
              type="button"
              onClick={() => irParaEtapa('entrega')}
            >
              Voltar para a edição de endereço
            </S.LinkButton>
          </S.Form>
        )}

        {etapa === 'confirmacao' && (
          <S.ConfirmationBox>
            <S.Title>Pedido realizado - {pedidoId}</S.Title>
            <S.ConfirmationText>
              Estamos felizes em informar que seu pedido já está em processo
              de preparação e, em breve, será entregue no endereço fornecido.
            </S.ConfirmationText>
            <S.ConfirmationText>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </S.ConfirmationText>
            <S.ConfirmationText>
              Lembre-se da importância de higienizar as mãos após o
              recebimento do pedido, garantindo assim sua segurança e
              bem-estar durante a refeição.
            </S.ConfirmationText>
            <S.ConfirmationText>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </S.ConfirmationText>
            <S.Button type="button" onClick={concluirPedido}>
              Concluir
            </S.Button>
          </S.ConfirmationBox>
        )}
      </S.Drawer>
    </S.Overlay>
  );
};

export default CartDrawer;
