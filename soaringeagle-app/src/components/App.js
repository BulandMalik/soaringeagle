import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { RegistrationTool } from './registration/VoterTool';
import { BallotingTool } from './balloting/BallotingTool';
import { ElectionTool } from './election/ElectionTool';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { Home } from './Home';

import { Layout } from './Layout';

export const App = (props) => {

    //console.log("^^^^^^^^^^^^^^^^^^^^^^^^ props:",props);

    return (
        <Router>
            <Layout>
                <ToolHeader headerText="Voting Application"/>
                <nav>
                    <ul className="menu">
                        <li className="menu-item"><Link to="/">Home</Link></li>
                        <li className="menu-item"><Link to="/registration/list">Registration</Link></li>
                        <li className="menu-item"><Link to="/election">Election</Link></li>
                        <li className="menu-item"><Link to="/balloting">Balloting</Link></li>
                    </ul>
                </nav>
                <main>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/registration/register">
                        <RegistrationTool action='register'/>
                    </Route>
                    <Route path="/registration/list">
                        <RegistrationTool action='list'/>
                    </Route>                    
                    <Route path="/election">
                        <ElectionTool />
                    </Route>  
                    <Route path="/balloting">
                        <BallotingTool />
                    </Route>                     
                </main>    
                <aside>Sidebar</aside>
                <ToolFooter companyName="A Cool Company, Inc."/>
            </Layout>
    </Router>
    )
};