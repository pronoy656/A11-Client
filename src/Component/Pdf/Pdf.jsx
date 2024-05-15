import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const Pdf = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Hello, World!</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
