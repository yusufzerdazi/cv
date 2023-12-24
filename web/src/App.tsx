import './App.css'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import logo from './assets/yusuf.svg';
import profile from './assets/profile.json';

function App() {
  return (
    <Container className="cv">
      <Row>
        <div className="header">
          <header className="header">
            <div className="headerContainer">
              <img src={logo} alt="Header"></img>
            </div>
          </header>
          <h3>Senior Software Engineer</h3>
          <h5><i className="fas fa-map-marker-alt"/> {import.meta.env.VITE_LOCATION}&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-phone"/> {import.meta.env.VITE_PHONE_NUMBER}&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-link"/> <a href="https://yusuf.zerdazi.com">https://yusuf.zerdazi.com</a>&nbsp;&nbsp;&nbsp;&nbsp;<b><i className="fas fa-envelope"/> </b> <a href={"mailto://" + import.meta.env.VITE_EMAIL}>{import.meta.env.VITE_EMAIL}</a></h5>
        </div>
      </Row>
      <Row className="content">
        <Col xs={12}>
          <section>
            <div className="dotted" />
            <h4><b>Summary</b></h4>
            <p dangerouslySetInnerHTML={{"__html":profile.summary}}>
            </p>
            <div className="dotted" />
            <h4><b>Skills</b></h4>
            {
              <ul className="para fa-ul">
                {
                  profile.skills.map(c =>
                    <>
                      <li><span className="fa-li"><i className="far fa-dot-circle"></i></span><b>{c.category}: </b>
                        {c.skills.map(s => <><Badge bg="secondary">{s}</Badge> </>)}
                      </li>
                    </>
                  )}
              </ul>
            }
          </section>
          <section>
            <div className="dotted" />
            <h4><b>Experience</b></h4>
            {
              profile.experience.map(e =>
                <>
                  <h5>
                    <i className="fas fa-chevron-circle-right" /> <b>{e.start} - {(e.end && e.end != "") ? e.end : "Present"}:</b> <i>{e.company}</i> - {e.title}
                  </h5>
                  <ul className="para fa-ul">
                    {e.description.map(d => <li dangerouslySetInnerHTML={{"__html":'<span class="fa-li"><i class="far fa-dot-circle"></i></span>' + d}}></li>)}
                    {e.links != undefined ? e.links.map(d => <li dangerouslySetInnerHTML={{"__html": `<span class="fa-li"><i class="far fa-link"></i></span><a href="${d}">${d}</a>`}}></li>) : <></>}
                  </ul>
                </>)
            }
          </section>
          <section>
            <div className="dotted" />
            <h4><b>Education</b></h4>
            {
              profile.education.map(e =>
                <>
                  <h5>
                    <i className="fas fa-chevron-circle-right" /> <b>{e.start} - {(e.end && e.end != "") ? e.end : "Present"}:</b> {e.title}
                  </h5>
                  <p className="para">
                    {e.description}
                  </p>
                </>)
            }
          </section>
          <section>
            <div className="dotted" />
            <h4><b>Certifications</b></h4>
            {
              profile.certifications.map(e =>
                <>
                  <h5>
                    <i className="fas fa-chevron-circle-right" /> <b>{e.date}:</b> {e.title}
                  </h5>
                  <ul className="para fa-ul">
                    <li><span className="fa-li"><i className="far fa-link"></i></span> <a href={e.link}>{e.link}</a></li>
                  </ul>
                </>)
            }
          </section>
          <section>
            <div className="dotted" />
            <h4><b>Awards</b></h4>
            {
              profile.awards.map(e =>
                <>
                  <h5>
                    <i className="fas fa-chevron-circle-right" /> <b>{e.date}:</b> {e.title}
                  </h5>
                </>)
            }
          </section>
          <section>
            <div className="dotted" />
            <h4><b>Projects</b></h4>
            {
              profile.projects.map(e =>
                <>
                  <h5>
                    <i className="fas fa-chevron-circle-right" /> <b>{e.date} - Present:</b> {e.title}
                  </h5>
                  <p className="para">
                    {e.description}
                  <ul className="para fa-ul">
                    <li><span className="fa-li"><i className="far fa-link"></i></span> <a href={e.link}>{e.link}</a></li>
                  </ul>
                  </p>
                </>)
            }
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default App
