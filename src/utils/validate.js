export const validate = (email,password) => {
    
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    // const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isValidPassword = /^.{6,}$/.test(password);

    if(!isValidEmail) return "Email Address is not valid";
    if(!isValidPassword) return "Password is not valid";

    return null;
}
