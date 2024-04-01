import { GenreCard } from "./GenreCard";
import PropTypes from 'prop-types';
export const GenresInDb = (props) => {
   
  return (
    <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
                {props.title}
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
                {
                    props.genres.map((genre,index) => <GenreCard key={genre + index} genre={genre}/> )
                    
                }
          

            </div>
          </div>
        </div>
      </div>
  );
};
GenresInDb.propTypes = {
    title : PropTypes.string.isRequired,
    genres : PropTypes.array
}
