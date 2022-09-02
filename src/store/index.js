import {createStore} from "vuex";
import UserModule from './user.module.js'
import AirportsModule from './airports.module.js'

export default createStore({
    modules: {
        user: UserModule,
        airports: AirportsModule
    }
})
