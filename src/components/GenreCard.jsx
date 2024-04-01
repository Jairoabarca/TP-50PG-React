import PropTypes from 'prop-types';

export const GenreCard = ({genre}) => {
  return (
    <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                  {genre}
                  </div>
                </div>
              </div>
  );
};
GenreCard.propTypes = {
    genre : PropTypes.string,
   
}
