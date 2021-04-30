const DB = {
    saveReview: review => {
        return fetch("/api/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(review)
        })
      }
}

export default DB;