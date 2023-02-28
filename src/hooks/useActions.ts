import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as UserActionCreator from '../store/action-creators/user';

export const UseActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(UserActionCreator, dispatch);
}