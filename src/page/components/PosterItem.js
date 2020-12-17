import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const PosterItemBlock = styled.div`
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

const PosterItem = ({ poster }) => {
  const { posterNo, posterTitle, posterContent, posterTypeNm } = poster;
  return (
    <PosterItemBlock>
      <div className="contents">
        <Link to={'/detail/' + posterTypeNm + '/' + posterNo}>
          <h2>{posterNo}</h2>
        </Link>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={logo} />
        <br />
        <h3>{posterTitle}</h3>
        <p>{posterContent}</p>
      </div>
    </PosterItemBlock>
  );
};

export default PosterItem;
