import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'Components/shared';
import { Wrapper, MenuWrapper } from './style';

export class DropdownMenu extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }
  constructor(props) {
    super(props);
    this.menuRef = createRef();
    this.state = {
      showMenu: false
    };
  }

  showMenu = () => {
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  closeMenu = event => {
    console.log(this.menuRef);
    console.log(event.target);
    if (!this.menuRef.current.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }
  render() {
    const { children } = this.props;
    const { showMenu } = this.state;
    return (
      <Wrapper>
        <Button onClick={this.showMenu}>
          Menu
        </Button>
        {showMenu &&
          <MenuWrapper>
            <div ref={this.menuRef}>
              {children}
            </div>
          </MenuWrapper>
        }
      </Wrapper>
    );
  }
}
