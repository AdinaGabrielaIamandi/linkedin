import { Col, Container, Row } from "react-bootstrap"
import { NavbarTop } from "../NavbarTop/NavbarTop"
import LeftSection from "./LeftSection/LeftSection"

export const WorkSection = () => {
    return(
        <Container>
            <Row>
                <Col>
                <NavbarTop/>
                <LeftSection/>
                </Col>
            </Row>
        </Container>
    )
}

