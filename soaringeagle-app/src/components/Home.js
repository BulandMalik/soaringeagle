import {
  Link,
} from "react-router-dom";


export const Home = () => {

  return (
    <>
      <h1>Voting Application Home Page</h1>

      <ul>
          <li>
            <Link to="/registration/register">Register Voter</Link>
          </li>
          <li>
            <Link to="/registration/list">List Voters</Link>
          </li>
        </ul>

    </>
  );

};