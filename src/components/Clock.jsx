/* global React, window */

import classnames from 'classnames';

class Clock extends React.Component {
	static propTypes = {
		date: React.PropTypes.array,
		day: React.PropTypes.string,
		getTime: React.PropTypes.func,
		hours: React.PropTypes.array,
		minutes: React.PropTypes.array,
		month: React.PropTypes.array,
		seconds: React.PropTypes.array,
		separators: React.PropTypes.bool
	}

	componentWillMount() {
		const { getTime } = this.props;

		getTime();
	}

	componentDidMount() {
		const {
			getTime
		} = this.props;

		window.setInterval(() => {
			getTime();
		}, 1000);
	}

	render() {
		const {
			date,
			day,
			hours,
			minutes,
			month,
			seconds,
			separators
		} = this.props;
		const separatorClasses = classnames({
			separator: separators
		});

		return (
			<div id='clock'>
				<div id='month'>
					<div className={ 'small-' + (month && month[ 0 ]) }></div>
				</div>

				<div id='date'>
					<div className={ 'small-' + (date && date[ 0 ]) + ' first' }></div>
					<div className={ 'small-' + (date && date[ 1 ]) + ' second' }></div>
				</div>

				<div id='day'>
					<div className={ day }></div>
				</div>

				<div id='hours' className={ separatorClasses }>
					<div className={ (hours && hours[ 0 ]) + ' first' }></div>
					<div className={ (hours && hours[ 1 ]) + ' second' }></div>
				</div>

				<div id='minutes' className={ separatorClasses }>
					<div className={ (minutes && minutes[ 0 ]) + ' first' }></div>
					<div className={ (minutes && minutes[ 1 ]) + ' second' }></div>
				</div>

				<div id='seconds'>
					<div className={ (seconds && seconds[ 0 ]) + ' first'}></div>
					<div className={ (seconds && seconds[ 1 ]) + ' second' }></div>
				</div>
			</div>
		);
	}
}

export default Clock;