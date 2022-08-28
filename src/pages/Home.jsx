import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <h1>Welcome</h1>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </p>
      <Link to="/home/mycomponent">MyComponent</Link>
    </main>
  );
};

export default Home;
