import React from 'react';
import moment from 'moment'

export default class Countdown extends React.Component {
  constructor(p, context) {
    super(p, context);
		this.state = {};
		this._unmount = false;
		this._getTimeoutDates = this._getTimeoutDates.bind(this); 
		this.getBetweenDates = this.getBetweenDates.bind(this);
	}
	
	componentDidMount(){
		this._unmount = false;
		this._getTimeoutDates();
	}
	
	_getTimeoutDates(){
		setInterval(this.getBetweenDates, 1000);
	}
	
	getBetweenDates(){
		if(!this._unmount){
			var now  = "13/12/2018 00:00:00";
			var then = moment()
			
			var ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
			var d = moment.duration(ms);
			var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
		
			this.setState({diffDays: d._data})
		}
	}

	componentWillMount(){
		this._unmount = true;
	}
  render() {
		let diffDays = this.state.diffDays;
		if(!diffDays){
			return null;
		}
    return (
      <div className="countdown" center="true">
            <div>
              <h3> {diffDays.days}</h3>
              <p> días</p>
            </div>
            <div>
              <h3> {diffDays.hours}</h3>
              <p> horas</p>
            </div>
            <div>
              <h3> {diffDays.minutes}</h3>
              <p> minutos</p>
            </div>
            <div>
              <h3> {diffDays.seconds}</h3>
              <p className="wordLarge"> segundos</p>
              <p className="wordSmall"> seg</p>
            </div>
      </div>
    );
  }
}
