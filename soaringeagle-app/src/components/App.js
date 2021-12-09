import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { RegistrationTool } from './registration/VoterTool';
import { BallotingTool } from './balloting/BallotingTool';
import { ElectionTool } from './election/ElectionTool';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';

import { Layout } from './Layout';

export const App = () => {
    return (
        <Router>
            <Layout>
                <ToolHeader headerText="Voting Application"/>
                <nav>
                    <ul className="menu">
                        <li className="menu-item"><Link to="/">Home</Link></li>
                        <li className="menu-item"><Link to="/registration">Registration</Link></li>
                        <li className="menu-item"><Link to="/election">Election</Link></li>
                        <li className="menu-item"><Link to="/balloting">Balloting</Link></li>
                    </ul>
                </nav>
                <main>
                    <Route path="/" exact>
                        <h1>Home</h1>
                    </Route>
                    <Route path="/registration">
                        <RegistrationTool />
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