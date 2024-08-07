import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {imagePath} from '../../constants';
import {styles} from './LoginStyle';
import {TextInputComponent, ButtonComponent} from '../../components';

const LoginScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  console.log(username, password);

  return (
    <View style={styles.loginContainer}>
      <View style={styles.illustrationWrapper}>
        <Image
          source={imagePath.illustration}
          style={styles.illustrationImage}
        />
      </View>

      <ImageBackground
        source={imagePath.background_image}
        style={styles.blurBackground}>
        <Image source={imagePath.object} style={styles.backgroundObject} />
        <View style={styles.loginContent}>
          <View style={styles.greetingBox}>
            <Text style={styles.greetingText}>Welcome Back</Text>
            <Text style={styles.greetingLine}>
              Welcome Back, we missed you!!
            </Text>
          </View>
          <TextInputComponent
            label="Username"
            placeholder="username"
            icon={imagePath.user}
            showeyeIcon={false}
            onChangeText={setUsername}
          />
          <TextInputComponent
            label="Password"
            placeholder="password"
            icon={imagePath.key}
            secureTextEntry={isVisible}
            eyeIcon={isVisible ? imagePath.eye : imagePath.eyeCross}
            onPressEyeIcon={() => setIsVisible(!isVisible)}
            showeyeIcon={true}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.forgorPasswordLink}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          <ButtonComponent
            text="Sign In"
            onPress={() => console.log('signin pressed')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
