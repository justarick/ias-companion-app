import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function Counter({ value, changeValue }) {
    return (
        <div className='flex flex-row justify-between align-middle'>
            <button
                className='btn'
                onClick={() => changeValue(value - 1)}>
                <RemoveCircleOutlineIcon />
            </button>
            <p className='font-bold text-2xl'>{value}</p>
            <button onClick={() => changeValue(value + 1)}>
                <AddCircleOutlineIcon />
            </button>
        </div>
    );
}
