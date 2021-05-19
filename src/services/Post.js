import { Card, CardText, CardTitle, Row, Col, Button } from "reactstrap";
import './blog.css';


function Post(props) {
    const { id, title, body } = props.data;

    

    return (
      <div className="post">
          <div className = "p-3 my-2 rounded">
              <Row className='onepost'>
                  <Col sm="6">
                    <Card body className='border border-dark border-ligth rounded '>
                        <small>{id}</small>
                        <CardTitle tag="h3" className="title">{title}</CardTitle>
                        <CardText>{body}</CardText>
                        <Button href="/" className="link">Read More</Button>
                    </Card>
                  </Col>
              </Row>
          </div>
        
      </div>
    );
  }

  export default Post;