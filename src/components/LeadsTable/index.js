import './styles.css';

function LeadsTable() {
    return (
        <div className="container-table">
            <table id="leads-table">
                <thead>
                    <tr>
                        <th>Cliente em Potencial</th>
                        <th>Dados Confirmados</th>
                        <th>Reunião Agendada</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Org. Internacionais</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Ind. Farm. LTDA</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Music. Sound Livre</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default LeadsTable;