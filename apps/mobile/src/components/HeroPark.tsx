import { ImageBackground, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { palette, spacing } from '../theme/colors';

/**
 * Sign-in hero backdrop: a photographic "kids having fun with books and
 * tablets in a sunny park" scene. The image is pre-lightened and faded
 * towards the page colour (`assets/hero/park-hero-light.jpg`, derived
 * from `park-hero.png`), and the overlay below fades it out under the copy so
 * the headline stays readable (dark text on a soft fade at the bottom, a
 * light brand scrim up top for the logo). To swap the photo, replace
 * `park-hero.png` and regenerate `park-hero-light.jpg`.
 */
export function HeroPark({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.wrap}>
      <ImageBackground
        source={require('../../assets/hero/park-hero-light.jpg')}
        style={styles.bg}
        imageStyle={styles.bgImage}
        accessibilityRole="image"
        accessibilityLabel="Kids having fun with books and tablets on a sunny walk through the park"
      >
        <LinearGradient
          colors={[`${palette.cream}ef`, `${palette.cream}00`, `${palette.cream}eb`]}
          locations={[0, 0.38, 1]}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.content}>{children}</View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { height: 500, width: '100%' },
  bg: { flex: 1 },
  bgImage: { resizeMode: 'cover' },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
});
