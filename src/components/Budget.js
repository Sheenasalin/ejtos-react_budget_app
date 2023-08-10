import React, { useContext, use State } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const { quantity, setQuantity} = useState('');
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input
                        required='required'
                        type='number'
                        id='cost'
                        value={quantity}
                        style={{size: 10}}
                        onChange={(event) => setQuantity(event.target.value)}>
                        </input>
        </div>
    );
};
export default Budget;
