import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
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
          <h5><i className="fas fa-map-marker-alt" /> London&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-link" /> <a href="https://yusuf.zerdazi.com">https://yusuf.zerdazi.com</a></h5>
        </div>
      </Row>
      <Row className="content">
        <Col xs={12}>
          <section>
            <div className="dotted" />
            <h4><b>Summary</b></h4>
            <p>
              {profile.summary}
            </p>
            <div className="dotted" />
            <h4><b>Skills</b></h4>
            <p><i className="fas fa-dot-circle" /> <b>Languages/Frameworks:</b> C#, .NET Core, SQL, Kubernetes, Docker, Terraform, Bicep, ARM Templates, JavaScript, Python, React, Angular, PowerShell, HTML5.</p>
            <p><i className="fas fa-dot-circle" /> <b>CI/CD:</b> Git, Azure DevOps, GitHub Actions, Octopus Deploy, TeamCity.</p>
            <p><i className="fas fa-dot-circle" /> <b>Azure:</b> Service Bus, Blob Storage, Redis, Cosmos DB, Cloud Services, AKS, App Services, Function/Logic Apps, Databricks, Stream Analytics, Event Grid, Application Insights.</p>
            <p><i className="fas fa-dot-circle" /> <b>Methodologies:</b> Agile, Scrum, Kanban, SOLID, KISS, DRY, TDD.</p>
          </section>
          <section>
            <div className="dotted" />
            <h4><b>Experience</b></h4>
            {
              profile.experience.map(e => 
              <>
                <h5>
                  <i className="fas fa-chevron-circle-right" /> <b>{e.start} - {e.end ?? "Present"}:</b> <i>{e.company}</i> - {e.title}
                </h5>
                <ul className="para fa-ul">
                  {e.description.split("\n").map(d => <li><span className="fa-li"><i className="far fa-dot-circle"></i></span>{d.replace("• ", "")}</li>)}
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
                  <i className="fas fa-chevron-circle-right" /> <b>{e.start} - {e.end ?? "Present"}:</b> {e.title}
                </h5>
                <p className="para">
                  {e.description}
                </p>
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
              </>)
            }
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default App
