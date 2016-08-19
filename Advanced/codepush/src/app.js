/**
 * code push demo
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableHighlight
} from 'react-native';

import CodePush from "react-native-code-push";
import {Strings} from './values/Strings';
import * as Progress from 'react-native-progress';

export default class codepush extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateDlgActive: false,
            updateReceived: 0,
            updateTotal: 0,
            updateDlgContent: '',
            codePushProgress: 0,
        };
        this.setUpdateDlgActive = this.setUpdateDlgActive.bind(this);
    }

    componentDidMount() {
        this.updateBundleByCodePush();
    }

    setUpdateDlgActive(active = false) {
        this.setState({
            updateDlgActive: active
        });
    }

    /**
     * @description codepush dialogue content 
     * 
     * @returns
     */
    getCodePushUpdateDlg() {
        // set progress
        let progress = 0;
        if (this.state.updateReceived != 0) {
            progress = this.state.updateReceived / this.state.updateTotal;
        }
        // rev and tatal size
        let rev = this.state.updateReceived / 1000;
        let total = this.state.updateTotal / 1000;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                <View style={[styles.updateView, { height: 200, }]}>
                    <View style={{ flex: 1, marginTop: 30, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, marginBottom: 20 }}>{rev}K / {total}K</Text>
                        <Progress.Bar width={250} height={10} borderRadius={8} progress={progress} color='#375790'/>
                    </View>
                    <TouchableHighlight style={{ backgroundColor: '#375790', width: 100, padding: 10, marginBottom: 30, alignSelf: 'center' }}
                        onPress={this.setUpdateDlgActive.bind(this, false) }>
                        <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>{Strings.close}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    updateBundleByCodePush() {
        let self = this;
        CodePush.sync({
            updateDialog: {// update dialogue
                appendReleaseDescription: true,
                descriptionPrefix: Strings.updateDescription,      // description
                mandatoryContinueButtonLabel: Strings.update,      // mandatory continue
                mandatoryUpdateMessage: Strings.mandatoryUpdate,   // mandatory message
                optionalUpdateMessage: Strings.optionalUpdate,     // optional message
                optionalInstallButtonLabel: Strings.update,        // optional install label
                optionalIgnoreButtonLabel: Strings.ignore,         // optional ignore label
                title: Strings.update,                             // title
            },
            // install mode
            installMode: CodePush.InstallMode.IMMEDIATE
        },
            (status) => { // all status des here https://github.com/Microsoft/react-native-code-push#syncstatus
                console.log('CodePush status = ' + status);
                switch (status) {
                    case CodePush.SyncStatus.DOWNLOADING_PACKAGE: //2
                        // Show "downloading" modal
                        console.log("CodePush Downloading package.");
                        self.setState({
                            updateDlgContent: self.getCodePushUpdateDlg()
                        });
                        self.setUpdateDlgActive(true);
                        break;
                    case CodePush.SyncStatus.INSTALLING_UPDATE: //3
                        // Hide "downloading" modal
                        console.log("CodePush Installing update.");
                        self.setUpdateDlgActive(false);
                        break;
                    case CodePush.SyncStatus.UPDATE_IGNORED: //5 
                        console.log("CodePush ignore update.");
                        break;
                    case CodePush.SyncStatus.CHECKING_FOR_UPDATE: //0
                        console.log("CodePush Checking for updates.");
                        break;
                    case CodePush.SyncStatus.UP_TO_DATE: //4
                        console.log("CodePush up to date.");
                        break;
                    case CodePush.SyncStatus.UPDATE_INSTALLED: //6
                        console.log("CodePush update installed.");
                        break;
                    case CodePush.SyncStatus.UNKNOWN_ERROR: //-1
                        console.log("CodePush unknown error.");
                        break;
                }
            },
            ({ receivedBytes, totalBytes, }) => {
                self.setState({ // receive bytes from server
                    updateDlgContent: self.getCodePushUpdateDlg(),
                    updateReceived: receivedBytes,
                    updateTotal: totalBytes,
                });
                console.log("receivedBytes, totalBytes:" + receivedBytes + ", " + totalBytes);
            }
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.updateDlgActive}
                    onRequestClose={() => this.setUpdateDlgActive(false) }>
                    {this.state.updateDlgContent}
                </Modal>
                <Text style={styles.text}>
                    Hi ASUS!
                    2016.8.18 1749
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // show text
    text: {
        flex: 1,
        backgroundColor: 'green',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 40,
        color: 'white',
    },

    // update dialogue
    updateView: {
        height: 400,
        width: 300,
        backgroundColor: 'white',
        alignSelf: 'center',
    },

});
