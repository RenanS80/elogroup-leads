class LocalStorageManager {
    static getData(key) {
        const data = JSON.parse(localStorage.getItem(key)); 

        return data;
    }

    // Registra os leads no localStorage
    static setLeads(name, phone, email, rpa, digitalProduct, analytics, bpm) {
        let leads = [];

        // Armazena os novos leads no array, se já tiver outros leads anteriormente registrados 
        if (this.getData("leads")) { 
            leads = this.getData("leads");
        }

        leads.push({ "name": name, "phone": phone, "email": email, "opportunities": rpa, digitalProduct, analytics, bpm, "status": "Cliente em Potencial" });
        localStorage.setItem("leads", JSON.stringify(leads)); 

        return true;
    }

}

export default LocalStorageManager;