import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Dialogflow_V2 } from "react-native-dialogflow"

const BOT_USER = {
  _id: 2,
  name: "SmartBot",
  avatar: "https://placeimg.com/140/140/any"
};

export default class AgriBot extends React.Component {
  constructor(props) {
    super(props);
    let firstMsg = {
      _id: 1,
      text: "Hi!I am your Assistant",
      createdAt: new Date(),
      user: BOT_USER
    };

    this.state = {
      messages: [firstMsg]
    };
  }
componentDidMount() {
    Dialogflow_V2.setConfiguration(
      "dialogflow-dvjyho@agri-c745a.iam.gserviceaccount.com",
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCzA7JLYnMlnNwE\n/Tx288CxWjEirbpXz43lqlvYyM7F4bazICKU1nCy4kRSJO2uh7WvCD71UpIobvyX\nc2o98SM8pqCc5h5DrB+TvfIWp6lOxdjlIat24PfirTDoRiE8X9BkumWiXWyaXUg0\njyqoLTrdLH3p6mQdiyj0ssGRlVYU8ILELQ7wpyoanGVAd/WXqLziRvU57+M/fIs2\nenPHVJl9nOP7c6VDgMVOLh/NHjXjU9eo2GIDVWCGjeCGHSxKg0q13Nn2Ld+d/UZb\n5cCEazT3Tqk64toaSJjvv2NEvEKITA6JZ5zYdOESIfGWE6+uNw5Uis+KKv/Nu0XX\nm/SsFpO9AgMBAAECggEARu3NBD+C3kFTkAqCnaMhE2RoGZR6Q/ayA3DHqZKPEyrG\nyByQdyasSsSKS33kSwXsf+ilgXBxBuJK5PtO+jIEQzDGbMRk821Mqa5WMJHH7LVJ\npif8F0M2FLOIsE+xNYnFOVP9lyKrOFKDnIepYC9jpmTNkxRTDL2pwaLePX/NNsgW\nC06ZdsrdMv4P+zD9qVMw168DPVTbzHpAMUBuvviOTpEabGzjqGS7+YLsxLbfDGEz\nsE8krmb4IkXobs9EebTK2kuT2TP8r3LptP9zRkOhHCvnNHXNzFQNMQb2leC90GGC\njmZWYafYob/wxq57tToqiz7VBh65+MwVkIpzI7XL5QKBgQDzeWZtR8fsm6Vmbbg1\n5FqgCxK9TVTNODgTeHOnP947bDT2BB1r2i41AxtPwqhlaohorhmeuRvGf2Y1Vg8o\nbYQ+XXfG8LPLLv1SNoGXAnAZwVB/w8lIzlm4ZZOwnSgG8vRkcMWJbfqXj1/fvnt3\nGE+fzMfhgzuftoITTrT6ON3sFwKBgQC8OVlrX7y5oLpqBhzqKJhbS+mMtxoTAiFu\n7HbucudxkTWuFi52pAv2TGfIIL6NzhlnsFpzdX0ABfi0dSg3dDS0FGzISPYIsAgT\nYRL2plIlD8pUzOPQyP3lhwY1jLiGiaCM2LDbLBwJFBlIvSu7gGxZO0Yx/kMLgg+t\n0jOItYV/SwKBgFl3WK37XHmTUBntY21aNfrtVrt8+RZX/DMbZdQlYfIP9v4X0P/a\nsnQEajrK2ro5hVqB7yQl/RDZq6MZtoQyig+opOTTeh3FbIyTPtdQrASqxnvMY+B/\nAvUBTl3twdGb4TYvQkcXxKeApcg/5HqE0m10AFbbtEMh+3ZAy7vOva2NAoGABjHp\nBISxJHbqy8SJvRc69H5KIIyCOi/uw8TaoTx865r45lLqkpMRpbicDdUuEGLBKU1/\nnJ84TwDjT6Uvfqu/dFHbxrfICT8p9OFUC3Qr7fZYFXRs5xlGagCIrsiD5kGvXBNh\ntsT74zybHG7FerVeW4184PZaZI2SUIlDkvNOgoMCgYBJ9cmYir3Fu3fE18NG3Nh1\npoiEt3dJHVhZ+14ite0RgSGj7yVSmXeMSg5SWzLRUxjkdJUSOGwgQn96unMnzMvY\nxl1J1ucrpul6lz5KGb2dOq7hPBf+ewIa64eQ/MHGOeecDPB4MmVlJsiXIv9JDjMq\n1eljUE+jfOJ0RWIt8QMbOw==\n-----END PRIVATE KEY-----\n",
      Dialogflow_V2.LANG_ENGLISH_US,
      "agri-c745a"
    );
  }
  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }
handleGoogleResponse(result) {
    console.log(result);
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }


  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}