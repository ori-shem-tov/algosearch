import React from 'react';
import './index.css';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Load extends React.Component {
	render() {
		return (
			<Loader
				type="ThreeDots"
				color="#6984aa"
				className="loader"
				height={7}
			/>
		);
	}
}
