import React from 'react'
// import { Children } from 'react'
import FastImage from 'react-native-fast-image'

const FastImageComponent = ({ tintColor, source, resizeMode, Children, priority, style }) => (
    <FastImage
        style={style}
        source={source}
        tintColor={tintColor}
        priority={FastImage.priority.low}
        // source={{
        //     uri: 'https://unsplash.it/400/400?image=1',
        //     // headers: { Authorization: 'someAuthToken' },
        //     priority: FastImage.priority.normal,
        // }}
        // resizeMode={"cover"}

        resizeMode={resizeMode === "cover" ? FastImage.resizeMode.cover : resizeMode == "stretch" ? FastImage.resizeMode.stretch : FastImage.resizeMode.contain}
    />

    // {/* </FastImage> */ }
)

export { FastImageComponent }