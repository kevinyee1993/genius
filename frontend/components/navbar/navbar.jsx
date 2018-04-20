import React from 'react';


class Navbar extends React.Component {
  render() {
    return(
      <div class="navbar">
        <section className="navbar-items">
          <a href="https://github.com/kevinyee1993"><p>github</p></a>
          <a href="https://www.linkedin.com/in/kevin-yee-9b7874158/"><p>linked in</p></a>
        </section>
      </div>
    );
  }
}

export default Navbar;
