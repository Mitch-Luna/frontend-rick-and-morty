import BtnAddFavorite from "./btnAddFavorite";
import BtnDeleteFavorite from "./btnDeleteFavorite";

function Character({ character }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="mr-4 ">
            <img className="img-fluid rounded-pill" src={character.image} alt={character.name} style={{ width: '200px', height: 'auto', marginBottom:'10px' }} />
          </div>
          <div className="mr-4" style={{ marginLeft: '10px' }}>
            <h6>{character.name}</h6>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-black p-3 ">
            <h6>{`Estado: ${character.status}`}</h6>
            <h6>{`Especie: ${character.species}`}</h6>
            <h6>{`Tipo: ${character.type}`}</h6>
            <h6>{`Genero: ${character.gender}`}</h6>
            <h6>{`Fecha de creación: ${character.created}`}</h6>
            <BtnAddFavorite/>
            <BtnDeleteFavorite/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
