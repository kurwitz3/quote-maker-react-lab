import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content:"",
    author: ''
  }

  handleOnChange = event => {
    this.setState({
      content: event.target.value,
      author: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addQuote(this.state)
    this.setState({
      content:'',
      author:''
    })
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={event => this.handleOnSubmit(event)} className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control" name="content" type='text'  onChange={event => this.handleOnChange(event)}
                       value={this.state.content}
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        name="author"
                        type="text"
                        onChange={event => this.handleOnChange(event)}
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
return {quotes: state.quotes}
}



//add arguments to connect as needed
export default connect(mapStateToProps,{addQuote})(QuoteForm);
