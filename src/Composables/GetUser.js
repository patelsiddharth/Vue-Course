import { ref } from "vue"
import { auth } from "../firebase/Config"

const user = ref(auth.currentUser);

auth.onAuthStateChanged(_user => {
    user.value = _user;
})

const GetUser = () => {
    return{
        user
    }
}

export default GetUser;