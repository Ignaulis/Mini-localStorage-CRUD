const ButtonPrimary = ({children, handleModal}) => (
    <button onClick={handleModal} className="btn btn-primary">{children}</button>
);

const ButtonSuccess = ({children, handleAnimals}) => (  
    <button onClick={handleAnimals} className="btn btn-success">{children}</button>
);

const ButtonDanger = ({children, handleClose}) => (
    <button onClick={handleClose} className="btn btn-danger">{children}</button>
);

const ButtonDanger2 =({children, deleteAni}) => (
    <button onClick={deleteAni} className="btn btn-danger">{children}</button>
);

const ButtonPrimary2 = ({children, handleModal2}) => (
    <button onClick={handleModal2} className="btn btn-primary">{children}</button>
);

const ButtonSuccess2 = ({children, handleEditSize}) => (
    <button onClick={handleEditSize} className="btn btn-success">{children}</button>
);
export {ButtonPrimary, ButtonSuccess, ButtonDanger, ButtonDanger2, ButtonPrimary2, ButtonSuccess2};