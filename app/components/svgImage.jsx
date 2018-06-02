import React from 'react';
import ReactDOM from 'react-dom';

import { svgImport } from '../helpers/svgImport';

export class SvgImage extends React.Component {
  render() {
    return <div
      className={ this.props.className }
      dangerouslySetInnerHTML={{ __html: svgImport(this.props.path) }}
    />
  }
}
