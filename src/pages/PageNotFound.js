import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const PageNotFound = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '100px 20px',
      color: '#2c3e50'
    }}>
      <h1 style={{ fontSize: '80px', fontWeight: 'bold' }}>404</h1>
      <h2>Oops! You just missed the target 🎯</h2>
      <p>
        The page you're looking for isn't available. It may have been removed, renamed, or it's off playing a match somewhere!
      </p>
      <p>
        Don’t worry – the game’s still on. Head back to the home ground and continue shopping for your favorite sports gear.
      </p>
      <Link to="/">
        <Button variant="dark">🏠 Back to Home</Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
