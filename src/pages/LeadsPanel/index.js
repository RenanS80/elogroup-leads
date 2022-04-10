import LeadsTable from '../../components/LeadsTable';
import Navbar from '../../components/Navbar';

import './styles.css';

function LeadsPanel() {

    return (
        <>
            <Navbar />

            <main>
                <div className="container">
                    <div className="panel-leads-title">
                        <h1>Painel de Leads</h1>
                    </div>

                    <button type="button" className="new-lead-btn">Novo Lead (+)</button>

                    <LeadsTable />
                </div>
            </main>

        </>
    );
}

export default LeadsPanel;