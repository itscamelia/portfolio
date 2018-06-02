import React from 'react';
import ReactDOM from 'react-dom';
import { i18n } from '../helpers/i18n';
import { SvgImage } from './svgImage';

export class Header extends React.Component {
  render() {
    return <div className="content-header">
      <SvgImage className="logo" path="./octopus_header.svg" />
      <h1>{ i18n.header.title }</h1>
      <div className="content-oneliner">{ i18n.header.desc }</div>
    </div>
  }
}
