import { Provider } from "react-redux";
import { store } from "./Store";
import Contex_Reducer from "./Components/Contex_Reducer";



export default function app(){
  return (
    <div>
      <Provider store={store}>
        <Contex_Reducer />
      </Provider>
    </div>
  )
}