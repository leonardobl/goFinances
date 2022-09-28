import * as S from "./styles"
import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';


export const AnimatedLottieLoading = () => {
	const animation = useRef(null);

  return (
    <S.Container >
      <LottieView
        autoPlay
        ref={animation}
        source={require('../../public/assets/animations/animatedLoadingLottie.json')}
      />
    </S.Container>
  );
};



