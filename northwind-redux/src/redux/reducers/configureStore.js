import {createStore, applyMiddleware} from "redux"
import rootRecuder from './index'
import thunk from "redux-thunk"

export default function configureSore(){
    return createStore(rootRecuder, applyMiddleware(thunk))
}