import hill from '../../assets/hill.svg';


export default function Hill({ children }) {
    return (
        <div className="hill">
            <img src={hill} alt="hill" />
            <div className='animal-field2'>
                {children}
            </div>
        </div>
    )
}