import Navbar from '../../components/Navbar';
import AddLeadForm from '../../components/AddLeadForm';

import './styles.css';

function AddLead() {
    return (
        <>
            <Navbar />

            <main>
                <div className="container">
                    <div className="leads-title">
                        <h1>Novo Lead</h1>
                    </div>

                    <div>
                        <AddLeadForm />
                    </div>
                </div>
            </main>

        </>
    );
}

export default AddLead;