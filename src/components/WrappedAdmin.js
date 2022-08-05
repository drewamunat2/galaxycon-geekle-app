import Admin from '../routes/Admin';
import { useLocation } from 'react-router-dom';

export default function WrappedAdmin(props) {
  const location = useLocation();

  return <Admin location={location} {...props} />
}