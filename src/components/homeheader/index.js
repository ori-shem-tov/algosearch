import React from 'react';
import './index.css';
import algorand from './algorand.svg';
import { algodurl } from '../../constants';

export default class HomeHeader extends React.Component {
	constructor() {
		super();

		this.state = {
			synced: false,
		};
	}
	render() {
		return (
			<div className="home-search">
				<div className="sizer">
					<div>
						<h1><img src={algorand} alt="Algorand logo"/>Block Explorer</h1>
						<span>Open-source block explorer for the Algorand mainnet. Currently
							<div className="home-status">
								<div className={`status-light ${this.props.synced ? "status-online" : "status-offline"}`} /> {this.props.synced ? "in sync" : "out of sync"}
							</div> with the network <a href={algodurl}>{this.props.genesisId}</a>
						</span>
					</div>
					<div>
					</div>
				</div>
			</div>
		)
	}
}
