import Card from '../../components/Card';
import Header from '../../components/Header';
import List from '../../components/List';
import { FormalizationProvider } from '../../common/context/Formalization';

export default function Financing(){
    return (
        <>
            <FormalizationProvider>
                <Header />
                <Card />
                <List />
            </FormalizationProvider>
        </>
    );
}