import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">My Connections</ThemedText>
      </ThemedView>
      <ThemedText>This side of the application is for starting conversations with new persons. Here you can feel free to express yourself to the other person with E2E </ThemedText>
      <Collapsible title="Accepted Matches">
        <ThemedText>
          This section will contain all the people you have accepted to go on a date with:{' '}
        </ThemedText>
      </Collapsible>
      <Collapsible title="Declined Matches">
        <ThemedText>
          Hey!! stop don't open this section coz you have already rejected the people from here now....{' '}
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
