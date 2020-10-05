import React, { useRef } from 'react';
import { Button, Animated, Easing, View } from 'react-native';
import Svg, { Path, Ellipse, Circle, Rect, Text, TSpan, G } from 'react-native-svg';
import * as Themed from '../components/Themed';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedRect = Animated.createAnimatedComponent(Rect);

function StateDialPointer() {
  return (
    <Svg height="500px" width="500" viewBox="0 0 132.29166 132.29167">
      <Path d="m 84.977737,47.411591 c 4.807007,4.807008 7.780203,11.447827 7.780203,18.783073 0,14.670492 -11.892784,26.563276 -26.563276,26.563276 -14.670492,0 -26.563276,-11.892784 -26.563276,-26.563276 0,-7.335246 2.973196,-13.976065 7.780203,-18.783073 l 3.931293,-3.243613 -6.293517,-3.823631 -3.504198,-2.010245 -0.86052,-3.085614 c 0.990303,-0.817271 2.020504,-1.587924 3.087245,-2.3086 2.133481,-1.441352 4.413117,-2.682794 6.812032,-3.697449 4.797828,-2.02931 10.07277,-3.151474 15.609807,-3.151474 5.537036,0 10.811978,1.122164 15.609807,3.151474 2.398914,1.014655 4.67855,2.256097 6.812032,3.697449 1.06674,0.720676 2.096942,1.491329 3.087245,2.3086 l -0.769564,2.841458 -3.551243,2.045125 -6.335566,4.032907 z" stroke="#055f05" fill="#056105" strokeWidth="1" />
    </Svg>
  );
}

function StateDialRing(props: {powerColor: Animated.AnimatedInterpolation}) {
  return (
    <Svg height="500px" width="500" viewBox="0 0 132.29166 132.29167">
      <AnimatedCircle cx="66.193733" cy="66.193733" r="27.178082" stroke={props.powerColor} fill={props.powerColor} strokeWidth="1" />
    </Svg>
  );
}

function OnButton() {
  return (
    <Svg height="500px" width="500" viewBox="0 0 132.29166 132.29167">
      <Circle cx="66.280075" cy="66.280075" r="24.769615" stroke="#383737" fill="#272729" strokeWidth="1" />
    </Svg>
  );
}

function Fixture() {
  return (
    <Svg height="500px" width="500" viewBox="0 0 132.29166 132.29167">
      <Circle cx="-54.071758" cy="76.333412" r="63.5" transform="matrix(-0.98573972,0.16827719,0.16827719,0.98573972,0,0)" stroke="#383737" fill="#272729" strokeWidth="1" />
      <Circle cx="66.194664" cy="66.194664" r="42.193764" stroke="#383737" strokeWidth="1" />
    </Svg>
  );
}

function TextHigh(props: {isActive: boolean}) {
  let fill = '#000';
  if (props.isActive) {
    fill = '#2ec100';
  }

  return (
    <Svg height="500px" width="500" viewBox="0 0 132.29166 132.29167">
      <Text x="88.439484" y="60.345821" transform="rotate(43.566037)" strokeWidth="1" fontWeight="bold" fill={fill} fontSize="14px">H</Text>
      <Text x="85.167076" y="45.580551" transform="rotate(52.466534)" strokeWidth="1" fontWeight="bold" fill={fill} fontSize="14px">G</Text>
      <Text x="84.019943" y="30.069868" transform="rotate(62.103308)" strokeWidth="1" fontWeight="bold" fill={fill} fontSize="14px">I</Text>
      <Text x="76.079887" y="14.755029" transform="rotate(72.602062)" strokeWidth="1" fontWeight="bold" fill={fill} fontSize="14px">H</Text>
    </Svg>
  );
}

