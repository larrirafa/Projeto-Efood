import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { restaurants } from '../../data/restaurants';
import DishCard from '../../components/DishCard';
import Modal from '../../components/Modal';
import { useCart } from '../../contexts/CartContext';
import * as S from './styles';

const Restaurant = () => {
  const { id } = useParams();
  const [pratoSelecionado, setPratoSelecionado] = useState(null);
  const { adicionarItem } = useCart();

  const restaurante = restaurants.find((r) => r.id === Number(id));

  if (!restaurante) {
    return <S.NotFound>Restaurante não encontrado.</S.NotFound>;
  }

  const handleAdicionar = (prato) => {
    adicionarItem(prato, restaurante.id);
    setPratoSelecionado(null);
  };

  return (
    <S.PageWrapper>
      <S.Banner>
        <S.BannerImage src={restaurante.capa} alt={restaurante.titulo} />
        <S.BannerOverlay>
          <S.BannerContent>
            <S.RestaurantTag>{restaurante.tipo}</S.RestaurantTag>
            <S.RestaurantTitle>{restaurante.titulo}</S.RestaurantTitle>
          </S.BannerContent>
        </S.BannerOverlay>
      </S.Banner>
      <S.Grid>
        {restaurante.cardapio.map((prato) => (
          <DishCard
            key={prato.id}
            prato={prato}
            onAbrirModal={setPratoSelecionado}
          />
        ))}
      </S.Grid>
      <Modal
        prato={pratoSelecionado}
        onFechar={() => setPratoSelecionado(null)}
        onAdicionar={handleAdicionar}
      />
    </S.PageWrapper>
  );
};

export default Restaurant;
