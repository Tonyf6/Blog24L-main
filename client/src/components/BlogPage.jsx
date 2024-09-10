import { useState,useEffect } from "react";
import { Container,Row,Col, Image} from "react-bootstrap";
import { getPublishedBlogItems } from "../Services/DataService";

const BlogPage = () => {
    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        getThePubllishedItems();
    }, []);

    const getThePubllishedItems = async () =>
    {
        let publishedItems = await getPublishedBlogItems();
        setBlogItems(publishedItems)
    }
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US'); // This will format the date as M/D/YYYY
    };

    return (
        <>
            <h1 className="text-center">View Post Page</h1>
            <Container className="p-5">
                <Row>
                    <Col>
                        {blogItems.map((item, index) => (
                            <Container key={index}>
                                {

                                    index % 2 == 0 ?
                                    <Row key={index}>
                                    <Col md={6}>
                                        <Row  >
                                            <Col  className="d-flex justify-content-center" md={12}><h2 style={{fontFamily:"Sanserif",borderStyle:"outset",borderRadius:"15px",padding:"15px"}}>{item.title}</h2></Col>
                                            <Col md={12}>
                                                <Row>
                                                    <Col className="d-flex justify-content-center" md={6}>Publisher: {item.publisherName}</Col>
                                                    <Col className="text-center" md={6}>Date: {formatDate(item.date)}</Col>
                                                </Row>
                                            </Col>
                                            <Col  className="d-flex justify-content-center" md={12}><Image style={{borderRadius:"5%"}} src={item.image} width={"100%"} height={"100%"}/></Col>
                                        </Row>

                                    </Col>
                                    <Col className="d-flex justify-content-center align-items-center" md={6}><p style={{fontSize:"26px"}}>"{item.description}"</p></Col>
                                    </Row>
                                    : 
                                    <Row key={index}>
                                    <Col  className="d-flex justify-content-center align-items-center" md={6}><p style={{fontSize:"26px"}}>"{item.description}"</p></Col>
                                    <Col md={6}>
                                        <Row  >
                                            <Col  className="d-flex justify-content-center" md={12}><h2 style={{fontFamily:"Sanserif",borderStyle:"outset",borderRadius:"15px",padding:"15px"}}>{item.title}</h2></Col>
                                            <Col md={12}>
                                                <Row>
                                                    <Col className="d-flex justify-content-center" md={6}>{item.publisherName}</Col>
                                                    <Col className="text-center" md={6}>{formatDate(item.date)}</Col>
                                                </Row>
                                            </Col>
                                            <Col  className="d-flex justify-content-center" md={12}><Image style={{borderRadius:"5%"}} src={item.image} width={"100%"} height={"100%"}/></Col>
                                        </Row>

                                    </Col>
                                </Row>
                                }
                            </Container>
                        ))}
                    </Col>
                </Row>
                </Container>
                </>
    );
}

export default BlogPage