import Loader from 'react-loader';

import './Spinner.styl';

const Spinner = props => {
  return (
    <Loader loaded={!props.loading} options={{length: 5, radius: 5, width: 2}}>
      {props.loading || props.children}
    </Loader>
  );
};

Spinner.propTypes = {
  loading:  React.PropTypes.bool.isRequired,
  children: React.PropTypes.element.isRequired
};

export default Spinner;
