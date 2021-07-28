// import React from 'react';
// import axios from 'axios';
// import Profile from './Profile.jsx';

// export default class Field  extends React.Component {
//   constructor(props){
//       super(props)
//       this.state={
//           firstname:"",
//           lastname:"",
//           image:"",
//           user:this.props.user
//       }
//       this.handleChangeFirst = this.handleChangeFirst.bind(this)
//       this.handleChangeLast = this.handleChangeLast.bind(this)
//       this.handleChangeImage = this.handleChangeImage.bind(this)
//       this.userAdd = this.userAdd.bind(this)
//   }
// // componentWillUnmount(){
// //     this.userAdd()
// // }
//   handleChangeFirst(e){
//       this.setState({
//         firstname: e.target.value
//       })
//   }
//   handleChangeLast(e){
//     this.setState({
//         lastname: e.target.value
//     })
// }
// handleChangeImage(e){
//     this.setState({
//         image: e.target.value
//     })
// }

// userAdd(){
// axios.post('/api/user', this.state)
// .then((res)=>{
//     this.setState({
//         user: res.data
//     })
// })
// .then((res)=>{
//     this.props.changeView('field')
// })


// }

//     render(){
//         return(
//             <div>
//                 First Name : <input type="text" onChange={(e)=>this.handleChangeFirst(e)} />
//                 Last Name : <input type="text" onChange={(e)=>this.handleChangeLast(e)}/>
//                 Your Image : <input type="text" onChange={(e)=>this.handleChangeImage(e)}/>
//                 <button onClick={()=>this.userAdd()}>JOIN</button>
//             </div>
//         )
//     }


// }