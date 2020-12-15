import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,alert
} from 'react-native';
import {fcmService} from './src/service/FCMService'
import {localNotificationService} from './src/service/LocalNotificationService'
class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    fcmService.registerAppWithFCM()
    fcmService.register(this.onRegister, this.onNotification, this.onOpenNotification)
    localNotificationService.configure(this.onOpenNotification)
  }

  onRegister =(token)=>{
    console.log(token)
  }
  onNotification=(notify)=>{
    console.log(notify)
    const options = {
      soundName: 'default',
      playSound: true
    }
    // console.log(notify.notification.title, "notify.title")
    localNotificationService.showNotification(
      notify.id,
      notify.title,
      notify.body,
      notify,
      options
    )
  }
  onOpenNotification=(notify)=>{
    console.log(notify)
    // alert("Open Noti")
  }

  componentWillUnmount(){
    fcmService.unRegister()
    localNotificationService.unregister()
  }
  render(){
    return(
      <View>
        <Text>
          Ahsan
        </Text>
      </View>
    )
  }
}




export default App;
