import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../../Style/Main.scss';

const SectionTwo = () => {
 return (
  <div className="sectionTwo">
   <div className="section-title text-center">
    <h2 className='title-text'>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h2>
   </div>

   <div className='section-cards p-0 m-0 container-full row justify-center justify-content-center'>
    <Row>
     <Col>
      <Card className='sectionTow-card shadow rounded-3     border-0 text-center'>
       <Card.Body>
        <Card.Subtitle className='card-subtitle fw-bold py-3'>Lorem ipsum dolor sit .</Card.Subtitle>
        <Card.Text className='card-text'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo
         est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse
         varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin
         mattis eu sagittisnunc. In hac habitasse.
        </Card.Text>
       </Card.Body>
      </Card>
     </Col>
     <Col>
      <Card className='sectionTow-card shadow rounded-3     border-0 text-center'>
       <Card.Body>
        <Card.Subtitle className='card-subtitle fw-bold py-3'>Lorem ipsum dolor sit .</Card.Subtitle>
        <Card.Text className='card-text'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo
         est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse
         varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin
         mattis eu sagittisnunc. In hac habitasse.
        </Card.Text>
       </Card.Body>
      </Card>
     </Col>
     <Col>
      <Card className='sectionTow-card shadow rounded-3     border-0 text-center'>
       <Card.Body>
        <Card.Subtitle className='card-subtitle fw-bold py-3'>Lorem ipsum dolor sit .</Card.Subtitle>
        <Card.Text className='card-text'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo
         est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse
         varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin
         mattis eu sagittisnunc. In hac habitasse.
        </Card.Text>
       </Card.Body>
      </Card>
     </Col>
    </Row>
   </div>
  </div>
 );
};

export default SectionTwo;