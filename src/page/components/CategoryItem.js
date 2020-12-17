/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const CategoryItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const CategoryItem = ({ category }) => {
  const { ctgryNo, ctgryEngNm, ctgryKorNm } = category;
  return (
    <CategoryItemBlock>
      <div className="thumbnail">
        <img src={logo} />
      </div>
      <div className="contents">
        <h2>{ctgryNo}</h2>
        <br />
        <Link to={'/' + ctgryEngNm}>{ctgryKorNm}</Link>
      </div>
    </CategoryItemBlock>
  );
};

export default CategoryItem;
