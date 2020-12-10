import React, { useEffect, useState } from 'react';
//import Axios from '../../../node_modules/axios/index';
import axios from 'axios';
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

const Bar = () => {
  const [bar, setBar] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/poster/bar');
        setBar(response.data.bar);
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
  if (!bar) {
    return null;
  }

  return (
    <PosterListBlock>
      {bar.map((bar) => (
        <PosterItem key={bar.posterNo} poster={bar} />
      ))}
    </PosterListBlock>
  );
};

export default Bar;
