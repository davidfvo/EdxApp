import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const PauseButton = (props) => (
    <TouchableOpacity
        onPress={() => props.onPause()}
    >
        <Icon
            color='yellow'
            name="pause-circle"
            size={50}
        />
    </TouchableOpacity>
)

const PlayButton = (props) => (
    <TouchableOpacity style={{ paddingRight: 10, paddingLeft: 10 }}
        onPress={() => props.onPlay()}
    >
        <Icon
            color='green'
            name="play-circle"
            size={50}
        />
    </TouchableOpacity>
)

const BackButton = (props) => (
    <TouchableOpacity
        onPress={() => props.onBack()}
    >
        <Icon
            color='red'
            name="skip-back"
            size={50}
        />
    </TouchableOpacity>
)

export {
    PauseButton,
    PlayButton,
    BackButton
}
// export class AddContactButton extends React.Component  {
//     render() {
//         return(
//             <TouchableOpacity
//                 style={{ paddingRight: 10, paddingLeft: 10 }}
//                 onPress={props.navegar}
//             >

//                 <Ionicons
//                     color='green'
//                     name="md-person-add"
//                     size={35}
//                 />
//             </TouchableOpacity>
//         )
//     }
// }
    