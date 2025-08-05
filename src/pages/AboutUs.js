import React, {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import { Container, Row, Col, Card, Spinner, Image } from 'react-bootstrap';
import { LanguageContext } from '../components/LanguageContext';
import ProfileCard from '../components/ProfileCard';
const AboutUs = props => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { language, translate } = useContext(LanguageContext);
    useEffect(() => {
        // Fetch team data from an API
        // Replace with your actual API endpoint
        const fetchTeamData = async () => {
          try {
            // In a real app, this would be your API endpoint
            // const response = await fetch('https://your-api.com/team');
            // const data = await response.json();
            
            // For demonstration, using mock data
            const mockData = [
              {
                id: 1,
                name: 'Mahom',
                description: `Nakrapas Mahom, born and raised in Bangkok. Enjoy traveling and start solo traveling all around Thailand since 23. The job that gave me the money to travel back then was producing and selling shrimp medicine to private shrimp farms. At first, she used to travel just to relax and see beautiful places, but after a while, that kind of travel didn’t excite her anymore. So, she changed things up and started camping, trekking, and getting into local culture. One time, she even stayed with villagers to experience their daily life—doing everything they did and going everywhere they went. That experience made her feel like she had found a second family. She loved it so much that she kept going back to live that same simple, meaningful life again and again.`,
                photo: require('../resources/img/plcHolder.png'),
                avatarPlaceholder: true
              },
              {
                id: 2,
                name: 'Tangmo',
                description: `I grew up in the eastern coastal region of Thailand. My family are farmers — we grow rice, fruits, vegetables, and raise animals
                mostly for our own living. Life was simple, and nature was a part of our everyday rhythm.
                Since I was a child, I’ve always loved creating things. I used durian shells to make crafts, drew mangosteens on the wall, and
                freely created with whatever nature offered. My parents supported me in quiet, gentle ways. On holidays, they took my sister
                and me to explore different parts of Thailand, which gave me a sense of curiosity and connection.
                As the world grows more developed, I feel that simple living becomes harder to reach. But growing up that way taught me
                how to rely on myself and stay close to nature. That way of life still lives in me — it’s something I try to carry forward.
                Later, I studied Art Education at university. It was a joyful time — I enjoyed the freedom, met new friends, joined art activities,
                and explored many forms of creativity. Most of my artworks were inspired by nature, and art has always stayed with me.
                Then, about four years ago, I went hiking and reached the top of a mountain. That evening, the sky after the rain was
                incredibly beautiful. I quickly painted the atmosphere using natural watercolor I had bought from an artist I admire. I don’t
                know why, but that moment made me feel deeply connected — I even cried. It felt like I had reconnected with my childhood
                self again — the joy and freedom of creating something simple, from the heart. I hadn’t felt that way in a very long time. Since
                that day, nature has become the main inspiration and energy in my art.
                Nature teaches me to be present, and to understand myself more. The more time I spend with it, the more I want to care for it
                and learn from it. Sometimes, I feel like nature is happy to be part of my creation.`,
                photo: require('../resources/img/plcHolder.png'),
                avatarPlaceholder: true
              },
              {
                id: 3,
                name: "Malik",
                description: `An average IT guy ( a software engineer ) who pasionate in nature, hiking, camping. Along side each hobbies he also doing crafted cacao that grown from Narathiwat, his home town and also own little brand of upcycling bag named "WolfMoon".`,
                photo: require('../resources/img/plcHolder.png'),
                avatarPlaceholder:true
              }
            ];
            
            // Simulate API delay
            // setTimeout(() => {
            //   setTeamMembers(mockData);
            //   setLoading(false);
            // }, 800);
            setTimeout(() => {
                setTeamMembers(mockData);
                setLoading(false);
              }, 800);
          } catch (err) {
            // setError('Failed to load team data');
            // setLoading(false);
          }
        };
    
        fetchTeamData();
      }, []);
      return (
        <div>
          <NavBar />
          <Container className="mt-4">
            <h4 className="custom-font mb-4">{translate('headerWeAre')}</h4>
    
            {loading ? (
              <div className="text-center">
                <Spinner animation="border" />
              </div>
            ) : (
              <Row>
                {teamMembers.map((member) => (
                  <Row>
                  <Col key={member.id} md={12} lg={8} className="mb-4">
                    <ProfileCard>
                    <ProfileCard.ProfilePic 
                      src={member.photo} 
                      className="mb-3 mx-auto rounded-circle" 
                    />
                    <ProfileCard.Title>
                      {member.name}
                    </ProfileCard.Title>
                    <ProfileCard.Description 
                      className="text-muted mb-3"
                      
                      readMoreLink="/profile/nakrapas-mahom"
                    >
                      {member.description}
                    </ProfileCard.Description>
                      
                    </ProfileCard>
                    {/* <Card className="h-100 shadow-sm border-0">
                      <Card.Body className="text-center">
                        <Image
                          src="https://via.placeholder.com/120"
                          roundedCircle
                          className="mb-3"
                          alt="avatar"
                        />
                        <Card.Title>{member.name}</Card.Title>
                        <Card.Text>{member.description}</Card.Text>
                      </Card.Body>
                    </Card> */}
                  </Col>
                  </Row>
                ))}
              </Row>
            )}
          </Container>
        </div>
      );
};


export default AboutUs;