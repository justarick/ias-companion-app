import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import SpaIcon from '@mui/icons-material/Spa';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import SecurityIcon from '@mui/icons-material/Security';
import PersonIcon from '@mui/icons-material/Person';
import GamesIcon from '@mui/icons-material/Games';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function CombatTableHeader() {
    return (
        <tr>
            <th></th>
            <th>
                <PersonIcon />
            </th>
            <th className='bg-red-500'>
                <HealthAndSafetyIcon />
            </th>
            <th className='bg-blue-500'>
                <DirectionsRunIcon />
            </th>
            <th className='bg-green-500'>
                <SpaIcon />
            </th>
            <th className='bg-purple-500'>
                <TheaterComedyIcon />
            </th>
            <th className='bg-orange-500'>
                <SelfImprovementIcon />
            </th>
            <th className='bg-gray-400'>
                <ImportExportIcon />
            </th>
            <th className='bg-yellow-600'>
                <SecurityIcon />
            </th>
            <th className='bg-yellow-400'>
                <GamesIcon />
            </th>
            <th>
                <ExitToAppIcon />
            </th>
        </tr>
    );
}
