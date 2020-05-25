import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../App.scss";
import ModalPopup from "./ModalPopup";
import Giphy from "../Giphy/Giphy";
import ImgComponent from "../Giphy/ImgComponent";

const CustomHeart = ({handleOpen}) => (
  <span onClick={handleOpen}>
    <b>G</b>
  </span>
);

function insertHeart() {
  // console.log(this.quillRef, this.quill)
  // const cursorPosition = this.quill.getSelection().index;
//   this.quill.insertText(cursorPosition, "♥");
//   this.quill.setSelection(cursorPosition + 1);
}

/*
 * Custom toolbar component including the custom heart button and dropdowns
 */
const CustomToolbar = ({handleOpen}) => (
  <div id="toolbar">
    <select className="ql-font">
      <option value="arial" selected>
        Arial
      </option>
      <option value="comic-sans">Comic Sans</option>
      <option value="courier-new">Courier New</option>
      <option value="georgia">Georgia</option>
      <option value="helvetica">Helvetica</option>
      <option value="lucida">Lucida</option>
    </select>
    <select className="ql-size">
      <option value="extra-small">Size 1</option>
      <option value="small">Size 2</option>
      <option value="medium" selected>
        Size 3
      </option>
      <option value="large">Size 4</option>
    </select>
    <select className="ql-align" />
    <select className="ql-color" />
    <select className="ql-background" />
    <button className="ql-clean" />
    <button className="ql-insertHeart">
      <CustomHeart handleOpen={handleOpen}/>
    </button>
  </div>
);

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida",
];
Quill.register(Font, true);

/*
 * Editor component with custom toolbar and content containers
 */
class Editor extends React.Component {
  state = { editorHtml: "", showModal: false, modalOpen: false, imagesList:[] };

  handleChange = (html) => {
    this.setState({ editorHtml: html });
  };

  static modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        insertHeart: insertHeart,
      },
    },
  };

  static formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
  ];
  showModalFunc = () => {
      this.setState({showModal:true});
  }
  handleOpen = () => {
      this.setState({modalOpen: true})
  }
  handleClose = () => {
    this.setState({modalOpen: false})
}

imageClick = (value) => {
    const {imagesList, editorHtml }=this.state;
    let imagearry=imagesList;
    let imginsert= `<img src=${value.images.downsized.url} alt="No"/>`
    let presentImg=editorHtml + imginsert;
    imagearry.push(value);
    this.setState({imageValue: value, imagesList: imagearry, modalOpen:false, editorHtml: presentImg})
    insertHeart(value)
}
  render() {
      const {modalOpen, 
        //imagesList
      }=this.state;
    return (
      <>
        <div className="text-editor">
          <CustomToolbar handleOpen={()=>this.handleOpen()} />
          <ReactQuill
          ref={(el) => this.quillRef = el}
            value={this.state.editorHtml}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            modules={Editor.modules}
            formats={Editor.formats}
          />
        </div>
        <ModalPopup modalOpen={modalOpen} handleClose={this.handleClose} handleOpen={this.handleOpen}>
          <Giphy imageClick={this.imageClick }/>
        </ModalPopup>
        {/* <ImgComponent imagesList={imagesList}/> */}
     </>
    );
  }
}

const CustomQuill = () => (
  <div className="custom-toolbar-example">
    <h3>Custom Toolbar with React Quill (Task 2 and Task 3)</h3>
    <Editor placeholder={"Use G Label to add image in below document"} />
  </div>
);
export default CustomQuill;
