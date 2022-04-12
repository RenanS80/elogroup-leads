import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ArrowLeft from '../../assets/img/arrow-left.svg';
import LocalStorageManager from '../../utils/LocalStorageManager';

import './styles.css';


function AddLeadForm() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [opportunityCheckbox, setOpportunityCheckbox] = useState({
        "rpa": false,
        "digitalProduct": false,
        "analytics": false,
        "bpm": false
    });

    // Hooks para validação de campos obrigatórios e email
    const [emptyValue, setEmptyValue] = useState(false);
    const [emptyValueCheckbox, setEmptyValueCheckbox] = useState(false);
    const [validEmail, setValidEmail] = useState(false);


    const handleCheck = (e) => { 

        // Marca/desmarca os demais checkboxes se o checkboxe All estiver marcado/desmarcado
        if (e.target.name === "all") { 
            setOpportunityCheckbox({
                "rpa": e.target.checked,
                "digitalProduct": e.target.checked,
                "analytics": e.target.checked,
                "bpm": e.target.checked
            });
        } 
        // Se o checkbox All estiver desmarcado, atualiza o state individual dos checkboxes que estiversm marcados
        else { 
            setOpportunityCheckbox({
                ...opportunityCheckbox,
                [e.target.name]: e.target.checked
            });
        }
    }

    const handleChange = (e) => {
        let newProp = form;
        setValidEmail(true);
        newProp[e.target.name] = e.target.value;
        setForm({ ...newProp });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 

        // Verifica se há campos não preenchidos (todos os campos devem ser obrigatórios)
        let emptyValues = Object.values(form).some(obj => obj === "");
        setEmptyValue(emptyValues);

        // Verifica se todos os checkboxes não estão preenchidos (valor false)
        let emptyValueCheckbox = Object.values(opportunityCheckbox).every(obj => obj === false);
        setEmptyValueCheckbox(emptyValueCheckbox)

        // Verifica se o email é válido
        let validEmail = form["email"].toLowerCase().match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
        setValidEmail(validEmail);

        // Condição para salvar o lead
        if (!emptyValues && !emptyValueCheckbox && validEmail) {
            toast.success("Lead salvo com sucesso")

            // Salva os dados do lead no LocalStorage e redireciona para a o painel de leads
            LocalStorageManager.setLeads(form.name, form.phone, form.email, { ...opportunityCheckbox })
            navigate("/leads");
        }
    }


    return (
        <div className="add-lead-comp-container">
            <Link to="/leads">
                <div className="back-page">
                    <img src={ArrowLeft} alt="Voltar" />
                    <p>Voltar</p>
                </div>
            </Link>

            <form onSubmit={(e) => handleSubmit(e)} id="lead-form">
                <div className="lead-info">
                    <div className="lead-name">
                        <label htmlFor="name">Nome *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="input-field"
                            value={form.name}
                            onChange={(e) => handleChange(e)}
                        />

                        {emptyValue && form["name"] === "" ? <p className="error-message">O nome deve ser preenchido</p> : ""}
                    </div>

                    <div className="lead-tel">
                        <label htmlFor="phone">Telefone *</label>
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            className="input-field"
                            value={form.phone}
                            onChange={(e) => handleChange(e)}
                        />

                        {emptyValue && form["phone"] === "" ? <p className="error-message">O telefone deve ser preenchido</p> : ""}
                    </div>

                    <div className="lead-email">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="input-field"
                            value={form.email}
                            onChange={(e) => handleChange(e)}
                        />

                        {emptyValue && form["email"] === "" ? <p className="error-message">O email deve ser preenchido</p> : ""}
                        {!validEmail && form["email"] !== "" ? <p className="error-message">Email inválido</p> : ""}
                    </div>
                </div>

                <div>
                    <div>
                        <table id="opportunity-table">
                            <caption>Oportunidades *</caption>
                            <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            name="all"
                                            checked={opportunityCheckbox.all}
                                            onChange={(e) => handleCheck(e)}
                                        />
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            name="rpa"
                                            checked={opportunityCheckbox.rpa}
                                            onChange={(e) => handleCheck(e)}
                                        />
                                    </td>
                                    <td>RPA</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            name="digitalProduct"
                                            checked={opportunityCheckbox.digitalProduct}
                                            onChange={(e) => handleCheck(e)}
                                        />
                                    </td>
                                    <td>Produto Digital</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            name="analytics"
                                            checked={opportunityCheckbox.analytics}
                                            onChange={(e) => handleCheck(e)}
                                        />
                                    </td>
                                    <td>Analytics</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            name="bpm"
                                            checked={opportunityCheckbox.bpm}
                                            onChange={(e) => handleCheck(e)}
                                        />
                                    </td>
                                    <td>BPM</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    
                    {emptyValueCheckbox ? <p className="error-message">Pelo menos uma opção deve ser selecionada</p> : ""}
                    <button type="submit" className="submit-lead-btn">Salvar</button>
                </div>
            </form>
        </div >
    );
}

export default AddLeadForm;
