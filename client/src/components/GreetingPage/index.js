import React from 'react';

import { GreetingHeader } from './GreetingHeader';
import { GreetingMain } from './GreetingMain';
import { GreetingFooter } from './GreetingFooter';
import { Wrapper } from './style';

export const GreetingPage = () => (
  <Wrapper>
    <GreetingHeader />
    <GreetingMain />
    <GreetingFooter />
  </Wrapper>
);
