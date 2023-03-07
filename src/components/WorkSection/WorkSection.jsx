import { Col, Container, Row } from "react-bootstrap"
import LeftSection from "./LeftSection/LeftSection"
import CenterSection from "./CenterSection/CenterSection"

export const WorkSection = () => {
    return(
        <Container className="d-flex justify-content-center">
            <Row>
                <Col>
                <LeftSection/>
                </Col>
                <Col>
                <CenterSection/>
                </Col>
            </Row>
        </Container>
    )
}

