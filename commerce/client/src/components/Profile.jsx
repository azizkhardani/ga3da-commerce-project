// import React from "react";
// import Image from "react-bootstrap/Image";
// // import Card from 'react-bootstrap/Card'
// import { Container, Row, Col } from "react-bootstrap";

// class Profile extends React.Component {
//   render() {
//     return (
//       <div>
//         <Container>
//           <Row>
//             <Col xs={3} md={2}>
//               <Image
//                 src="https://banner2.cleanpng.com/20180615/zgt/kisspng-bootstrap-logo-css3-butta-5b2353942780f2.0412430015290418121618.jpg"
//                 roundedCircle
//                 width={100}
//                 height={120}
//                 alt="100x90"
//               />
//             </Col>
//           </Row>
//           <h4>Name : </h4>
//         </Container>
//         <div>
//             {
//                 this.props.data.map((item,i)=>(
//           <Card style={{ width: "18rem" }} key={i}>
//             <Card.Img variant="top" src={item.imageUrl} />
//             <Card.Body>
//               <Card.Title>{item.itemName}</Card.Title>
//               <Card.Text>
//                 {item.itemDescription}
//               </Card.Text>
//               <Card.Text>
//                 {item.quantity}
//               </Card.Text>
//               <Card.Text>
//                 {item.price}
//               </Card.Text>
//               {/* <Button variant="primary">Go somewhere</Button> */}
//             </Card.Body>
//           </Card>
//             ))
//         }
//         </div>
//       </div>
//     );
//   }
// }

// export default Profile;
