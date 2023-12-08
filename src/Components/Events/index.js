import React, { Component } from 'react';
import EventItem from '../EventItem';
import { Parallax } from 'react-parallax';
import './index.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const eventsList = [
  {
    id: '1',
    imageUrl:
      'https://cbit.ac.in/wp-content/uploads/2021/02/tecstasy2021-1-300x225.png',
    name: 'Tecstasy 2021',
    location: 'Techstasy at CBITs IT department is a dynamic tech event where students dive into innovation through workshops, competitions, and engaging activities. Its a vibrant celebration of technology and creativity. '
   
  },
  {
    id: '2',
    imageUrl:
      'https://cbit.ac.in/wp-content/uploads/2022/03/CBIT_IT_POSTER-13.03.2022.jpeg',
    name: 'Tecstasy 2022',
    location: 'Techstasy at CBITs IT department is an annual extravaganza that goes beyond the ordinary in celebrating technology and innovation. It serves as a platform where budding tech enthusiasts engage in a myriad of activities, from hands-on workshops and competitive hackathons to thought-provoking seminars.',
  },
  
{
id: '3',
imageUrl:
  'https://www.cbit.ac.in/wp-content/uploads/2023/02/15.jpeg',
  name: 'Tecstasy 2023',
  location: 'Techstasy Group Discussion is an integral part of the event, providing a forum for participants to exchange ideas, insights, and perspectives on various technological trends and challenges. Its a collaborative space where minds converge to discuss and debate topics ranging from emerging technologies and industry advancements to the societal impact of IT.' ,

},
{
id: '4',
imageUrl:
  'https://www.cbit.ac.in/wp-content/uploads/2023/02/2-1.jpeg',
name: 'Sudhee 2023',
location: ' Those who emerge victorious in various competitions, specialized certificates are awarded, recognizing their outstanding achievements and contributions to the dynamic landscape of technology.These certificates not only serve as a mark of accomplishment but also as a valuable addition to ones portfolio, signifying excellence and active involvement in the ever-evolving realm of information technology.',
},
{
id: '5',
imageUrl:
  'https://www.cbit.ac.in/wp-content/uploads/2023/02/3.jpeg',
name: 'Sudhee 2023',
location: 'Sudhee is not just a fest; its a symphony of intellect and creativity, where students converge to showcase their technical acumen, exchange ideas, and immerse themselves in an atmosphere of innovation. It is a platform that encourages us to think beyond the ordinary, to question the status quo, and to envision a future where technology is the cornerstone of progress.',

},
{
id: '6',
imageUrl:
  'https://www.cbit.ac.in/wp-content/uploads/2023/02/17.jpeg',
name: 'Techstasy',
location: 'In essence, Techstasy is a collective effort, where students, organizers, volunteers, and participants come together to create an immersive experience that celebrates technology, fosters learning, and builds lasting memories.',
},
{
id: '7',
imageUrl: 'https://www.cbit.ac.in/wp-content/uploads/2023/02/8.jpeg',
name: 'Presentation',
location: 'Presentations at Techstasy are an integral part of the event, providing a platform for participants to showcase their innovative ideas, projects, and technical expertise.Participants have the opportunity to present their projects, whether its a software application, hardware innovation, or a unique solution to a technical problem.',

},
{
id: '8',
imageUrl:
  'https://www.cbit.ac.in/wp-content/uploads/2023/02/7.jpeg',
name: 'Technical Talks',
location: 'Techstasy often features technical talks by industry experts, professors, or professionals. These talks cover a wide range of topics, from emerging technologies to career insights, providing participants with valuable knowledge and inspiration.',

},
{
id: '9',
imageUrl:
  'https://www.cbit.ac.in/wp-content/uploads/2023/02/18.jpeg',
name: 'Techstasy Event',
location: 'Techstasy participants are at the heart of the event. Whether competing in hackathons, presenting projects, or attending workshops, they contribute to the vibrant atmosphere. Participants gain exposure to cutting-edge technologies, network with industry professionals, and may even discover new career paths.',


},
{
id: '10',
imageUrl:
  'https://www.cbit.ac.in/wp-content/uploads/2023/02/10.jpeg',
name: 'Presentation',
location: 'Some events may include pitching competitions. Participants present their ideas to a panel of judges, competing for recognition, prizes, or opportunities. This challenges participants to communicate their concepts effectively.',
},
{
id: '11',
imageUrl:
  'https://www.cbit.ac.in/wp-content/uploads/2023/02/9.jpeg',
name: 'Presentation',
location: 'Workshop presentations involve hands-on learning experiences. Industry professionals or experienced individuals conduct workshops to teach specific skills, tools, or technologies. Participants can actively engage and enhance their practical understanding.',
},
{
id: '12',
imageUrl:
  'https://www.cbit.ac.in/wp-content/uploads/2023/02/6.jpeg',
name: 'Presentation',
location: 'verbal presentations, poster sessions allow participants to visually showcase their work. This format is common for presenting research findings, project details, and technical specifications.',

},

