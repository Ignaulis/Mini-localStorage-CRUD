import './edit.css';
import { ButtonDanger, ButtonSuccess2 } from '../buttons/Buttons';

export default function Edit({editModal, handleEditModal, editValue, handleEditValue, handleEditSize}) {  


    return (
        <>

        <div className='modal fade show' style={editModal ? {display: 'block'} : {display: 'none'}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Redaguoti gyvūna</h5>
                        <ButtonDanger handleClose={handleEditModal}>
                            <span aria-hidden="true">&times;</span>
                        </ButtonDanger>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="recipient-name" className="input-group-text">Svoris</label>
                                <input type="text" className="form-control" id="recipient-name" value={editValue} onChange={handleEditValue}/>
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <ButtonDanger handleClose={handleEditModal}>Atšaukti</ButtonDanger>
                        <ButtonSuccess2 handleEditSize={() => handleEditSize(editValue)}>Tvirtinti</ButtonSuccess2>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}