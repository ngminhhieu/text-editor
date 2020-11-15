import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import CKEditor from 'ckeditor4-react';
CKEditor.editorUrl = 'https://cdn.ckeditor.com/4.15.1/full-all/ckeditor.js';

class TwoWayBinding extends Component {
  constructor( props ) {
      super( props );

      this.state = {
        image: '',
        title: '',
        desc: '',
        content: '<p>React is really <em>nice</em>!</p>'
      }

      this.onEditorChange = this.onEditorChange.bind( this );
  }

  changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

  onEditorChange( evt ) {
      this.setState( {
          data: evt.editor.getData()
      } );
  }

  submitHandler = e => {
		e.preventDefault()
    console.log(this.state)
		axios
			.post('https://localhost:8000/api/v1/articles', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

  
  render() {
    // const { conver_image_url, title, desc } = this.state
    return (
      <div className="home">
        <div className="editor">
            <CKEditor
                data={this.state.data}
                onChange={this.onEditorChange} />
              <EditorPreview data={this.state.data} />
        </div>

        <form onSubmit={this.submitHandler}>
          <div>
          <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="desc"
              value={this.state.desc}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>

      </div>
        
    );
  }
}

class EditorPreview extends Component {
  render() {
      return (
          <div className="editor-preview">
              <h2>Rendered content</h2>
              <div dangerouslySetInnerHTML={ { __html: this.props.data } }></div>
          </div>
      );
  }
}

EditorPreview.defaultProps = {
  data: ''
};

EditorPreview.propTypes = {
  data: PropTypes.string
};

export default TwoWayBinding;