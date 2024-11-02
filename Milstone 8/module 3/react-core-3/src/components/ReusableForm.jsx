const ReusableForm = ({title,submitBtn,handleFormEvent,children}) => {

    const handleLocalSubmit=e=>{
        e.preventDefault();
        const data ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };
        handleFormEvent(data);
    }
    return (
        <form onSubmit={handleLocalSubmit}>
            {children}
            <input type="text" name="name" placeholder="name"/>
                <br />
                <input type="email" name="email" placeholder="email" />
                <br />
                <input type="password" name="password" placeholder="pass"/>
                <br />
                <input type="submit" value={submitBtn} />
        </form>
    );
};

export default ReusableForm;