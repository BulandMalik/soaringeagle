import PropTypes from 'prop-types';

import mascotImg from '../images/soaringeagle-mascot-3.png'

export const ToolHeader = (props) => {

  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <img src={mascotImg} alt="scout" />
          <span>Don't quack like a duck, soar like an eagle. -Ken Blanchard</span>
        </div>
      </div>
      <div>
        <h1>{props.headerText}</h1>
      </div>
    </header>
  );

};

ToolHeader.defaultProps = {
  headerText: "The Tool",
};

ToolHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
};