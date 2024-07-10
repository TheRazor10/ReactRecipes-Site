import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRecipeContext } from '../context/recipe-context';
import './modal-style.css'

function RecipeInfo({recipeInfo}) {

  const {open, setOpen} = useRecipeContext();

  console.log('Works');
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={open}
      onHide={() => {setOpen(false);}}
      className='mStyle'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {recipeInfo?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='mStyleText'>
        <h4>Summary Info</h4>
        <p>{recipeInfo?.summary?.replace(/(<([^>]+)>)/gi, '')}</p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

export default RecipeInfo;

