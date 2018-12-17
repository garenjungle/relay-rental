import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import OrderWrapper from 'components/list/OrderWrapper';
import OrderContainer from 'containers/list/OrderContainer';

const OrderPage = ({ match }) => {
  // page의 기본값을 1로 설정
  const { page = 1, tag } = match.params;
  return (
    <PageTemplate>
      <OrderWrapper>
        <OrderContainer page={parseInt(page, 10)} tag={tag} />
      </OrderWrapper>
    </PageTemplate>
  );
};

export default OrderPage;
