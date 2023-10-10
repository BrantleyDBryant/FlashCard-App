import React from 'react'; 

export default function CardNextButton({ handleNextButton }) {
    return (
        <button 
        className='btn btn-primary m1-2'
        type='button'
        onClick={handleNextButton}
        >
            Next
        </button>
    )
}