import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import global from "./pages/global";
import indo from "./pages/indo";
import prov from "./pages/prov";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Covid Tracker 2020</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href=".">Global</Nav.Link>
              <Nav.Link href="/indonesia">Indonesia</Nav.Link>
              <Nav.Link href="/provinsi">Provinsi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={global} />
          <Route path="/indonesia" component={indo} />
          <Route path="/provinsi" component={prov} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
