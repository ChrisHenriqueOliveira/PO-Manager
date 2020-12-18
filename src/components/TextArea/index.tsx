import React, {
    useState,
    useCallback,
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
  } from 'react';
  import { TextInputProps, Text } from 'react-native';
  
  import { Container, InputContainerView, TextInput, LeftIcon, RightIcon, InputErrorView, ErrorText } from './styles';
  
  interface InputProps extends TextInputProps {
    name: string;
    leftIcon?: string;
    rightIcon?: string;
    error?: string;
    onChange: any;
  }
  
  const TextArea: React.FC<InputProps> = (
    { name, leftIcon, rightIcon, error, ...rest },
  ) => {
  
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
  
    const handleInpuFocus = useCallback(() => {
      setIsFocused(true);
    }, []);
  
    const handleInpuBlur = useCallback(() => {
      setIsFocused(false);
  
    //   setIsFilled(!!inputValueRef.current.value);
    }, []);

    return (
        <>
            <Container isFocused={isFocused} isErrored={false}>
                <InputContainerView>
                    {leftIcon && (
                        <LeftIcon
                            name={leftIcon}
                            size={20}
                            color={isFocused || isFilled ? '#77c16c' : '#36353E'}
                        />
                    )}

                    <TextInput
                    multiline
                    isFocused={isFocused}
                    keyboardAppearance="dark"
                    placeholderTextColor="#36353E"
                    onFocus={handleInpuFocus}
                    onBlur={handleInpuBlur}        
                    {...rest}
                    />

                    {rightIcon && (
                        <RightIcon
                            name={rightIcon}
                            size={20}
                            color={isFocused || isFilled ? '#77c16c' : '#36353E'}
                        />
                    )}
                </InputContainerView>     
            </Container>
            <InputErrorView>
                {error !== '' && (
                    <ErrorText>{error}</ErrorText>
                )}
            </InputErrorView>
        </>
    );
  };
  
  export default TextArea;
  