import {StyleSheet, View} from "react-native";
import {Colors} from "../style/style";
import PieChart from "react-native-pie-chart";

function ChartScreen() {
    return (
        <View style={styles.container}>
            <PieChart
                widthAndHeight={250}
                series={[1, 2, 3]}
                sliceColor={[Colors.primary100, Colors.primary200, Colors.primary300]}
                coverRadius={0.45}
                coverFill={'#FFF'}
            />
        </View>
    )
}

export default ChartScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary50,
        flex: 1
    }
})