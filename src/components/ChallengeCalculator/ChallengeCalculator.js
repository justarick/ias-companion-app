export default function ChallengeCalculator() {
    return (
        <div className='w-2/5 m-4'>
            <h1>Challenge Calculator</h1>
            <form className='flex flex-col'>
                <div className='flex justify-between border border-black bg-yellow-400 font-bold'>
                    <label htmlFor='challenge-level'>Schwierigkeit</label>
                    <input
                        type='text'
                        id='challenge-level'
                        className='border'
                    />
                </div>
                <div className='flex justify-between border border-black'>
                    <label htmlFor='attribute1'>Attribut</label>
                    <input
                        type='text'
                        id='attribute1'
                        className='border'
                    />
                </div>
                <div className='flex justify-between border border-black'>
                    <label htmlFor='attribute2'>Attribut / Fertigkeit</label>
                    <input
                        type='text'
                        id='attribute2'
                        className='border'
                    />
                </div>
                <div className='flex justify-between border border-black'>
                    <label htmlFor='tool-bonus'>Ausrüstungsboni</label>
                    <input
                        type='text'
                        id='tool-bonus'
                        className='border'
                    />
                </div>
                <div className='flex justify-between border border-black'>
                    <label htmlFor='advantage'>Vorteile</label>
                    <input
                        type='text'
                        id='advantage'
                        className='border'
                    />
                </div>
                <div className='flex justify-between border border-black'>
                    <label htmlFor='status-effects'>Statuseffekte</label>
                    <input
                        type='text'
                        id='status-effects'
                        className='border'
                    />
                </div>
                <div className='flex justify-between  border border-black bg-yellow-400 font-bold'>
                    <label htmlFor='pool'>Pool</label>
                    <input
                        type='text'
                        id='pool'
                        className='border'
                    />
                </div>
                <div className='flex justify-between border border-black'>
                    <label htmlFor='dice'>Würfel</label>
                    <input
                        type='text'
                        id='dice'
                        className='border'
                    />
                </div>
                <div className='flex justify-between border border-black'>
                    <label htmlFor='rest-pool'>Restpool</label>
                    <input
                        type='text'
                        id='rest-pool'
                        className='border'
                    />
                </div>
                <div className='flex justify-between border border-black'>
                    <label htmlFor='dice-result'>Würfelergebnis</label>
                    <input
                        type='text'
                        id='dice-result'
                        className='border'
                    />
                </div>
                <div className='flex justify-between border border-black bg-yellow-400 font-bold'>
                    <label htmlFor='subtotal'>Zwischenergebnis</label>
                    <input
                        type='text'
                        id='subtotal'
                        className='border'
                    />
                </div>
                <div className='flex justify-between border border-black'>
                    <label htmlFor='sacrifice-value'>Opferwert</label>
                    <input
                        type='text'
                        id='sacrifice-value'
                        className='border'
                    />
                </div>
                <div className='flex justify-between border border-black bg-yellow-600 font-bold'>
                    <label htmlFor='result'>Ergebnis</label>
                    <input
                        type='text'
                        id='result'
                        className='border'
                    />
                </div>
            </form>
        </div>
    );
}
