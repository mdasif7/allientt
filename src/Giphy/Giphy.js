import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";
import Axios from "axios";
import ImgComponent from "./ImgComponent";
import "react-quill/dist/quill.snow.css";

export default class Giphy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      imagesList: [],
      limit: 18,
      count: 1,
      quillText:'',
     
    };
  }

  onSearchChange = value => {
    this.setState({ searchValue: value });
  };
  submitSearch = (val) => {
    const { searchValue, limit } = this.state;
    console.log(limit);
    let pagelimit=limit;
    if(!(val==="load")){
      this.setState({imagesList:{}, limit: 18, count:1})
      pagelimit=18;
    }
    let url = "https://api.giphy.com/v1/gifs/search?";
    Axios.get(
      `${url}q=${searchValue}&api_key=FBlz9tSvI7fI517pqwDxIuRSK5n5AIMq&limit=${pagelimit}`
    ).then(res => {
      console.log(res.data.data);
      this.setState({ imagesList: res.data.data });
    });
  }; 
  LoadMore = () => {
    const { count, limit, imagesList } = this.state;
    let incLimit = limit + 18;
    if(imagesList.length >0){
      this.setState({ limit: incLimit, count: count + 1 }, () => {
        this.submitSearch("load");
      });
    }
    
  };
  reset = () => {
    this.setState({
      imagesList: [],
      searchValue: "",
      count: 1,
      limit: 18,
      quillText:''
    });
  };
//   removeTags = (str) => {
//     if ((str===null) || (str===''))
//     return false;
//     else
//     str = str.toString();
//     return str.replace( /(<([^>]+)>)/ig, '');
//  }
  render() {
    const { imagesList, searchValue, limit } = this.state;
    const {imageClick}=this.props;
    return (
      <div className="main-giphy">
        <div className="search-section">
            <span>Search Value: </span>
          <Input
            className="search-value"
            onChange={e => this.onSearchChange(e.target.value)}
            value={searchValue}
          />
          <div className="button-section">
            <Button onClick={() => this.submitSearch('submit')}>Submit</Button>
            <Button onClick={() => this.LoadMore()}>LoadMore </Button>
            <Button onClick={() => this.reset()}>Reset</Button>
          </div>
        </div>
        <p>Page Display Limit: {limit} </p>
        <ImgComponent imagesList={imagesList} imageClick={  imageClick }/>
      </div>
    );
  }
}
Giphy.defaultProps = {
  imageClick: () => {}
  };