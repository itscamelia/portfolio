import React from 'react';
import ReactDOM from 'react-dom';
import { i18n } from '../helpers/i18n';

export class Menu extends React.Component {
  render() {
    const menuItems = [];

    i18n.menu.forEach(({ title, link, target },
      index
    ) => menuItems.push(
      <a className="menu-item" key={index} href={link} target={ target || '_self' }>{title}</a>
    ));

    return <header className="menu-list">{ menuItems }</header>;
  }
}
