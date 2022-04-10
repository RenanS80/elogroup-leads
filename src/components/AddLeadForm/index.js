import './styles.css';

function AddLeadForm() {
    return (
        <div className="add-lead-container">
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

                <div class="leadtest">
                    <div className="lead-opportunity">
                        <caption>Oportunidades *</caption>
                        <table id="opportunity-table">
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>RPA</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>Produto Digital</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>Analytics</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>BPM</td>
                                </tr>
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