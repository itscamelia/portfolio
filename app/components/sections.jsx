import React from 'react';
import ReactDOM from 'react-dom';
import { i18n } from '../helpers/i18n';

export class Sections extends React.Component {
  goTo(link) {
    window.location.assign(link);
  }

  render() {
    const sectionItems = [];
    const minIndex = i18n.menu.length;

    i18n.sections.forEach(({ title, image: image_url, link },
      index
    ) => sectionItems.push(
      <div className="section-block" key={index} onClick={ e => this.goTo(link) } role="button" tabIndex={ minTabIndex + minIndex }>
        <img src={require(`../images/${image_url}`)} />
        <div className="section-overlay" />
        <div className="section-content">{title}</div>
      </div>
    ));

    return <div className="section-container">{ sectionItems }</div>
  }
}
