import './styles.css';
import Logo from '../../assets/img/elogroup-logo.svg';

function RegisterUserForm() {
    return (
        <div className="form-box">
            <div className="elogroup-logo">
                <img src={Logo} alt="EloGroup logo" />
            </div>

            <form id="register-form">
                <div className="user-register">
                    <label htmlFor="user">Usuário *</label>
                    <input type="text" id="user" name="name" className="input-field" required />
                </div>

                <div className="user-register-password">
                    <label htmlFor="password">Password *</label>
                    <input type="password" id="password" name="password" className="input-field" required />
                </div>

                <div className="user-register-password-confirmation">
                    <label htmlFor="password-confirmation">Confirmação Password *</label>
                    <input type="password" id="password-confirmation" name="password-confirmation" className="input-field" required />
                </div>

                <button type="submit" className="submit-user-btn">Registrar</button>
            </form>
        </div>
    );
}

export default RegisterUserForm;