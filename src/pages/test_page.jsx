import Hello from 'components/Hello';
import Bye from 'components/Bye';
import { Link } from 'react-router-dom';

function TestPage(){
    return(
        <div>
            SPRINT 1 - UI
            <Link className='linkHome' to='/home'>
                <h4>
                Ir a home
                </h4>
            </Link>
            <br />
            <Hello name="Marge" />
            <Hello name='Homer' />
            <Hello name='Bart' />
            <Hello name='Lisa' />
            <hr />
            <hr />
            <hr />
            <Bye name="Marge" surname="Simpson" />
            <Bye name="Homer" surname="Simpson" />
        </div>
    );
}

export default TestPage;