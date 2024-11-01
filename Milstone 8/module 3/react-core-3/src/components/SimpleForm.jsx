// simple form e kono input store e kore na
const SimpleForm = () => {
    const handleForm =e=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        console.log(e.target.name.value);
        
    }
    return (
        <form onSubmit={handleForm} >
            <input type="text" name="name" placeholder="name"/>
                <br />
                <input type="email" name="email" placeholder="email" />
                <br />
                <input type="password" name="password" placeholder="pass"/>
                <br />
                <input type="submit" value="Submit" />
        </form>
    );
};

export default SimpleForm;