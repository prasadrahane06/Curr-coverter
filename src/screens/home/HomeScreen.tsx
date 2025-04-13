import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {TabsStackScreenProps} from '../../navigation/AppNavigator';
import HeaderCard from '@components/screenComponents/HeaderCard';
import profile from '@assets/Images/profile.png';
import wallet from '@assets/Icons/wallet.png';
import Bell from '@assets/Icons/Bell_light.png';
import ShoppingCart from '@assets/Icons/Shopping_cart.png';
import sheethandler from '@assets/Images/sheethandler.png';
import Banner1 from '@assets/Images/Banner-1.png';
import holyBanner from '@assets/Images/holyJourneyBanner.png';
import dthCashBanner from '@assets/Images/dthCashbackBanner.png';
import fakeSickBanner from '@assets/Images/fakeLaveOfferBanner.png';
import podcastBanner from '@assets/Images/podcastBanner.png';
import liveDarshanBanner from '@assets/Images/liveDarshanBanner.png';
import {GLOBAL_TEXT} from '@constants/Properties';
import {AUIThemedView} from '@components/common/AUIThemedView';
import {initialPageStyles} from '../../theme/Styles';
import {AUISafeAreaView} from '@components/common/AUISafeAreaView';
import AUIImage from '@components/common/AUIImage';
import BackgroundImage from '@assets/Images/bgBanner2.png';
import {APP_THEME} from '../../theme/Colors';
import {AUIBottomContainer} from '@components/common/AUIBottomContainer';
import FeatureSection from '@components/screenComponents/FeatureSection';
import FeatureGridSection from '@components/screenComponents/FeatureGridSection';
import {travelItems, rechargeItems, yatraItems} from '@data/homeSectionsData';
const HomeScreen = ({navigation, route}: TabsStackScreenProps<'Home'>) => {
  const handleFeaturePress = (item: any) => {
    console.log('Pressed item:', item.title);
  };

  return (
    <AUISafeAreaView style={{flex: 1}}>
      <AUIThemedView style={initialPageStyles.container}>
        <HeaderCard
          greetingText={GLOBAL_TEXT.welcome.greeting}
          userNameText={GLOBAL_TEXT.welcome.userName}
          profileImage={profile}
          walletImage={wallet}
          notificationImage={Bell}
          shoppingCartImage={ShoppingCart}
        />
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.relativeContainer}>
            <AUIImage
              path={BackgroundImage}
              style={styles.backgroundImage}
              resizeMode="contain"
            />

            <AUIBottomContainer style={styles.bottomContainer}>
              <AUIImage path={sheethandler} style={styles.sheetHandler} />
              <ScrollView showsVerticalScrollIndicator={false}>
                <AUIImage
                  path={Banner1}
                  style={styles.banner}
                  resizeMode="contain"
                />
                <FeatureSection
                  sectionTitle={GLOBAL_TEXT.categories.travel.title}
                  items={travelItems}
                  onItemPress={handleFeaturePress}
                  containerStyle={{marginTop: 27}}
                />
                <AUIImage
                  path={holyBanner}
                  style={styles.discoutBanner}
                  resizeMode="contain"
                />
                <FeatureSection
                  sectionTitle={GLOBAL_TEXT.categories.recharge.title}
                  items={rechargeItems}
                  onItemPress={handleFeaturePress}
                  containerStyle={{marginTop: 27}}
                />
                <AUIImage
                  path={dthCashBanner}
                  style={styles.discoutBanner}
                  resizeMode="contain"
                />
                <FeatureSection
                  sectionTitle={GLOBAL_TEXT.categories.yatra.title}
                  items={rechargeItems}
                  onItemPress={handleFeaturePress}
                  containerStyle={{marginTop: 27}}
                />
                <AUIImage
                  path={fakeSickBanner}
                  style={styles.discoutBanner}
                  resizeMode="contain"
                />
                <FeatureGridSection
                  title={GLOBAL_TEXT.categories.sanchar.title}
                  items={[
                    {
                      icon: require('@assets/Icons/Podcast.png'),
                      label: GLOBAL_TEXT.categories.sanchar.podcast,
                    },
                    {
                      icon: require('@assets/Icons/News.png'),
                      label: GLOBAL_TEXT.categories.sanchar.news,
                    },
                    {
                      icon: require('@assets/Icons/Video.png'),
                      label: GLOBAL_TEXT.categories.sanchar.video,
                    },
                    {
                      icon: require('@assets/Icons/Live.png'),
                      label: GLOBAL_TEXT.categories.sanchar.live,
                    },
                  ]}
                  bannerImage={podcastBanner}
                />
                <FeatureGridSection
                  title={GLOBAL_TEXT.categories.religious.title}
                  items={[
                    {
                      icon: require('@assets/Icons/daily_darshan.png'),
                      label: GLOBAL_TEXT.categories.religious.dailyDarshan,
                    },
                    {
                      icon: require('@assets/Icons/divyavarhan.png'),
                      label: GLOBAL_TEXT.categories.religious.divyaVardan,
                    },
                    {
                      icon: require('@assets/Icons/consultancy.png'),
                      label: GLOBAL_TEXT.categories.religious.consultancy,
                    },
                    {
                      icon: require('@assets/Icons/VSSCT.png'),
                      label: GLOBAL_TEXT.categories.religious.vssct,
                    },
                  ]}
                  bannerImage={liveDarshanBanner}
                />
              </ScrollView>
            </AUIBottomContainer>
          </View>
        </ScrollView>
      </AUIThemedView>
    </AUISafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  relativeContainer: {
    position: 'relative',
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    backgroundColor: APP_THEME.headerBackground,
    marginTop: -20,
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    marginTop: -40,
    paddingTop: 11,
    bottom: 0,
    alignItems: 'center',
  },
  sheetHandler: {
    width: '20%',
    height: 4,
    borderRadius: 20,
  },
  banner: {
    width: '100%',
    height: 136,
    marginTop: 25,
  },
  discoutBanner: {
    width: '100%',
    height: 63,
    marginTop: 14,
  },
});
