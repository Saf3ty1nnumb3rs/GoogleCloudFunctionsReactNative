import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button} from 'react-native-elements';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-nativeonetimepassword.cloudfunctions.net'

class SignInForm extends Component {
    
    state = { phone: '',
              code: '' };
    
    handleSubmit = async () => {
        // this would all be in an action creator in redux
        const { phone, code } = this.state;
        try {
            let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
                phone, code
            })
            firebase.auth().signInWithCustomToken(data.token);
        }catch(err) {
            console.log(err)
        }

    }


    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                <FormLabel>Enter Phone Number</FormLabel>
                <FormInput
                    value={this.state.phone}
                    onChangeText={phone => this.setState({ phone })} 
                    />     
                </View>
                <View style={{ marginBottom: 10 }}>
                <FormLabel>Enter Code</FormLabel>
                <FormInput
                    value={this.state.code}
                    onChangeText={code => this.setState({ code })} 
                    />
                  
                </View>
                <Button 
                    onPress={this.handleSubmit}
                    title="Submit" />
                <KeyboardSpacer />  
            </View>
        );
    }
}

export default SignInForm;