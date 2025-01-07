import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCover from '../../../assets/shop/order.jpg'
import Cover from '../../../Shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../hooks/UseMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const drink = menu.filter(item => item.category === "drinks");

    return (
        <div>
            <Helmet>
                <title>Food Order | Bistro Boss Restaurant</title>
            </Helmet>

            <Cover bgImg={orderCover} title={"Order Food"} para={"Would you like to try a dish?"}></Cover>
            <div className='text-center mt-16'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <div className='mt-10'>
                        <TabPanel>
                            <OrderTab items={salad}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={pizza}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={soup}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={dessert}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                            <OrderTab items={drink}></OrderTab>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;