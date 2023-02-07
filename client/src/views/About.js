import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const About = () => {
	return (
		<>
			<Row className='mt-5' style={{ marginRight: 0 }}>
				<Col className='text-center'>
					<Button
						variant='primary'
						href='https://www.facebook.com/nson46/'
						size='lg'
					>
					<FontAwesomeIcon icon={faFacebook} style={{marginRight:"10px"}}/>
						Contact me via facebook
					</Button>
				</Col>
			</Row>
			<Row className='mt-2' style={{ marginRight: 0 }}>
				<Col className='text-center'>
					OR
				</Col>
			</Row>
			<Row className='mt-2' style={{ marginRight: 0 }}>
				<Col className='text-center'>
				<Button
						variant='secondary'
						href='https://github.com/NguyenSon0406'
						size='lg'
					>
					<FontAwesomeIcon icon={faGithub} style={{marginRight:"10px"}}/>
						Visit to my github
					</Button>
				</Col>
			</Row>
		</>
	)
}

export default About
