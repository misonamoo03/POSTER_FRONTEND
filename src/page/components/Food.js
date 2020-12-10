import React, { useEffect, useState } from 'react';
import Axios from '../../../node_modules/axios/index';
import styled from 'styled-components';
import PosterItem from './PosterItem';

const PosterListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Food = () => {
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.get('/api/poster/food');
        setFood(response.data.food);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <PosterListBlock>대기 중...</PosterListBlock>;
  }

  // 아직 item 값이 설정되지 않았을 때
  if (!food) {
    return null;
  }

  return (
    <PosterListBlock>
      {food.map((food) => (
        <PosterItem key={food.posterNo} poster={food} />
      ))}
    </PosterListBlock>
  );
};

export default Food;
