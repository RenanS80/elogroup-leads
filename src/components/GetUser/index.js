import './styles.css';

function GetUser() {
    if (localStorage.getItem("user")) {
        return (
            <p>{`Usuário: ${localStorage.getItem("user")}`}</p>
        )
    } else {
        return "";
    }
}

export default GetUser;