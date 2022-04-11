import Logo from '../../assets/img/elogroup-logo.svg';
import TipIcon from '../../assets/img/tip.svg';

import Tippy from '@tippy.js/react'


import './styles.css';
import 'tippy.js/dist/tippy.css';
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import { toast } from 'react-toastify';

function UserSignupForm() {

    const [form, setForm] = useState({
        user: "",
        password: "",
        passwordConfirmation: ""
    });

    const [emptyValue, setEmptyValue] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

    const handleChange = (e) => {
        let newProp = form;
        setValidPassword(true);
        setConfirmPassword(true);
        newProp[e.target.name] = e.target.value;

        setForm({ ...newProp });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar se há campos não preenchidos (todos os campos devem ser obrigatórios)
        let emptyValues = Object.values(form).some(obj => obj === "");
        setEmptyValue(emptyValues);

        // Verificar se a senha é valida
        let validPassword = form["password"].match(/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
        setValidPassword(validPassword);



        // Envia o formulário se atender as regras de validação
        if (!emptyValues && validPassword) {
            toast.success('Login realizado com sucesso');
            localStorage.setItem("user", form.user);
            window.location.assign("/leads");
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

                    {emptyValue && form["user"] === "" ? <p className="empty-text">O nome de usuário deve ser preenchido</p> : ""}
                </div>

                <div className="user-register-password">
                    <label htmlFor="password">Password *
                        <Tippy content="No mínimo 8 caracteres, pelo menos um caractere especial, um caractere numérico e um caractere alfanumérico">
                            <img src={TipIcon} className="password-tip" alt="Password tip" />
                        </Tippy>
                    </label>

                    <input
                        type="password"
                        name="password"
                        className="input-field"
                        onChange={(e) => handleChange(e)}
                    />

                    {emptyValue && form["password"] === "" ? <p className="empty-text">A senha deve ser preenchida</p> : ""}
                    {!validPassword && form["password"] !== "" ? <p className="empty-text">A senha deve conter no mínimo 8 caracteres, pelo menos um caractere especial, um caractere numérico e um caractere alfanumérico</p> : ""}
                </div>

                <div className="user-register-password-confirmation">
                    <label htmlFor="passwordConfirmation">Confirmação Password *</label>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        className="input-field"
                        onChange={(e) => handleChange(e)}
                    />

                    {emptyValue && form["passwordConfirmation"] === "" ? <p className="empty-text">A confirmação de senha deve ser preenchida</p> : ""}
                    {!confirmPassword && form["passwordConfirmation"] !== "" ? <p className="empty-text">A confirmação de senha deve ser preenchida</p> : ""}
                </div>

                <button type="submit" className="submit-user-btn">Registrar</button>
            </form>
        </div>
    );
}

export default UserSignupForm;