import Button from '../Button';
import Searchbox from '../Searchbox';
import './navbar.css';

export default () => {
    return <div className='navbar'>
    <img src='Group.png' width={67} height={37}/>
    <Searchbox/>
    <Button>Give Feedback</Button>
    </div>
}