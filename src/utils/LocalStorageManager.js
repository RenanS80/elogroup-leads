/* Leads Status
- Cliente em potencial: status (1)
- Dados Confirmados: status (2)
- Reunião Agendada: status (3)
*/

class LocalStorageManager {
    static getData(key) {
        const data = JSON.parse(localStorage.getItem(key));

        return data;
    }

    // Registra o usuário no local storage
    static setUser(user) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    // Retorna todos os leads no localStorage
    static getLeads() {
        const leads = this.getData("leads");
        return leads;
    }

    // Registra os leads no local storage
    static setLeads(name, phone, email, rpa, digitalProduct, analytics, bpm) {
        let leads = [];

        // Armazena os novos leads no array, se já tiver outros leads anteriormente registrados 
        if (this.getData("leads")) {
            leads = this.getData("leads");
        }

        leads.push({
            "name": name,
            "phone": phone,
            "email": email,
            "opportunities": rpa, digitalProduct, analytics, bpm,
            "status": 1
        });
        localStorage.setItem("leads", JSON.stringify(leads));

        return true;
    }

    static updateLeadState(key) {
        let leads;


        if (leads = this.getData("leads")) {
            if (leads[key].status === 1) {       // Cliente em Potencial
                leads[key].status = 2;
            }
            else if (leads[key].status === 2) {  // Dados Confirmados
                leads[key].status = 3;           // Reunião Agendada
            }

            localStorage.setItem("leads", JSON.stringify(leads));
        }
    }

}

export default LocalStorageManager;