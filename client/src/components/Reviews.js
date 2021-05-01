import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import api from "../utils/api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Reviews() {
  const [reviews, setReviews] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadReviews()
  }, [])

  function loadReviews() {
    api.getReviews()
      .then(res => 
        setReviews(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteReview(id) {
    api.deleteReview(id)
      .then(res => loadReviews())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.company_name && formObject.description) {
      api.saveReview({
        name: formObject.name,
        company_name: formObject.company_name,
        job_role: formObject.job_role,
        location: formObject.location,
        description: formObject.description
      })
        .then(res => loadReviews())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add your review here</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Enter your name or alias here (required)"
              />
              <Input
                onChange={handleInputChange}
                name="company_name"
                placeholder="Enter name of company here (required)"
              />
              <Input
                onChange={handleInputChange}
                name="job_role"
                placeholder="Enter your poisition here"
              />
              <Input
                onChange={handleInputChange}
                name="location"
                placeholder="What city is the office located at?"
              />
              <TextArea
                onChange={handleInputChange}
                name="description"
                placeholder="How was it like working at the company?"
              />
              <FormBtn
                disabled={!(formObject.name && formObject.company_name)}
                onClick={handleFormSubmit}
              >
                Submit Review
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Reviews</h1>
            </Jumbotron>
            {reviews.length ? (
              <List>
                {reviews.map(review => (
                  <ListItem key={review._id}>
                      <div>
                        <h2>Company name: {review.company_name}</h2>
                        <h3>Username: {review.name}</h3>
                        <h4>Job Role: {review.job_role}</h4>
                        <h5>Location: {review.location}</h5>
                        <p>Review: {review.description}</p>
                      </div>
                    <DeleteBtn onClick={() => deleteReview(review._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Reviews;
