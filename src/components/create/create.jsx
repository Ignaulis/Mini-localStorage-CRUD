import './create.css';
import { ButtonDanger, ButtonSuccess } from '../buttons/Buttons';

export default function Create({ modal, handleModal, value, select, setSelect, handleAnimals, handleChange }) {


    return (
        <>

            <div className='modal fade show' style={modal ? {display: 'block'} : {display: 'none'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Pridėti gyvūna</h5>
                            <ButtonDanger handleClose={handleModal}>
                                <span aria-hidden="true">&times;</span>
                            </ButtonDanger>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text">Gyvūnas</label>
                                </div>
                                <select value={select} onChange={e => setSelect(e.target.value)} className="custom-select">
                                    <option value="">-</option>
                                    <option value="Antis">Antis</option>
                                    <option value="Antilope">Antilope</option>
                                    <option value="Avis">Avis</option>
                                </select>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="input-group-text">Svoris</label>
                                    <input type="text" className="form-control" id="recipient-name" value={value} onChange={handleChange} />
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <ButtonDanger handleClose={handleModal}>Uždaryti</ButtonDanger>
                            <ButtonSuccess handleAnimals={handleAnimals}>Tvirtinti</ButtonSuccess>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}