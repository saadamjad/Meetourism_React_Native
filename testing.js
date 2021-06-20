import React from 'react';
import { useTranslation } from 'react-i18next';

// import i18n from 'i18next';
import i18n from './src/I18n'
import { StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage, alert } from 'react-native';
// using the translation hoc to provie t function in props using home as default namespace
// https://github.com/i18next/react-i18next#withTranslation-hoc

const App = () => {
    const { t } = useTranslation();
    const onChangeLang = async (lang) => {
        i18n.changeLanguage(lang)
        try {
            await AsyncStorage.setItem('@APP:languageCode', lang);
        } catch (error) {
            console.log(` Hi Errorrrr : ${error}`);
        }


    }
    // const toggle = lng => i18n.changeLanguage(lng); 
    return (
        <>
            <View style={{ flex: 1 }}>
                {/* <Text>{t('common:currentLanguage', { lng: i18n.language })}</Text> */}
                <TouchableOpacity
                    style={{ height: 50, width: 100, borderWidth: 1, backgroundColor: 'blue' }}
                    // onPress={() => alert("Sss")}
                    onPress={() => alert("helllooooo")}
                // title={t('common:actions.toggleToEnglish')}
                ></TouchableOpacity>
                <Button
                    onPress={() => onChangeLang('de')}
                    title={t('English')}
                />
                <Button
                    onPress={() => onChangeLang('ar')}
                    // title={t('common:actions.toggleToArabic')}
                    title={t('English')}


                />
                {/* <View style={styles.langContainer}>
                    <Text style={styles.separate}>{t('introduction')}</Text>
                    <Button
                        onPress={() => props.navigation.navigate('Page2')}
                        title={t('common:actions.goToPage2')}
                    />
                </View> */}

            </View>

        </>

    )
}
export default App

// export class Home extends React.Component {


//     async onChangeLang(lang) {
//         i18n.changeLanguage(lang);
//         // try {
//         //     await AsyncStorage.setItem('@APP:languageCode', lang);
//         // } catch (error) {
//         //     console.log(` Hi Errorrrr : ${error}`);
//         // }
//         // console.log(i18n.dir());
//     }

//     render() {

//         return (
//             <View style={{ flex: 1 }}>
//                 {/* <Text>{t('common:currentLanguage', { lng: i18n.language })}</Text> */}
//                 <TouchableOpacity
//                     style={{ height: 50, width: 100, borderWidth: 1, backgroundColor: 'blue' }}
//                     // onPress={() => alert("Sss")}
//                     onPress={() => alert("helllooooo")}
//                 // title={t('common:actions.toggleToEnglish')}
//                 ></TouchableOpacity>
//                 <Button
//                     onPress={() => this.onChangeLang('de')}
//                     title={t('common:actions.toggleToGerman')}
//                 />
//                 <Button
//                     onPress={() => this.onChangeLang('ar')}
//                     title={t('common:actions.toggleToArabic')}
//                 />
//                 <View style={styles.langContainer}>
//                     <Text style={styles.separate}>{t('introduction')}</Text>
//                     <Button
//                         onPress={() => navigate('Page2')}
//                         title={t('common:actions.goToPage2')}
//                     />
//                 </View>

//             </View>

//        );
//     }
// }

// export default withTranslation(['home', 'common'], { wait: true })(Home);
// let isRTL = i18n.dir();
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     langContainer: {
//         alignItems: isRTL === 'rtl' ? 'flex-end' : 'flex-start',
//         paddingRight: isRTL === 'rtl' ? 30 : 10,
//         paddingLeft: isRTL === 'rtl' ? 10 : 30,
//         borderTopWidth: 2,
//         borderTopColor: "#000",
//         flexDirection: isRTL === 'rtl' ? 'row-reverse' : 'row',
//         padding: 5,
//         borderRightWidth: isRTL === 'rtl' ? 2 : 0,
//         borderLeftWidth: isRTL === 'rtl' ? 0 : 2,
//         borderRightColor: "#000",
//         borderLeftColor: "#000"
//     },
//     separate: {
//         marginTop: 50
//     }
// });
