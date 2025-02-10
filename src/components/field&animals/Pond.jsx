import pond from '../../assets/pond.svg';

export default function Pond({ children }) {
    return (
        <div className="pond">
            <img src={pond} alt="pond" />
            <div className='animal-field'>
                {children}
            </div>
        </div>
    )
}