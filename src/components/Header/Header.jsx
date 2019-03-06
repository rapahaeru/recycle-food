import React from 'react';
import Styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const HeaderStyled = Styled.header`
  background-color: tomato;
  height: 60px;
  padding: 10px 0;
`;

const Header = () => (
  <HeaderStyled>
    <Grid container>
      <Grid item xs={12}>
          Header inicial aqui
      </Grid>
    </Grid>
  </HeaderStyled>
);

export default Header;
