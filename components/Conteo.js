import React from 'react';
import { StyleSheet, Switch, Text, Vibration, View } from 'react-native';
import { BackButton, PauseButton, PlayButton } from './Buttons';
import {statusBarHeight} from './Constants'

export class Conteo extends React.Component {
    constructor() {
        super()
        this.state = {
            choice: 1500,
            switch: false,
            active: false
        }
    }
    ToggleCheck = () => {
        this.setState(prevState => ({ switch: !prevState.switch }))
    }

    CheckUnCheck() {
        this.ToggleCheck()
        if (this.state.switch === false) {
            this.setState({ choice: 300 })
        } else {
            this.setState({ choice: 1500 })
        }
    }

    Conteo = () => {
        this.setState(prevState => ({ choice: prevState.choice - 1 }))
        if (this.state.choice == 0) {
            this.Pause()
            Vibration.vibrate(10000)
        }
    }
    Start() {
        this.Pause()
        this.interval = setInterval(this.Conteo, 1000)
    }
    componentDidMount() {
        this.Start()   
    }
    componentWillUnmount(){
        this.Pause()
    }
    Pause() {
        clearInterval(this.interval)
    }

    Replay() {
        if (this.state.switch === false) {
            this.setState({ choice: 1500 })
        } else {
            this.setState({ choice: 300 })
        }
    }

    render() {
        let x = this.state.choice
        let min = Math.floor(x / 60)
        let sec = Math.round((((x / 60) - min) * 60), 0)
        if (sec == 0) {
            sec = '00'
        } else {
            sec = sec
        }

        return (
            <View style={style.container}>
                <Text style={style.number}>{min}:{sec}</Text>
                <View style={style.number}>
                    <Switch style={style.number} value={this.state.switch} onValueChange={() => this.CheckUnCheck()} />
                </View>
                <View style={style.buttons}>
                    <PauseButton onPause={() => this.Pause()} />
                    <PlayButton onPlay={() => this.Start()} />
                    <BackButton onBack={() => this.Replay()} />
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: "center",
        flex: 1,
        backgroundColor: '#b2b2b2',
        paddingTop: statusBarHeight,
    },
    number: {
        justifyContent: "center",
        textAlign: "center",
        fontSize: 50
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: "center",
        textAlign: "center",
    },
})
