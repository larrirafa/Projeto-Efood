import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import * as S from './styles';

const formatarPreco = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

const Checkout = () => {
  const { itens, total, limparCarrinho } = useCart();
  const navigate = useNavigate();
  const [etapa, setEtapa] = useState('entrega');
  const [pedidoId, setPedidoId] = useState(null);

  const [entrega, setEntrega] = useState({
    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: '',
  });

  const [pagamento, setPagamento] = useState({
    cardName: '',
    cardNumber: '',
    cardCode: '',
    expiresMonth: '',
    expiresYear: '',
  });

  if (itens.length === 0 && etapa !== 'confirmacao') {
    return (
      <S.Wrapper>
        <S.FormBox as="div">
          <S.Title>Seu carrinho está vazio.</S.Title>
          <S.Button type="button" onClick={() => navigate('/')}>
            Voltar para os restaurantes
          </S.Button>
        </S.FormBox>
      </S.Wrapper>
    );
  }

  const handleEntregaSubmit = (e) => {
    e.preventDefault();
    setEtapa('pagamento');
  };

  const handlePagamentoSubmit = (e) => {
    e.preventDefault();
    setPedidoId(Math.floor(Math.random() * 900000 + 100000));
    limparCarrinho();
    setEtapa('confirmacao');
  };

  if (etapa === 'confirmacao') {
    return (
      <S.Wrapper>
        <S.FormBox as="div">
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
            <S.Button type="button" onClick={() => navigate('/')}>
              Concluir
            </S.Button>
          </S.ConfirmationBox>
        </S.FormBox>
      </S.Wrapper>
    );
  }

  if (etapa === 'pagamento') {
    return (
      <S.Wrapper>
        <S.FormBox onSubmit={handlePagamentoSubmit}>
          <S.Title>
            Pagamento - Valor a pagar {formatarPreco(total)}
          </S.Title>
          <S.Input
            placeholder="Nome no cartão"
            required
            value={pagamento.cardName}
            onChange={(e) =>
              setPagamento({ ...pagamento, cardName: e.target.value })
            }
          />
          <S.Row>
            <S.Input
              placeholder="Número do cartão"
              required
              value={pagamento.cardNumber}
              onChange={(e) =>
                setPagamento({ ...pagamento, cardNumber: e.target.value })
              }
            />
            <S.Input
              placeholder="CVV"
              required
              style={{ maxWidth: 70 }}
              value={pagamento.cardCode}
              onChange={(e) =>
                setPagamento({ ...pagamento, cardCode: e.target.value })
              }
            />
          </S.Row>
          <S.Row>
            <S.Input
              placeholder="Mês de vencimento"
              required
              value={pagamento.expiresMonth}
              onChange={(e) =>
                setPagamento({ ...pagamento, expiresMonth: e.target.value })
              }
            />
            <S.Input
              placeholder="Ano de vencimento"
              required
              value={pagamento.expiresYear}
              onChange={(e) =>
                setPagamento({ ...pagamento, expiresYear: e.target.value })
              }
            />
          </S.Row>
          <S.Button type="submit">Finalizar pagamento</S.Button>
          <S.LinkButton type="button" onClick={() => setEtapa('entrega')}>
            Voltar para a edição de endereço
          </S.LinkButton>
        </S.FormBox>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.FormBox onSubmit={handleEntregaSubmit}>
        <S.Title>Entrega</S.Title>
        <S.Input
          placeholder="Quem irá receber"
          required
          value={entrega.receiver}
          onChange={(e) => setEntrega({ ...entrega, receiver: e.target.value })}
        />
        <S.Input
          placeholder="Endereço"
          required
          value={entrega.address}
          onChange={(e) => setEntrega({ ...entrega, address: e.target.value })}
        />
        <S.Input
          placeholder="Cidade"
          required
          value={entrega.city}
          onChange={(e) => setEntrega({ ...entrega, city: e.target.value })}
        />
        <S.Row>
          <S.Input
            placeholder="CEP"
            required
            value={entrega.zipCode}
            onChange={(e) => setEntrega({ ...entrega, zipCode: e.target.value })}
          />
          <S.Input
            placeholder="Número"
            required
            value={entrega.number}
            onChange={(e) => setEntrega({ ...entrega, number: e.target.value })}
          />
        </S.Row>
        <S.Input
          placeholder="Complemento (opcional)"
          value={entrega.complement}
          onChange={(e) =>
            setEntrega({ ...entrega, complement: e.target.value })
          }
        />
        <S.Button type="submit">Continuar com o pagamento</S.Button>
        <S.LinkButton type="button" onClick={() => navigate(-1)}>
          Voltar para o carrinho
        </S.LinkButton>
      </S.FormBox>
    </S.Wrapper>
  );
};

export default Checkout;
