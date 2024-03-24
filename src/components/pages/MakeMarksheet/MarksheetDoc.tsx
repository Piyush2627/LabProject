import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
function MarksheetDoc() {
  return (
    <>
      {" "}
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>any thing you want</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default MarksheetDoc;
