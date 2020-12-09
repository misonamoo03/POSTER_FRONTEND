import React from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg';

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

const PosterItem = ({ health }) => {
  const { posterNo, posterTitle, posterContent } = health;
  return (
    <PosterItemBlock>
      <div className="contents">
        <h2>{posterNo}</h2>
        <img src={logo} />
        <br />
        <h3>{posterTitle}</h3>
        <p>{posterContent}</p>
      </div>
    </PosterItemBlock>
  );
};

export default PosterItem;
