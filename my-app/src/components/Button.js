import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setNewDate } from './../redux/actionCreators';
import moment from "moment";

export class Button extends Component {

    constructor(props) {
        super(props);
        this.changeWeek = this.changeWeek.bind(this)
    }

    changeWeek(){
        let date = this.props.firstDateInRange;
        let endWeek = moment(date).endOf("isoWeek");
        endWeek = moment(endWeek).add(1, "days");
        this.props.setNewDate(endWeek);
    }

    render() {
        return (
            <div>
                <button type="button" value="next" onClick={this.changeWeek}>NEXT</button>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
      firstDateInRange : state.firstDateInRange
    }
  )
  
  const mapDispatchToProps = dispatch => ({
      setNewDate(date){
         dispatch(setNewDate(date))
      }
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
