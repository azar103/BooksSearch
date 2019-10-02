
import React from 'react'
import {  StyleSheet, Image, Text, TouchableOpacity, Alert   } from 'react-native'
import moment from 'moment'
class ViewedBook extends React.Component {

constructor(props){
    super(props)
    this.state = {
        onLongPressed : false
    }
}


   
_onLongPressButton = () =>{
 this.setState({
     onLongPressed: true
 })   
}

_changText = () =>{
    if(this.state.onLongPressed){
        return (
            <Text style={styles.title_style}>Sorti le {moment(new Date(this.props.date)).format('DD/MM/YYYY')}</Text>
        )
    }else{
        return (
            <Text style={styles.title_style}>{this.props.title}</Text>
        )
    }
    
}
 render() {
    const { image, title, id } = this.props
   const {navigate}= this.props.navigation
     return(
         <TouchableOpacity 
                style= {styles.main_container}
                onLongPress={this._onLongPressButton}
                onPress= {() => navigate("BookDetail",{id: id})}
         
          >
                 <Image
                 style={styles.image_style}
                 source = {{uri: image}} />
            {this._changText()}
         </TouchableOpacity>
     )
 }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center'
    },
    image_style: {
        height: 80,
        width: 80,
        borderRadius: 0.4
    },
    title_style: {
        marginLeft: 10
    }
})

export default ViewedBook