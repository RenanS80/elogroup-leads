import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowLeft from '../../assets/img/arrow-left.svg';

import './styles.css';

const opportunityData = [
    { name: "RPA" },
    { name: "Produto Digital" },
    { name: "Analytics" },
    { name: "BPM" }
];

function AddLeadForm() {


    const [form, setForm] = useState({
        name: '',
        tel: '',
        email: '',
        opportunity: []
    })

    const [emptyValue, setEmptyValue] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [opportunities, setOpportunities] = useState([]);


    useEffect(() => {
        setOpportunities(opportunityData);
    }, []);


    const handleChange = (e) => {
        let newProp = form;
        setValidEmail(true);
        newProp[e.target.name] = e.target.value;
        setForm({ ...newProp });

        // Marcar e desmarcar todos os checkbox de oportunidades
        const { name, checked } = e.target;

        if (name === "all-selected") {
            let tempOpp = opportunities.map(opp => { return { ...opp, isChecked: checked } })

            setOpportunities(tempOpp);
        }
        else {
            let tempOpp = opportunities.map(opp => opp.name === name ? { ...opp, isChecked: checked } : opp);

            setOpportunities(tempOpp);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar se há campos não preenchidos (todos os campos devem ser obrigatórios)
        let emptyValues = Object.values(form).some(obj => obj === "");
        setEmptyValue(emptyValues);

        // Verificar se o email é válido
        let validEmail = form["email"].toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        setValidEmail(validEmail);

        if(!emptyValues && validEmail){
            e.currentTarget.submit();
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
                            onChange={(e) => handleChange(e)}
                        />

                        {emptyValue && form["name"] === "" ? <p className="error-message">O nome deve ser preenchido</p> : ""}
                    </div>

                    <div className="lead-tel">
                        <label htmlFor="tel">Telefone *</label>
                        <input
                            type="number"
                            id="tel"
                            name="tel"
                            className="input-field"
                            onChange={(e) => handleChange(e)}
                        />

                        {emptyValue && form["tel"] === "" ? <p className="error-message">O telefone deve ser preenchido</p> : ""}
                    </div>

                    <div className="lead-email">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="input-field"
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
                                            name="all-selected"
                                            checked={opportunities.filter(opp => opp?.isChecked !== true).length < 1}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>

                                {opportunities.map((opp, key) => (
                                    <tr key={key}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name={opp.name}
                                                checked={opp?.isChecked || false}
                                                onChange={handleChange}
                                            />
                                        </td>
                                        <td>
                                            <label htmlFor={opp.name}>{opp.name}</label>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>

                    <button type="submit" className="submit-lead-btn">Salvar</button>
                </div>
            </form>
        </div >
    );
}

export default AddLeadForm;