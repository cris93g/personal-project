import React, { Component } from "react";
import Dropzone from "react-dropzone";
import UserCard from "../../shared/UserCard";


class User extends Component {
  constructor() {
    super();
    this.state = { files: [] };
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            {this.state.files.map(f => (
              <div >
              <UserCard f={f}/>
                
              </div>
              
            ))}
          </Dropzone>
        </div>
        
      </div>
    );
  }
}

export default User;
