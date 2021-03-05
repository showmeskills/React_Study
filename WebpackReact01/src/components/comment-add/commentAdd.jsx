import React,{Component} from 'react';
import PropTypes from 'prop-types';
export default class CommentAdd extends Component{

    state={
      username:'',
      content:'',
    }
    static propTypes ={
      addComment:PropTypes.func.isRequired,
    }

    handleSubmit=()=>{
      const comment = this.state;
      this.props.addComment(comment)
      this.setState({
        username:'',
        content:'',
      })
    }
    handleUserName=(event)=>{
      let username = event.target.value;
      this.setState({
        username,
      })
    }
    handleContent=(event)=>{
      let content = event.target.value;
      this.setState({
          content
      })
    }
    render(){
        const {username,content} = this.state;
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username"
                      value={username} onChange={this.handleUserName}
                    />
                  </div>
                  <div className="form-group">
                    <label>the content of comment</label>
                    <textarea className="form-control" rows="6" placeholder="the content of comment"
                    value={content} onChange={this.handleContent}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>submit</button>
                    </div>
                  </div>
                </form>
              </div>
        )
    }
}