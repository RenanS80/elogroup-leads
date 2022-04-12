import { useState } from 'react';
import LocalStorageManager from '../../utils/LocalStorageManager';
import './styles.css';

function LeadsTable() {

    // UseState que traz a lista de leads cadastrados no Local Storage
    let [leadList, setLeadList] = useState(LocalStorageManager.getLeads());

    
    const verifyLeads = () => {

        // Se não existir leads cadastrados não retorna nada
        if (!leadList) {
            return ''
        }

        return leadList.map((lead, key) => {

            // Posiciona o lead abaixo de Cliente em Potencial (status 1)
            if (lead.status === 1) { 
                return (
                    <tr key={key}>
                        <td id={key} draggable={true} onDragEnd={dragHandler}>{lead.name}</td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            }

            // Posiciona o lead abaixo de Dados Confirmados (status 2)
            if (lead.status === 2) { 
                return (
                    <tr key={key}>
                        <td></td>
                        <td id={key} draggable={true} onDragEnd={dragHandler}>{lead.name}</td>
                        <td ></td>
                    </tr>
                )
            }

            // Posiciona o lead abaixo de Reunião Agendada (status 3)
            if (lead.status === 3) { 
                return (
                    <tr key={key}>
                        <td></td>
                        <td></td>
                        <td id={key} draggable={true} onDragEnd={dragHandler}>{lead.name}</td>
                    </tr>
                )
            }
            
            return ''
        })
    }

    // Faz o drag and drop
    const dragHandler = (e) => {
        e.preventDefault();

        // Atualiza o estado do lead com base no seu drag atual
        leadList = LocalStorageManager.updateLeadState(e.target.id);
        setLeadList(leadList);
        window.location.reload(false);
    }

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

                <tbody>{verifyLeads()}</tbody>
            </table>
        </div>
    );
}

export default LeadsTable;