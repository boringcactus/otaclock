import {
	getDayImage,
	processTime
} from '../lib/clock';
import ClockActions from '../actions/Clock';
import moment from 'moment';

class ClockServices {
	getTime() {
		return (dispatch) => {
			const date = moment().date();
			const day = moment().day();
			const hours = moment().hours();
			const minutes = moment().minutes();
			const month = moment().month() + 1;
			const seconds = moment().seconds();

			dispatch(ClockActions.receiveDate(processTime(date)));
			dispatch(ClockActions.receiveDay(getDayImage(day)));
			dispatch(ClockActions.receiveHours(processTime(hours)));
			dispatch(ClockActions.receiveMinutes(processTime(minutes)));
			dispatch(ClockActions.receiveMonth(processTime(month, false)));
			dispatch(ClockActions.receiveSeconds(processTime(seconds)));

			if (seconds % 2 === 0) {
				dispatch(ClockActions.hideSeparators());
			}
			else {
				dispatch(ClockActions.showSeparators());
			}
		};
	}
}

export default new ClockServices();