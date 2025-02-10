import { useState } from 'react';
import { ButtonDanger2, ButtonPrimary2 } from '../buttons/Buttons';
import './field.css';

export default function Animals({ animal, handleDelete, handleEditModal }) {

    const [buttons, setButtons] = useState(false);

    const handleButtons = (index) => {
        setButtons(prev => ({
            ...prev,
            [index]: !prev[index]
        }));

    }

    return (
        <div className="animal">
            {
                animal.map((item) => {
                    return (
                        <div key={item.id} className="animal-box">
                            <div className='animal-buttons' style={{display: buttons[item.id] ? 'flex' : 'none'}}>
                                <ButtonPrimary2 handleModal2={() => handleEditModal(item.id)}>Edit</ButtonPrimary2>
                                <ButtonDanger2 deleteAni={() => handleDelete(item.id)}>Delete</ButtonDanger2>
                            </div>
                            <img onClick={() => handleButtons(item.id)} src={item.image} alt={item.name} />
                            <p>{item.size} kg.</p>
                        </div>
                    )
                })
            }
        </div>
    )
}