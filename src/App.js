import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Footer";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phonetics: [
        {
          text: "/həˈloʊ/",
          audio: "https://lex-audio.useremarkable.com/mp3/hello_us_1_rr.mp3",
        },
        {
          text: "/hɛˈloʊ/",
          audio: "https://lex-audio.useremarkable.com/mp3/hello_us_2_rr.mp3",
        },
      ],
      meanings: [
        {
          partOfSpeech: "exclamation",
          definitions: [
            {
              definition:
                "Used as a greeting or to begin a phone conversation.",
              example: "hello there, Katie!",
            },
          ],
        },
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition: "An utterance of “hello”; a greeting.",
              example: "she was getting polite nods and hellos from people",
              synonyms: [
                "greeting",
                "welcome",
                "salutation",
                "saluting",
                "hailing",
                "address",
                "hello",
                "hallo",
              ],
            },
          ],
        },
        {
          partOfSpeech: "intransitive verb",
          definitions: [
            {
              definition: "Say or shout “hello”; greet someone.",
              example: "I pressed the phone button and helloed",
            },
          ],
        },
      ],
    };
  }

  updateDefinitionsAndPhonetics = (data) => {
    this.setState({ ...data });
  };

  render() {
    return (
      <>
        <Header />
        <Search />
        <Footer />
      </>
    );
  }
}

export default App;
