import React from 'react';

const BurgerButton = ({ toggle }) => (
  <button
    type="button"
    onClick={toggle}
    className=""
  >
    <span className="sr-only">Toggle navigation</span>
    <span className="{s.b1}" />
    <span className="{s.b2}" />
    <span className="{s.b3}" />
  </button>
);

export default BurgerButton;
