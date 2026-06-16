import { buttonFunctionality } from "./components/buttonControl.js";
import { updateView } from "./components/viewUser.js";

updateView().then(resp => {
    buttonFunctionality();
});
