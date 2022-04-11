import { Link } from 'react-router-dom';
import GetUser from '../../components/GetUser';
import LeadsTable from '../../components/LeadsTable';

import './styles.css';

function LeadsPanel() {

    return (
        <main>
            <div className="leads-container">
                <div className="panel-leads-title">
                    <h1>Painel de Leads</h1>
                    <GetUser />
                </div>

                <Link to="/add-lead">
                    <button type="button" className="new-lead-btn">Novo Lead (+)</button>
                </Link>

                <LeadsTable />
            </div>
        </main>
    );
}

export default LeadsPanel;