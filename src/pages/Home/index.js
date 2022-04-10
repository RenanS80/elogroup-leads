import Navbar from '../../components/Navbar';
import RegisterUserForm from '../../components/RegisterUserForm';

import './styles.css';

function Home() {
    return (
        <>
            <Navbar />

            <main>
                <div className="container">
                    <RegisterUserForm />
                </div>
            </main>

        </>
    );
}

export default Home;