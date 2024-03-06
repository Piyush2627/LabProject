import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    border: "2px solid black",
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
