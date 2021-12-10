import {
  Link,
} from "react-router-dom";


export const Home = () => {

  return (
    <>
      <h1 className="homePageContents">Voting Application Home Page</h1>

      <ul className="homePageContents">
          <li>
            <Link to="/registration/register">Register Voter</Link>
          </li>
          <li>
            <Link to="/registration/list">List Voters</Link>
          </li>
          <li>
            <Link to="/election/create">Create Election</Link>
          </li>          
          <li>
            <Link to="/balloting/">Make your Vote count</Link>
          </li>          
        </ul>

    </>
  );

};