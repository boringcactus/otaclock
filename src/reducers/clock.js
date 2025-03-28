import { CLOCK } from 'constants/CLOCK';
import clockState from 'states/clock';

export default function clockReducer(state = clockState, action) {
	const type = action.type;

	switch (type) {
		case CLOCK.HIDE_SEPARATORS:
			return Object.assign({}, state, {
				separators: false
			});
		case CLOCK.RECEIVE_DATE:
			return Object.assign({}, state, {
				date: action.date
			});
		case CLOCK.RECEIVE_DAY:
			return Object.assign({}, state, {
				day: action.day
			});
		case CLOCK.RECEIVE_HOURS:
			return Object.assign({}, state, {
				hours: action.hours
			});
		case CLOCK.RECEIVE_MINUTES:
			return Object.assign({}, state, {
				minutes: action.minutes
			});
		case CLOCK.RECEIVE_MONTH:
			return Object.assign({}, state, {
				month: action.month
			});
		case CLOCK.RECEIVE_SECONDS:
			return Object.assign({}, state, {
				seconds: action.seconds
			});
		case CLOCK.SHOW_SEPARATORS:
			return Object.assign({}, state, {
				separators: true
			});
		default:
			return state;
	}
}