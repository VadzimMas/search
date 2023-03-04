import {changeEmail, changeFirstName, changeLastName} from "../../../store";
import {useDispatch, useSelector} from "react-redux";
import {useAddUserMutation} from "../../../store/api/userApi";
import "./userForm.scss"

function UserForm() {
    const dispatch = useDispatch()

    const {firstName, lastName, email} = useSelector((state) => {
        return {
            firstName: state.users.firstName,
            lastName: state.users.lastName,
            email: state.users.email,
        }
    })


    const [addUser, result] = useAddUserMutation()

    const handleAddUser = (e) => {
        e.preventDefault()
        addUser({firstName, lastName, email})
    }

    const handleChangeFirstName = (e) => {
        dispatch(changeFirstName(e.target.value))
    }

    const handleChangeLastName = (e) => {
        dispatch(changeLastName(e.target.value))
    }

    const handleChangeEmail = (e) => {
        dispatch(changeEmail(e.target.value))
    }

    return (
        <form className="userForm" onSubmit={handleAddUser}>
            <h2 className="title">Feel up form</h2>
            <div className="firstName field">
                <label>First Name : </label>
                <input type="text" maxLength="50" value={firstName} onChange={handleChangeFirstName}/>
            </div>
            <div className="lastName field">
                <label>Last Name : </label>
                <input type="text" maxLength="50" value={lastName} onChange={handleChangeLastName}/>
            </div>
            <div className="email field">
                <label>Email : </label>
                <input type="email" maxLength="50" value={email} onChange={handleChangeEmail}/>
            </div>
            <h4 className="subtitle">Or hit Add user button for random generate user</h4>
            <button className="btn">Add user</button>
        </form>
    );
}

export default UserForm;