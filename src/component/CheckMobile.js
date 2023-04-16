import {useEffect, useState} from "react";
import {useWindowDimensions} from 'react-native';

const useCheckMobileScreen = () => {
    const {height, width} = useWindowDimensions();
    const [widthDim, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    console.log(widthDim + " vs. " + width);
    return (width <= 930);
}

export default useCheckMobileScreen