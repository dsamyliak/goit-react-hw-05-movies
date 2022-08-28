import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const About = () => {
  return (
    <main>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        laborum amet ab cumque sit nihil dolore modi error repudiandae
        perspiciatis atque voluptas corrupti, doloribus ex maiores quam magni
      </p>

      <ul>
        <li>
          <Link to="mission">Our mission</Link>
        </li>
        <li>
          <Link to="team">Our team info</Link>
        </li>
        <li>
          <Link to="reviews">Reviews page</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default About;
