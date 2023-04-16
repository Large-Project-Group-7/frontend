import {useEffect, useState} from "react";
import {Dimensions} from 'react-native';

const useCheckMobileScreen = () => {
    const windowWidth = Dimensions.get('window').width;
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    console.log(width + " : " + window.innerWidth);
    return (width <= 930);
}

export default useCheckMobileScreen