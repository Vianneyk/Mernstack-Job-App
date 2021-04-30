import React from 'react';
import axios from 'axios';


// import './App.css';

// name: { type: String, required: true },
// 	company_name: { type: String, required: true },
// 	job_role: { type: String, required: true },
// 	location: { type: String, required: true },
// 	description: { type: String, required: true },

class App extends React.Component {

  state = {
    name: '',
    company_name: '',
    job_role: '',
    location: '',
    description: '',
    reviews: []
  };

  componentDidMount = () => {
    this.getReview();
  };


  getReview = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ reviews: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
      company_name: this.state.company_name,
      job_role: this.state.job_role,
      location: this.state.location,
      description: this.state.description,
    };


    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getReview();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      name: '',
      company_name: '',
      job_role: '',
      location: '',
      description: '',
    });
  };

  displayReview = (reviews) => {

    if (!reviews.length) return null;


    return reviews.map((review, index) => (
      <div key={index} className="reviews__display">
        <h3>{review.company_name}</h3>
        <h4>{review.name}</h4>
        <h5>{review.job_role}</h5>
        <h6>{review.location}</h6>
        <p>{review.description}</p>
      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div className="app">
        <h2>Welcome to the best app ever</h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input 
              type="text"
              name="name"
              placeholder="Enter your name or alias"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input
              placeholder="Enter the company name here"
              type= "text"
              name="body"
              cols="30"
              rows="10"
              value={this.state.company_name}
              onChange={this.handleChange}
            >  
            </input>
          </div>

          <div className="form-input">
            <input
              placeholder="Enter job role here"
              name="body"
              cols="30"
              rows="10"
              value={this.state.job_role}
              onChange={this.handleChange}
            >  
            </input>
          </div>
          <div className="form-input">
            <input
              placeholder="What city is the office located in?"
              name="body"
              cols="30"
              rows="10"
              value={this.state.location}
              onChange={this.handleChange}
            >  
            </input>
          </div>

          <div className="form-input">
            <input
              placeholder="Enter review here ..."
              name="body"
              cols="30"
              rows="10"
              value={this.state.description}
              onChange={this.handleChange}
            >  
            </input>
          </div>

          <button>Submit</button>
        </form>

        <div className="blog-">
          {this.displayReview(this.state.reviews)}
        </div>
      </div>
    );
  }
}


export default App;