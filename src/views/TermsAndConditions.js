import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

class TermsAndConditions extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView
          style={{
            padding: 15
          }}
        >
          <Text style={styles.titleStyle}>General Terms</Text>
          <Text style={styles.contentStyle}>
            The Intellectual Property disclosure will inform users that the contents, logo and other visual media you created is your property and is protected by copyright laws.
          </Text>
          <Text style={styles.contentStyle}>
            A Termination clause will inform that users’ accounts on your website and mobile app or users’ access to your website and mobile (if users can’t have an account with you) can be terminated in case of abuses or at your sole discretion.
          </Text>
          <Text style={styles.titleStyle}>Privacy Agreement</Text>
          <Text style={styles.contentStyle}>
            A Governing Law will inform users which laws govern the agreement. This should the country in which your company is headquartered or the country from which you operate your website and mobile app.
          </Text>
          <Text style={styles.titleStyle}>Personal Data</Text>
          <Text style={styles.contentStyle}>
            A Links To Other Web Sites clause will inform users that you are not responsible for any third party websites that you link to. This kind of clause will generally inform users that they are responsible for reading and agreeing (or disagreeing) with the Terms and Conditions or Privacy Policies of these third parties.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    color: "#290250",
    paddingBottom: 10
  },
  contentStyle: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 15,
    lineHeight: 20
  }
};

export default TermsAndConditions;
