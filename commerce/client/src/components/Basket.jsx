import React from 'react';


const Basket =(props)=>{


    return(
        <div>
            {/* {console.log(props.basket)} */}
            {
                props.basket.map((elm,i)=>(
                    <div key={i}>
                        <h4>
                            {elm.itemName}
                        </h4>
                        <img
                           src= {elm.imageUrl}
                        />
                        <h4>{elm.price}</h4>
                    </div>
                ))
            }
        </div>
    )
}


export default Basket;









































// import React from 'react';
// import axios from 'axios';
// // import Card from 'react-bootstrap/Card'


// export default class Basket extends React.Component {
// constructor(){
//     super()
//    this.delete = this.delete.bind(this) 
// }

// delete(id){
// axios.delete(`/delete/${id}`)
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })
// }

//     render(){
//         return(
//             <div>
//                 {
//                     this.props.basket.map((item,i)=>(
//                         <Card style={{ width: "18rem" }} key={i}>
//                         <Card.Img variant="top" src={item.imageUrl} />
//                         <Card.Body>
//                         <Card.Text>
//                             {item.itemName}
//                           </Card.Text>
//                           <Card.Text>
//                             {item.price}
//                           </Card.Text>
//                           <Button variant="primary" onClick={()=>this.delete()}>XXX</Button>
//                         </Card.Body>
//                       </Card>
//                     ))
//                 }
//             </div>
//         )
//     }
// }