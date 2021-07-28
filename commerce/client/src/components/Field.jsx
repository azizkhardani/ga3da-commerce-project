import React from 'react';
import axios from 'axios';
// import Profile from './Profile.jsx';

export default class Field  extends React.Component {
  constructor(props){
      super(props)
      this.state={
          name:"",
          email:"",
          image:"",
          user: this.props.user
      }
      this.handleChangeName = this.handleChangeName.bind(this)
      this.handleChangeEmail = this.handleChangeEmail.bind(this)
      this.handleChangeImage = this.handleChangeImage.bind(this)
      this.userAdd = this.userAdd.bind(this)
  }
// componentWillUnmount(){
//     this.userAdd()
// }
handleChangeName(e){
      this.setState({
        name: e.target.value
      })
  }
  handleChangeEmail(e){
    this.setState({
        email: e.target.value
    })
}
handleChangeImage(e){
    this.setState({
        image: e.target.value
    })
}

userAdd(){
axios.post('/api/user', this.state)
.then((res)=>{
    this.setState({
        user: res.data
    },
    console.log('-----------field',res.data)
    
    )

})
.then(()=>{
    this.props.changeView('profil')
})


}

    render(){
        return(
            <div>
                 Name : <input type="text" onChange={(e)=>this.handleChangeName(e)} />
                Email : <input type="text" onChange={(e)=>this.handleChangeEmail(e)}/>
                Your Image : <input type="text" onChange={(e)=>this.handleChangeImage(e)}/>
                <button onClick={()=>this.userAdd()}>JOIN</button>
            </div>
        )
    }


}