import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Linking
} from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";
import { Divider } from "react-native-elements";
import { Avatar } from "@rneui/themed";
import open,{ createOpenLink } from 'react-native-open-maps';
const VetDescriptionContent = ({ images , item }) => {
  const [treatmentData, setTreatmentData] = useState(item.treatment);
  console.log('dtatat',treatmentData)
  console.log('item',item)
  const place = {
    latitude: item.latitude,
    longitude: item.longitude,
  };
 
  console.log(item.treatment)
  const handleLocation = createOpenLink({
    query: `${item.name}, ${item.location}`,
    zoom: 16,
  });
  const handleCallPress = () => {
    const phoneUrl = `tel:${item.phone}`;

    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(phoneUrl);
        } else {
          console.error(`Phone number ${item.phone} is not supported`);
        }
      })
      .catch((error) => {
        console.error('An error occurred while opening the phone app:', error);
      });
  };
  return (
    <>
      <View style={styles.container}>
        <Image
          style={{ width: 120, height: 150, borderRadius: 50 }}
          source={require("../assets/Jojo.png")}
        />
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {item.name}
          </Text>
          <TouchableOpacity style={styles.location} onPress={handleLocation}>
            <Text style={{ fontSize: 17, color: "green", fontWeight: "400" }}>
              <Icon name="location" type="entypo" color="green" size={13} />{" "}
              {item.location}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginTop: 10,
              marginLeft: 10,
              alignItems: "center",
              backgroundColor: "green",
              borderRadius: 5,
              height: 40,
              width: 200,
            }}
            onPress={handleCallPress}
          >
            <Icon
              name="phone"
              type="Feather"
              color="white"
              size={20}
              containerStyle={{ marginLeft: 15 }}
            />
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "600",
                marginLeft: 10,
              }}
            >
              {" "}
              {item.phone}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        Photos
      </Text>
      <Divider width={2} style={{ marginLeft: 20, marginRight: 10 }} />
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image
            style={{ width: 200, height: 200 }}
            source={require("../assets/Jojo.png")}
          />
        )}
        keyExtractor={(item) => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled
      />
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Treatments</Text>
        <Divider width={2} style={{ marginRight: 10 }} />
        <FlatList
          data={treatmentData}
          key={(item)}
          renderItem={({ item }) => (
            <View style={{ marginTop: 20, flexDirection: "row", gap: 10 }}>
          <Icon name="checksquare" type="antdesign" color="green" size={20} />
          <Text>{item.key}</Text>
        </View>
          )}
        nestedScrollEnabled
        />
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Reviews
        </Text>
        <Divider width={2} style={{ marginLeft: 20, marginRight: 10 }} />
        <View>
          <Avatar rounded source={require("../assets/dog_profile.jpg")} />
          <Text style={{ marginLeft: 10, marginTop: 10, fontWeight: "bold" }}>
            John Doe
          </Text>
          <Text>
            Elon Reeve Musk (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a
            businessman and investor. He is the founder, chairman, CEO, and
            chief technology officer of SpaceX; angel investor, CEO, product
            architect and former chairman of Tesla, Inc.; owner, chairman and
            CTO of X Corp.; founder of the Boring Company and xAI; co-founder of
            Neuralink and OpenAI; and president of the Musk Foundation. He is
            the wealthiest person in the world, with an estimated net worth of
            US$222 billion as of December 2023, according to the Bloomberg
            Billionaires Index, and $244 billion according to Forbes, primarily
            from his ownership stakes in Tesla and SpaceX.[5][6] A member of the
            wealthy South African Musk family, Elon was born in Pretoria and
            briefly attended the University of Pretoria before immigrating to
            Canada at age 18, acquiring citizenship through his Canadian-born
            mother. Two years later, he matriculated at Queen's University at
            Kingston in Canada. Musk later transferred to the University of
            Pennsylvania, and received bachelor's degrees in economics and
            physics. He moved to California in 1995 to attend Stanford
            University. However, Musk dropped out after two days and, with his
            brother Kimbal, co-founded online city guide software company Zip2.
            The startup was acquired by Compaq for $307 million in 1999, and,
            that same year Musk co-founded X.com, a direct bank. X.com merged
            with Confinity in 2000 to form PayPal. In October 2002, eBay
            acquired PayPal for $1.5 billion, and that same year, with $100
            million of the money he made, Musk founded SpaceX, a spaceflight
            services company. In 2004, he became an early investor in electric
            vehicle manufacturer Tesla Motors, Inc. (now Tesla, Inc.). He became
            its chairman and product architect, assuming the position of CEO in
            2008. In 2006, Musk helped create SolarCity, a solar-energy company
            that was acquired by Tesla in 2016 and became Tesla Energy. In 2013,
            he proposed a hyperloop high-speed vactrain transportation system.
            In 2015, he co-founded OpenAI, a nonprofit artificial intelligence
            research company. The following year, Musk co-founded Neuralink—a
            neurotechnology company developing brain–computer interfaces—and the
            Boring Company, a tunnel construction company. In 2022, he acquired
            Twitter for $44 billion. He subsequently merged the company into
            newly created X Corp. and rebranded the service as X the following
            year. In March 2023, he founded xAI, an artificial intelligence
            company. Musk has expressed views that have made him a polarizing
            figure.[7][8][9] He has been criticized for making unscientific and
            misleading statements, including COVID-19 misinformation,
            transphobia[10][11][12] and antisemitic conspiracy
            theories.[7][13][14][15] His ownership of Twitter has been similarly
            controversial, including; laying off a large number of employees, an
            increase in hate speech and misinformation and disinformation on the
            website, as well as changes to Twitter Blue verification. In 2018,
            the U.S. Securities and Exchange Commission (SEC) sued him for
            falsely tweeting that he had secured funding for a private takeover
            of Tesla. To settle the case, Musk stepped down as the chairman of
            Tesla and paid a $20 million fine.
          </Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 15,
  },
  location: {
    marginTop: 10,
  },
});

export default VetDescriptionContent;
