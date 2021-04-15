import React,{Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './index.css';
export default class Main extends Component {

    state = {
        initView:true,
        loading:false,
        users:null,
        errorMessage:null,
    }

    static propTypes = {
        searchName:PropTypes.string.isRequired,
    }
    //当组件接收到新的属性时回调
    componentWillReceiveProps(newProps){ //指定了新的searchName,需要请求
        const {searchName} = newProps;
        //更新状态(请求中)
        this.setState({
            initView:false,
            loading:true,
        })
        //准备发请求
        const url = `https://api.github.com/search/users?q=${searchName}`;
        axios.get(url)
            .then(response=>{
                //得到响应数据
                const result = response.data
                const users = result.items.map(item=> ({
                    name:item.login,
                    url:item.html_url,
                    avatarUrl:item.avatar_url
                }))
                //更新数据
                this.setState({
                    loading:false,
                    users,
                })
            })
            .catch(error=>{
              
                this.setState({
                    loading:false,
                    errorMessage:error.message,
                })
            })
    }
    render(){
        const {initView,loading,users,errorMessage} = this.state;
        if(initView){
            return(
                <h2>请输入关键字搜索</h2>
            )
        }else if(loading){
            return(
                <h2>loading...</h2>
            )
        }else if(errorMessage){
            return(
                <h2>{errorMessage}</h2>
            )
        }else{
            return(
                <div className="row">
                    {
                        users.map((user,index)=>(
                            <div key={index} className="card">
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} style={{width: "100"}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
};
// 箭头函数,如果不想加return可以添加一个小括号,或者单行不加任何括号