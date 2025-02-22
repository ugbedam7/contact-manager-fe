import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaUsers,
  FaSync,
  FaClock,
  FaLock,
  FaMobileAlt,
  FaSearch
} from "react-icons/fa";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }
};

const PlatformFeatures = () => {
  return (
    <Element name="features">
      <Container className="my-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <h2 className="text-center mb-4">Platform Features</h2>

          <p
            className="text-center fs-5 text-muted mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Our platform is built with advanced features to help you stay
            organized, automate workflows, and access your contacts securely
            from anywhere.
          </p>
        </motion.div>

        <Row className="gy-4">
          {[
            {
              icon: <FaSync />,
              title: "Smart Contact Importing",
              desc: "Sync from multiple sources easily."
            },
            {
              icon: <FaSearch />,
              title: "Advanced Search",
              desc: "Find contacts with powerful filters."
            },
            {
              icon: <FaClock />,
              title: "Automated Follow-Ups",
              desc: "Never miss a conversation."
            },
            {
              icon: <FaUsers />,
              title: "Activity Timeline",
              desc: "Track past interactions at a glance."
            },
            {
              icon: <FaLock />,
              title: "Enterprise-Grade Security",
              desc: "End-to-end encrypted data."
            },
            {
              icon: <FaMobileAlt />,
              title: "Multi-Device Access",
              desc: "Use across desktop, tablet, and mobile."
            }
          ].map((item, idx) => (
            <Col md={6} lg={4} key={idx}>
              <Card className="shadow-sm text-center border-0 p-3 bg-light hover-scale">
                <div className="fs-3" style={{ color: "#3b82f6" }}>
                  {item.icon}
                </div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Element>
  );
};

export default PlatformFeatures;
