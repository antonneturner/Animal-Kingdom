import Axios from "axios";
import React from "react"
import { render } from "react-dom";
import Continents from'../components/Continents/Continents'

class home extends React.Component {

    state= {
      title: '',
      body: '',
      posts: []
    };
  
      componentDidMount = () => {
        this.getAnimal();
      };
  
    getAnimal = () => {
      Axios.get('/api/animals')
      .then((response) =>{
        const animal= response.data;
        this.setState({ posts: animal});
        console.log("data has been recieved");
        console.log(response)
      })
      .catch(() => {
        alert("error retrieving data")
      })
    };
  
  
    displayAnimal = (posts) => {
  
      if (!posts.length) return null;
      
      return posts.map((post, index) => (
        <div key={index} className="animal-display">
          <h3>{post.title}</h3>
           <p>{post.type}</p>
          <p>{post.synopsis}</p>
          <p>{post.continent}</p> 
        </div>
      ));
    };
  
  
    render() {
  
      console.log('state', this.state)
    return (
      <div className="App">
            <Continents />
            
            <div className= "animals">
              {this.displayAnimal(this.state.posts)}
            </div>
  
            
      </div>
    );
    }
  }
  
  export default home;
  