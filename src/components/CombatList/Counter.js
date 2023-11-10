export default function Counter({ value, changeValue }) {
    return (
        <div>
            <button onClick={() => changeValue(value - 1)}>-</button>
            <span>{value}</span>
            <button onClick={() => changeValue(value + 1)}>+</button>
        </div>
    );
}
