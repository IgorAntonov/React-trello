/* eslint-disable import/no-extraneous-dependencies */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// eslint-disable-next-line
import 'regenerator-runtime/runtime';

Enzyme.configure({ adapter: new Adapter() });
