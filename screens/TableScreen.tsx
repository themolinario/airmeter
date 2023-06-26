import {ScrollView, StyleSheet} from "react-native";
import {DataTable} from "react-native-paper";
import {Colors} from "../style/style";
import {useDispatch} from "react-redux";
import {IData} from "../store/reducers/dataReducer";
import {useEffect, useMemo, useState} from "react";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import getData from "../store/actions/getData";
import axios, { AxiosResponse } from "axios/index";

const initialData = [
    {
        type: 'shish',
        value: '2',
        date: new Date(Date.now()),
        source: 'Napolimerda'
    }
];


function TableScreen() {
    const dispatch = useDispatch();
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        async function dataGetter() {
            let response: AxiosResponse<any, any>;
            try {
                const url = 'https://5901-93-55-17-197.ngrok-free.app/data';
                response = await axios.get(url);
                setData(curr => [...curr, response.data]);
            } catch (e) {
                console.log(e);
            }
        }
        console.log(data);
        dataGetter();
        setIsLoading(false);
    }, []);


    if (isLoading) {
        return (
            <ScrollView style={styles.container}>
                <LoadingOverlay message="Loading Data" />
            </ScrollView>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <DataTable style={styles.tableContainer}>
                <DataTable.Header style={styles.tableHeader}>
                    <DataTable.Title>Tipo Dato</DataTable.Title>
                    <DataTable.Title>Valore</DataTable.Title>
                    <DataTable.Title>Ora</DataTable.Title>
                    <DataTable.Title>Sorgente</DataTable.Title>
                </DataTable.Header>
                {data && data.map((item, index) =>
                    <DataTable.Row key={index}>
                        <DataTable.Cell>{item.type}</DataTable.Cell>
                        <DataTable.Cell>{item.value}</DataTable.Cell>
                        <DataTable.Cell>{item.date && item.date.toDateString()}</DataTable.Cell>
                        <DataTable.Cell>{item.source}</DataTable.Cell>
                    </DataTable.Row>)}
            </DataTable>
        </ScrollView>
    )
}

export default TableScreen;

const styles = StyleSheet.create({
    tableContainer: {
        padding: 15
    },
    tableHeader: {
        backgroundColor: Colors.primary300
    },
    container: {
        backgroundColor: Colors.primary50
    }
})