import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import CategoryWrapper from 'components/list/CategoryWrapper';
import CategoryContainer from 'containers/list/CategoryContainer';

const MainPage = ({ match }) => {
  // page의 기본값을 1로 설정
  // const { page = 1, tag } = match.params;
  return (
    <PageTemplate>
      <CategoryWrapper>
        <CategoryContainer/>
      </CategoryWrapper>
    </PageTemplate>
  );
};

export default MainPage;
