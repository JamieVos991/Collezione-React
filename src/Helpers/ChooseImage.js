import Tyranitar from "../Img/tyranitar.png";

function ChooseImage(inputFromPopup) {
    let toBeAddedImage;
    switch (inputFromPopup) {
        case ("Tyranitar"):
            toBeAddedImage = Tyranitar;
            break;
    }
    return toBeAddedImage;
}

export default ChooseImage;