{
id: '13',
imageUrl:
  'data:image/jpeg;base64,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',
  name: 'Lab',

location: 'Importance of practical learning and provide dedicated lab hours to enhance your educational experience. Our state-of-the-art labs are equipped with cutting-edge technology and resources, fostering an environment conducive to hands-on exploration and experimentation',

},


{
id: '14',
imageUrl:
  'https://www.cbit.ac.in/wp-content/uploads/2023/02/IMG_4354-scaled.jpg',
  name: 'Techstasy',
location: ' On the significance of every shared moment. Our group photos encapsulate the spirit of collaboration, innovation, and camaraderie that defines our event. These visual narratives serve as timeless reminders of the collective pursuit of excellence.',

},
{
id: '15',
imageUrl:
  'https://www.cbit.ac.in/wp-content/uploads/2023/02/13.jpeg',
  name: 'Gaming',
location: 'Faculty Technical Gaming Night is not just an event; its a testament to the dynamic nature of our academic community. Join us for an unforgettable night where the controllers are passed, and connections are made in the spirit of fun and technology.',

},
];


class Events extends Component {
  state = {
    activeEventId: '',
    selectedEvent: null,
    isModalOpen: false,
    headerBackgroundColor: '#375628',
    footerBackgroundColor: '#375628',
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 50;

    if (scrollPosition > threshold) {
      this.setState({
        headerBackgroundColor: '#811718',
      });
    } else {
      this.setState({
        headerBackgroundColor: '#375628',
      });
    }
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  setActiveEventId = (id) => {
    const selectedEvent = eventsList.find((event) => event.id === id);
    this.setState({ activeEventId: id, selectedEvent, isModalOpen: true });
  };

  closeSelectedEvent = () => {
    this.setState({ isModalOpen: false });
  };

  renderEventsList = () => {
    const { activeEventId } = this.state;
    return (
      <ul className="events-list">
        {eventsList.map((eachEvent) => (
          <EventItem
            key={eachEvent.id}
            eventDetails={eachEvent}
            setActiveEventId={this.setActiveEventId}
            isActive={eachEvent.id === activeEventId}
          />
        ))}
      </ul>
    );
  };

  renderSelectedEvent = () => {
    const { selectedEvent, isModalOpen } = this.state;
    if (!selectedEvent || !isModalOpen) return null;

    return (
      <div className="selected-event-overlay" onClick={this.closeSelectedEvent}>
        <div className="selected-event">
          <button className="close-button" onClick={this.closeSelectedEvent}>
            &times;
          </button>
          <h2>{selectedEvent.name}</h2>
          <img src={selectedEvent.imageUrl} alt={selectedEvent.name} />
          {selectedEvent.location && <p>{selectedEvent.location}</p>}
        </div>
      </div>
    );
  };

  render() {
    const { headerBackgroundColor, footerBackgroundColor } = this.state;

    return (
      <div>
        <div
          className="header"
          style={{
            backgroundColor: headerBackgroundColor,
          }}
        >
          <h1 className="heading">IT Department Events</h1>
          <Link
            className="scroll-to-top"
            to="header"
            smooth={true}
            duration={500}
          >
          </Link>
        </div>
        <Parallax
          bgImage="https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/abstract/us-ccg-information-technology-risk.jpg"
          strength={500}
        >
          <div className="events-container">
            <div className="events-content">{this.renderEventsList()}</div>
            {this.renderSelectedEvent()}
          </div>
        </Parallax>
        <div
          className="footer"
          style={{
            backgroundColor: footerBackgroundColor,
          }}
        >
          {/* Additional Footer Content Goes Here */}
        </div>
      </div>
    );
  }
}

export default Events;