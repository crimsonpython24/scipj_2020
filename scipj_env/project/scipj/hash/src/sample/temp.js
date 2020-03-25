import React from 'react';
import ReactDOM from "react-dom";
import PersistentDrawerLeft from "../../../core/src/components/PersistentDrawerLeft";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import jQuery from 'jquery';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {margin: theme.spacing(1),width: 200,},
    paddingTop: 108,
  },
}));


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
      }
    }
  }
  return cookieValue;
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

    let csrftoken = getCookie('csrftoken');

    fetch('/profile/edit/' + username + '/', {
        method: "post",
        credentials: "include",
        headers: new Headers({
          'X-CSRFToken': csrftoken,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Requested-With': 'XMLHttpRequest'
        }),
        body: `nickname=${this.state.value}` 

    }).then(function(response) {
        console.log(response);
        return response;
    }).then(function(data) {
        console.log("Data is ok", data);
    }).catch(function(ex) {
        console.log("parsing failed", ex);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="name-form" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" name="nickname" onChange={this.handleChange}/>
        <button type="submit">Send2</button>
      </form>
    );
  }
}


ReactDOM.render(<div><NameForm/></div>, document.getElementById("app"));

<TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" className={translate_classes.box}
            style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px' }}/>