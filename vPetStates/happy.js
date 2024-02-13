
import { Button, StyleSheet, Text, View, Image} from 'react-native';

const PetView = ({ pet, handleOnPress }) => {
    let moodColor = styles.logoHappy;
  
    switch (pet.mood) {
      case "angry":
        moodColor = styles.logoAngry;
        break;
      case "curious":
        moodColor = styles.logoCurious;
        break;
      
      case "happy":
        moodColor = styles.logoHappy;
        break;
      
      case "lonely":
        moodColor = styles.logoLonely;
        break;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
         {pet.text}
        </Text>
        <Image source={pet.image} />
        <Button disabled={pet.buttonDisabled} title="Play with!" onPress={handleOnPress}></Button>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logoAngry: {
      height: 128,
      width: 128,
      borderColor: "red",
      borderWidth: 3,
    },
    logoCurious: {
      height: 128,
      width: 128,
      borderColor: "purple",
      borderWidth: 3,
    },
    logoLonely: {
      height: 128,
      width: 128,
      borderColor: "blue",
      borderWidth: 3,
    },
    logoHappy: {
      height: 128,
      width: 128,
      borderColor: "green",
      borderWidth: 5,
    },
  });
  
  export default PetView;