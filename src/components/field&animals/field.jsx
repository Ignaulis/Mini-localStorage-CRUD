import Animals from './animals';
import './field.css';
import Hill from './Hill';
import Pond from './Pond';

export default function Field({animal, handleDelete, handleEditModal}) {

    const ducks = animal.filter(item => item.name === 'Antis');
    const others = animal.filter(item => item.name !== 'Antis');

    return (
        <div className="field">
            <div className="field-box">
                <Pond><Animals handleEditModal={handleEditModal} handleDelete={handleDelete} animal={ducks}/></Pond>
            </div>
            <div className="field-box">
                <Hill><Animals handleEditModal={handleEditModal} handleDelete={handleDelete} animal={others}/></Hill>
            </div>
        </div>
    )
}