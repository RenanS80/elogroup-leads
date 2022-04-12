import { Link } from 'react-router-dom';
import ShowUser from '../../components/ShowUser';
import LeadsTable from '../../components/LeadsTable';

import './styles.css';

function LeadsPanel() {
    return (
        <main>
            <div className="leads-container">
                <div className="panel-leads-title">
                    <h1>Painel de Leads</h1>
                    <ShowUser />
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