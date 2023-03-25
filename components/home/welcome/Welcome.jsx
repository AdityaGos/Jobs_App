import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";

import styles from "./welcome.style";

const Welcome = () => {
  const jobTypes = ["Full-Time", "Part-Time", "Internship", "remote"];

  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState("Full-Time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}> Hello Aditya</Text>
        <Text style={styles.welcomeMessage}> Find your perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            onChange={() => {}}
            style={styles.searchInput}
            value=""
            placeholder="Search your job"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="cover"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
              style={styles.tab(activeJobType, item)}
            >
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.small}}
          showsHorizontalScrollIndicator={false}
          horizontal

        />
      </View>
    </View>
  );
};

export default Welcome;
