import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Questions() {
  const ques = {
    quesnum: "139  ",
  };
  const questionsdata = [
    {
      title: "What are your thoughts on Quora's dark mode?",
      ansnum: "1",
      lastreq: "Last requested",
      lastfollow: "Last followed",
      followrestime: "Feb 10",
    },
  ];
  return (
    <View style={styles.mainbody}>
      <View style={styles.questionbox}>
        <Text style={styles.quesnum}>
          {ques.quesnum}
          <Text style={styles.questxt}>Questions</Text>
        </Text>
      </View>
      <View style={styles.questionmainbox}>
        {questionsdata.map((items, i) => {
          return (
            <View style={styles.questionbox} key={i}>
              <View style={styles.questitlebox}>
                <Text style={styles.questitletxt}>{items.title}</Text>
              </View>
              <View style={styles.anstimebox}>
                <Text style={{fontWeight:"bold",color:"grey"}}>{items.ansnum}</Text>
                <Text style={{fontWeight:"bold",color:"grey", paddingLeft:2,}}>answers</Text>
                <Text style={{fontWeight:"bold",color:"grey", paddingLeft:5}}>{items.lastreq}</Text>
                <Text style={{fontWeight:"bold",color:"grey",paddingLeft:5,}}>{items.followrestime}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainbody: {
    marginBottom: 20,
  },
  questionbox: {
    marginTop: 5,
    backgroundColor: "white",
    paddingTop: 5,
    paddingBottom: 5,
  },
  quesnum: {
    paddingLeft: 15,
    fontWeight: "bold",
    
  },
  questxt: {
    fontWeight: "bold",
    
  },
  questionmainbox: {
    marginTop: 1,
  },
  questitlebox: {},
  questitletxt: {
    fontWeight: "bold",
    paddingLeft: 15,
    paddingBottom:5
  },
  anstimebox: {
      marginLeft:15,
      flexDirection:"row"
  },
});
