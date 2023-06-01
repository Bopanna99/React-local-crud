import {toast} from "react-toastify"
//initial data

const users = JSON.parse(localStorage.getItem("users")) || [];

//register
const registerUser = async (user) =>{
    console.log('register =', user);

    const exEmail = users.find((item) => item.email === user.email)
    const exMobile = users.find((item) => item.mobile === user.mobile)

    if(exEmail){
        toast.warning(`${user.email} already exist.`);
    }else if(exMobile){
        toast.warning(`${user.mobile} already exist.`);
    }else{
        users.push(user);
        saveUsers(users);
        toast.success(`Hi, ${user.name} you have registered succesfully`);
        window.location.href = "/login";
    }
    
    };
    //save data
    const saveUsers = (data)=> {
        localStorage.setItem("users", JSON.stringify(data));
}

//login logic
const loginUser = async (user) =>{
    const extUser = users.find((item) => item.email === user.email)
    if(!extUser) {
        toast.warning(`${user.email} doesn't exists.`)
    } else {
        if(extUser.password === user.password){
            localStorage.setItem("loginStatus", true);
            toast.success('user Login Success');
            window.location.href = "/";
        }else {
            toast.warning("passwords are not matched");
        }
    }
}
 
//logout Handler
const logoutUser = async () => {
    if(localStorage.getItem('loginStatus') == "true"){
        localStorage.removeItem('loginStatus');
        toast.success('succesfully logout');
        window.location.href = "/" ;
    }
}

export {registerUser, loginUser, logoutUser} // const export