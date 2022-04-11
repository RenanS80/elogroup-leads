import { useEffect, useState } from 'react';
import './styles.css';

const opportunityData = [
    { name: "RPA" },
    { name: "Produto Digital" },
    { name: "Analytics" },
    { name: "BPM" }
];

function AddLeadForm() {

    const [opportunities, setOpportunities] = useState([]);

    useEffect(() => {
        setOpportunities(opportunityData);
    }, []);

    const handleChange = (e) => {
        const { name, checked } = e.target;

        if(name === "all-selected") {
            let tempOpp = opportunities.map(opp => {return {...opp, isChecked : checked}})

            setOpportunities(tempOpp);
        }
        else {
            let tempOpp = opportunities.map(opp => opp.name === name ? { ...opp, isChecked: checked } : opp);

            setOpportunities(tempOpp);
        }
    }

    return (
        <div className="add-lead-comp-container">
            <form id="lead-form">
                <div className="lead-info">
                    <div className="lead-name">
                        <label htmlFor="name">Nome *</label>
                        <input type="text" id="name" name="name" className="input-field" required />
                    </div>

                    <div className="lead-tel">
                        <label htmlFor="tel">Telefone *</label>
                        <input type="tel" id="tel" name="tel" className="input-field" required />
                    </div>

                    <div className="lead-email">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" className="input-field" required />
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
                                            onChange={handleChange}
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
        </div>
    );
}

export default AddLeadForm;