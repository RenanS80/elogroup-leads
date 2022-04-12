import './styles.css';

function ShowUser() {
    if (localStorage.getItem("user")) {
        return (
            <p>{`Usuário: ${localStorage.getItem("user")}`}</p>
        )
    } else {
        return "";
    }
}

export default ShowUser;