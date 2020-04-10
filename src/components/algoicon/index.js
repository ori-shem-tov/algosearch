import React from 'react';
import './index.css';

import algo from './algo.svg';

export default class AlgoIcon extends React.Component {
	render() {
		return (
			<img src={algo} alt="Algorand icon" className="algo-icon"/>
		);
	}
}
