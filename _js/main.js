import { buttonFunctionality } from "./buttonControl.js";
import { updateView } from "./viewUser.js";

updateView().then(resp => {
    buttonFunctionality();
});
