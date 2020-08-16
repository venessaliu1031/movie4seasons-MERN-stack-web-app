import React from 'react';
import { Header, Content } from '../components';




class App extends React.Component {
  componentDidMount() {
  const script = document.createElement("script");
  script.src = "scripts.js";
  script.async = true;

  document.body.appendChild(script);
}


  render() {return (
    <div style={{height: "100%"}}>
    <Header />
    <Content />
    </div>
  )};
}

export default App;
