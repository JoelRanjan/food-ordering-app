// const About = () => {
//   return (
//     <div>
//       <h1>about page</h1>
//     </div>
//   );
// };

// export default About;
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    const { name } = this.props;

    const increase = () => {
      this.setState({ count: this.state.count + 1 });
    };
    return (
      <div>
        <h1>{name}</h1>
        <p>count:{this.state.count}</p>
        <button onClick={increase}>increase count</button>
      </div>
    );
  }
}

export default About;
