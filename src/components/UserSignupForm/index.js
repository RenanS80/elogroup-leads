import Tippy from '@tippy.js/react'
import { useState } from 'react';
import { toast } from 'react-toastify';

import Logo from '../../assets/img/elogroup-logo.svg';
import TipIcon from '../../assets/img/tip.svg';

import './styles.css';
import 'tippy.js/dist/tippy.css';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


function UserSignupForm() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        user: "",
        password: "",
        passwordConfirmation: ""
    });

    // Hooks para validação de campos obrigatórios e password
    const [emptyValue, setEmptyValue] = useState(false);
    const [validPassword, setValidPassword] = useState(false);


    const handleChange = (e) => {
        let newProp = form;
        setValidPassword(true);
        newProp[e.target.name] = e.target.value;

        setForm({ ...newProp });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica se há campos não preenchidos (todos os campos devem ser obrigatórios)
        let emptyValues = Object.values(form).some(obj => obj === "");
        setEmptyValue(emptyValues);

        // Verifica se a senha é valida
        let validPassword = form["password"].match(/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
        setValidPassword(validPassword);

        // Condição para registrar o usuário e 
        if (!emptyValues && validPassword && form.passwordConfirmation === form.password) {
            toast.success('Cadastro realizado com sucesso');

            // Salva os dados do usuário no LocalStorage e redireciona para a o painel de leads
            localStorage.setItem("user", form.user);
            navigate("/leads");
        }
    }


    return (
        <div className="form-box">
            <div className="elogroup-logo">
                <img src={Logo} alt="EloGroup logo" />
            </div>

            <form onSubmit={(e) => handleSubmit(e)} id="register-form">
                <div className="user-register">
                    <label htmlFor="user">Usuário *</label>
                    <input
                        type="text"
                        name="user"
                        className="input-field"
                        onChange={(e) => handleChange(e)}
                    />

                    {emptyValue && form["user"] === "" ? <p className="error-message">O nome de usuário deve ser preenchido</p> : ""}
                </div>

                <div className="user-register-password">
                    <label htmlFor="password">Password *
                        <Tippy content="No mínimo 8 caracteres, pelo menos um caractere especial, um caractere numérico, uma letra maiúscula e uma letra minúscula">
                            <img src={TipIcon} className="password-tip" alt="Password tip" />
                        </Tippy>
                    </label>

                    <input
                        type="password"
                        name="password"
                        className="input-field"
                        onChange={(e) => handleChange(e)}
                    />

                    {emptyValue && form["password"] === "" ? <p className="error-message">A senha deve ser preenchida</p> : ""}
                    {!validPassword && form["password"] !== "" ? <p className="error-message">A senha deve conter no mínimo 8 caracteres, pelo menos um caractere especial, um caractere numérico, uma letra maiúscula e uma letra minúscula</p> : ""}
                </div>

                <div className="user-register-password-confirmation">
                    <label htmlFor="passwordConfirmation">Confirmação Password *</label>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        className="input-field"
                        onChange={(e) => handleChange(e)}
                    />

                    {emptyValue && form["passwordConfirmation"] === "" ? <p className="error-message">A confirmação de senha deve ser preenchida</p> : ""}
                    {form.passwordConfirmation !== form.password && form["passwordConfirmation"] !== "" ? <p className="error-message">A confirmação de senha está incorreta</p> : ""}
                </div>

                <button type="submit" className="submit-user-btn">Registrar</button>
            </form>
        </div>
    );
}

export default UserSignupForm;