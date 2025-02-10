import { ButtonPrimary } from '../buttons/Buttons';
import { useEffect, useState } from 'react';
import Create from '../create/create';
import './ganykla.css';
import Field from '../field&animals/field';
import Antilope from '../../assets/antilope.svg';
import Avis from '../../assets/sheep.svg';
import Antis from '../../assets/duck.svg';
import Edit from '../edit/Edit';

export default function Ganykla() {

    const [modal, setModal] = useState(false);
    const [value, setValue] = useState('');
    const [select, setSelect] = useState('');
    const [animal, setAnimals] = useState([]);
    const [alert, setAlert] = useState([]);
    const [editModal, setEditModal] = useState(false);
    const [editValue, setEditValue] = useState('');
    const [currentAnimalId, setCurrentAnimalId] = useState(null);

    const handleEditSize = (newSize) => {
        if (editValue === '' || editValue === '0') {
            if (alert.length < 4) {
                setAlert(prev => [...prev, { id: Date.now(), text: 'Įveskite svori' }]);
            }
            return;
        }
        if (currentAnimalId) {
            setAnimals(prev => prev.map(animal => animal.id === currentAnimalId ? { ...animal, size: newSize } : animal));
        }
        setCurrentAnimalId(null);
        setEditModal(null);
        setEditValue('');
        setAlert(prev => [...prev, {id: Date.now(), text: 'Pakeitėte svorį', color: '#84eab3', textColor: 'black'}])
    }

    const handleEditValue = e => {
        const regax = /^[0-9\b]+$/;
        const number = e.target.value;
        if ((number === '' || regax.test(number)) && number.length < 4) {
            setEditValue(e.target.value)
        }
    }

    const handleEditModal = (id) => {
        setCurrentAnimalId(id)
        setEditModal(prev => !prev);

    }

    const animalData = [
        { name: 'Antilope', image: Antilope },
        { name: 'Avis', image: Avis },
        { name: 'Antis', image: Antis }
    ]

    const handleChange = (e) => {
        const regax = /^[0-9\b]+$/;
        const number = e.target.value;
        if ((number === '' || regax.test(number)) && number.length < 4) {
            setValue(e.target.value);
        }
    }

    const handleDelete = (index) => {
        setAnimals(prev => prev.filter((item) => item.id !== index));
    }

    const handleAnimals = () => {
        if (select === '' || value === '') {
            if (alert.length < 4) {
                setAlert((prev) => [...prev, { id: Date.now(), text: 'Užpildykite visus laukus' }]);
            }
            return;

        }
        const newAnimal = {
            name: select,
            size: value,
            image: animalData.find(item => item.name === select).image,
            id: Date.now()
        }
        setAnimals(prev => [...prev, newAnimal]);
        setSelect('');
        setValue('');
        handleModal();
        setAlert(prev => [...prev, {id: Date.now(), text: 'Pridėjote gyvūna', color: '#84eab3', textColor: 'black'}])
        return newAnimal;
    }

    useEffect(() => {
        if (alert.length > 0) {
            const time = setTimeout(() => {
                setAlert((prev) => prev.filter((item) => item.id !== alert[0].id));
            }, 3000);

            return () => clearTimeout(time);
        }

    }, [alert])

    const handleModal = () => {
        setModal(!modal);
    }



    return (
        <div className="container">
            <ButtonPrimary
                handleModal={handleModal}>
                Pridėti gyvūna
            </ButtonPrimary>
            <div className='top'>
                <div className='alert-container'>
                    {alert.map(item => (
                        <div style={{backgroundColor: item.color, borderColor: item.color, color: item.textColor}} className='alert' key={item.id}>
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>

            <Create
                modal={modal}
                handleModal={handleModal}
                value={value}
                select={select}
                setSelect={setSelect}
                handleChange={handleChange}
                handleAnimals={handleAnimals}
            />
            <Field
                animal={animal}
                handleDelete={handleDelete}
                handleEditModal={handleEditModal} />
            <Edit
                editModal={editModal}
                handleEditModal={handleEditModal}
                editValue={editValue}
                handleEditValue={handleEditValue}
                handleEditSize={handleEditSize} />
        </div>
    )
}