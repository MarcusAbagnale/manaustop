
import PropTypes from 'prop-types';

function BoasVindas(props) {
  return (
    <>
      <div>
        <h1>Seja muito bem vindo, {props.nameUser}!</h1>
      </div>
    </>
  );
}

BoasVindas.propTypes = {
  nameUser: PropTypes.string.isRequired
};

export default BoasVindas;

