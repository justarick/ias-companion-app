import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Counter({ value, changeValue }) {
    return (
        <div className='flex justify-evenly'>
            <button
                className='btn'
                onClick={() => changeValue(value - 1)}>
                <RemoveCircleIcon />
            </button>
            <div>{value}</div>
            <button onClick={() => changeValue(value + 1)}>
                <AddCircleIcon />
            </button>
        </div>
    );
}
