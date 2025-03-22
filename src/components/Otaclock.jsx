/* global React */

import 'sass/otaclock.scss';

import Clock from 'components/Clock.jsx';
import ClockActions from 'actions/Clock';
import ClockServices from 'services/Clock';
import { connect } from 'react-redux';
import Otacon from 'components/Otacon.jsx';
import OtaconServices from 'services/Otacon';

const selector = (state) => {
	return {
		clock: state.clockReducer,
		otacon: state.otaconReducer
	};
};

class Otaclock extends React.Component {
	static propTypes = {
		clock: React.PropTypes.object,
		dispatch: React.PropTypes.func,
		otacon: React.PropTypes.object
	};

	getTime = () => {
		const { dispatch } = this.props;

		dispatch(ClockServices.getTime());
	};

	hideSeparators = () => {
		const { dispatch } = this.props;

		dispatch(ClockActions.hideSeparators());
	}

	randomizeEyes = () => {
		const { dispatch } = this.props;

		dispatch(OtaconServices.randomizeEyes());
	};

	showSeparators = () => {
		const { dispatch } = this.props;

		dispatch(ClockActions.showSeparators());
	}

	thumbsUp = () => {
		const { dispatch } = this.props;

		dispatch(OtaconServices.thumbsUp());
	};

	render() {
		const { eyes, thumbsUpPosition } = this.props.otacon;
		const {
			date,
			day,
			hours,
			minutes,
			month,
			seconds,
			separators
		} = this.props.clock;

		return (
			<div id='otaclock'>
				<Clock
					date={ date }
					day={ day }
					getTime={ this.getTime }
					hours={ hours }
					minutes={ minutes }
					month={ month }
					seconds={ seconds }
					separators={ separators } />
				<Otacon
					eyes={ eyes }
					randomizeEyes={ this.randomizeEyes }
					thumbsUpPosition={ thumbsUpPosition }
					thumbsUp={ this.thumbsUp } />
			</div>
		);
	}
}

export default connect(selector)(Otaclock);