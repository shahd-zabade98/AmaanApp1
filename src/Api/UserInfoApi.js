import { firebase } from '../../firebase/config';

export function addInfo(Info,addComplete){
    firebase.firestore()
    .collection('UserInfo')
    .add({
        fullName: Info.fullName,
        Address: Info.Address,
        Phone: Info.Phone,
        NumOfFamily: Info.NumOfFamily

    }).then((data) => addComplete(data))
    .catch((error) => console.log(error));
}