function TextMed(props: {isActive: boolean}) {
  let fill = '#000';
  if (props.isActive) {
    fill = '#2ec100';
  }

  return (
    <Svg height="500px" width="500" viewBox="0 0 132.29166 132.29167">
      <Text x="-48.551308" y="142.06213" transform="rotate(-71.441211)" strokeWidth="1" fontWeight="bold" fill={fill} fontSize="14px">D</Text>
      <Text x="-25.307669" y="149.63211" transform="rotate(-58.299374)" strokeWidth="1" fontWeight="bold" fill={fill} fontSize="14px">E</Text>
      <Text x="-21.171825" y="151.61807" transform="rotate(-51.806648)" strokeWidth="1" fontWeight="bold" fill={fill} fontSize="14px">M</Text>
    </Svg>
  );
}

function TextLow(props: {isActive: boolean}) {
  let fill = '#000';
  if (props.isActive) {
    fill = '#2ec100';
  }

  return (
    <Svg height="500px" width="500" viewBox="0 0 132.29166 132.29167">
      <Text fill={fill} x="71.880592" y="3.238131" transform="rotate(11.949058)" strokeWidth="1" fontWeight="bold" fontSize="14px">W</Text>
      <Text fill={fill} x="58.946239" y="18.360304" strokeWidth="1" fontWeight="bold" fontSize="14px">O</Text>
      <Text fill={fill} x="44.447975" y="31.908951" transform="rotate(-13.303478)" strokeWidth="1" fontWeight="bold" fontSize="14px">L</Text>
    </Svg>
  );
}

function OnSymbol(props: {powerColor: Animated.AnimatedInterpolation}) {
  return (
    <Svg height="500px" width="500" viewBox="0 0 132.29166 132.29167">
      <AnimatedPath d="m 62.709766,55.439091 c -0.358466,0.113124 -0.709297,0.243383 -1.051538,0.389813 -1.368964,0.585718 -2.600481,1.430159 -3.633348,2.471614 -2.065732,2.082911 -3.336865,4.953871 -3.323755,8.119178 0.02621,6.330615 5.179439,11.441342 11.510054,11.415132 6.330615,-0.02621 11.441342,-5.17944 11.415132,-11.510054 -0.01311,-3.165308 -1.307966,-6.025643 -3.390876,-8.091377 -1.041455,-1.032865 -2.279924,-1.86708 -3.65369,-2.441441 -0.343442,-0.143591 -0.69534,-0.27094 -1.05473,-0.381092 l 0.05377,2.778188 c 1.062523,0.444231 2.0204,1.089444 2.8259,1.888302 1.611002,1.597714 2.612494,3.810006 2.622631,6.258173 0.02027,4.896335 -3.932555,8.882033 -8.82889,8.902306 -4.896335,0.02027 -8.882033,-3.932555 -8.902306,-8.82889 -0.01014,-2.448167 0.973002,-4.668675 2.570717,-6.279675 0.798858,-0.805501 1.751358,-1.458624 2.810167,-1.911639 z" fill={props.powerColor} strokeWidth="0" />
      <AnimatedRect width="2.3655794" height="18.24058" x="64.906288" y="52.547333" transform="rotate(-0.03690815)" fill={props.powerColor} strokeWidth="0" />
    </Svg>
  );
}

type HitboxProps = {
  onLowPress: () => void;
  onMidPress: () => void;
  onHighPress: () => void;
  onPowerPress: () => void;
};

function Hitbox(props: HitboxProps) {
  return (
    <Svg height="500px" width="500" viewBox="0 0 132.29166 132.29167">
      <Rect width="57.711308" height="30.852884" x="38.058815" y="1.9274491" opacity="0"
        onPress={() => props.onLowPress()} />
      <Rect width="49.683689" height="31.760614" x="67.315674" y="9.1481295" transform="matrix(0.52022453,0.85402953,-0.82722848,0.56186567,0,0)" opacity="0"
        onPress={() => props.onHighPress()} />
      <Rect width="49.683689" height="31.760616" x="-2.6043499" y="-156.75142" transform="matrix(-0.60002513,0.79998115,-0.8287047,-0.55968609,0,0)" opacity="0"
        onPress={() => props.onMidPress()} />
      <Circle cx="66.280075" cy="65.767609" r="26.648691" opacity="0"
        onPress={() => props.onPowerPress()} />
    </Svg>
  );
}

