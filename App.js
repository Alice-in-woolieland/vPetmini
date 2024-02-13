import { useState, useEffect } from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import PetView from './vPetStates/Happy';



export default function App() {
  const Mood = {
    Lonely: 'Lonely',
    Happy: 'Happy',
    Dancing: 'Dancing',
    Sleepy: 'Sleepy'
  };
  
  const happyText = "Happy";
  const dancingText = "Dancing!";
  const sleepyText = "Sleepy...";
  const lonelyText = "Lonely";
  
  const happyImage = require("./vPetimages/mikusway.gif");
  const dancingImage = require("./vPetimages/hatsune-miku.gif");
  const sleepyImage = require("./vPetimages/mikuamp.gif");
  const lonelyImage = require("./vPetimages/hatsunepost.gif");
  
  const [mood, setMood] = useState(Mood.Happy);
  const [text, setText] = useState(happyText);
  const [image, setImage] = useState(happyImage);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  
  
  function moodTransition (newMood) {
  
    switch (newMood) {
  
      case Mood.Dancing:
  
        setMood(Mood.Dancing)
  
        setText(dancingText)
  
        setImage(dancingImage);
  
        setButtonDisabled(false);
  
        break;
  
      case Mood.Lonely:
  
        setMood(Mood.Lonely)
  
        setText(lonelyText)
  
        setImage(lonelyImage);
  
        setButtonDisabled(true);
  
        break;
  
      case Mood.Sleepy:
  
        setMood(Mood.Sleepy)
  
        setText(sleepyText)
  
        setImage(sleepyImage);
  
        setButtonDisabled(false);
  
        break;
  
      case Mood.Happy:
  
        setMood(Mood.Happy)
  
        setText(happyText)
  
        setImage(happyImage);
  
        setButtonDisabled(true);
  
        break;
  
    }
  
  }
  const handleButtonPress = () => {
    switch (mood) {
      case Mood.Lonely:
        moodTransition(Mood.Happy)
        break;
      case Mood.Dancing:
        moodTransition(Mood.Sleepy)
        break;
    }
  };
  useEffect(() => {
    const timerId = setInterval(() => {
      switch (mood) {
        case Mood.Happy:
          if ((Math.random() * 10) < 1) {
            moodTransition(Mood.Dancing);
          }
          break;
        case Mood.Sleepy:
          if ((Math.random() * 10) < 2) {
            moodTransition(Mood.Lonely)
          }
          break;
      }
  
    }, 1000);
  
    return () => clearInterval(timerId);
  });
  

  return (
	
    <SafeAreaView style={styles.container}>

       <Text style={styles.paragraph}>
	
        The United{"\n"}States{"\n"}
	
        of  MIKU
	
      </Text>
	
      <Card>
	
        <PetView pet={{mood, text, image, buttonDisabled}} handleOnPress={() => handleButtonPress()}/>
	
      </Card> 
	
      
	
    </SafeAreaView>

  );

  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonrow: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:200,
    fontSize:1,
  },
  title: {
    fontSize:50,
    fontWeight:'bold',
  },
  logo: {
    margin:50,
  }
});



