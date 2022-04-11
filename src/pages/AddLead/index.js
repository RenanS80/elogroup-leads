import AddLeadForm from '../../components/AddLeadForm';

import './styles.css';

function AddLead() {
    return (
        <main>
            <div className="add-lead-container">
                <div className="leads-title">
                    <h1>Novo Lead</h1>
                </div>

                <div>
                    <AddLeadForm />
                </div>
            </div>
        </main>
    );
}

export default AddLead;