type FixtureState = 'low' | 'high' | 'med';
type DegreeStartEnd = { startDegree: string; endDegree: string };
type PowerState = 'on' | 'off' | 'on_init' | 'off_init' | 'on_loading' | 'off_loading';
type ScaleStartEnd = { startScale: number; endScale: number };
type ColorStartEnd = { startColor: string; endColor: string};

type ComponentState = { powerState: PowerState; fixtureState: FixtureState; };
type ComponentProps = {
  powerState: PowerState;
  fixtureState: FixtureState;
  onPowerUp: () => void;
  onPowerDown: () => void;
  onLow: () => void;
  onMed: () => void;
  onHigh: () => void;
};

export default class LowMidHigh extends React.Component {
  state: ComponentState;
  props: ComponentProps;

  fixtureState2Degrees: { [f0 in FixtureState]: { [f1 in FixtureState]: DegreeStartEnd } };
  dialDegrees: Animated.Value;
  rotateStart: string;
  rotateEnd: string;

  powerState2Scale: { [p0 in PowerState]?: { [p1 in PowerState]?: ScaleStartEnd } };
  pointerScale: Animated.Value;
  pointerScaleStart: number;
  pointerScaleEnd: number;

  powerState2Color: { [c0 in PowerState]?: { [c1 in PowerState]?: ColorStartEnd } };
  powerTransitionState2Color: { [c0 in PowerState]?: { [c1 in PowerState]?: ColorStartEnd } };
  powerStateColor: Animated.Value;
  powerColorStart: string;
  powerColorEnd: string;

  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      powerState: props.powerState,
      fixtureState: props.fixtureState
    };

    this.fixtureState2Degrees = {
      low: {
        low: { startDegree: '0deg', endDegree: '0deg' },
        high: { startDegree: '0deg', endDegree: '-120deg' },
        med: { startDegree: '0deg', endDegree: '130deg' }
      },
      med: {
        low: { startDegree: '130deg', endDegree: '0deg' },
        high: { startDegree: '130deg', endDegree: '250deg' },
        med: { startDegree: '130deg', endDegree: '130deg' }
      },
      high: {
        low: { startDegree: '-120deg', endDegree: '0deg' },
        high: { startDegree: '250deg', endDegree: '250deg' },
        med: { startDegree: '250deg', endDegree: '130deg' }
      }
    };
    this.dialDegrees = new Animated.Value(0);
    const { startDegree, endDegree } = this.fixtureState2Degrees[props.fixtureState][props.fixtureState];
    this.rotateStart = startDegree;
    this.rotateEnd = endDegree;

    this.powerState2Scale = {
      on: {
        on: { startScale: 1, endScale: 1 },
        off_init: { startScale: 1, endScale: 0 }
      },
      on_loading: {
        on_init: { startScale: 0, endScale: 1 }
      },
      off: {
        off: { startScale: 0, endScale: 0 }
      }
    };
    this.pointerScale = new Animated.Value(0);
    const scalePrev = this.powerState2Scale[props.powerState];
    if (scalePrev !== undefined) {
      const initialScale = scalePrev[props.powerState];
      if (initialScale !== undefined) {
        const { startScale, endScale } = initialScale;
        this.pointerScaleStart = startScale;
        this.pointerScaleEnd = endScale;
      }
      else {
        throw new Error('init failure');
      }
    }
    else {
      throw new Error('init failure');
    }

    this.powerState2Color = {
      on: {
        on: { startColor: '#2ec100', endColor: '#2ec100' } // solid green
      },
      off: {
        off: { startColor: '#df0606', endColor: '#df0606' } // solid red
      },
      on_init: {
        on: { startColor: '#2ec100', endColor: '#2ec100' } // solid green
      },
      off_loading: {
        off: { startColor: '#df0606', endColor: '#df0606' } // solid red
      }
    };
    this.powerStateColor = new Animated.Value(0);
    const colorPrev = this.powerState2Color[props.powerState];
    if (colorPrev !== undefined) {
      const initialColor = colorPrev[props.powerState];
      if (initialColor !== undefined) {
        const { startColor, endColor } = initialColor;
        this.powerColorStart = startColor;
        this.powerColorEnd = endColor;
      }
      else {
        throw new Error('init failure');
      }
    }
    else {
      throw new Error('init failure');
    }
    
    this.powerTransitionState2Color = {
      off: {
        on_loading: { startColor: '#009dfa', endColor: '#5fc4ff' }
      },
      off_init: {
        off_loading: { startColor: '#988e02', endColor: '#e8d908' } 
      }
    };
  }

  postPoweroff() {
    this.props.onPowerDown();
  }

  postPoweron() {
    this.props.onPowerUp();
  }

  componentDidMount() {
    this.runPointerScaleAnimation();
    this.runPointerRotationAnimation();
    this.runColorSolidAnimation();
  }

  componentDidUpdate(prevProps: ComponentProps, prevState: ComponentState) {
    const prevExtPropPs = prevProps.powerState;
    const currExtPropPs = this.props.powerState;
    if (prevExtPropPs !== currExtPropPs) {
      if (currExtPropPs === 'off') {
        this.setState({ powerState: 'off' });
      }
      else if (currExtPropPs === 'on') {
        this.setState({ powerState: 'on_init' });
      }
      return;
    }

    const prevExtPropFs = prevProps.fixtureState;
    const currExtPropFs  = this.props.fixtureState;
    if (prevExtPropFs !== currExtPropFs) {
      this.setState({ fixtureState: currExtPropFs });
      return;
    }

    this.handlePointerScaleState(prevProps, prevState);
    this.handlePowerTransitionState(prevProps, prevState);
    this.handlePowerState(prevProps, prevState);
    this.handlePointerRotationState(prevProps, prevState);
  }

  runPointerRotationAnimation() {
    this.dialDegrees.setValue(0);
    const config = { toValue: 1, duration: 300, easing: Easing.linear, useNativeDriver: false };
    Animated.timing(this.dialDegrees, config).start();
  }

  runPointerScaleAnimation() {
    this.pointerScale.setValue(0);
    const config = { toValue: 1, duration: 300, easing: Easing.linear, useNativeDriver: false };
    Animated.timing(this.pointerScale, config).start(() => {
      if (this.state.powerState === 'off_init') {
        this.setState({ powerState: 'off_loading' });
      }
      else if (this.state.powerState === 'on_init') {
        this.setState({ powerState: 'on' });
      }
    });
  }

  runColorPulseAnimation() {
    this.powerStateColor.setValue(0);
    const config = { toValue: 1, duration: 1000, easing: Easing.linear, useNativeDriver: false };
    Animated.loop(Animated.timing(this.powerStateColor, config)).start();
  }

  runColorSolidAnimation() {
    this.powerStateColor.setValue(0);
    const config = { toValue: 1, duration: 600, easing: Easing.linear, useNativeDriver: false };
    Animated.timing(this.powerStateColor, config).start();
  }

  handlePointerRotationState(prevProps: ComponentProps, prevState: ComponentState) {
    const prev = prevState.fixtureState;
    const curr = this.state.fixtureState;

    if (prev !== curr) {
      const { startDegree, endDegree } = this.fixtureState2Degrees[prev][curr];
      this.rotateStart = startDegree;
      this.rotateEnd = endDegree;
      this.setState({ fixtureState: curr });
      this.runPointerRotationAnimation();
    }
  }

  handlePointerScaleState(prevProps: ComponentProps, prevState: ComponentState) {
    const prev = prevState.powerState;
    const curr = this.state.powerState;

    const nextState = this.powerState2Scale[prev];
    if (prev !== curr && nextState !== undefined) {
      const scale = nextState[curr];
      if (scale !== undefined) {
        const { startScale, endScale } = scale;
        this.pointerScaleStart = startScale;
        this.pointerScaleEnd = endScale;
        this.setState({ powerState: curr });
        this.runPointerScaleAnimation();
      }
    }
  }

  handlePowerState(prevProps: ComponentProps, prevState: ComponentState) {
    const prev = prevState.powerState;
    const curr = this.state.powerState;

    const nextState = this.powerState2Color[prev];
    if (prev !== curr && nextState !== undefined) {
      const color = nextState[curr];
      if (color !== undefined) {
        const { startColor, endColor } = color;
        this.powerColorStart = startColor;
        this.powerColorEnd = endColor;
        this.setState({ powerState: curr });
        this.runColorSolidAnimation();
      }
    }
  }

  handlePowerTransitionState(prevProps: ComponentProps, prevState: ComponentState) {
    const prev = prevState.powerState;
    const curr = this.state.powerState;

    const nextState = this.powerTransitionState2Color[prev];
    if (prev !== curr && nextState !== undefined) {
      const color = nextState[curr];
      if (color !== undefined) {
        const { startColor, endColor } = color;
        this.powerColorStart = startColor;
        this.powerColorEnd = endColor;
        this.setState({ powerState: curr });
        this.runColorPulseAnimation();
        if (curr === 'on_loading') {
          this.postPoweron();
        }
        else if (curr === 'off_loading') {
          this.postPoweroff();
        }
      }
    }
  }

  handlePowerInit() {
    if (this.state.powerState === 'on') {
      this.setState({ powerState: 'off_init' });
    }
    else if (this.state.powerState === 'off') {
      this.setState({ powerState: 'on_loading' });
    }
  }

  render() {
    const rotateData = this.dialDegrees.interpolate({
      inputRange: [0, 1],
      outputRange: [this.rotateStart, this.rotateEnd]
    });
    const pointerScaleData = this.pointerScale.interpolate({
      inputRange: [0, 1],
      outputRange: [this.pointerScaleStart, this.pointerScaleEnd]
    });
    const powerColorData = this.powerStateColor.interpolate({
      inputRange: [0, 1],
      outputRange: [this.powerColorStart, this.powerColorEnd]
    });
    const textHigh = this.state.powerState === 'on' && this.state.fixtureState === 'high' ? <TextHigh isActive={true} /> : <TextHigh isActive={false} />;
    const textMed = this.state.powerState === 'on' && this.state.fixtureState === 'med' ? <TextMed isActive={true} /> : <TextMed isActive={false} />;
    const textLow = this.state.powerState === 'on' && this.state.fixtureState === 'low' ? <TextLow isActive={true} /> : <TextLow isActive={false} />;
    return (
      <Themed.View>
        <Themed.View key={"0"}>
          <Fixture />
        </Themed.View>
        <Animated.View key={"1"} style={{ position: "absolute", backgroundColor: "none" }}>
          {textHigh}
        </Animated.View>
        <Animated.View key={"2"} style={{ position: "absolute", backgroundColor: "none" }}>
          {textMed}
        </Animated.View>
        <Animated.View key={"3"} style={{ position: "absolute", backgroundColor: "none" }}>
          {textLow}
        </Animated.View>
        <Animated.View key={"4"} style={[{ position: "absolute", backgroundColor: "none", transform: [{ rotate: rotateData }, { scale: pointerScaleData }]}]}>
          <StateDialPointer/>
        </Animated.View>
        <Animated.View key={"6"} style={[{ position: "absolute", backgroundColor: "none" }]}>
          <StateDialRing powerColor={powerColorData} />
        </Animated.View>
        <Animated.View key={"7"} style={{ position: "absolute", backgroundColor: "none" }}>
          <OnButton/>
        </Animated.View>
        <Animated.View key={"8"} style={{ position: "absolute", backgroundColor: "none" }}>
          <OnSymbol powerColor={powerColorData} />
        </Animated.View>
        <Animated.View key={"9"} style={{ position: "absolute", backgroundColor: "none"  }}>
          <Hitbox
              onLowPress={() => this.props.onLow()}
              onHighPress={() => this.props.onHigh()}
              onMidPress={() => this.props.onMed()}
              onPowerPress={() => this.handlePowerInit()}
            />
        </Animated.View>
      </Themed.View>
    );
  }
}
