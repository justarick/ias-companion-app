import './App.css';
import ChallengeCalculator from './components/ChallengeCalculator/ChallengeCalculator';
import CombatList from './components/CombatList/CombatList';

function App() {
    return (
        <div className='flex flex-row'>
            <CombatList />
            <ChallengeCalculator />
        </div>
    );
}

export default App;
