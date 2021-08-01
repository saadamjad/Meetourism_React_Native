import React from 'react'
// import { Children } from 'react'
import FastImage from 'react-native-fast-image'
// var httpsAvailable;
var normalisedSource = ""
var checkUrl = false
var image1WithUrl = ""
var image2 = "https://meetourism.com/storage/user_images/194Ua9Rum.png"
var test = false

const FastImageComponent = ({ tintColor, source, resizeMode, Children, priority, style }) =>
(
    // normalisedSource = source && typeof source.uri === 'string' && !source.uri.split('https://')[1] ? null : source,

    checkUrl = typeof source.uri === 'string' && source?.uri?.search('https://meetourism.com'),
    // image1WithUrl = `https://meetourism.com/storage/${source}`,
    checkUrl == -1 ? false : true,


    <FastImage
        style={style}
        // source={checkUrl ? image2 : source}
        source={source}
        tintColor={tintColor}
        priority={FastImage.priority.low}

        // resizeMode={"cover"}

        resizeMode={resizeMode === "cover" ? FastImage.resizeMode.cover : resizeMode == "stretch" ? FastImage.resizeMode.stretch : FastImage.resizeMode.contain}
    />

)

export { FastImageComponent }