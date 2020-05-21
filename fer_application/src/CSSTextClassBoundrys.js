// this class is for deciding css classes should change based on different params

import globalStyle from './globalStyles.css';
import classNames from 'classnames';

const headerLargeUpper = 25;
const headerMediumUpper = 100;

export const getHeaderClass = (header) => {
    if(header.length < headerLargeUpper)
        return classNames({[globalStyle.header]: true, [globalStyle.isLarge]:true});
    else if(header.length < headerMediumUpper)
        return classNames({[globalStyle.header]: true, [globalStyle.isMedium]:true});
    else
        return classNames({[globalStyle.header]: true, [globalStyle.isSmall]:true});
}

export const getSubHeaderClass = (header) => {
    if(header.length < headerLargeUpper)
        return classNames({[globalStyle.subHeader]: true, [globalStyle.isMedium]:true});
    else
        return classNames({[globalStyle.subHeader]: true, [globalStyle.isSmall]:true});
}