import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home-details">
        <h1>Welcome to Camera Manager Application</h1>
        <h3>Smart Video Surveillance</h3>

        <div className="features">
          <h3>Serving Global Customers</h3>
          <p>
            Tens of thousands of business owners in 80 countries around the
            world are harnessing the power of video surveillance for safer,
            smarter workplaces.
          </p>
          <img
            src="https://www.een.com/wp-content/uploads/2021/webp/WorldMap-2a.webp"
            alt="world map"
          />
        </div>

        <div className="features promise">
          <h3>BUILT FOR YOUR WORLD</h3>

          <h2>Scale to Unlimited Locations, Cameras and Users</h2>
          <p>
            View multiple locations, increase video retention, and add
            additional cameras right from your mobile phone. No matter how you
            grow or your needs change our Company can support you.
          </p>
        </div>

        <div className="features aspects">
          <h3>Our Aspects</h3>
          <ul>
            <li>
              Compatibility - The software is able to operate with other
              products that are designed for interoperability with another
              product. For example, a piece of software may be
              backward-compatible with an older version of itself.
            </li>
            <li>
              Extensibility - New capabilities can be added to the software
              without major changes to the underlying architecture.
            </li>
            <li>
              Usability - The software user interface must be usable for its
              target user/audience. Default values for the parameters must be
              chosen so that they are a good choice for the majority of the
              users.
            </li>
            <li>
              Portability - The software should be usable across a number of
              different conditions and environments.
            </li>
          </ul>
        </div>

        <div className="features green">
          <h3>Our vision towards Environment</h3>

          <h2>
             ‘Clean Coding’ is crucial for efficiency - Enable high performance.
          </h2>
          <p>
            Computer software that can be developed and used efficiently and
            effectively with minimal or no impact to the environment.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
