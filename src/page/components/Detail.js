import React from 'react';

const detail = ({ match }) => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다
  const { type, id } = match.params;
  return (
    <div>
      <p>{type}</p>
      <p>{id}</p>
    </div>
  );
};

export default detail;
