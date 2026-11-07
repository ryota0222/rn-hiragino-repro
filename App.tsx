import { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const SAMPLE = 'https://example.com/jpqgy';
const MULTILINE_SAMPLE = 'Select this text.\nThe highlight should hug the glyphs.';

function App() {
  const [useHiragino, setUseHiragino] = useState(true);
  const fontFamily = useHiragino ? 'Hiragino Sans' : undefined;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>
          fontFamily: {useHiragino ? "'Hiragino Sans'" : 'System (default)'}
        </Text>
        <Button
          title={`Switch to ${useHiragino ? 'System' : 'Hiragino Sans'}`}
          onPress={() => setUseHiragino(v => !v)}
        />

        <Text style={styles.label}>Single-line (value)</Text>
        <TextInput
          key={`value-${useHiragino}`}
          style={[styles.input, { fontFamily }]}
          defaultValue={SAMPLE}
        />

        <Text style={styles.label}>Single-line (placeholder)</Text>
        <TextInput
          key={`placeholder-${useHiragino}`}
          style={[styles.input, { fontFamily }]}
          placeholder={SAMPLE}
        />

        <Text style={styles.label}>Text (for comparison)</Text>
        <View style={styles.textBox}>
          <Text style={[styles.text, { fontFamily }]}>{SAMPLE}</Text>
        </View>

        <Text style={styles.label}>Multiline (focused, all text selected)</Text>
        <TextInput
          key={`multiline-${useHiragino}`}
          style={[styles.input, styles.multiline, { fontFamily }]}
          defaultValue={MULTILINE_SAMPLE}
          multiline
          autoFocus
          selection={{ start: 0, end: MULTILINE_SAMPLE.length }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    marginTop: 12,
    color: '#666',
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 8,
  },
  multiline: {
    minHeight: 80,
  },
  textBox: {
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 8,
    alignSelf: 'stretch',
  },
  text: {
    fontSize: 16,
  },
});

export default App;
